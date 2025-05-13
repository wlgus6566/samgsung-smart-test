# 대한요가회 (KYA) 웹사이트

대한요가회(Korean Yoga Association) 웹사이트 프로젝트입니다. Next.js 15 (App Router)를 기반으로 개발된 모던 웹 애플리케이션입니다.

## 프로젝트 소개

이 프로젝트는 대한요가회의 공식 웹사이트로, 요가 소식, 대회 정보, 협회 소개 등 다양한 정보를 제공하고 회원들을 위한 서비스를 제공합니다.

## 기술 스택

- **프레임워크**: [Next.js 15](https://nextjs.org/) (App Router)
- **언어**: JavaScript
- **스타일링**: [Tailwind CSS](https://tailwindcss.com/) 4.x
- **데이터 페칭**: [SWR](https://swr.vercel.app/)
- **UI 컴포넌트**:
  - shadcn 컴포넌트
  - 커스텀 컴포넌트
- **폼 관리**: [React Hook Form](https://react-hook-form.com/)
- **유효성 검증**: [Zod](https://github.com/colinhacks/zod)
- **에디터**: [CKEditor 5](https://ckeditor.com/ckeditor-5/)

## 주요 기능

- **협회 소개**: 회장 인사말, 협회 연혁, 조직도 등 협회 관련 정보 제공
- **요가 소식**: 공지사항, 뉴스, 갤러리, 매거진 등 요가 관련 소식 제공
- **대회 정보**: 국내/국제 대회 일정 및 결과 조회
- **행사 안내**: 세계 요가의 날, 세계 명상의 날, 요가 말라 프로젝트 등 행사 정보
- **회원 서비스**: 회원 인증, 강사/수련자/심판/선수 정보 관리

## 프로젝트 구조

```
/src
  /app              # 페이지 컴포넌트 (App Router)
    /(app)          # 메인 앱 레이아웃
      /conference   # 대회 관련 페이지
      /event        # 행사 관련 페이지
      /kya          # 협회 소개 페이지
      /member       # 회원 관련 페이지
      /yoga         # 요가 소식 페이지
    /(auth)         # 인증 관련 페이지
  /components       # 재사용 가능한 컴포넌트
    /dialog         # 다이얼로그 컴포넌트
    /editor         # 에디터 관련 컴포넌트
    /form           # 폼 관련 컴포넌트
    /layout         # 레이아웃 관련 컴포넌트
    /post           # 게시물 관련 컴포넌트
    /ui             # UI 컴포넌트
  /hooks            # 커스텀 훅
  /lib              # 유틸리티 라이브러리
  /store            # 상태 관리 (Zustand)
  /styles           # 글로벌 스타일
  /utils            # 유틸리티 함수
/public             # 정적 파일 (이미지, 폰트 등)
/ckeditor5          # CKEditor 5 커스텀 빌드
```

## 시작하기

### 개발 환경 설정

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (Turbopack 사용)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

```bash
npm run build
# 또는
vercel deploy
```

## API 문서

API 문서는 별도의 백엔드 프로젝트에서 관리됩니다.

## 라이센스

이 프로젝트는 비공개 라이센스로 제공됩니다. 모든 권리는 대한요가회에 있습니다.
