import RegulationsList from "@/app/(app)/kya/regulations/result-list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

export default async function RegulationsListPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params.currentPage || "1", 10);

  const initialData = await fetcher(
    `/api/v1/bbs/REGULATION?currentPage=${currentPage}&size=10`
  );
  console.log(initialData);

  return (
    <Suspense fallback={<DetailLoading />}>
      <RegulationsList initialData={initialData} />
    </Suspense>
  );
}
