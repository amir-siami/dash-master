import Link from "next/link";

function page() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        You don&apos;t have access to this page :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default page;
