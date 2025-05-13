import ResultDetail from "./result-detail";
import fetcher from "@/lib/fetcher";

export const revalidate = 60;

export default async function ConferenceResultDetailPage({ params }) {
  const { id } = await params;
  const initialData = await fetcher(`/api/v1/competition/result/${id}`);
  console.log("server", initialData);
  return <ResultDetail initialData={initialData} id={id} />;
}
