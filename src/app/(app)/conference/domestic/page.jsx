import DomesticsList from "@/app/(app)/conference/domestic/list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

export default async function ConferenceDomesticsListPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params.currentPage || "1", 10);
  const initialData = await fetcher(
    `/api/v1/competition/domestic?currentPage=${currentPage}&size=10`
  );
  console.log(initialData);

  return (
    <Suspense fallback={<DetailLoading />}>
      <DomesticsList initialData={initialData} />
    </Suspense>
  );
}
