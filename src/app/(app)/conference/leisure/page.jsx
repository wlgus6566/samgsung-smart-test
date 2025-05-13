import ConferenceLeisureList from "@/app/(app)/conference/leisure/list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

export default async function ConferenceLeisureListPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params.currentPage || "1", 10);
  const initialData = await fetcher(
    `/api/v1/competition/life?currentPage=${currentPage}&size=10`
  );

  return (
    <Suspense fallback={<DetailLoading />}>
      <ConferenceLeisureList initialData={initialData} />
    </Suspense>
  );
}
