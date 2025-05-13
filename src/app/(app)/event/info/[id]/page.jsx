import InfoDetail from "./info-detail";
import fetcher from "@/lib/fetcher";

export const revalidate = 60;

export default async function EventInfoDetailPage({ params }) {
  const { id } = await params;
  const initialData = await fetcher(`/api/v1/bbs/EVENT/${id}`);
  return <InfoDetail initialData={initialData} id={id} />;
}
