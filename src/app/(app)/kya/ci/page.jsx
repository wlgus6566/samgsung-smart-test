"use client";

import React from "react";
import Img from "@/components/ui/img";
import Contents from "@/components/layout/contents";

export default function CIPage() {
  return (
    <Contents title="CI" backgroundImage="/images/kya/kya_kv_bg.jpg">
      {/* 대한요가회 CI 의미 영역 */}
      <section className="mt-[60px]">
        <span className="text-primary text-[20px] font-bold">개요</span>
        <h2 className="text-[44px] font-bold leading-[54px] mt-[10px]">
          대한요가회 CI 의미
        </h2>
        <p className="body-1 mt-[10px]">
          요가를 통해 평화와 조화를 구현하며, 건강한 대한민국을 실현하고 세계
          요가 문화의 중심으로 도약합니다.
        </p>
        <h3 className="heading-4 mt-[60px]">심볼마크</h3>
        <div className="card h-auto flex-center py-[30px] overflow-hidden mt-[10px]">
          <Img
            src="/images/kya/ci_symbol.png"
            alt="대한요가회 심볼마크"
            width={236}
            height={262}
            className="max-w-[236px] h-auto object-contain"
          />
        </div>
        <div className="flex-between mt-[20px] gap-[115px]">
          <p className="body-1">
            <b>의미: </b>옴(ॐ: AUM) 심볼을 통해 요가의 철학과 정신적 평온,
            명상을 상징합니다. 네이비, 레드, 옐로우, 블루의 색상을 활용하여
            신뢰, 열정, 조화, 지혜라는 대한요가회의 핵심 가치를 표현합니다.
          </p>
          <a
            href="/images/kya/ci_symbol.png"
            download="대한요가회_심볼마크.png"
            className="btn-download min-w-[152px]"
          >
            다운로드
          </a>
        </div>
      </section>

      {/* 로고 타입 영역 */}
      <section className="mt-[120px]">
        <h2 className="text-[44px] font-bold leading-[54px]">로고 타입</h2>
        <h3 className="heading-4 mt-[34px]">가로형</h3>
        <div className="grid grid-cols-2 gap-[24px] mt-[20px]">
          <div className="card h-auto flex-center py-[30px] overflow-hidden mt-[10px]">
            <Img
              src="/images/kya/ci_horizontal_1.png"
              alt="대한요가회 로고 가로형1"
              width={269}
              height={91}
              className="max-w-[269px] h-auto object-contain"
            />
          </div>
          <div className="card h-auto flex-center py-[30px] overflow-hidden mt-[10px]">
            <Img
              src="/images/kya/ci_horizontal_2.png"
              alt="대한요가회 로고 가로형2"
              width={269}
              height={91}
            />
          </div>
          <div className="card h-auto flex-center py-[30px] overflow-hidden mt-[10px]">
            <Img
              src="/images/kya/ci_horizontal_3.png"
              alt="대한요가회 로고 가로형3"
              width={269}
              height={91}
            />
          </div>
          <div className="card h-auto flex-center py-[30px] overflow-hidden mt-[10px]">
            <Img
              src="/images/kya/ci_horizontal_4.png"
              alt="대한요가회 로고 가로형4"
              width={269}
              height={91}
            />
          </div>
        </div>
        <h3 className="heading-4 mt-[34px]">세로형</h3>
        <div className="w-full flex gap-[24px] mt-[20px]">
          <div className="w-full card h-auto flex-center py-[30px] overflow-hidden mt-[10px]">
            <Img
              src="/images/kya/ci_vertical_1.png"
              alt="대한요가회 로고 세로형1"
              width={155}
              height={181}
            />
          </div>
          <div className="w-full card h-auto flex-center py-[30px] overflow-hidden mt-[10px]">
            <Img
              src="/images/kya/ci_vertical_2.png"
              alt="대한요가회 로고 세로형2"
              width={155}
              height={181}
            />
          </div>
          <div className="w-full card h-auto flex-center py-[30px] overflow-hidden mt-[10px]">
            <Img
              src="/images/kya/ci_vertical_3.png"
              alt="대한요가회 로고 세로형3"
              width={155}
              height={181}
            />
          </div>
          <div className="w-full card h-auto flex-center py-[30px] overflow-hidden mt-[10px]">
            <Img
              src="/images/kya/ci_vertical_4.png"
              alt="대한요가회 로고 세로형4"
              width={155}
              height={181}
            />
          </div>
        </div>
      </section>

      {/* 색상 규정 영역 */}
      <section className="mt-[120px]">
        <h2 className="text-[44px] font-bold leading-[54px]">색상 규정</h2>
        <div className="w-full flex gap-[24px] mt-[20px]">
          <div className="w-full flex flex-col space-between bg-[#00205B] p-[30px] rounded-[25px] gap-[67px] body-1 text-white">
            <p className="font-bold leading-[22px]">
              KOREAN YOGA
              <br />
              ASSOCIATION NAVY
            </p>
            <ul className="leading-[24px]">
              <li>
                <b>의미</b> 신뢰와 평화
              </li>
              <li>
                <b>CMYK</b> 100.98.25.0
              </li>
              <li>
                <b>RGB</b> 29.32.136
              </li>
              <li>
                <b>HEX</b> #1D2088
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col space-between bg-[#DC2626] p-[30px] rounded-[25px] gap-[67px] body-1 text-white">
            <p className="font-bold leading-[22px]">
              KOREAN YOGA
              <br />
              ASSOCIATION RED
            </p>
            <ul className="leading-[24px]">
              <li>
                <b>의미</b> 열정과 에너지
              </li>
              <li>
                <b>CMYK</b> 11.99.82.0
              </li>
              <li>
                <b>RGB</b> 230.0.45
              </li>
              <li>
                <b>HEX</b> #E6002D
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col space-between bg-[#FFBF00] p-[30px] rounded-[25px] gap-[67px] body-1 text-white">
            <p className="font-bold leading-[22px]">
              KOREAN YOGA
              <br />
              ASSOCIATION YELLOW
            </p>
            <ul className="leading-[24px]">
              <li>
                <b>의미</b> 조화와 희망
              </li>
              <li>
                <b>CMYK</b> 6.32.91.0
              </li>
              <li>
                <b>RGB</b> 250.190.0
              </li>
              <li>
                <b>HEX</b> #FABE00
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col space-between bg-[#1F9EFF] p-[30px] rounded-[25px] gap-[67px] body-1 text-white">
            <p className="font-bold leading-[22px]">
              KOREAN YOGA
              <br />
              ASSOCIATION BLUE
            </p>
            <ul className="leading-[24px]">
              <li>
                <b>의미</b> 지혜와 혁신
              </li>
              <li>
                <b>CMYK</b> 74.35.7.0
              </li>
              <li>
                <b>RGB</b> 60.146.208
              </li>
              <li>
                <b>HEX</b> #3C92D0
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-[40px]">
          <ul className="flex flex-col gap-[40px]">
            <li className="flex gap-[24px]">
              <p className="w-[267px] heading-4 text-[#00205B]">
                KOREAN YOGA
                <br /> ASSOCIATION NAVY
                <br />
                신뢰와 평화
              </p>
              <div className="flex flex-1 flex-col gap-[10px]">
                <p className="heading-4">요가를 통해 인류의 평화 구현</p>
                <ul className="text-[20px] leading-[30px] bullet-list">
                  <li>
                    네이비는 신뢰(Trust), 평온(Serenity), 전문성(Expertise)을
                    상징하는 색상으로, 대한요가회의 철학과 밀접한 연관이
                    있습니다.
                  </li>
                  <li>
                    요가는 내면의 평화를 찾는 과정이며, 파란색은 이러한 정신적
                    안정과 조화를 상징합니다.
                  </li>
                  <li>
                    대한요가회가 대한민국 요가 문화를 대표하는 기관으로서
                    전문적이고 신뢰할 수 있는 브랜드라는 인식을 형성하는 데
                    기여합니다.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex gap-[24px]">
              <p className="w-[267px] heading-4 text-[#DC2626]">
                KOREAN YOGA
                <br /> ASSOCIATION RED
                <br />
                열정과 에너지
              </p>
              <div className="flex flex-1 flex-col gap-[10px]">
                <p className="heading-4">건강한 대한민국을 실현</p>
                <ul className="text-[20px] leading-[30px] bullet-list">
                  <li>
                    레드는 활력(Energy), 열정(Passion), 도전(Challenge)을
                    의미합니다.
                  </li>
                  <li>
                    요가는 정적인 수행뿐만 아니라 역동적인 움직임과 생명력을
                    포함하는 활동이며, 빨간색은 이러한 강한 에너지와 생동감을
                    표현합니다.
                  </li>
                  <li>
                    국민의 건강 증진을 위한 요가 보급과 대한요가회의 도전적인
                    성장 의지를 나타냅니다.
                  </li>
                  <li>
                    강렬한 색상은 시각적으로 주목도를 높이며, 브랜드의 역동성을
                    강조하는 요소로 작용합니다.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex gap-[24px]">
              <p className="w-[267px] heading-4 text-[#FFBF00]">
                KOREAN YOGA
                <br /> ASSOCIATION YELLOW
                <br />
                조화와 희망
              </p>
              <div className="flex flex-1 flex-col gap-[10px]">
                <p className="heading-4">
                  요가로 조화를 이루고 세계 요가 문화의 중심으로 도약
                </p>
                <ul className="text-[20px] leading-[30px] bullet-list">
                  <li>
                    옐로우는 조화(Harmony), 희망(Hope), 창조성(Creativity)을
                    의미하는 색상으로, 요가의 철학과 밀접하게 연결됩니다.
                  </li>
                  <li>
                    요가는 신체와 정신의 균형을 이루는 것이 핵심이며, 노란색은
                    조화로운 삶을 추구하는 요가의 가치를 상징합니다.
                  </li>
                  <li>
                    밝고 따뜻한 색감은 긍정적인 에너지를 전달하며, 요가가
                    가져오는 건강한 라이프스타일를 강조합니다.
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex gap-[24px]">
              <p className="w-[267px] heading-4 text-[#1F9EFF]">
                KOREAN YOGA
                <br /> ASSOCIATION BLUE
                <br />
                지혜와 혁신
              </p>
              <div className="flex flex-1 flex-col gap-[10px]">
                <p className="heading-4">
                  요가를 통해 깨달음을 찾고, 새로운 길을 열다
                </p>
                <ul className="text-[20px] leading-[30px] bullet-list">
                  <li>
                    블루는 지혜(Wisdom), 혁신(Innovation), 개방성(Openness)을
                    상징하며, 요가의 철학적 깊이와 현대적 발전을 함께
                    담아냅니다.
                  </li>
                  <li>
                    요가는 신체적 단련뿐만 아니라, 내면의 깨달음을 찾는
                    과정이며, 블루는 이러한 깊이 있는 사고와 열린 사고방식을
                    표현합니다.
                  </li>
                  <li>
                    블루는 고정관념을 깨고, 요가와 필라테스를 통해 새로운
                    가능성을 발견하는 여정을 상징하며, 이는 대한요가회의
                    비전과도 연결됩니다.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CI 규정 및 금지 사항 영역*/}
      <section className="mt-[40px]">
        <hr className="hr" />
        <h2 className="text-[44px] font-bold leading-[54px] mt-[60px]">
          CI 규정 및 금지 사항
        </h2>
        <p className="body-1 mt-[10px]">
          대한요가회 로고의 왜곡, 비율 변경, 색상 변형 및 임의 수정은 금지되며,
          정해진 가이드라인을 준수해야 합니다.
        </p>
      </section>
    </Contents>
  );
}
