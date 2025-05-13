/**
 * URL 파라미터를 관리하는 유틸리티 함수들
 */

/**
 * URL 파라미터를 업데이트하고 라우터 이동을 처리합니다.
 * @param {Object} router - Next.js 라우터 객체
 * @param {Object} params - 설정할 파라미터 객체 (key-value 형태)
 * @param {Array} excludeEmptyParams - 비어있을 경우 URL에서 제외할 파라미터 키 목록 (기본값: 모든 키)
 * @param {Array} excludeDefaultParams - 기본값인 경우 URL에서 제외할 파라미터 키와 기본값 쌍 [{key, defaultValue}]
 * @param {string} path - 이동할 경로 (기본값: 현재 경로)
 */
export function updateUrlParams(
  router,
  params,
  excludeEmptyParams = Object.keys(params),
  excludeDefaultParams = [],
  path = null
) {
  const searchParams = new URLSearchParams();

  // 파라미터 추가
  Object.entries(params).forEach(([key, value]) => {
    // 빈 값인 경우 제외
    if (value === "" && excludeEmptyParams.includes(key)) return;

    // 기본값인 경우 제외
    const isDefaultValue = excludeDefaultParams.some(
      (item) => item.key === key && item.defaultValue === value
    );
    if (isDefaultValue) return;

    searchParams.set(key, value.toString());
  });

  // URL 생성 및 이동
  const urlPath = path || window.location.pathname;
  const queryString = searchParams.toString();
  const newUrl = `${urlPath}${queryString ? "?" + queryString : ""}`;

  router.push(newUrl, { scroll: false });
}

/**
 * 검색 파라미터를 업데이트하는 함수
 * @param {Object} router - Next.js 라우터 객체
 * @param {string} keyword - 검색어
 * @param {string} keywordParam - 검색어 파라미터 이름 (기본값: "searchWord")
 * @param {string} path - 이동할 경로 (기본값: 현재 경로)
 */
export function updateSearchParam(
  router,
  keyword,
  keywordParam = "searchWord",
  path = null
) {
  updateUrlParams(
    router,
    { [keywordParam]: keyword, currentPage: "1" },
    [keywordParam],
    [{ key: "currentPage", defaultValue: "1" }],
    path
  );
}

/**
 * 페이지 파라미터를 업데이트하는 함수
 * @param {Object} router - Next.js 라우터 객체
 * @param {number} page - 페이지 번호
 * @param {Object} currentParams - 현재 유지할 다른 파라미터들
 * @param {string} pageParam - 페이지 파라미터 이름 (기본값: "currentPage")
 * @param {string} path - 이동할 경로 (기본값: 현재 경로)
 */
export function updatePageParam(
  router,
  page,
  currentParams = {},
  pageParam = "currentPage",
  path = null
) {
  updateUrlParams(
    router,
    { ...currentParams, [pageParam]: page },
    Object.keys(currentParams).concat([pageParam]),
    [{ key: pageParam, defaultValue: 1 }],
    path
  );
}
