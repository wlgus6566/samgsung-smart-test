"use client";

import React from "react";
import Img from "@/components/ui/img";
import Contents from "@/components/layout/contents";
import Link from "next/link";

export default function YogaBalaPage() {
  return (
    <Contents
      title="요가 말라 프로젝트"
      backgroundImage="/images/event/event_kv_bg.jpg"
    >
      <section className="mt-[60px]">
        <span className="text-primary text-[20px] font-bold">
          Global Yoga Mala Project
        </span>
        <h2 className="text-[44px] font-bold leading-[54px] mt-[10px]">
          대한요가회 요가 말라 프로젝트
        </h2>
        <p className="text-[20px] leading-[30px] tracking-[-0.2px] mt-[20px]">
          ‘글로벌 요가 말라 프로젝트’는 국내외 요가인들의 단합을 위한 요가
          수련을 통해, 한국 요가계의 양적 성장과 질적 발전을 도모하고 요가
          문화의 보급을 통해 다중의 심신 건강을 증진 시킬 수 있습니다.
        </p>

        {/* 이미지 영역 */}
        <div className="relative rounded-[20px] overflow-hidden bg-white mt-[60px]">
          <Img
            src="/images/event/yoga_bala_bg.jpg"
            alt="대한요가회 요가 말라 프로젝트"
            width={1140}
            height={350}
          />
        </div>

        {/* 일시,장소 영역 */}
        <ul className="text-[16px] font-400 line-height-[24px] ">
          <li className="pt-[30px] pb-[30px] flex-between gap-[30px]">
            <span className="block w-full heading-4">일시</span>
            <p className="body-1 w-full">2025년도 일정은 미정 입니다.</p>
          </li>
          <li className="border-t border-[#eee] pt-[30px] pb-[30px] flex-between gap-[30px]">
            <span className="block w-full heading-4">장소</span>
            <p className="body-1 w-full">2025년도 장소는 미정 입니다.</p>
          </li>
        </ul>

        {/* 버튼 영역 */}
        <div className="flex-center mt-[60px]">
          <Link
            className="btn-more-link primary min-w-[230px]"
            href="https://www.obud.co/program/e1d34121-5c62-424e-b6ce-9f50e2ba3531/schedule/13d447b8-5afd-4588-ac92-c43c2efc5425"
            target="_blank"
            rel="noopener noreferrer"
            title="새 창 열림"
          >
            접수하기
          </Link>
        </div>
      </section>
    </Contents>
  );
}
