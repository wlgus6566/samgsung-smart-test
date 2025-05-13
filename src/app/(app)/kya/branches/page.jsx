import React from "react";
import Contents from "@/components/layout/contents";
import Image from "next/image";
// 데이터
const committeeData = [
  {
    name: "서울특별시요가회",
    president: "정유경",
    establishment: "2014",
    phone: "02-562-1287",
    location: "서울특별시 강남구 대치동 922-21",
  },
  {
    name: "부산광역시요가회",
    president: "-",
    establishment: "2016",
    phone: "070-4159-5085",
    location: "부산광역시 남구 황령대로319번길 42",
  },
  {
    name: "대구광역시요가회",
    president: "윤영실",
    establishment: "2014",
    phone: "053-631-5111",
    location: "대구광역시 달서구 월곡로32길 10",
  },
  {
    name: "광주광역시요가회",
    president: "박윤하",
    establishment: "2012",
    phone: "061-945-3711",
    location: "광주광역시 광산구 선운중앙로 52",
  },
  {
    name: "울산광역시요가회",
    president: "오구호",
    establishment: "2012",
    phone: "0507-1344-8446",
    location: "울산광역시 북구 호계7길 5",
  },
  {
    name: "경기도요가회",
    president: "고한철",
    establishment: "2012",
    phone: "032-613-0389",
    location: "경기도 부천시 원종로 21",
  },
  {
    name: "경상남도요가회",
    president: "이한석",
    establishment: "2012",
    phone: "055-222-0784",
    location: "경상남도 마산합포구 3.15대로 240",
  },
  {
    name: "전라남도요가회",
    president: "김화숙",
    establishment: "2013",
    phone: "010-8917-0824",
    location: "전라남도 광양시 와룡1길 2층",
  },
  {
    name: "제주특별자치도요가회",
    president: "윤혜리",
    establishment: "2011",
    phone: "010-3266-8875",
    location: "제주특별자치도 제주시 연수로 1길 39",
  },
];

export default function BranchesPage() {
  return (
    <Contents title="시도요가회" backgroundImage="/images/kya/kya_kv_bg.jpg">
      <h3 className="text-xl font-bold">대한요가회 시도요가회 현황</h3>
      <ul className="flex flex-wrap gap-[12px] border-t-2 border-[#000] pt-[20px] mt-[20px]">
        {committeeData.map((org, index) => (
          <li
            key={index}
            className="inline-flex flex-col w-[372px] h-[266px] bg-white rounded-[25px] border border-[#eee] p-6"
          >
            <div className="w-full">
              <h3 className="text-lg font-bold mb-[20px]">{org.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-[20px]">
                  <span className="shrink-0 basis-[88px] flex items-center gap-[3px]">
                    <Image
                      src="/images/icon/ic-user-circle-24.svg"
                      alt="회장"
                      width={24}
                      height={24}
                    />
                    회장
                  </span>
                  <span className="font-bold">{org.president}</span>
                </div>
                <div className="flex items-start gap-[20px]">
                  <span className="shrink-0 basis-[88px] flex items-center gap-[3px]">
                    <Image
                      src="/images/icon/ic-calendar-24.svg"
                      alt="설립년도"
                      width={24}
                      height={24}
                    />
                    설립년도
                  </span>
                  <span className="font-bold">{org.establishment}</span>
                </div>
                <div className="flex items-start gap-[20px]">
                  <span className="shrink-0 basis-[88px] flex items-center gap-[3px]">
                    <Image
                      src="/images/icon/ic-phone-24.svg"
                      alt="전화번호"
                      width={24}
                      height={24}
                    />
                    전화번호
                  </span>
                  <span className="font-bold">{org.phone}</span>
                </div>
                <div className="flex items-start gap-[20px]">
                  <span className="shrink-0 basis-[88px] flex items-center gap-[3px]">
                    <Image
                      src="/images/icon/ic-map-24.svg"
                      alt="주소"
                      width={24}
                      height={24}
                    />
                    주소
                  </span>
                  <span className="font-bold keep-all">{org.location}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Contents>
  );
}
