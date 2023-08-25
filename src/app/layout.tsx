import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Tailwind Protfolio",
  description: "Created by Prasanth M upwork freelancer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200">
        <div className="flex flex-col h-screen min-w-0">
          <TopNav />
          <div className="flex flex-row">
            <SideNav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
