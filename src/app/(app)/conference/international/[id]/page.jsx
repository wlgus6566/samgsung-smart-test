import InternationalDetail from "./detail";
import fetcher from "@/lib/fetcher";

export const revalidate = 60;

export default async function ConferenceInternationalDetailPage({ params }) {
  const { id } = await params;
  const initialData = await fetcher(`/api/v1/competition/international/${id}`);
  return <InternationalDetail initialData={initialData} id={id} />;
}
