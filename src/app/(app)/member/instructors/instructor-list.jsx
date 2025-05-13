"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import Contents from "@/components/layout/contents";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
import { updateSearchParam, updatePageParam } from "@/utils/url-params";
import fetcher from "@/lib/fetcher";

export default function InstructorList({ initialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchWord = searchParams.get("searchWord") || "";
  const currentPage = parseInt(searchParams.get("currentPage") || "1", 10);
  const [input, setInput] = useState(searchWord);

  useEffect(() => {
    setInput(searchWord);
  }, [searchWord]);

  const { data, error, isLoading } = useSWR(
    `/api/v1/leader?searchWord=${encodeURIComponent(searchWord)}&currentPage=${currentPage}&size=20`,
    fetcher,
    {
      fallbackData: initialData || {
        list: [],
        pageNum: 1,
        pageSize: 20,
        pages: 1,
        nextPage: null,
        isFirstPage: true,
        isLastPage: true,
        hasNextPage: false,
      },
      dedupingInterval: 1000,
    }
  );

  const { list = [], ...paginationData } = data || {};

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex justify-end">
        <Input
          type="search"
          className="w-[521px]"
          value={input}
          placeholder="이름,  기관명, 자격번호 검색해보세요"
          onChange={(e) => setInput(e.target.value)}
          onSearch={() => updateSearchParam(router, input)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateSearchParam(router, input);
            }
          }}
        />
      </div>
      {list.length > 0 ? (
        <ul className="flex gap-[24px] flex-wrap">
          {list.map((item) => (
            <li
              key={item.leaderSeq}
              className="relative flex flex-col p-[20px] w-[calc((100%-72px)/4)] basis-[calc((100%-72px)/4)] flex-grow-0 border border-[#eee] rounded-[15px] text-[16px] leading-[24px] text-[#999]"
            >
              <span className="text-[#000] font-sans">
                {item.qualificationNo}
              </span>
              <span
                className={`absolute top-[20px] right-[20px] leading-[24px] font-bold ${
                  item.sectionCd === "GRADE_1"
                    ? "text-primary"
                    : "text-[#FD8168]"
                }`}
              >
                {item.sectionCd === "GRADE_1"
                  ? "1급"
                  : item.sectionCd === "GRADE_2"
                    ? "2급"
                    : ""}
              </span>
              <span className="mt-[10px] text-[26px] leading-[33px] font-bold text-[#000]">
                {item.name}
              </span>
              <span className="mt-[5px] leading-[24px]">
                {item.birthday} <br />
                {item.officialcertcenter}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-[83px]">
          검색 결과가 없습니다.
        </div>
      )}
      <Pagination
        {...paginationData}
        pageNum={currentPage}
        goToPage={(page) => {
          updatePageParam(router, page, { searchWord });
        }}
      />
    </div>
  );
}
