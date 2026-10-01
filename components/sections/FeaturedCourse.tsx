"use client";

import { categories, courseCategories, courses } from "@/lib/data";
import { setSelectedCategory } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../CourseCard";

const FeaturedCourse = () => {
  const dispatch = useDispatch();
  const selected = useSelector((s: RootState) => s.ui.selectedCategory);
  const available = new Set(categories);

  const filtered =
    selected === "Featured"
      ? courses
      : courses.filter(
          (course) =>
            course.category === selected ||
            (selected === "UI/UX Design" && course.category === "Design"),
        );

  return (
    <section id="courses" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-800 sm:text-[32px]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mt-3 text-[10px] leading-5 text-slate-400 sm:text-xs">
          At ByteSpace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>
      <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-2">
        {courseCategories.map((tab) => (
          <button
            key={tab}
            onClick={() =>
              tab !== "+ More" &&
              dispatch(
                setSelectedCategory(
                  available.has(tab) ||
                    tab === "Featured" ||
                    tab === "UI/UX Design"
                    ? tab
                    : "Featured",
                ),
              )
            }
            className={`rounded-full px-3 py-1.5 text-[10px] font-medium transition ${selected === tab ? "bg-[#C9FF00] text-slate-900" : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourse;
