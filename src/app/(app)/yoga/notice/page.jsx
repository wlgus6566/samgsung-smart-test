import NoticeResultsList from "@/app/(app)/yoga/notice/result-list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

export default async function NoticeResultsListPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params.currentPage || "1", 10);

  const initialData = await fetcher(
    `/api/v1/bbs/NOTICE?currentPage=${currentPage}&size=10`
  );

  console.log(initialData);

  return (
    <Suspense fallback={<DetailLoading />}>
      <NoticeResultsList initialData={initialData} />
    </Suspense>
  );
}
