import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// HTTP 에러 상수
const HTTP_ERRORS = {
  400: { message: "잘못된 요청입니다", code: "BAD_REQUEST" },
  401: { message: "인증이 필요합니다", code: "AUTH_REQUIRED" },
  403: { message: "접근 권한이 없습니다", code: "FORBIDDEN" },
  404: { message: "요청한 리소스를 찾을 수 없습니다", code: "NOT_FOUND" },
  500: { message: "서버 내부 오류가 발생했습니다", code: "SERVER_ERROR" },
};

// HTTP 메서드 상수
const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

// 기본 요청 옵션
const DEFAULT_OPTIONS = {
  method: HTTP_METHODS.GET,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
};

// 토큰 관련 설정
const TOKEN_CONFIG = {
  COOKIE_NAME: "access_token",
  REFRESH_ENDPOINT: "/api/v1/auth/refresh",
  EXPIRES_IN: 3600,
  COOKIE_OPTIONS: {
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  },
};

// 진행 중인 토큰 새로고침 요청을 추적하기 위한 Promise
let refreshTokenPromise = null;

/**
 * 액세스 토큰을 쿠키에서 가져옵니다.
 * @returns {string|null} 액세스 토큰 또는 null
 */
export const getAccessToken = () => {
  if (typeof window === "undefined") return null;
  return Cookies.get(TOKEN_CONFIG.COOKIE_NAME);
};

/**
 * 액세스 토큰을 쿠키에 저장합니다.
 * @param {string} token 액세스 토큰
 * @param {number} expiresIn 만료 시간(초)
 */
export const setAccessToken = (token, expiresIn = TOKEN_CONFIG.EXPIRES_IN) => {
  if (typeof window === "undefined") return;

  Cookies.set(TOKEN_CONFIG.COOKIE_NAME, token, {
    ...TOKEN_CONFIG.COOKIE_OPTIONS,
    expires: expiresIn / (60 * 60 * 24),
  });
};

/**
 * 액세스 토큰을 삭제합니다 (로그아웃 시 사용).
 */
export const removeAccessToken = () => {
  if (typeof window === "undefined") return;
  Cookies.remove(TOKEN_CONFIG.COOKIE_NAME);
};

/**
 * API 에러 객체를 생성합니다.
 * @param {number} status HTTP 상태 코드
 * @param {boolean} isServer 서버 사이드 여부
 * @returns {Error} API 에러 객체
 */
const createApiError = (status, isServer = false) => {
  const { message, code } = HTTP_ERRORS[status] || {
    message: `API 요청 중 오류가 발생했습니다: ${status}`,
    code: "API_ERROR",
  };

  const error = new Error(message);
  error.status = status;
  error.code = code;

  if (isServer) {
    error.isServer = true;
    error.redirectUrl = `/login?reason=${code.toLowerCase()}`;
  }

  return error;
};

/**
 * 요청 본문을 직렬화합니다.
 * @param {any} body 요청 본문
 * @returns {string|FormData} 직렬화된 본문
 */
const serializeBody = (body) => {
  if (body instanceof FormData) {
    return body;
  }
  if (body !== null && typeof body !== "undefined") {
    return JSON.stringify(body);
  }
  return null;
};

/**
 * 타임아웃이 있는 Promise를 생성합니다.
 * @param {Function} promiseFn Promise를 생성하는 함수
 * @param {number} timeout 타임아웃 시간(ms)
 * @returns {Object} Promise와 cleanup 함수를 포함하는 객체
 */
const withTimeout = (promiseFn, timeout) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  return {
    promise: promiseFn(controller.signal),
    cleanup: () => clearTimeout(timeoutId),
  };
};

/**
 * API URL을 생성합니다.
 * @param {string} url API 경로
 * @param {boolean} isServer 서버 사이드 여부
 * @returns {string} 전체 API URL
 */
const getApiUrl = (url, isServer) => {
  if (url.startsWith("http")) return url;

  const base = isServer ? API_BASE_URL : "";
  const path = url.startsWith("/") ? url : `/${url}`;
  return `${base}${path}`;
};

/**
 * 리프레시 토큰을 사용하여 새 액세스 토큰을 요청합니다.
 * @returns {Promise<string>} 새 액세스 토큰
 */
