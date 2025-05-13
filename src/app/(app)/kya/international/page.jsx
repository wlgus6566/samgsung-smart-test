import React from "react";
import Image from "next/image";
import Contents from "@/components/layout/contents";

// 데이터
const committeeData = [
  {
    name: "IOC",
    establishment: "1894년 6월 23일",
    location: "스위스",
    president: "Thomas Bach (토마스 바흐)",
    website: "https://www.olympics.com/",
    logo: "/images/kya/international/logo_ioc.png",
    logoWidth: 337,
    logoHeight: 87,
  },
  {
    name: "OCA",
    establishment: "1982년 11월 16일",
    location: "쿠웨이트",
    president: "Raja Randhir Singh (라자 란디르 싱)",
    website: "https://oca.asia/",
    logo: "/images/kya/international/logo_oca.png",
    logoWidth: 204,
    logoHeight: 228,
  },
  {
    name: "AYUSH",
    establishment: "2014년 11월 9일",
    location: "인도",
    president: "Shri Prataprao Jadhav (슈리 프라타프라오 자다브)",
    website: "https://ayush.gov.in/",
    logo: "/images/kya/international/logo_ayush.png",
    logoWidth: 322,
    logoHeight: 145,
  },
];

export default function InternationalPage() {
  return (
    <Contents title="국제기구" backgroundImage="/images/kya/kya_kv_bg.jpg">
      <ul className="flex flex-col gap-[12px]">
        {committeeData.map((org, index) => (
          <li
            key={index}
            className="flex items-center bg-white rounded-[20px] w-full h-[282px] overflow-hidden border border-[#eee]"
          >
            <div className="flex-1 h-full flex items-center justify-center border-r border-[#eee] px-[60px]">
              <Image
                src={org.logo}
                alt={org.name}
                width={337}
                height={87}
                className="w-auto h-auto object-contain"
              />
            </div>
            <div className="flex-1 p-[60px]">
              <h3 className="text-2xl font-bold mb-6">{org.name}</h3>
              <dl className="space-y-3">
                <div className="flex">
                  <dt className="w-[80px] text-black">설립</dt>
                  <dd className="text-black font-bold">{org.establishment}</dd>
                </div>
                <div className="flex">
                  <dt className="w-[80px] text-black">소재지</dt>
                  <dd className="text-black font-bold">{org.location}</dd>
                </div>
                <div className="flex">
                  <dt className="w-[80px] text-black">위원장</dt>
                  <dd className="text-black font-bold">{org.president}</dd>
                </div>
                <div className="flex">
                  <dt className="w-[80px] text-black">홈페이지</dt>
                  <dd>
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-bold"
                      title="새 창 열림"
                    >
                      {org.website}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </Contents>
  );
}
