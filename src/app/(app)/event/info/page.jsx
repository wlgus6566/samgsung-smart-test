import EventInfoList from "@/app/(app)/event/info/info-list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

export default async function EventInfoListPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params.currentPage || "1", 10);

  const initialData = await fetcher(
    `/api/v1/bbs/EVENT?currentPage=${currentPage}&size=10`
  );

  return (
    <Suspense fallback={<DetailLoading />}>
      <EventInfoList initialData={initialData} />
    </Suspense>
  );
}
