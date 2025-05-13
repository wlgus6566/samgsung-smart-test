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
import Img from "@/components/ui/img";

export default function ManagementList({ initialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchWord = searchParams.get("searchWord") || "";
  const currentPage = parseInt(searchParams.get("currentPage") || "1", 10);

  const [input, setInput] = useState(searchWord);

  useEffect(() => {
    setInput(searchWord);
  }, [searchWord]);

  const downloadFile = async (item) => {
    try {
      if (!item.fileList?.length) {
        alert("다운로드할 파일이 없습니다.");
        return;
      }

      const fileUrl = `/api/file/download/${item.fileList[0].attachingFileSeq}`;
      const fileName = item.fileList[0].fileOriginalName;

      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("다운로드 실패");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error("다운로드 오류:", error);
      alert("파일 다운로드 중 오류가 발생했습니다.");
    }
  };

  const { data, error, isLoading } = useSWR(
    `/api/v1/bbs/MANAGEMENT?searchWord=${encodeURIComponent(searchWord)}&currentPage=${currentPage}&size=10`,
    fetcher,
    {
      fallbackData: initialData,
      dedupingInterval: 1000,
    }
  );

  const { list, ...paginationData } = data;

  return (
    <Contents title="경영공시" backgroundImage="/images/kya/kya_kv_bg.jpg">
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
                  <th className="">제목</th>
                  <th className="w-[130px]">날짜</th>
                  <th className="w-[130px]">정보파일</th>
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
                    <td className="text-ellipsis text-left">{item.title}</td>
                    <td>{formatDate(item.registrationDt)}</td>
                    <td>
                      <button
                        onClick={() => downloadFile(item)}
                        className="inline-block text-black leading-[20px]"
                      >
                        다운로드
                        <Img
                          src="/images/icon/ic_download.svg"
                          alt="다운로드"
                          width={20}
                          height={20}
                          className="ml-[5px] inline-block"
                        />
                      </button>
                    </td>
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