export const refreshAccessToken = async () => {
  try {
    if (refreshTokenPromise) {
      return await refreshTokenPromise;
    }

    refreshTokenPromise = (async () => {
      const isServer = typeof window === "undefined";
      const refreshUrl = getApiUrl(TOKEN_CONFIG.REFRESH_ENDPOINT, isServer);

      const response = await fetch(refreshUrl, {
        method: HTTP_METHODS.POST,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw createApiError(response.status, isServer);
      }

      const data = await response.json();

      if (data.accessToken) {
        setAccessToken(
          data.accessToken,
          data.expiresIn || TOKEN_CONFIG.EXPIRES_IN
        );
        return data.accessToken;
      }

      throw new Error("새 액세스 토큰을 받지 못했습니다");
    })();

    const result = await refreshTokenPromise;
    refreshTokenPromise = null;
    return result;
  } catch (error) {
    console.error("액세스 토큰 갱신 오류:", error);

    try {
      removeAccessToken();

      const authError = createApiError(401, typeof window === "undefined");
      throw authError;
    } finally {
      refreshTokenPromise = null;
    }
  }
};

/**
 * 타임아웃이 있는 fetch 요청을 실행합니다.
 * @param {string} url 요청 URL
 * @param {Object} options fetch 옵션
 * @param {Object} headers 요청 헤더
 * @param {number} timeout 타임아웃 시간(ms)
 * @returns {Promise<Response>} fetch 응답
 */
const fetchWithTimeout = async (url, options, headers, timeout) => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return fetch(url, {
      ...options,
      headers,
    });
  }

  const { promise, cleanup } = withTimeout(
    (signal) =>
      fetch(url, {
        ...options,
        headers,
        credentials: "include",
        signal,
      }),
    timeout
  );

  try {
    return await promise;
  } finally {
    cleanup();
  }
};

/**
 * 서버사이드와 클라이언트사이드에서 공통으로 사용할 수 있는 fetch 함수
 * @param {string} url 요청할 API URL
 * @param {Object} options fetch 옵션
 * @returns {Promise<any>} API 응답 데이터
 */
export const fetcher = async (url, options = {}) => {
  const isServer = typeof window === "undefined";
  const baseUrl = getApiUrl(url, isServer);
  const fullUrl = isServer ? appendIncreaseViewParam(baseUrl) : baseUrl;
  // 옵션 병합
  const mergedOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
    headers: {
      ...DEFAULT_OPTIONS.headers,
      ...options?.headers,
    },
  };

  // POST, PUT, PATCH 요청의 경우 body 직렬화
  if (["POST", "PUT", "PATCH"].includes(mergedOptions.method)) {
    if (typeof options.body !== "undefined") {
      const serialized = serializeBody(options.body);
      if (
        serialized === null &&
        mergedOptions.headers["Content-Type"] === "application/json"
      ) {
        delete mergedOptions.body;
      } else if (serialized !== null) {
        mergedOptions.body = serialized;
      } else {
        delete mergedOptions.body;
      }
    } else {
      delete mergedOptions.body;
    }
  }

  // 서버 사이드 처리
  if (isServer) {
    console.log(`[Server] Fetching: ${fullUrl}`);
    try {
      const response = await fetch(fullUrl, mergedOptions);

      if (!response.ok) {
        const error = createApiError(response.status, isServer);
        console.error(`[Server] Fetch error: ${error.message}`);
        throw error;
      }

      const json = await response.json();
      if (json.code === "SUC001") {
        return json.data;
      }
      if (!json.response) {
        const error = new Error(
          json.message || "알 수 없는 에러가 발생했습니다"
        );
        error.code = json.code || "UNKNOWN_ERROR";
        throw error;
      }
      return json.data;
    } catch (error) {
      console.error(`[Server] Fetch error:`, error);
      throw error;
    }
  }

  // 클라이언트 사이드 처리
  const headers = {
    ...mergedOptions.headers,
  };

  const accessToken = getAccessToken();
  if (accessToken && !headers["Authorization"]) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  try {
    let response = await fetchWithTimeout(
      fullUrl,
      mergedOptions,
      headers,
      mergedOptions.timeout
    );

    if (response.status === 401) {
      try {
        const newToken = await refreshAccessToken();
        headers["Authorization"] = `Bearer ${newToken}`;
        response = await fetchWithTimeout(
          fullUrl,
          mergedOptions,
          headers,
          mergedOptions.timeout
        );
      } catch (refreshError) {
        console.error("토큰 갱신 후 재요청 실패:", refreshError);
        throw refreshError;
      }
    }

    if (!response.ok) {
      throw createApiError(response.status, isServer);
    }

    const json = await response.json();

    // 성공 코드 처리 (SUC001)
    if (json.code === "SUC001") {
      return json.data || json;
    }

    // 에러 처리
    const error = new Error(json.message || "알 수 없는 에러가 발생했습니다");
    error.code = json.code || "UNKNOWN_ERROR";
    throw error;
  } catch (error) {
    if (!error.status && !error.code) {
      if (error.name === "SyntaxError") {
        error.code = "INVALID_JSON";
        error.message = "유효하지 않은 JSON 응답입니다";
      } else if (error.name === "AbortError") {
        error.code = "TIMEOUT";
        error.message = "요청 시간이 초과되었습니다";
      } else {
        error.code = "NETWORK_ERROR";
        error.message = "네트워크 연결 오류가 발생했습니다";
      }
    }

    console.error("API 요청 오류:", error);
    throw error;
  }
};
export default fetcher;

// 서버사이드에서만 increaseView 파라미터를 추가하는 함수
function appendIncreaseViewParam(url) {
  const u = new URL(
    url,
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:4100"
  );
  if (!u.searchParams.has("increaseView")) {
    u.searchParams.set("increaseView", "true");
  }
  return u.toString();
}
