import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "코인 모의 투자",
  description: "코인 모의 투자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
