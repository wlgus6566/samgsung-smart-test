"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Contents from "@/components/layout/contents";
import UiTable from "@/components/ui/ui-table";
import Pagination from "@/components/ui/pagination";
import { formatDate } from "@/utils/date";
import useSWR from "swr";
import Image from "next/image";

// 데이터 페칭 함수
const fetcher = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

// 초기 데이터
const defaultInitialData = {
  code: "",
  message: "",
  data: {
    totalCount: 0,
    list: [],
    pageNum: 1,
    pageSize: 10,
    pages: 1,
    nextPage: 0,
    isFirstPage: true,
    isLastPage: true,
    hasNextPage: false,
  },
};

// 페이지 파라미터 업데이트 함수
const updatePageParam = (router, page) => {
  const params = new URLSearchParams(window.location.search);
  params.set("currentPage", page);
  router.push(`?${params.toString()}`);
};

// 월 변경 파라미터 업데이트 함수
const updateMonthParam = (router, year, month) => {
  const params = new URLSearchParams(window.location.search);
  params.set("year", year);
  params.set("month", month);
  params.set("currentPage", "1");
  router.push(`?${params.toString()}`);
};

export default function SchedulePage({ initialData = defaultInitialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("currentPage") || "1", 10);

  // 현재 연도와 월 구하기
  const now = new Date();
  const year = searchParams.get("year") || now.getFullYear();
  const month =
    searchParams.get("month") || String(now.getMonth() + 1).padStart(2, "0");

  const { data, error, isLoading } = useSWR(
    `/api/v1/schedule?year=${year}&month=${month}&currentPage=${currentPage}&size=10`,
    fetcher,
    {
      fallbackData: initialData,
      dedupingInterval: 1000,
    }
  );

  // 데이터가 있는지 확인 후 구조 분해 할당
  const scheduleData = data?.data || { list: [] };
  const { list } = scheduleData;

  // 페이지네이션 데이터
  const paginationData = {
    currentPage: scheduleData.pageNum || 1,
    totalPages: scheduleData.pages || 1,
  };

  // 이벤트 타입 정의
  const SCHEDULE_TYPES = {
    COMPETITION: { name: "요가 대회", color: "#B7E3FA" },
    WORKSHOP: { name: "강사 워크샵", color: "#FD8168" },
    YOGA_EVENT: { name: "요가 이벤트", color: "#d9d9d9" },
  };

  // 이전/다음 달 이동 함수
  const moveMonth = (direction) => {
    let newYear = parseInt(year);
    let newMonth = parseInt(month);

    if (direction === "prev") {
      if (newMonth === 1) {
        newYear--;
        newMonth = 12;
      } else {
        newMonth--;
      }
    } else {
      if (newMonth === 12) {
        newYear++;
        newMonth = 1;
      } else {
        newMonth++;
      }
    }

    updateMonthParam(router, newYear, String(newMonth).padStart(2, "0"));
  };

  return (
    <Contents
      title="대회 일정"
      backgroundImage="/images/conference/kv_sports.png"
    >
      {isLoading && <div className="text-center py-8">로딩 중...</div>}
      {error && (
        <div className="text-center py-8 text-red-500">
          데이터를 불러오는 중 오류가 발생했습니다.
        </div>
      )}
      {!isLoading && !error && (
        <>
          {/* 상단 헤더 영역 */}
          <div className="flex flex-col mb-[30px]">
            <span className="text-[#007EED] text-[20px] font-bold leading-[1.4em] mb-[10px]">
              Schedule
            </span>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h2 className="text-[44px] font-bold leading-[1.5]">
                  {year}년 {month}월
                </h2>
                <div className="flex gap-[10px] ml-[30px]">
                  <button
                    onClick={() => moveMonth("prev")}
                    className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center"
                  >
                    <Image
                      src="/images/icon/ic_circle_arrow_left.svg"
                      alt="ic_circle_arrow_left"
                      width={40}
                      height={40}
                    />
                  </button>
                  <button
                    onClick={() => moveMonth("next")}
                    className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center"
                  >
                    <Image
                      src="/images/icon/ic_circle_arrow_right.svg"
                      alt="ic_circle_arrow_right"
                      width={40}
                      height={40}
                    />
                  </button>
                </div>
              </div>

              {/* 카테고리 레이블 */}
              <div className="flex gap-6">
                {Object.entries(SCHEDULE_TYPES).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <span
                      className="inline-block w-[14px] h-[14px] mr-[10px] mb-[2px] rounded-full"
                      style={{ backgroundColor: value.color }}
                    ></span>
                    <span className="text-base">{value.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <UiTable className="table-fixed">
            <thead>
              <tr className="border-t border-b border-gray-300">
                <th className="w-[180px] text-base">날짜</th>
                <th className="w-[620px] text-base">내용</th>
                <th className="w-[120px] text-base">행사</th>
              </tr>
            </thead>
            <tbody>
              {list && list.length > 0 ? (
                list.map((item, index) => (
                  <tr key={item.scheduleSeq || index}>
                    <td className="text-center text-base">
                      {formatDate(item.beginDt)} ~ {formatDate(item.endDt)}
                    </td>
                    <td className="text-left text-base font-bold whitespace-normal">
                      {item.title}
                    </td>
                    <td className="text-left text-base">
                      <span
                        className="inline-block w-[14px] h-[14px] mr-[10px] rounded-full align-[-1px]"
                        style={{
                          backgroundColor:
                            SCHEDULE_TYPES[item.scheduleSectionCd]?.color ||
                            "#d9d9d9",
                        }}
                      />
                      {SCHEDULE_TYPES[item.scheduleSectionCd]?.name ||
                        item.scheduleSectionCd}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-8">
                    이 달의 일정이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </UiTable>

          {scheduleData.totalCount > 0 && (
            <Pagination
              pageNum={currentPage}
              {...paginationData}
              goToPage={(page) => {
                updatePageParam(router, page);
              }}
            />
          )}
        </>
      )}
    </Contents>
  );
}
