"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();

  // 클라이언트 사이드에서만 실행되도록 마운트 상태 관리
  useEffect(() => {
    setMounted(true);
  }, []);

  const isCurrentPath = (url) => {
    if (!mounted) return false;
    return pathname === url || pathname.startsWith(url + "/");
  };

  // 메인 메뉴 외부 클릭 시 서브메뉴 닫기
  useEffect(() => {
    if (!mounted) return;

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setCurrentMenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mounted]);

  const gnbMenu = [
    {
      label: "KYA",
      url: "/kya",
      children: [
        { label: "회장 인사말", url: "/kya/greeting" },
        { label: "소개", url: "/kya/about" },
        { label: "연혁", url: "/kya/history" },
        { label: "CI", url: "/kya/ci" },
        { label: "조직도", url: "/kya/organization" },
        { label: "임원", url: "/kya/executives" },
        { label: "시도회", url: "/kya/branches" },
        { label: "국제기구", url: "/kya/international" },
        { label: "후원사", url: "/kya/sponsors" },
        { label: "정관/규정", url: "/kya/regulations" },
        { label: "경영공시", url: "/kya/management" },
        { label: "FAQ", url: "/kya/faq" },
      ],
    },
    {
      label: "요가 소식",
      url: "/yoga",
      children: [
        { label: "공지사항", url: "/yoga/notice" },
        { label: "KYA 뉴스", url: "/yoga/news" },
        { label: "갤러리", url: "/yoga/gallery" },
        { label: "매거진", url: "/yoga/magazine" },
      ],
    },
    {
      label: "대회",
      url: "/conference",
      children: [
        { label: "종목", url: "/conference/sports" },
        { label: "국내", url: "/conference/domestic" },
        { label: "국제", url: "/conference/international" },
        { label: "생활체육", url: "/conference/leisure" },
        { label: "대회 일정", url: "/conference/schedule" },
        { label: "대회 결과", url: "/conference/results" },
      ],
    },
    {
      label: "행사",
      url: "/event",
      children: [
        { label: "행사 안내", url: "/event/info" },
        { label: "세계 요가의 날", url: "/event/yoga-day" },
        { label: "세계 명상의 날", url: "/event/meditation-day" },
        { label: "요가 말라 프로젝트", url: "/event/yoga-mala" },
        { label: "세미나 ∙ 워크숍", url: "/event/seminar" },
      ],
    },
    {
      label: "회원",
      url: "/member",
      children: [
        { label: "회원이란", url: "/member/about" },
        { label: "인증교육기관", url: "/member/education" },
        { label: "공식인증센터", url: "/member/centers" },
        { label: "강사", url: "/member/instructors" },
        { label: "수련자", url: "/member/practitioners" },
        { label: "심판", url: "/member/judges" },
        { label: "선수", url: "/member/athletes" },
      ],
    },
  ];

  // 메뉴 호버 시 처리
  const handleMouseOver = (menuIndex) => {
    setCurrentMenuIndex(menuIndex);
  };

  // 메뉴 영역 벗어날 때 처리
  const handleMouseLeave = () => {
    setCurrentMenuIndex(null);
  };

  return (
    <div
      className={`header-wrapper z-50 sticky top-0 left-0 right-0 w-full bg-white min-w-[1200px] ${
        mounted && currentMenuIndex !== null ? "menu-open" : ""
      }`}
      ref={headerRef}
    >
      {/* 메인 헤더 */}
      <div className="container-fixed relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-[#eee] before:z-10 before:pointer-events-none">
        <header className="relative flex items-center justify-between bg-white">
          {/* 로고 영역 */}
          <div className="flex items-center gap-[20px]">
            <Link href="/">
              <Image
                src="/images/common/logo_kya.png"
                alt="대한요가회 로고"
                width={145}
                height={40}
                className="object-contain"
              />
            </Link>

            <Link
              href="https://www.sports.or.kr/sports/main/main.do"
              target="_blank"
            >
              <Image
                src="/images/common/logo_sports.svg"
                alt="대한체육회 로고"
                width={125}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* 메뉴 영역 */}
          <nav>
            <ul className="gnb-menu flex items-center">
              {gnbMenu.map((menuItem, menuIndex) => {
                const isActiveMenu =
                  mounted &&
                  menuItem.children.some((sub) => isCurrentPath(sub.url));
                return (
                  <li
                    key={menuIndex}
                    className={`menu-item relative ${
                      mounted && menuIndex === currentMenuIndex ? "active" : ""
                    }`}
                    onMouseOver={() => handleMouseOver(menuIndex)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={menuItem.children[0].url}
                      className={`heading-4 leading-[36px] relative flex items-center justify-start w-[130px] px-[10px] py-[28px] transition-all ${
                        mounted &&
                        (menuIndex === currentMenuIndex || isActiveMenu)
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      {menuItem.label}
                    </Link>

                    {/* 서브메뉴 */}
                    <ul
                      className={`absolute left-0 bg-white w-[130px] h-[480px] z-10 ${
                        mounted && currentMenuIndex !== null
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      {menuItem.children.map((subMenuItem, subMenuIndex) => (
                        <li key={subMenuIndex} className="">
                          <Link
                            href={subMenuItem.url}
                            onClick={() => setCurrentMenuIndex(null)}
                            className={`block ${subMenuIndex === 0 ? "pt-[20px]" : ""} px-[10px] py-[5px] body-2 ${
                              mounted && isCurrentPath(subMenuItem.url)
                                ? "text-primary font-bold"
                                : "hover:text-primary"
                            }`}
                          >
                            {subMenuItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </div>
      <style jsx>{`
        .header-wrapper:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #eee;
          user-select: none;
        }
        .header-wrapper:after {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 480px;
          background-color: #fff;
          z-index: 1;
          display: none;
        }

        .header-wrapper.menu-open::after {
          display: block;
        }
        .menu-item:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #3b82f6;
          display: none;
          z-index: 1;
          user-select: none;
        }
        .menu-item.active::before {
          display: block;
        }
      `}</style>
    </div>
  );
}
