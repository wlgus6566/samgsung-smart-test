"use client";

import Contents from "@/components/layout/contents";
import PostHeader from "@/components/post/post-header";
import PostContent from "@/components/post/post-content";
import PostNavigation from "@/components/post/post-navigation";
import PostState from "@/components/post/post-state";
import useSWR from "swr";
export default function NoticeResultDetail({ id, initialData }) {
  const {
    data: result,
    error,
    isLoading,
  } = useSWR(`/api/v1/bbs/NEWS/${id}`, {
    fallbackData: initialData,
    dedupingInterval: 1000,
  });

  return (
    <Contents title="KYA 뉴스" backgroundImage="/images/event/event_kv_bg.jpg">
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
              {data.contents}
            </PostContent>

            <PostNavigation
              prevPost={
                result.prev
                  ? {
                      title: result.prev.title,
                      url: `/yoga/news/${result.prev.boardSeq}`,
                    }
                  : null
              }
              nextPost={
                result.next
                  ? {
                      title: result.next.title,
                      url: `/yoga/news/${result.prev.boardSeq}`,
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
