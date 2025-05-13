import DomesticDetail from "./detail";
import fetcher from "@/lib/fetcher";

export const revalidate = 60;

export default async function ConferenceDomesticDetailPage({ params }) {
  const { id } = await params;
  const initialData = await fetcher(`/api/v1/competition/domestic/${id}`);
  return <DomesticDetail initialData={initialData} id={id} />;
}
