"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-[60px] pb-[110px] min-w-[1200px] border-t border-[#d9d9d9]">
      <div className="container-fixed">
        {/* 로고 영역 */}
        <Link href="/">
          <Image
            src="/images/common/logo_kya.png"
            alt="대한요가회 로고"
            width={221}
            height={63}
            className="object-contain"
            onError={(e) => {
              e.target.src = "https://placehold.co/75x48?text=KYA";
            }}
          />
        </Link>

        <address className="mt-[10px] ml-[14px] body-2 not-italic">
          <p>서울시 송파구 올림픽로 424, 올림픽회관 신관 321호</p>
          <p className="contact-info">
            <span>이메일: yoga@sports.or.kr</span>
            <span className="inline-block ml-[16px] relative">
              전화: 02-443-7330 / 070-4151-7331
            </span>
          </p>
        </address>
      </div>

      <style jsx>{`
        .contact-info span:not(:first-child)::before {
          content: "";
          position: absolute;
          top: 5px;
          left: -8px;
          width: 1px;
          height: 12px;
          background-color: #000;
        }
      `}</style>
    </footer>
  );
}
