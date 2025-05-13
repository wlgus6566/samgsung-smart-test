"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Img from "@/components/ui/img";
import Contents from "@/components/layout/contents";
import Link from "next/link";

// 네비게이션 링크 데이터
const NAVIGATION_LINKS = [
  { id: "section1", text: "2021~2025" },
  { id: "section2", text: "2016~2020" },
  { id: "section3", text: "2015~2012" },
];

export default function HistoryPage() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState("auto");
  const [dotPositions, setDotPositions] = useState([0, 0, 0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [isManualClick, setIsManualClick] = useState(false);
  const debounceTimerRef = useRef(null);

  // debounce 함수 구현
  const debounce = useCallback((callback, delay = 300) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      callback();
    }, delay);
  }, []);

  // 섹션으로 스크롤하는 함수
  const scrollToSection = (index) => {
    // 즉시 activeIndex 업데이트
    setActiveIndex(index);

    // 수동 클릭 상태 설정
    setIsManualClick(true);

    // 해당 섹션으로 스크롤
    const sectionElement = document.getElementById(NAVIGATION_LINKS[index].id);
    if (sectionElement) {
      const offsetTop =
        sectionElement.getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight * 0.35; // 화면 높이의 35% 정도
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // DOM 요소 참조 및 관련 요소 확인
    if (!containerRef.current) return;

    const sections = NAVIGATION_LINKS.map((link) =>
      document.getElementById(link.id)
    );
    if (sections.some((section) => !section)) return;

    // 위치 및 높이 계산 함수
    const calculatePositions = () => {
      // 전체 높이 계산
      const containerHeight = containerRef.current.clientHeight;
      const lastSectionHeight = sections[sections.length - 1].clientHeight;
      setLineHeight(`${containerHeight - lastSectionHeight + 20}px`);

      // 각 섹션 점 위치 계산
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const positions = sections.map((section, index) => {
        return (
          section.getBoundingClientRect().top -
          containerTop +
          (index > 0 ? 20 : 0)
        );
      });
      setDotPositions(positions);
    };

    // 스크롤 이벤트 처리 함수
    const handleScroll = () => {
      // 위치 확인을 위한 기본 데이터
      const windowScrollY = window.scrollY;
      const sectionPositions = sections.map(
        (section) =>
          section.getBoundingClientRect().top +
          window.scrollY -
          window.innerHeight * 0.35 -
          16
      );

      // 수동 클릭 상태일 때는 스크롤이 완료되면 상태를 해제하기 위해 debounce 호출
      if (isManualClick) {
        debounce(() => {
          setIsManualClick(false);
        }, 100);
        updateProgressBar(activeIndex, sectionPositions);
        return;
      }

      // 현재 활성화할 섹션 인덱스 찾기
      let newActiveIndex = 0;
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (windowScrollY >= sectionPositions[i]) {
          newActiveIndex = i;
          break;
        }
      }

      setActiveIndex(newActiveIndex);
      updateProgressBar(newActiveIndex, sectionPositions);
    };

    // 진행 표시줄 업데이트 함수
    const updateProgressBar = (currentIndex, sectionPositions) => {
      if (!lineRef.current) return;

      const windowScrollY = window.scrollY;
      const totalHeight = parseInt(lineHeight === "auto" ? "0" : lineHeight);

      // 진행률 계산 유틸리티 함수
      const calculatePercentProgress = (start, end, current) => {
        return Math.min(
          100,
          Math.max(0, ((current - start) / (end - start)) * 100)
        );
      };

      let progress = 0;

      // 현재 섹션에 따른 진행률 계산
      if (currentIndex < sectionPositions.length - 1) {
        // 마지막 섹션이 아닌 경우
        const nextSectionIndex = currentIndex + 1;
        const currentPosition = sectionPositions[currentIndex];
        const nextPosition = sectionPositions[nextSectionIndex];

        // 스크롤 진행률 계산
        const percentProgress = calculatePercentProgress(
          currentPosition,
          nextPosition,
          windowScrollY
        );

        // 점 사이 진행률 매핑
        const currentDotPosition = dotPositions[currentIndex];
        const nextDotPosition = dotPositions[nextSectionIndex];

        progress =
          currentDotPosition +
          (nextDotPosition - currentDotPosition) * (percentProgress / 100);
      } else if (currentIndex === sectionPositions.length - 1) {
        // 마지막 섹션인 경우
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const maxScroll = documentHeight - viewportHeight;
        const currentPosition = sectionPositions[currentIndex];

        // 스크롤 진행률 계산
        const percentProgress = calculatePercentProgress(
          currentPosition,
          maxScroll,
          windowScrollY
        );

        // 마지막 점부터 라인 끝까지 진행률 매핑
        const lastDotPosition = dotPositions[currentIndex];

        progress =
          lastDotPosition +
          (totalHeight - lastDotPosition) * (percentProgress / 100);
      }

      setLineProgress(progress);
    };

    // 초기 계산 및 이벤트 리스너 등록
    calculatePositions();
    handleScroll();

    window.addEventListener("resize", calculatePositions);
    window.addEventListener("scroll", handleScroll);

    // 클린업
    return () => {
      window.removeEventListener("resize", calculatePositions);
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [lineHeight, activeIndex, isManualClick, debounce]);

  return (
    <Contents title="연혁" backgroundImage="/images/kya/kya_kv_bg.jpg">
      <div className="flex gap-[132px] relative" ref={containerRef}>
        {/* 연도별 네비게이션 영역 */}
        <div className="flex flex-col gap-[20px] sticky top-[100px] h-fit">
          {NAVIGATION_LINKS.map((link, index) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={`max-w-[165px] inline-flex items-center justify-center text-[16px] text-[#999999] border border-solid border-[#EEEEEE] px-[40px] py-[8.5px] h-auto leading-[36px] rounded-[25px] ${
                activeIndex === index ? "bg-primary text-white font-bold" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(index);
              }}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* 진행 표시줄 영역 */}
        <div
          ref={lineRef}
          className="flex flex-col w-[2px] bg-[#EEEEEE] items-center"
          style={{
            height: lineHeight,
            position: "relative",
          }}
        >
          {/* 진행 표시 오버레이 */}
          <div
            className="absolute top-0 left-0 w-full bg-primary z-10"
            style={{
              height: `${lineProgress}px`,
              transition: "height 0.1s ease-out",
            }}
          />

          {/* 섹션 위치 표시 점 */}
          {dotPositions.map((top, index) => (
            <span
              key={index}
              className="w-[16px] h-[16px] rounded-full absolute z-20 transition-colors duration-300"
              style={{
                top: `${top}px`,
                left: "-7px",
                backgroundColor: index <= activeIndex ? "#007EED" : "#EEEEEE",
              }}
            />
          ))}
        </div>

        {/* 협회 연혁 내용 영역 */}
        <article className="flex flex-1 flex-col gap-[60px]">
          <section id="section1" className="flex gap-[40px]">
            <h2 className="heading-1 mt-[-12px]">2025</h2>
            <div className="flex flex-col gap-[40px]">
              <ul className="flex flex-col gap-[20px] body-1">
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2025.01.04</span>
                  <p className="text-[#222222]">
                    대한요가회 5대회장 당선인공고 (강승진)
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2024.11.23</span>
                  <p className="text-[#222222]">
                    제12회 대한요가회장배 전국요가대회 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2024.06.22</span>
                  <p className="text-[#222222]">
                    제10회 2024 UN세계요가의날 한국행사개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2024.05.25</span>
                  <p className="text-[#222222]">
                    제17회 글로벌 요가말라프로젝트 공동주관
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2024.04.30</span>
                  <p className="text-[#222222]">공익회계법인 단체지정</p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2023.12.10</span>
                  <p className="text-[#222222]">
                    대한요가회 4대회장 당선인공고 (천준필)
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2023.11.12</span>
                  <p className="text-[#222222]">
                    제11회 대한요가회장배 전국요가대회 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2023.06.17</span>
                  <p className="text-[#222222]">
                    제9회 2023 UN세계요가의날 한국행사개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2023.01.02</span>
                  <p className="text-[#222222]">
                    대한요가회 대한체육회 준회원단체 승격
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2022.11.19</span>
                  <p className="text-[#222222]">
                    제10회 대한요가회장배 전국요가대회 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2022.09.24</span>
                  <p className="text-[#222222]">
                    대한요가회 3대회장 당선인공고 (윤우근)
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">
                    2021.09.16 ~ 10.23
                  </span>
                  <p className="text-[#222222]">
                    제9회 대한요가회장배 전국요가대회 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px] whitespace-nowrap">
                    2021.08.29 ~ 08.30
                  </span>
                  <p className="text-[#222222]">
                    2021년 대한요가회 인증교육기관 연수 / 생활체육1급 · 2급
                    요가지도사 교육
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2021.06.21</span>
                  <p className="text-[#222222]">
                    제7회 2021 UN세계요가의날 한국행사 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2021.03.02</span>
                  <p className="text-[#222222]">
                    대한요가회 회장 연임당선 (김희선)
                  </p>
                </li>
              </ul>
              <div className="rounded-[20px] overflow-hidden bg-white">
                <Img
                  src="/images/kya/about_history_1.jpg"
                  alt="협회 연혁 사진1"
                  width={558}
                  height={230}
                />
              </div>
            </div>
          </section>
          <section id="section2" className="flex gap-[40px]">
            <h2 className="heading-1 mt-[-12px]">2020</h2>
            <div className="flex flex-col gap-[40px]">
              <ul className="flex flex-col gap-[20px] body-1">
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2020.06.21</span>
                  <p className="text-[#222222]">
                    제6회 2020 UN세계요가의날 한국행사 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2019.11.02</span>
                  <p className="text-[#222222]">
                    제7회 대한요가회장배 전국요가대회 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2019.10.15</span>
                  <p className="text-[#222222]">
                    국회세미나 주최 (예방 그리고 치유 요가)
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">
                    2019.09.05 ~09.08
                  </span>
                  <p className="text-[#222222]">
                    제9회 아시안요가스포츠챔피언십 주관
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2019.07.20</span>
                  <p className="text-[#222222]">
                    대한요가회 2대회장 당선인공고 (김희선)
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2019.06.16</span>
                  <p className="text-[#222222]">
                    제5회 2019 UN세계요가의날 한국행사 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2018.11.17</span>
                  <p className="text-[#222222]">
                    제6회 대한요가회장배 전국요가대회 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2018.06.17</span>
                  <p className="text-[#222222]">
                    제4회 2018 UN세계요가의날 한국행사 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2017.06.21</span>
                  <p className="text-[#222222]">
                    제3회 2017 UN세계요가의날 한국행사 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2016.11.06</span>
                  <p className="text-[#222222]">
                    제4회 대한요가회장배 전국요가대회 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2016.07.17</span>
                  <p className="text-[#222222]">
                    대한요가회 초대회장 선출(초대회장: 장종수)
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px] whitespace-nowrap">
                    2016.04.17
                  </span>
                  <p className="text-[#222222]">
                    대한요가회 창립총회 (대한체육회 인정단체 등록)
                  </p>
                </li>
              </ul>
              <div className="rounded-[20px] overflow-hidden bg-white">
                <Img
                  src="/images/kya/about_history_2.jpg"
                  alt="협회 연혁 사진2"
                  width={558}
                  height={230}
                />
              </div>
            </div>
          </section>
          <section id="section3" className="flex gap-[40px]">
            <h2 className="heading-1 mt-[-12px]">2015</h2>
            <div className="flex flex-col gap-[40px]">
              <ul className="flex flex-col gap-[20px] body-1">
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2015.06.21</span>
                  <p className="text-[#222222]">
                    제1회 2015 UN세계요가의날 한국행사 개최
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2014.11.16</span>
                  <p className="text-[#222222]">
                    제4회 아시안요가 스포츠 챔피언십 주관
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2014.07.16</span>
                  <p className="text-[#222222]">
                    국민생활체육회 인정단체 가입 (초대회장: 장종수)
                  </p>
                </li>
                <li className="flex gap-[20px]">
                  <span className="font-bold min-w-[148px]">2012.07.21</span>
                  <p className="text-[#222222]">
                    국민생활체육전국요가연합회 창립
                  </p>
                </li>
              </ul>
              <div className="rounded-[20px] overflow-hidden bg-white">
                <Img
                  src="/images/kya/about_history_3.jpg"
                  alt="협회 연혁 사진3"
                  width={558}
                  height={230}
                />
              </div>
            </div>
          </section>
        </article>
      </div>
    </Contents>
  );
}
