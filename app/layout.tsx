import ReactQueryProvider from "@/app/_utils/providers/ReactQueryProvider";
import type { Metadata } from "next";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/header/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | React Query App",
    default: "Welcome | React Query App",
  },
  description: "Aplication using React Query to get Posts from an API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <ReactQueryProvider>
          <div className="flex-1 px-8 py-12 grid">
            <main className="max-w-7xl mx-auto w-full">{children}</main>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
