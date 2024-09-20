import BlogList from "@/app/_components/blog/BlogList";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

const Page = () => {
  return (
    <div>
      <BlogList />
    </div>
  );
};

export default Page;
