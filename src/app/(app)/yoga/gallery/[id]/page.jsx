import GalleryDetail from "./result-detail";
import fetcher from "@/lib/fetcher";

export const revalidate = 60;

export default async function GalleryDetailPage({ params }) {
  const { id } = await params;
  const initialData = await fetcher(`/api/v1/bbs/GALLERY/${id}`);
  return <GalleryDetail initialData={initialData} id={id} />;
}
