import Blog from "@/app/_components/blog/Blog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

const Page = () => {
  return (
    <div>
      <Blog />
    </div>
  );
};

export default Page;
