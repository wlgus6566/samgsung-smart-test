import ResultsList from "@/app/(app)/conference/results/result-list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

export default async function ConferenceResultsListPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params.currentPage || "1", 10);

  const initialData = await fetcher(
    `/api/v1/competition/result?currentPage=${currentPage}&size=10`
  );
  console.log(initialData);
  return (
    <Suspense fallback={<DetailLoading />}>
      <ResultsList initialData={initialData} />
    </Suspense>
  );
}
