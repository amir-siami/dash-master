"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getData } from "@/app/_utils/api/getPosts";

import Spinner from "@/app/_components/spinner/Spinner";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getData(page, limit),
    queryKey: ["blogs", page],
  });

  console.log("Received data", data);

  if (isLoading) return <Spinner />;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <div className="container mx-auto">
      <h1 className="p-5 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center font-bold text-4xl">
        React Query Posts
      </h1>
      <div className="grid grid-cols-3 gap-4 p-10">
        {data?.map((post: { id: number; body: string; title: string }) => (
          <BlogCard
            key={"post" + post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-6">
        <span>Current Page: {page}</span>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
