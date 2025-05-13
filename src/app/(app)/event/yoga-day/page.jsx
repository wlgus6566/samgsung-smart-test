"use client";

import React from "react";
import Img from "@/components/ui/img";
import Contents from "@/components/layout/contents";
import Link from "next/link";

export default function YogaDayPage() {
  return (
    <Contents
      title="세계 요가의 날"
      backgroundImage="/images/event/event_kv_bg.jpg"
    >
      <section className="mt-[60px]">
        <span className="text-primary text-[20px] font-bold">
          UN International Day of Yoga
        </span>
        <h2 className="text-[44px] font-bold leading-[54px] mt-[10px]">
          UN세계요가의날
        </h2>
        <p className="text-[20px] leading-[30px] tracking-[-0.2px] mt-[20px]">
          UN세계요가의날 결의안 : 요가가 인간에게 건강과 웰빙에 대한 총체적인
          접근을 제공한다 는 것을 인식하고, 요가 수련이 전 세계 사람들에게
          도움이 될 것 이라는 정보를 더 많이 전달하는 것에 대한 이점을 인정하며
          6월 21 일을 ‘세계요가의날’로 선포하기를 결정한다.
        </p>

        {/* 이미지+자세히보기 영역 */}
        <div className="relative rounded-[20px] overflow-hidden bg-white mt-[60px]">
          <Link
            className="w-[152px] h-[48px] text-transparent absolute bottom-[60px] left-[60px]"
            href="https://idayofyoga.kr"
            target="_blank"
            rel="noopener noreferrer"
            title="새 창 열림"
          >
            자세히보기
          </Link>
          <Img
            src="/images/event/yoga_day_bg.jpg"
            alt="2025년 6월 21일 (토) 2025 제11회 UN세계요가의날. 함께하는 요가, 하나 되는 순간!"
            width={1140}
            height={350}
          />
        </div>

        {/* 일시,장소 영역 */}
        <ul className="text-[16px] font-400 line-height-[24px] ">
          <li className="pt-[30px] pb-[30px] flex-between gap-[30px]">
            <span className="block w-full heading-4">일시</span>
            <p className="body-1 w-full">2025년 6월 21일</p>
          </li>
          <li className="border-t border-[#eee] pt-[30px] pb-[30px] flex-between gap-[30px]">
            <span className="block w-full heading-4">장소</span>
            <p className="body-1 w-full">세종로 광화문광장</p>
          </li>
        </ul>

        {/* 버튼 영역 */}
        <div className="flex-center mt-[60px]">
          <Link
            className="btn-more-link primary min-w-[230px]"
            href="https://idayofyoga.kr/"
            target="_blank"
            rel="noopener noreferrer"
            title="새 창 열림"
          >
            UN세계요가의날 공식 홈페이지
          </Link>
        </div>
      </section>
    </Contents>
  );
}
