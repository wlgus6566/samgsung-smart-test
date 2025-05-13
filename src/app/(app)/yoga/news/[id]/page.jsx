import ResultDetail from "./result-detail";
import fetcher from "@/lib/fetcher";

export const revalidate = 60;

export default async function NewsResultDetailPage({ params }) {
  const { id } = await params;
  const initialData = await fetcher(`/api/v1/bbs/NEWS/${id}`);
  return <ResultDetail initialData={initialData} id={id} />;
}
