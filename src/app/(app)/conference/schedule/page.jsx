import ScheduleList from "@/app/(app)/conference/schedule/schedule-list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

export default async function SchedulePage({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params.currentPage || "1", 10);
  const year = params.year || new Date().getFullYear();
  const month = params.month || new Date().getMonth() + 1;

  const initialData = await fetcher(
    `/api/v1/schedule?year=${year}&month=${month}&currentPage=${currentPage}&size=10`
  );
  return (
    <Suspense fallback={<DetailLoading />}>
      <ScheduleList initialData={initialData} />
    </Suspense>
  );
}
