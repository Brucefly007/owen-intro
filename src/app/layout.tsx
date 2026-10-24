import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const sans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-sc",
  display: "swap",
});

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif-sc",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-en",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description = `${profile.name}，${profile.role}。方向：${profile.intent}。作品包括 MCP 工具网关、RAG 知识库、白沟箱包智能客服与高并发采集工具。`;

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: profile.name, url: profile.githubHref }],
  keywords: [profile.name, profile.role, "RAG", "MCP", "Agent", "LangGraph"],
  openGraph: {
    title,
    description,
    type: "profile",
    locale: "zh_CN",
    url: profile.githubHref,
  },
};

export const viewport: Viewport = {
  themeColor: "#100e0c",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  url: profile.githubHref,
  sameAs: [profile.githubHref],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${sans.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
