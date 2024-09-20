import ReactQueryProvider from "@/app/_utils/providers/ReactQueryProvider";
import type { Metadata } from "next";

import Navigation from "@/app/_components/navigation/Navigation";
import Logo from "@/app/_components/logo/Logo";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  title: "React Query App Posts",
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
        <header>
          <Logo />
          <Navigation />
        </header>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
