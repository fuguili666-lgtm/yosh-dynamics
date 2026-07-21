import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "于适动态站",
  description: "公开信息整理、时间线与行程聚合。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
