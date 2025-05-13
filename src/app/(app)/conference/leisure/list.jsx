"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import Contents from "@/components/layout/contents";
import UiTable from "@/components/ui/ui-table";
import Pagination from "@/components/ui/pagination";
import fetcher from "@/lib/fetcher";
import { updateSearchParam, updatePageParam } from "@/utils/url-params";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { formatDate } from "@/utils/date";
import PostState from "@/components/post/post-state";

export default function ConferenceLeisureList({ initialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchWord = searchParams.get("searchWord") || "";
  const currentPage = parseInt(searchParams.get("currentPage") || "1", 10);

  const [input, setInput] = useState(searchWord);

  useEffect(() => {
    setInput(searchWord);
  }, [searchWord]);

  const { data, error, isLoading } = useSWR(
    `/api/v1/competition/life?searchWord=${encodeURIComponent(searchWord)}&currentPage=${currentPage}&size=10`,
    fetcher,
    {
      fallbackData: initialData,
      dedupingInterval: 1000,
    }
  );

  const { list, ...paginationData } = data;
  console.log(list);

  return (
    <Contents
      title="생활체육"
      backgroundImage="/images/conference/kv_sports.png"
    >
      <div className="flex justify-between w-full mb-[20px]">
        <h2 className="text-2xl font-bold">생활체육 대회 요강</h2>
        <Input
          type="search"
          className="w-[426px]"
          value={input}
          placeholder="관련 정보를 검색해보세요."
          onChange={(e) => setInput(e.target.value)}
          onSearch={() => updateSearchParam(router, input)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateSearchParam(router, input);
            }
          }}
        />
      </div>

      <PostState
        isLoading={isLoading}
        error={error}
        data={data}
        colSpan={3}
        renderData={(data) => (
          <>
            <UiTable>
              <thead>
                <tr>
                  <th className="w-[90px]">No.</th>
                  <th className="w-[620px]">제목</th>
                  <th className="w-[180px]">글쓴이</th>
                  <th className="w-[180px]">날짜</th>
                  <th className="w-[180px]">조회</th>
                </tr>
              </thead>
              <tbody>
                {data.list.map((item, index) => (
                  <tr key={item.competitionSeq}>
                    <td className="text-center">
                      {paginationData.totalCount -
                        (paginationData.pageNum - 1) * paginationData.pageSize -
                        index}
                    </td>
                    <td className="text-left">
                      <Link
                        href={`${searchParams ? `/conference/leisure/${item.competitionSeq}?${searchParams}` : `/conference/leisure/${item.competitionSeq}`}`}
                        className="block w-[620px] text-ellipsis hover:underline"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="text-center">{item.registerName}</td>
                    <td className="text-center">
                      {formatDate(item.registrationDt)}
                    </td>
                    <td className="text-center">{item.inquiryCount}</td>
                  </tr>
                ))}
              </tbody>
            </UiTable>
            <Pagination
              {...paginationData}
              goToPage={(page) => {
                updatePageParam(router, page, { searchWord });
              }}
            />
          </>
        )}
      />
    </Contents>
  );
}
