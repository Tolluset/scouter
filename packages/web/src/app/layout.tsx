import type { Metadata } from "next";
import Script from "next/script";
import LocalFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "토까우터 | 코인 모의 투자",
  description: "코인 모의 투자",
};

const pretendard = LocalFont({
  src: "../statics/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className={`h-full ${pretendard.className}`}>
        <NextTopLoader showSpinner={false} />
        {children}
        <Toaster />
        <Analytics />
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-L5HP2YTK02"
      />
      <Script id="g-tag">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L5HP2YTK02');`}
      </Script>
    </html>
  );
}
