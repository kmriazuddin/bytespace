"use client";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { categories, courses } from "@/lib/data";

export default function CoursesPage() {
  const [category, setCategory] = useState("Featured");
  const filtered = useMemo(
    () =>
      category === "Featured"
        ? courses
        : courses.filter(
            (course) =>
              course.category === category ||
              (category === "UI/UX Design" && course.category === "Design"),
          ),
    [category],
  );
  return (
    <>
      <div className="bg-[#0738E6] pb-16 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-size-[96px_64px]">
        <Navbar />
        <div className="mx-auto max-w-6xl px-5 pt-32 text-white lg:px-8">
          <p className="text-xs text-[#C9FF00]">Search</p>
          <h1 className="mt-2 text-5xl font-black">Find Your Next Course</h1>
        </div>
      </div>
      <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="mb-7 flex flex-wrap gap-2">
          {["Featured", ...categories].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-xs font-medium ${category === item ? "bg-[#C9FF00] text-slate-800" : "bg-slate-100 text-slate-600"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-200 p-16 text-center text-sm text-slate-500">
            No courses found in this category.
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
