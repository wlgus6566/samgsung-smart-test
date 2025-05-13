import GalleryList from "@/app/(app)/yoga/gallery/result-list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

export default async function GalleryListPage({ searchParams }) {
  // URL에서 페이지 파라미터 추출
  const params = await searchParams;
  const currentPage = parseInt(params.currentPage || "1", 10);

  const initialData = await fetcher(
    `/api/v1/bbs/GALLERY?currentPage=${currentPage}&size=6`
  );
  console.log(initialData);

  return (
    <Suspense fallback={<DetailLoading />}>
      <GalleryList initialData={initialData} />
    </Suspense>
  );
}
