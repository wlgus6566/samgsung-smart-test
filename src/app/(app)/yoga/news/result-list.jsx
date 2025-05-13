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
import { formatDate } from "@/utils/date";
import PostState from "@/components/post/post-state";
import Link from "next/link";
export default function NewsResultsList({ initialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchWord = searchParams.get("searchWord") || "";
  const currentPage = parseInt(searchParams.get("currentPage") || "1", 10);

  const [input, setInput] = useState(searchWord);

  useEffect(() => {
    setInput(searchWord);
  }, [searchWord]);
  const { data, error, isLoading } = useSWR(
    `/api/v1/bbs/NEWS?searchWord=${encodeURIComponent(searchWord)}&currentPage=${currentPage}&size=10`,
    fetcher,
    {
      fallbackData: initialData,
      dedupingInterval: 1000,
    }
  );

  const { list, ...paginationData } = data;

  return (
    <Contents title="KYA 뉴스" backgroundImage="/images/yoga/bg_notice_kv.jpg">
      <div className="flex w-full justify-end mb-[20px]">
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
                  <tr key={item.boardSeq || `result-${index}`}>
                    <td>
                      {paginationData.totalCount -
                        (paginationData.pageNum - 1) * paginationData.pageSize -
                        index}
                    </td>
                    <td>
                      <Link
                        href={`${searchParams ? `/yoga/news/${item.boardSeq}?${searchParams}` : `/yoga/news/${item.boardSeq}`}`}
                        className="block w-[620px] text-ellipsis hover:underline"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td>{item.registerName}</td>
                    <td>{formatDate(item.registrationDt)}</td>
                    <td>{item.inquiryCount}</td>
                  </tr>
                ))}
              </tbody>
            </UiTable>
            <Pagination
              {...paginationData}
              pageNum={currentPage}
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
