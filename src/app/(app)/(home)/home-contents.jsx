"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Img from "@/components/ui/img";
import { formatDateToKorean, formatDate } from "@/utils/date";
import fetcher from "@/lib/fetcher";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import KvCarousel from "@/components/ui/kvCarousel";

export default function HomeContents({ initialData }) {
  const [slideCurrent1, setSlideCurrent1] = useState(1);
  const [slideTotal1, setSlideTotal1] = useState(0);
  const [slideCurrent2, setSlideCurrent2] = useState(1);
  const [slideTotal2, setSlideTotal2] = useState(0);
  const [slideCurrent3, setSlideCurrent3] = useState(1);
  const [slideTotal3, setSlideTotal3] = useState(0);

  // embla API 인스턴스를 저장할 상태 변수
  const [api1, setApi1] = useState(null);
  const [api2, setApi2] = useState(null);
  const [api3, setApi3] = useState(null);

  const handleBannerClick = async (event) => {
    const banner = initialData?.banner;

    if (!banner || !banner.url || typeof banner.bannerSeq === "undefined") {
      if (banner?.url && banner.url !== "#") {
        window.open(banner.url, "_blank", "noopener,noreferrer");
      }
      if (banner?.url === "#" || !banner?.url) {
        event.preventDefault();
      }
      return;
    }

    event.preventDefault();

    const apiUrl = `/api/v1/main/banner/${banner.bannerSeq}/increase-inquiry`;

    try {
      const response = await fetcher(apiUrl, {
        method: "PUT",
      });
    } catch (error) {
      console.error(`API 호출 중 오류 발생: ${apiUrl}`, error);
    }
    if (banner.url && banner.url !== "#") {
      window.open(banner.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <div className="overflow-hidden min-w-[1200px]">
        <section className="relative">
          <KvCarousel />
          <ul className="container-fixed flex absolute -bottom-[60px] left-0 right-0 card bg-white shadow-lg">
            <li className="flex-1">
              <Link
                href="/member/centers"
                className="block px-[50px] py-[77px]"
              >
                <div className="flex-between">
                  <div>
                    <strong className="heading-3">공식인증센터</strong>
                    <p className="body-1 mt-[10px]">
                      공식 자격증 심사 및 교육 확인하세요.
                    </p>
                  </div>
                  <Img
                    src="/images/icon/ic_arrow_right_gray.svg"
                    alt="arrow right"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </li>
            <li className="flex-1">
              <Link
                href="/yoga/notice"
                className="block px-[50px] py-[77px] border-l border-[#eee]"
              >
                <div className="flex-between">
                  <div>
                    <strong className="heading-3">요가소식</strong>
                    <p className="body-1 mt-[10px]">
                      대한요가회 공지사항을 확인하세요.
                    </p>
                  </div>
                  <Img
                    src="/images/icon/ic_arrow_right_gray.svg"
                    alt="arrow right"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </li>
            <li className="flex-1">
              <Link
                href="/event/info"
                className="block px-[50px] py-[77px]  border-l border-[#eee]"
              >
                <div className="flex-between">
                  <div>
                    <strong className="heading-3">행사 안내</strong>
                    <p className="body-1 mt-[10px]">
                      행사 안내 및 일정을 확인하세요.
                    </p>
                  </div>
                  <Img
                    src="/images/icon/ic_arrow_right_gray.svg"
                    alt="arrow right"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </li>
          </ul>
        </section>

        <section className="container-fixed mt-[160px]">
          <span className="heading-4 text-primary">알림 ∙ 소식</span>
          <div className="w-full flex-between mt-[10px]">
            <h3 className="text-[44px] leading-[54px] tracking-[-0.44px] font-bold mt-[10px]">
              대한요가회는 다양한 활동을 지원합니다
            </h3>
            <Link href="/yoga/news" className="btn-more-link">
              활동 더보기
            </Link>
          </div>
          <ul className="flex gap-[24px] mt-[20px]">
            <li className="flex-1">
              <Img
                src="/images/home/section_1_00.png"
                alt="notice"
                width={267}
                height={318}
              />
              <span className="font-mont block mt-[20px] text-secondary text-[44px] leading-[45px] font-bold tracking-[-0.88px]">
                01
              </span>
              <strong className="heading-4 block mt-[20px]">
                요가 인증기관 심사
              </strong>
              <p className="mt-[10px]">
                요가 관련 기관과 프로그램의 품질을
                <br />
                평가하고 심사합니다.
              </p>
            </li>
            <li className="flex-1 mt-[40px]">
              <Img
                src="/images/home/section_1_01.png"
                alt="notice"
                width={267}
                height={318}
              />
              <span className="font-mont block mt-[20px] text-secondary text-[44px] leading-[45px] font-bold tracking-[-0.88px]">
                02
              </span>
              <strong className="heading-4 block mt-[20px]">
                다양한 요가프로그램 운영
              </strong>
              <p className="mt-[10px]">
                수강자의 수준과 목적에 맞는 다양한
                <br />
                요가 수업을 진행합니다.
              </p>
            </li>
            <li className="flex-1">
              <Img
                src="/images/home/section_1_02.png"
                alt="notice"
                width={267}
                height={318}
              />
              <span className="font-mont block mt-[20px] text-secondary text-[44px] leading-[45px] font-bold tracking-[-0.88px]">
                03
              </span>
              <strong className="heading-4 block mt-[20px]">
                요가 대회 및 행사 주최
              </strong>
              <p className="mt-[10px]">
                요가인들의 기량을 겨루고 발전시키는
                <br />
                다양한 대회를 개최합니다.
              </p>
            </li>
            <li className="flex-1 mt-[40px]">
              <Img
                src="/images/home/section_1_03.png"
                alt="notice"
                width={267}
                height={318}
              />
              <span className="font-mont block mt-[20px] text-secondary text-[44px] leading-[45px] font-bold tracking-[-0.88px]">
                04
              </span>
              <strong className="heading-4 block mt-[20px]">
                전문가/선수 교육 및 지원
              </strong>
              <p className="mt-[10px]">
                요가 전문성 향상을 위한 체계적인
                <br />
                교육과 지원 서비스를 제공합니다.
              </p>
            </li>
          </ul>
        </section>
        <section className="container-fixed mt-[160px]">
          <Carousel
            className="relative rounded-[20px] overflow-hidden slider-1"
            opts={{
              duration: 18,
              skipSnaps: false, // 부드러운 전환
              dragFree: false, // 드래그 후 즉시 정렬
            }}
            setApi={(api) => {
              if (api) {
                setSlideTotal1(api.slideNodes().length);
                setSlideCurrent1(api.selectedScrollSnap() + 1);
                setApi1(api);
                api.on("select", () => {
                  setSlideCurrent1(api.selectedScrollSnap() + 1);
                });
              }
            }}
          >
            <CarouselContent className="m-0">
              {initialData?.galleryList?.map((item, index) => (
                <CarouselItem
                  key={item.boardSeq || `event-${index}`}
                  className="p-0 relative h-[400px]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item?.pcThumbnailFileList[0]?.filePath || "/images/home/section_1_00.jpg"})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <div className="relative z-10 p-[40px] h-[400px] flex flex-col justify-center">
                    <div className="text-white/80 text-[14px] font-bold mb-[10px]">
                      {formatDateToKorean(item.registrationDt)}
                    </div>
                    <h2 className="heading-2 text-white mb-[30px]">
                      {item.title}
                    </h2>
                    <Link
                      href={`/yoga/gallery/${item.boardSeq}`}
                      className="btn-more-link white w-[152px]"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{item.title}</span>
                      자세히 보기
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="opacity-0 hidden" variant="custom" />
            <CarouselNext className="opacity-0 hidden" variant="custom" />

            <div
              className="absolute bottom-0 right-0 z-20"
              style={{
                backgroundImage: "url('/images/home/clip.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "198px",
                height: "82px",
              }}
            >
              <div className="flex gap-[66px] absolute bottom-0 left-[35px] z-10">
                <button
                  className="w-[48px] h-[48px] disabled:opacity-50"
                  onClick={() => {
                    console.log(api1);
                    if (api1) api1.scrollPrev();
                  }}
                  disabled={slideCurrent1 === 1}
                >
                  <Image
                    src="/images/icon/ic_swiper_nav_left.svg"
                    alt="arrow left"
                    width={48}
                    height={48}
                  />
                </button>
                <button
                  className="w-[48px] h-[48px] disabled:opacity-50"
                  onClick={() => {
                    console.log(api1);
                    if (api1) api1.scrollNext();
                  }}
                  disabled={slideCurrent1 === slideTotal1}
                >
                  <Image
                    src="/images/icon/ic_swiper_nav_left.svg"
                    alt="arrow right"
                    className="rotate-180"
                    width={48}
                    height={48}
                  />
                </button>
              </div>
              <div className="absolute left-[104px] bottom-[16px]">
                {slideCurrent1}/{slideTotal1}
              </div>
            </div>
          </Carousel>
        </section>

        {/* 행사 안내 배너 */}
        {initialData?.banner &&
          initialData.banner.pcThumbnailFileList?.length > 0 && (
            <section className="container-fixed rounded-[20px] overflow-hidden -mt-[22px] translate-y-[50%] h-[165px]">
              <a
                href={initialData.banner.url || "#"}
                onClick={handleBannerClick}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer block h-full"
                aria-label={initialData.banner.title || "행사 안내"}
              >
                <Img
                  src={
                    initialData.banner.pcThumbnailFileList[0].filePath ||
                    "/images/home/section_banner.jpg"
                  }
                  alt={initialData.banner.title || "행사 안내"}
                  width={1140}
                  height={165}
                  className="block w-full h-full object-cover"
                />
              </a>
            </section>
          )}

        {/* 요가종목 소개 */}
        <section className="bg-[#eee] pt-[240px] pb-[189px]">
          <div className="container-fixed relative">
            <div className="absolute top-0 left-0 w-[364px] h-[364px]">
              <span className="heading-4 text-primary">요가종목</span>
              <h2 className="text-[44px] leading-[54px] tracking-[-0.44px] font-bold mt-[10px]">
                대표 요가종목을 <br /> 소개합니다
              </h2>
              <Link
                href="/conference/sports"
                className="btn-more-link mt-[60px]"
              >
                <span className="sr-only">요가종목</span>
                자세히 보기
              </Link>
            </div>
            <ul className="grid grid-cols-3 grid-rows-2 gap-[24px]">
              <li></li>
              <li className="relative card w-[364px] h-[364px] bg-white shadow-lg py-[40px] px-[47px] text-center flex flex-col items-center">
                <p className="text-[#939393]">Asana</p>
                <h3 className="heading-3 mt-[5px]">아사나</h3>
                <p className="mt-[5px]">
                  전통적인 요가 자세의 정확성과 완성도를 평가하는 종목입니다
                </p>
                <Img
                  src="/images/home/yoga_00.png"
                  alt="Asana"
                  width={364}
                  height={235}
                  className="absolute top-[168px] left-0"
                />
              </li>
              <li className="relative card w-[364px] h-[364px] bg-white shadow-lg py-[40px] px-[47px] text-center flex flex-col items-center">
                <p className="text-[#939393]">Rhythmi</p>
                <h3 className="heading-3 mt-[5px]">리드믹</h3>
                <p className="mt-[5px]">
                  음악과 함께 요가 동작을 수행하는 리듬기반 종목입니다
                </p>
                <Img
                  src="/images/home/yoga_01.png"
                  alt="Rhythmi"
                  width={364}
                  height={235}
                  className="absolute top-[168px] left-0"
                />
              </li>
              <li className="relative card w-[364px] h-[364px] bg-white shadow-lg py-[40px] px-[47px] text-center flex flex-col items-center">
                <p className="text-[#939393]">Pilates</p>
                <h3 className="heading-3 mt-[5px]">필라테스</h3>
                <p className="mt-[5px]">
                  코어 근육 강화와 자세 교정에 집중하는 균형 잡힌 요가
                  종목입니다
                </p>
                <Img
                  src="/images/home/yoga_02.png"
                  alt="Pilates"
                  width={364}
                  height={235}
                  className="absolute top-[168px] left-0"
                />
              </li>
              <li className="relative card w-[364px] h-[364px] bg-white shadow-lg py-[40px] px-[47px] text-center flex flex-col items-center">
                <p className="text-[#939393]">Artistic</p>
                <h3 className="heading-3 mt-[5px]">아티스틱</h3>
                <p className="mt-[5px]">
                  요가 동작을 기반으로 한 예술적 표현을 평가하는 종목입니다
                </p>
                <Img
                  src="/images/home/yoga_03.png"
                  alt="Artistic"
                  width={364}
                  height={235}
                  className="absolute top-[168px] left-0"
                />
              </li>
              <li className="relative card w-[364px] h-[364px] bg-white shadow-lg py-[40px] px-[47px] text-center flex flex-col items-center">
                <p className="text-[#939393]">Team</p>
                <h3 className="heading-3 mt-[5px]">단체전</h3>
                <p className="mt-[5px]">
                  팀워크와 조화를 중심으로 그룹이 함께 수행하는 요가 퍼포먼스
                  종목입니다
                </p>
                <Img
                  src="/images/home/yoga_04.png"
                  alt="Team"
                  width={364}
                  height={235}
                  className="absolute top-[168px] left-0"
                />
              </li>
            </ul>
          </div>
        </section>

        {/* 알림 및 소식 */}
        <section
          className="pt-[160px] bg-[#eee] h-[988px] relative"
          style={{
            backgroundImage: "url('/images/home/rec.png')",
            backgroundSize: "cover",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container-fixed relative">
            <div className="absolute top-0 left-0">
              <span className="heading-4 text-primary">알림 ∙ 소식</span>
              <h3 className="text-[44px] leading-[54px] tracking-[-0.44px] font-bold mt-[10px]">
                요가소식을
                <br />
                알려드립니다
              </h3>
              <Link
                href="/event/info"
                className="btn-more-link mt-[60px] relative z-10"
              >
                <span className="sr-only">요가소식</span>
                자세히 보기
              </Link>
            </div>
          </div>
          <div className="relative">
            <Carousel
              className="!relative !ml-[39vw] !w-[60vw] !min-w-[850px] carousel-news"
              opts={{
                duration: 18,
                skipSnaps: false, // 부드러운 전환
                dragFree: false, // 드래그 후 즉시 정렬
              }}
              setApi={(api) => {
                if (api) {
                  setSlideTotal2(api.slideNodes().length);
                  setSlideCurrent2(api.selectedScrollSnap() + 1);
                  setApi2(api);
                  api.on("select", () => {
                    setSlideCurrent2(api.selectedScrollSnap() + 1);
                  });
                }
              }}
            >
              <CarouselContent className="m-0 gap-[20px]">
                {initialData?.eventList?.map((item, index) => (
                  <CarouselItem
                    key={item.eventSeq || `event-${index}`}
                    className="p-0 relative rounded-[20px] overflow-hidden !w-[422px] !h-[596px] basis-auto flex-grow-0 flex-shrink-0"
                  >
                    <Link
                      href={`/event/info/${item.boardSeq}`}
                      className="relative block"
                    >
                      {item?.mainThumbnailFileList && (
                        <Img
                          src={
                            item?.mainThumbnailFileList[0]?.filePath ||
                            "/images/home/news_00.png"
                          }
                          alt="notice"
                          width={422}
                          height={594}
                        />
                      )}

                      <Img
                        src="/images/icon/ic_arrow_right_dia.svg"
                        alt="arrow right"
                        className="w-[48px] h-[48px] absolute top-[30px] right-[30px]"
                        width={48}
                        height={48}
                      />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* 숨겨진 네비게이션 버튼 */}
              <CarouselPrevious className="opacity-0 hidden" variant="custom" />
              <CarouselNext className="opacity-0 hidden" variant="custom" />
              <div className="absolute -bottom-[72px] left-0 h-[50px] z-20">
                <div className="flex gap-[66px] absolute bottom-0 z-10">
                  <button
                    className="w-[48px] h-[48px] disabled:opacity-50"
                    onClick={() => {
                      if (api2) api2.scrollPrev();
                    }}
                    disabled={slideCurrent2 === 1}
                  >
                    <Image
                      src="/images/icon/ic_swiper_nav_left.svg"
                      alt="arrow left"
                      width={48}
                      height={48}
                    />
                  </button>
                  <button
                    className="w-[48px] h-[48px] disabled:opacity-50"
                    onClick={() => {
                      if (api2) api2.scrollNext();
                    }}
                    disabled={slideCurrent2 === slideTotal2}
                  >
                    <Image
                      src="/images/icon/ic_swiper_nav_left.svg"
                      alt="arrow right"
                      className="rotate-180"
                      width={48}
                      height={48}
                    />
                  </button>
                </div>
                <div className="absolute left-[69px] bottom-[16px]">
                  {slideCurrent2}/{slideTotal2}
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* 공지사항 */}
        <section className="pt-[160px] relative">
          <div className="container-fixed flex justify-between items-end">
            <div>
              <span className="heading-4 text-primary">알림 ∙ 소식</span>
              <h3 className="text-[44px] leading-[54px] tracking-[-0.44px] font-bold mt-[10px]">
                대한요가회 공지사항을 안내드립니다
              </h3>
            </div>
            <Link href="/yoga/notice" className="btn-more-link">
              <span className="sr-only">공지사항</span>
              자세히 보기
            </Link>
          </div>
          <div className="container-fixed board-swiper relative mt-[60px]">
            <Carousel
              className="relative w-full !overflow-visible"
              opts={{
                align: "start",
                loop: false,
                containScroll: false,
                duration: 18,
                skipSnaps: false, // 부드러운 전환
                dragFree: false, // 드래그 후 즉시 정렬
              }}
              setApi={(api) => {
                if (api) {
                  setSlideTotal3(api.slideNodes().length);
                  setSlideCurrent3(api.selectedScrollSnap() + 1);
                  setApi3(api);
                  api.on("select", () => {
                    setSlideCurrent3(api.selectedScrollSnap() + 1);
                  });
                }
              }}
            >
              <CarouselContent className="m-0 gap-[24px] !overflow-visible h-[500px]">
                {initialData?.boardList?.map((item, index) => (
                  <CarouselItem
                    key={item.boardSeq || `notice-${index}`}
                    className="p-0 !flex !w-[464px] !h-[420px] relative flex-col justify-between card shadow-lg-right bg-white overflow-hidden p-[60px] basis-auto flex-grow-0 flex-shrink-0"
                  >
                    <Link
                      href={`/yoga/notice/${item.boardSeq}`}
                      className="block w-full h-full"
                    >
                      <span className="heading-4 text-[#FD8168]">공지사항</span>
                      <h3 className="heading-3 mt-[10px] line-clamp-2 break-words">
                        {item.title}
                      </h3>
                    </Link>
                    <span className="heading4 text-[#222]">
                      {formatDate(item.registrationDt)}
                    </span>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="absolute bottom-[3px] left-[20px]">
                <div className="flex gap-[66px] absolute bottom-0 z-10">
                  <button
                    className="w-[48px] h-[48px] disabled:opacity-50"
                    onClick={() => {
                      if (api3) api3.scrollPrev();
                    }}
                    disabled={slideCurrent3 === 1}
                  >
                    <Image
                      src="/images/icon/ic_swiper_nav_left.svg"
                      alt="arrow left"
                      width={48}
                      height={48}
                    />
                  </button>
                  <button
                    className="w-[48px] h-[48px] disabled:opacity-50"
                    onClick={() => {
                      if (api3) api3.scrollNext();
                    }}
                    disabled={slideCurrent3 === slideTotal3}
                  >
                    <Image
                      src="/images/icon/ic_swiper_nav_left.svg"
                      alt="arrow right"
                      className="rotate-180"
                      width={48}
                      height={48}
                    />
                  </button>
                </div>
                <div className="absolute left-[69px] bottom-[16px]">
                  {slideCurrent3}/{slideTotal3}
                </div>
              </div>

              {/* 숨겨진 네비게이션 버튼 (접근성 용도) */}
              <CarouselPrevious className="opacity-0 hidden" variant="custom" />
              <CarouselNext className="opacity-0 hidden" variant="custom" />
            </Carousel>
          </div>
        </section>

        {/* 배너 */}
        <section className="mt-[160px] bg-[#f8f8f8] h-[139px] pt-[35px]">
          <ul className="container-fixed flex flex-between items-center gap-[14px]">
            <li>
              <Link href="https://www.mcst.go.kr/kor/main.jsp" target="_blank">
                <Img
                  src="/images/home/logo_culture.png"
                  alt="문화채육관광부"
                  width={178}
                  height={69}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.kspo.or.kr/kspo/main/main.do"
                target="_blank"
              >
                <Img
                  src="/images/home/logo_kspo.png"
                  alt="국민체육진흥공단"
                  width={178}
                  height={69}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.sports.or.kr/sports/main/main.do"
                target="_blank"
              >
                <Img
                  src="/images/home/logo_sports.png"
                  alt="대한체육회"
                  width={178}
                  height={69}
                />
              </Link>
            </li>
            <li>
              <Link href="https://idayofyoga.kr/" target="_blank">
                <Img
                  src="/images/home/logo_un.png"
                  alt="UN세계요가의날"
                  width={178}
                  height={69}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.sportsafety.or.kr/front/main.do"
                target="_blank"
              >
                <Img
                  src="/images/home/logo_safe.png"
                  alt="스포츠안전재단"
                  width={178}
                  height={69}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.sports.re.kr/index.html" target="_blank">
                <Img
                  src="/images/home/logo_science.png"
                  alt="한국스포츠과학원"
                  width={178}
                  height={69}
                />
              </Link>
            </li>
          </ul>
        </section>

        {/* 퀵링크 */}
        <section className="mt-[80px] mb-[200px]">
          <div className="container-fixed">
            <ul className="flex flex-between flex-wrap gap-[24px]">
              <li>
                <Link
                  href="https://g1.sports.or.kr/index.do"
                  target="_blank"
                  className="card p-[32px] inline-block w-[364px] heading-3 text-center shadow-lg"
                >
                  선수등록신청
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    alert("준비중입니다.");
                  }}
                  href="/kya/tournament"
                  className="card p-[32px] inline-block w-[364px] heading-3 text-center shadow-lg"
                >
                  국내대회 참가신청
                </Link>
              </li>
              <li>
                <Link
                  href="https://pis.sports.or.kr/login.do"
                  target="_blank"
                  className="card p-[32px] inline-block w-[364px] heading-3 text-center shadow-lg"
                >
                  체육정보시스템
                </Link>
              </li>
              <li>
                <Link
                  href="/conference/schedule"
                  className="card p-[32px] inline-block w-[364px] heading-3 text-center shadow-lg"
                >
                  대회일정
                </Link>
              </li>
              <li>
                <Link
                  href="/conference/results"
                  className="card p-[32px] inline-block w-[364px] heading-3 text-center shadow-lg"
                >
                  대회결과
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    alert("준비중입니다.");
                  }}
                  href="/kya/certificate"
                  className="card p-[32px] inline-block w-[364px] heading-3 text-center shadow-lg"
                >
                  증명서발급
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <style jsx>{`
        .board-swiper:before {
          position: absolute;
          top: -10vw;
          left: -100vw;
          content: "";
          display: block;
          width: 100vw;
          height: 150%;
          background-color: #fff;
          z-index: 10;
        }
        .board-swiper [data-slot="carousel-content"] {
          overflow: visible !important;
        }
      `}</style>
    </>
  );
}
