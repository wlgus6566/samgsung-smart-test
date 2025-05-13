"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import KoreaMap from "@/components/map/KoreaMap";
import SearchBar from "@/components/ui/search-bar";
import UiTable from "@/components/ui/ui-table";
import Pagination from "@/components/ui/pagination";
import fetcher from "@/lib/fetcher";
import PostState from "@/components/post/post-state";
const REGIONS = {
  ALL: "전체",
  SEOUL: "서울",
  BUSAN: "부산",
  DAEGU: "대구",
  INCHEON: "인천",
  GWANGJU: "광주",
  DAEJEON: "대전",
  ULSAN: "울산",
  SEJONG: "세종",
  GYEONGGI: "경기도",
  GANGWON: "강원도",
  CHUNGBUK: "충청북도",
  CHUNGNAM: "충청남도",
  JEONBUK: "전라북도",
  JEONNAM: "전라남도",
  GYEONGBUK: "경상북도",
  GYEONGNAM: "경상남도",
  JEJU: "제주도",
};

export default function BranchList({ initialData , url , title }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scrollPositionRef = useRef(0);

  const areaCd = searchParams.get("areaCd") || "ALL";
  const searchSelect = searchParams.get("searchSelect") || "SPOT_NAME";
  const searchWord = searchParams.get("searchWord") || "";
  const currentPage = parseInt(searchParams.get("currentPage") || "1", 10);

  const [input, setInput] = useState(searchWord);
  const [selectedCategory, setSelectedCategory] = useState(searchSelect);

  useEffect(() => {
    setInput(searchWord);
  }, [searchWord]);

  useEffect(() => {
    setSelectedCategory(searchSelect);
  }, [searchSelect]);

  // URL 파라미터가 변경될 때 스크롤 위치 유지
  useEffect(() => {
    // 이전 스크롤 위치로 복원
    if (scrollPositionRef.current > 0) {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [areaCd, searchSelect, searchWord, currentPage]);

  const categories = [
    { value: "SPOT_NAME", label: "지점명" },
    { value: "TELEPHONE", label: "전화번호" },
    { value: "ADDRESS", label: "주소" },
  ];
  const { data, error, isLoading } = useSWR(
    `${url}?areaCd=${areaCd === "ALL" ? "" : areaCd}&searchSelect=${searchSelect}&searchWord=${encodeURIComponent(searchWord)}&currentPage=${currentPage}&size=10`,
    fetcher,
    {
      fallbackData: initialData,
      dedupingInterval: 1000,
    }
  );

  const { list = [], ...paginationData } = data || {};

  const handleRegionClick = (region) => {
    // 현재 스크롤 위치 저장
    scrollPositionRef.current = window.scrollY;

    const params = new URLSearchParams(searchParams.toString());
    params.set("areaCd", region);
    params.set("currentPage", "1");
    router.push(`?${params.toString()}`);
  };

  const handleSearch = () => {
    // 현재 스크롤 위치 저장
    scrollPositionRef.current = window.scrollY;

    const params = new URLSearchParams(searchParams.toString());
    params.set("searchWord", input);
    params.set("searchSelect", selectedCategory);
    params.set("currentPage", "1");
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (page) => {
    // 현재 스크롤 위치 저장
    scrollPositionRef.current = window.scrollY;

    const params = new URLSearchParams(searchParams.toString());
    params.set("currentPage", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
        <div className="mt-[160px]">
          <div className="flex mt-[40px] gap-[24px]">
            <div className="flex justify-center w-[265px]">
              <KoreaMap areaCd={areaCd} onRegionClick={handleRegionClick} />
            </div>
            <div>
              <strong className="block text-[32px] font-bold leading-[46px]">
                {title}
              </strong>
              <div className="flex-wrap mt-[40px]">
                <div className="flex flex-wrap gap-[12px] gap-y-[10px] visible h-[auto]">
                  {Object.entries(REGIONS).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => handleRegionClick(key)}
                      className={`flex justify-center items-center basis-[131px] h-[44px] flex-shrink-0 border-1 border-solid border-gray-200 rounded-[25px] overflow-hidden text-[16px]${
                        areaCd === key
                          ? "font-bold text-white bg-primary border-primary font-bold"
                          : ""
                      }`}
                      data-state={areaCd === key ? "active" : "inactive"}
                    >
                      <span>{value}</span>
                    </button>
                  ))}
                </div>
              </div>
              <SearchBar
                options={categories}
                selected={selectedCategory}
                setSelected={setSelectedCategory}
                input={input}
                setInput={setInput}
                onSearch={handleSearch}
                placeholder="관련 정보를 검색해보세요"
                className="max-w-[558px] mt-[20px]"
              />
            </div>
          </div>
          <div className="mt-[60px]">
            <PostState
              isLoading={isLoading}
              error={error}
              data={data}
              colSpan={4}
              renderData={(data) => (
                <>
                  <UiTable>
                    <thead>
                      <tr>
                        <th className="w-[90px]">No.</th>
                        <th className="w-[620px]">지점명</th>
                        <th className="w-[180px]">전화번호</th>
                        <th className="w-[180px]">주소</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.list.map((center, index) => (
                        <tr key={center.officialcenterSeq ?? center.certeduorgSeq}>
                          <td className="text-center">
                            {paginationData.totalCount -
                              (paginationData.pageNum - 1) *
                                paginationData.pageSize -
                              index}
                          </td>
                          <td>{center.spotName}</td>
                          <td className="text-center">
                            {center.telephoneNumber}
                          </td>
                          <td>{center.addressSido}</td>
                        </tr>
                      ))}
                    </tbody>
                  </UiTable>
                </>
              )}
            />
            <Pagination {...paginationData} goToPage={handlePageChange} />
          </div>
        </div>
  );
}
