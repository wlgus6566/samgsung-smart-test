"use client";

import Contents from "@/components/layout/contents";
import PostHeader from "@/components/post/post-header";
import PostContent from "@/components/post/post-content";
import PostNavigation from "@/components/post/post-navigation";
import PostState from "@/components/post/post-state";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

export default function ConferenceInternationalDetail({ id, initialData }) {
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const listUrl = query
    ? `/conference/international?${query}`
    : `/conference/international`;
  const {
    data: international,
    error,
    isLoading,
  } = useSWR(`/api/v1/competition/international/${id}`, {
    fallbackData: initialData,
    dedupingInterval: 1000,
  });

  return (
    <Contents title="국제" backgroundImage="/images/conference/kv_sports.png">
      <PostState
        isLoading={isLoading}
        error={error}
        data={international}
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
                international.prev
                  ? {
                      title: international.prev.title,
                      url: `/conference/international/${international.prev.competitionSeq}`,
                    }
                  : null
              }
              nextPost={
                international.next
                  ? {
                      title: international.next.title,
                      url: `/conference/international/${international.next.competitionSeq}`,
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
