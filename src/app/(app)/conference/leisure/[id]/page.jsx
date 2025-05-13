import ConferenceLeisureDetail from "./detail";
import fetcher from "@/lib/fetcher";

export const revalidate = 60;

export default async function ConferenceLeisureDetailPage({ params }) {
  const initialData = await fetcher(`/api/v1/competition/life/${params.id}`);
  return <ConferenceLeisureDetail initialData={initialData} id={params.id} />;
}
