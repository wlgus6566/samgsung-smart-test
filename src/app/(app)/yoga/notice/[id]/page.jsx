import ResultDetail from "./result-detail";
import fetcher from "@/lib/fetcher";

export const revalidate = 60;

export default async function NoticeResultDetailPage({ params }) {
  const { id } = await params;
  const initialData = await fetcher(`/api/v1/bbs/NOTICE/${id}`);
  return <ResultDetail initialData={initialData} id={id} />;
}
