"use client";

import React, { useState } from "react";
import Contents from "@/components/layout/contents";
import UiTable from "@/components/ui/ui-table";
import Pagination from "@/components/ui/pagination";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export default function ExecutivesPage() {
  const executivesList = [
    {
      position: "회장",
      name: "강승진",
      affiliation:
        "(주)이모션글로벌 대표이사<br/>(주)하이퍼라이프케어 대표이사",
    },
    {
      position: "부회장",
      name: "박태균",
      affiliation: "(주)두루조은 대표이사",
    },
    {
      position: "부회장",
      name: "최순옥",
      affiliation: "(사)한국카리스요가협회 대표이사",
    },
    {
      position: "부회장",
      name: "이정희",
      affiliation: "하스야 소매틱 연구소 대표",
    },
    { position: "부회장", name: "양원석", affiliation: "DH미디어 대표" },
    { position: "이사", name: "장의향", affiliation: "오늘은요가 원장" },
    { position: "이사", name: "강기영", affiliation: "H요가아카데미 대표" },
    {
      position: "이사",
      name: "오갑진",
      affiliation: "국제기술품질인증원 심사원",
    },
    {
      position: "이사",
      name: "김민아",
      affiliation: "김민아 요가 스튜디오 대표",
    },
    {
      position: "이사",
      name: "김성수",
      affiliation: "(사)코리아요가얼라이언스 대표",
    },
    {
      position: "이사",
      name: "김혜진",
      affiliation: "동남보건대학교 산학협력단 특임교수",
    },
    { position: "이사", name: "김진길", affiliation: "M20 대표" },
    { position: "이사", name: "최윤정", affiliation: "앤필라테스 대표" },
    {
      position: "이사",
      name: "정수진",
      affiliation: "성균대학교 대학원 체육학 박사",
    },
    { position: "이사", name: "이상걸", affiliation: "한국필라테스연맹 이사" },
    {
      position: "이사",
      name: "김동진",
      affiliation: "디노커뮤니케이션즈 대표",
    },
    {
      position: "이사",
      name: "변민경",
      affiliation: "(주)발레포러스 대표이사",
    },
    { position: "이사", name: "신민호", affiliation: "(주)아웃스프링 대표" },
    { position: "이사", name: "방진호", affiliation: "(주)태형코리아 대표" },
    { position: "이사", name: "김이현", affiliation: "요가쿨라 대표" },
    {
      position: "이사",
      name: "손희진",
      affiliation: "하스야 소매틱 연구소 실장",
    },
    {
      position: "이사",
      name: "장영진",
      affiliation: "연세대학교 대학원 체육학 박사",
    },
    { position: "이사", name: "원희영", affiliation: "원요가필라테스 대표" },
    {
      position: "이사",
      name: "김태분",
      affiliation: "메디 요가&필라테스 원장",
    },
    {
      position: "이사",
      name: "선혜지",
      affiliation: "(사)한국평생스포츠코칭협회 상임이사/교육위원장",
    },
    { position: "이사", name: "박지윤", affiliation: "AIO필라테스 대표이사" },
    {
      position: "회계감사",
      name: "심재호",
      affiliation: "인성회계법인 부대표",
    },
    {
      position: "행정감사",
      name: "이한석",
      affiliation: "경상남도요가회 회장",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalCount = executivesList.length;

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return executivesList.slice(startIndex, endIndex);
  };

  const currentData = getCurrentPageData();

  return (
    <Suspense fallback={<DetailLoading />}>
      <Contents title="임원" backgroundImage="/images/kya/kya_kv_bg.jpg">
        <UiTable>
          <thead>
            <tr>
              <th className="w-[120px]">직위</th>
              <th className="w-[180px]">성명</th>
              <th className="">직위 및 소속</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={`executive-${index}`}>
                <td dangerouslySetInnerHTML={{ __html: item.position }} />
                <td>{item.name}</td>
                <td dangerouslySetInnerHTML={{ __html: item.affiliation }} />
              </tr>
            ))}
          </tbody>
        </UiTable>

        {/* 페이지네이션 */}
        <Pagination
          pageNum={currentPage}
          pageSize={itemsPerPage}
          totalCount={totalCount}
          goToPage={(page) => setCurrentPage(page)}
        />
      </Contents>
    </Suspense>
  );
}
