"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import Contents from "@/components/layout/contents";
import Pagination from "@/components/ui/pagination";
import fetcher from "@/lib/fetcher";
import { updateSearchParam, updatePageParam } from "@/utils/url-params";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { formatDate } from "@/utils/date";
import Img from "@/components/ui/img";

export default function GalleryList({ initialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchWord = searchParams.get("searchWord") || "";
  const currentPage = parseInt(searchParams.get("currentPage") || "1", 10);

  const [input, setInput] = useState(searchWord);

  useEffect(() => {
    setInput(searchWord);
  }, [searchWord]);

  const { data, error, isLoading } = useSWR(
    `/api/v1/bbs/GALLERY?searchWord=${encodeURIComponent(searchWord)}&currentPage=${currentPage}&size=6`,
    fetcher,
    {
      fallbackData: initialData,
      revalidateOnFocus: false,
      revalidateOnMount: false,
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
    <Contents title="갤러리" backgroundImage="/images/yoga/yoga_kv_bg.jpg">
      <div className="flex w-full justify-end mb-[20px]">
        <Input
          type="search"
          className="w-[426px]"
          value={input}
          placeholder="행사 제목을 검색해보세요"
          onChange={(e) => setInput(e.target.value)}
          onSearch={() => updateSearchParam(router, input)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateSearchParam(router, input);
            }
          }}
        />
      </div>

      {list && list.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[32px]">
          {list.map((item) => (
            <Link key={item.boardSeq} href={`/yoga/gallery/${item.boardSeq}`}>
              <div className="w-full h-[270px] rounded-[25px] overflow-hidden relative">
                <Img
                  src={
                    item.pcThumbnailFileList &&
                    item.pcThumbnailFileList.length > 0
                      ? item.pcThumbnailFileList[0].filePath
                      : "/images/temp/no_image.png"
                  }
                  alt={item.title}
                  fill
                  className="w-full object-cover"
                />
              </div>
              <ul className="flex flex-col gap-[5px] mt-[16px]">
                <li className="text-[20px] font-bold leading-[34px]">
                  {item.title}
                </li>
                <li className="text-[16px] leading-[26px] text-[#888888]">
                  {formatDate(item.registrationDt)}
                </li>
              </ul>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px]">
          <p className="text-[18px] text-[#888888]">
            등록된 게시물이 없습니다.
          </p>
        </div>
      )}

      <Pagination
        {...paginationData}
        goToPage={(page) => {
          updatePageParam(router, page, { searchWord });
        }}
      />
    </Contents>
  );
}
