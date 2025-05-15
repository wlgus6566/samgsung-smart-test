import HomeContents from "./home-contents";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export const revalidate = 60;

const Home = async () => {
  // const initialData = await fetcher("/api/v1/main");
  // console.log(initialData);

  return (
    <Suspense fallback={<DetailLoading />}>
      <HomeContents />
    </Suspense>
  );
};

export default Home;
