"use client";

import React from "react";
import Img from "@/components/ui/img";
import Contents from "@/components/layout/contents";
import Link from "next/link";

export default function MeditationDayPage() {
  return (
    <Contents
      title="세계 명상의 날"
      backgroundImage="/images/event/event_kv_bg.jpg"
    >
      <section className="mt-[60px]">
        <span className="text-primary text-[20px] font-bold">
          International Day of Meditation
        </span>
        <h2 className="text-[44px] font-bold leading-[54px] mt-[10px]">
          세계 명상의 날이란?
        </h2>
        <p className="text-[20px] leading-[30px] tracking-[-0.2px] mt-[20px]">
          세계 명상의 날(International Day of Meditation)은 전 세계 사람들이
          함께 명상의 힘을 경험하고, 내면의 평화와 조화를 찾을 수 있도록 마련된
          특별한 날입니다. 명상은 몸과 마음을 치유하고 스트레스를 줄이며, 삶의
          질을 향상하는 데 중요한 역할을 합니다.
        </p>
        {/* 이미지 영역 */}
        <div className="relative rounded-[20px] overflow-hidden bg-white mt-[60px]">
          <Img
            src="/images/event/meditation_day_bg.jpg"
            alt="세계 명상의 날"
            width={1140}
            height={350}
          />
        </div>

        {/* 일시,장소 영역 */}
        <div className="flex flex-col gap-[30px] mt-[30px]">
          <div className="flex justify-between gap-[30px]">
            <span className="block w-full heading-4">명상의 효과</span>
            <div className="flex flex-col gap-[10px] w-full">
              <p className="body-1">
                명상은 단순한 휴식이 아니라, 우리 삶을 긍정적으로 변화시키는
                강력한 도구입니다.
              </p>
              <ul className="body-1 bullet-list">
                <li>
                  <b>스트레스 감소:</b> 규칙적인 명상은 불안과 스트레스를 낮추는
                  데 효과적입니다.
                </li>
                <li>
                  <b>집중력 향상:</b> 뇌의 인지 능력을 강화하여 집중력을 높이고
                  업무 효율을 개선합니다.
                </li>
                <li>
                  <b>감정 조절:</b> 명상은 감정을 안정시키고, 더 긍정적인
                  마음가짐을 갖도록 도와줍니다.
                </li>
                <li>
                  <b>수면의 질 향상:</b> 불면증을 완화하고 깊은 숙면을
                  유도합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex-center mt-[60px]">
          <Link
            className="btn-more-link primary min-w-[230px]"
            href="https://www.un.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            title="새 창 열림"
          >
            세계 명상의 날 공식 홈페이지
          </Link>
        </div>
      </section>
    </Contents>
  );
}
