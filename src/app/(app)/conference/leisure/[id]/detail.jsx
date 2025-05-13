"use client";

import Contents from "@/components/layout/contents";
import PostHeader from "@/components/post/post-header";
import PostContent from "@/components/post/post-content";
import PostNavigation from "@/components/post/post-navigation";
import PostState from "@/components/post/post-state";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

export default function ConferenceLeisureDetail({ id, initialData }) {
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const listUrl = query
    ? `/conference/leisure?${query}`
    : `/conference/leisure`;
  const {
    data: leisure,
    error,
    isLoading,
  } = useSWR(`/api/v1/competition/life/${id}`, {
    fallbackData: initialData,
    dedupingInterval: 1000,
  });

  return (
    <Contents
      title="생활체육"
      backgroundImage="/images/conference/kv_sports.png"
    >
      <PostState
        isLoading={isLoading}
        error={error}
        data={leisure}
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
                leisure.prev
                  ? {
                      title: leisure.prev.title,
                      url: `/conference/leisure/${leisure.prev.competitionSeq}`,
                    }
                  : null
              }
              nextPost={
                leisure.next
                  ? {
                      title: leisure.next.title,
                      url: `/conference/leisure/${leisure.next.competitionSeq}`,
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
