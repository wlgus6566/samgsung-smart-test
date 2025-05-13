"use client";

import Contents from "@/components/layout/contents";
import PostHeader from "@/components/post/post-header";
import PostContent from "@/components/post/post-content";
import PostNavigation from "@/components/post/post-navigation";
import PostState from "@/components/post/post-state";
import useSWR from "swr";
export default function GalleryDetail({ id, initialData }) {
  const {
    data: result,
    error,
    isLoading,
  } = useSWR(`/api/v1/bbs/GALLERY/${id}`, {
    fallbackData: initialData,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    dedupingInterval: 1000,
  });
  return (
    <Contents title="갤러리" backgroundImage="/images/yoga/yoga_kv_bg.jpg">
      <PostState
        isLoading={isLoading}
        error={error}
        data={result}
        colSpan={3}
        renderData={(data) => (
          <>
            <PostHeader
              title={data.title}
              registerName={data.registerName}
              registrationDt={data.registrationDt}
              inquiryCount={data.inquiryCount}
            />

            <PostContent download={true} fileList={data.fileList}>
              {/* Todo : 에디터 영역 확인 필요 */}
              {data.contents}
            </PostContent>

            <PostNavigation
              prevPost={
                result.prev
                  ? {
                      title: result.prev.title,
                      url: `/yoga/gallery/${result.prev.boardSeq}`,
                    }
                  : null
              }
              nextPost={
                result.next
                  ? {
                      title: result.next.title,
                      url: `/yoga/gallery/${result.next.boardSeq}`,
                    }
                  : null
              }
            />
          </>
        )}
      />
    </Contents>
  );
}
