import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { courses } from "@/lib/data";
import Image from "next/image";
import React from "react";

const CreatorPage = () => {
  return (
    <>
      <div
        className="bg-[#0738E6] pb-16 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-size-[96px_64px]"
      >
        <Navbar />
        <div className="mx-auto max-w-6xl px-5 pt-32 text-white lg:px-8">
          <p className="text-xs text-brand-lime">PurePearl Studio Creator</p>
          <div className="mt-5 flex items-center gap-5">
            <Image
              src="/images/creator-woman.png"
              alt="PurePearl Studio"
              width={96}
              height={96}
              className="h-24 w-24 rounded-3xl object-cover"
            />
            <div>
              <h1 className="text-4xl font-black">PurePearl Studio</h1>
              <p className="mt-2 text-sm text-white/65">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <p className="max-w-2xl text-sm leading-7 text-slate-500">
          Welcome to the creative world of PurePearl Studio. Here, youll
          discover the passion, expertise, and inspiration behind a growing
          creative portfolio.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CreatorPage;
