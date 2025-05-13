"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import Contents from "@/components/layout/contents";
import Pagination from "@/components/ui/pagination";
import fetcher from "@/lib/fetcher";
import { updatePageParam } from "@/utils/url-params";
import Img from "@/components/ui/img";

export default function MagazineList({ initialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("currentPage") || "1", 10);

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
    `/api/v1/bbs/MAGAZINE?currentPage=${currentPage}&size=6`,
    fetcher,
    {
      fallbackData: initialData,
      dedupingInterval: 1000,
    }
  );

  const { list, ...paginationData } = data;

  if (isLoading) {
    return (
      <div className="w-full text-center py-[80px]">
        <p>데이터를 불러오는 중입니다...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-[80px] text-red-500">
        데이터를 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  return (
    <Contents title="매거진" backgroundImage="/images/yoga/yoga_kv_bg.jpg">
      <div className="grid grid-cols-3 grid-rows-2 gap-[12px]">
        {list && list.length > 0 ? (
          list.map((item) => (
            <div
              key={item.boardSeq}
              className="w-full h-[475px] rounded-[25px] overflow-hidden relative"
            >
              <Img
                src={
                  item.mainThumbnailFileList &&
                  item.mainThumbnailFileList.length > 0
                    ? item.mainThumbnailFileList[0].filePath
                    : "/images/temp/no_image.png"
                }
                alt={item.title}
                fill
                className="w-full object-cover"
              />
              <button
                onClick={() => downloadFile(item)}
                className="btn-download absolute bottom-[30px] left-[50%] translate-x-[-50%] border-none w-[159px]"
              >
                PDF 다운로드
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px]">
            <p className="text-[18px] text-[#888888]">
              등록된 게시물이 없습니다.
            </p>
          </div>
        )}
      </div>

      <Pagination
        {...paginationData}
        goToPage={(page) => {
          updatePageParam(router, page);
        }}
      />
    </Contents>
  );
}
