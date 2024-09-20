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
          Welcome to My Blog!
        </h1>
        <p className="text-xl text-primary-900 tracking-wide mb-10 font-normal w-[40rem] mx-auto">
          Discover insights, tips, and stories about [your interests]. Whether
          you&apos;re here to learn, get inspired, or just explore new ideas,
          you&apos;re in the right place. Dive into the latest posts, explore
          categories that pique your curiosity, and feel free to leave a comment
          or connect with me.
        </p>
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
