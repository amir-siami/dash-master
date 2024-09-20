"use client";
import { useQuery } from "@tanstack/react-query";
// import Card from "./components/Card/Card";
import getPosts from "@/app/_utils/api/getPosts";
// import Loading from "./components/Loading/Loading";

export default function List() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getPosts(),
    queryKey: [], //Array according to Documentation
  });

  console.log("Received data", data);

  //   if (isLoading) return <Loading />;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <div className="container mx-auto">
      <h1 className="p-5 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center font-bold text-4xl">
        React Query Posts
      </h1>
      <div className="grid grid-cols-4 gap-4 p-10">
        {data?.map((post: { id: number; body: string; title: string }) => {
          return (
            <div key={"post" + post.id} title={post.title}>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
