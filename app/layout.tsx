import ReactQueryProvider from "@/app/_utils/providers/ReactQueryProvider";
import type { Metadata } from "next";

import { Josefin_Sans } from "next/font/google";

import Header from "./_components/header/Header";
import getUserRole from "./_utils/api/getUserRole";

import "@/app/_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | React Query App",
    default: "Welcome | React Query App",
  },
  description: "Aplication using React Query to get Posts from an API",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserRole();

  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header userRole={user.role} />
        <ReactQueryProvider>
          <div className="flex-1 px-8 py-12 grid">
            <main className="max-w-7xl mx-auto w-full">{children}</main>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
