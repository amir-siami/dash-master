import Image from "next/image";
import bg from "@/public/bg.jpg";
const HomePage = () => {
  return (
    <section className="mt-24">
      <Image
        fill
        src={bg}
        quality={80}
        className="object-cover blur-sm object-bottom"
        alt="machine type"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-200 mb-10 tracking-tight font-normal">
          Welcome to Dashboard Master.
        </h1>
        <a
          href="/dashboard"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore our blogs
        </a>
      </div>
    </section>
  );
};

export default HomePage;
