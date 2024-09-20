const Page = () => {
  return (
    <section className="mt-24">
      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-200 mb-10 tracking-tight font-normal">
          Welcome to Dashboard Master.
        </h1>
        <a
          href="/dashboard/blog"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore our blogs
        </a>
      </div>
    </section>
  );
};

export default Page;
