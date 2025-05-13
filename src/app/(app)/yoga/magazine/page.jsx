import MagazineList from "@/app/(app)/yoga/magazine/result-list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

export default async function MagazineListPage({ searchParams }) {
  // URL에서 페이지 파라미터 추출
  const params = await searchParams;
  const currentPage = parseInt(params.currentPage || "1", 10);

  const initialData = await fetcher(
    `/api/v1/bbs/MAGAZINE?currentPage=${currentPage}&size=6`
  );
  return (
    <Suspense fallback={<DetailLoading />}>
      <MagazineList initialData={initialData} />
    </Suspense>
  );
}
