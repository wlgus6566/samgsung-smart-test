"use client";

import Contents from "@/components/layout/contents";
import PostHeader from "@/components/post/post-header";
import PostContent from "@/components/post/post-content";
import PostNavigation from "@/components/post/post-navigation";
import PostState from "@/components/post/post-state";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

export default function ConferenceDomesticDetail({ id, initialData }) {
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const listUrl = query
    ? `/conference/domestic?${query}`
    : `/conference/domestic`;
  const {
    data: domestic,
    error,
    isLoading,
  } = useSWR(`/api/v1/competition/domestic/${id}`, {
    fallbackData: initialData,
    dedupingInterval: 1000,
  });

  return (
    <Contents title="국내" backgroundImage="/images/conference/kv_sports.png">
      <PostState
        isLoading={isLoading}
        error={error}
        data={domestic}
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
              listUrl={listUrl}
              prevPost={
                domestic.prev
                  ? {
                      title: domestic.prev.title,
                      url: `/conference/domestic/${domestic.prev.competitionSeq}`,
                    }
                  : null
              }
              nextPost={
                domestic.next
                  ? {
                      title: domestic.next.title,
                      url: `/conference/domestic/${domestic.next.competitionSeq}`,
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
