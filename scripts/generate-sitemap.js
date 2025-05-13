/**
 * Next.js 앱에서 sitemap.xml을 생성하는 스크립트
 * 빌드 시점에 실행됩니다.
 */

const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

// 사이트 기본 URL 설정
const WEBSITE_URL = "https://kyoga.or.kr";

// 제외할 경로 목록
const EXCLUDED_PATHS = [
  "/_app",
  "/_document",
  "/_error",
  "/404",
  "/500",
  "/api",
  "/(.)",
  "/error",
  "/dialog",
  "/(auth)",
];

// (app) 디렉토리에서 모든 페이지 라우트를 찾는 함수
function getAllRoutes(directory) {
  let routes = [];
  const baseDir = path.join(process.cwd(), "src", "app");
  const rootDir = path.join(baseDir, directory);

  function scanDirectory(currentPath, urlPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(currentPath, entry.name);

      // 디렉토리인 경우 재귀적으로 스캔
      if (entry.isDirectory()) {
        // 괄호로 시작하는 경우는 그룹이므로 URL에 포함하지 않음
        const isGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
        const nextUrlPath = isGroup ? urlPath : `${urlPath}/${entry.name}`;

        scanDirectory(entryPath, nextUrlPath);
      }
      // 파일인 경우 page.js 파일만 처리
      else if (
        entry.name === "page.js" ||
        entry.name === "page.jsx" ||
        entry.name === "page.tsx"
      ) {
        // URL 경로 생성 및 정리
        let route = urlPath
          .replace("//", "/") // 중복 슬래시 제거
          .replace(/\/$/, ""); // 끝에 슬래시 제거

        // 루트 경로 처리
        if (route === "") {
          route = "/";
        }

        // 제외 경로 필터링
        const shouldExclude = EXCLUDED_PATHS.some((excludedPath) =>
          route.includes(excludedPath)
        );

        if (!shouldExclude) {
          routes.push(route);
        }
      }
    }
  }

  scanDirectory(rootDir, "");
  return routes;
}

// 경로 목록에서 sitemap XML 생성
async function generateSitemap() {
  // (app) 디렉토리에서 모든 경로 가져오기
  const appRoutes = getAllRoutes("(app)");

  // 홈 경로가 없는 경우 추가
  if (!appRoutes.includes("/")) {
    appRoutes.unshift("/");
  }

  // 경로 정렬
  const sortedRoutes = [...new Set(appRoutes)].sort();

  // 현재 날짜 설정
  const date = new Date().toISOString();

  // sitemap XML 생성
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sortedRoutes
        .map((route) => {
          return `
            <url>
              <loc>${WEBSITE_URL}${route}</loc>
              <lastmod>${date}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${route === "/" ? "1.0" : "0.8"}</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  // 코드 포멧팅
  const formattedSitemap = await prettier.format(sitemap, {
    parser: "html",
  });

  // public 디렉토리에 sitemap.xml 파일 저장
  fs.writeFileSync(
    path.join(process.cwd(), "public", "sitemap.xml"),
    formattedSitemap
  );

  console.log("✅ sitemap.xml이 성공적으로 생성되었습니다!");
}

// 스크립트 실행
generateSitemap().catch((err) => {
  console.error("sitemap.xml 생성 중 오류가 발생했습니다:", err);
  process.exit(1);
});
