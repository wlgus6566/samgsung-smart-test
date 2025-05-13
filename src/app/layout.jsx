import { Toaster } from "@/components/ui/sonner";
import { SWRProviders } from "./providers";
import "@/styles/globals.css";
import AlertDialogBase from "@/components/dialog/alert";
import localFont from "next/font/local";

const SpoqaHanSansNeo = localFont({
  src: [
    {
      path: "../fonts/SpoqaHanSansNeo-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
const Montserrat = localFont({
  src: "../fonts/Montserrat-Bold.ttf",
  display: "swap",
  variable: "--font-mont",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata = {
  title: "대한요가회 - Korea Yoga Association",
  description: "대한요가회 공식 웹사이트",
  openGraph: {
    title: "대한요가회 - Korea Yoga Association",
    description: "전통과 현대를 잇는 요가 전문 기관, 대한요가회입니다.",
    url: `${process.env.NEXT_PUBLIC_PC_DOMAIN}`,
    siteName: "대한요가회",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_PC_DOMAIN}/images/meta.jpg`,
        width: 1200,
        height: 630,
        alt: "대한요가회 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${SpoqaHanSansNeo.variable} ${Montserrat.variable}`}
    >
      <body>
        <SWRProviders>
          {children}
          <Toaster />
          <AlertDialogBase />
        </SWRProviders>
      </body>
    </html>
  );
}
