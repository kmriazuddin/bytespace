import { Course } from "@/lib/data";
import { MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[1.48] overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-lg bg-white/90 px-2 py-1 text-[8px] font-medium backdrop-blur">
          <span>{course.lessons} Lessons</span>
          <span>{course.duration}</span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-2.5 w-2.5" />
            {course.comments}
          </span>
        </div>
      </div>
      <div className="px-1.5 pb-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-sm font-bold text-brand-ink">
            {course.title}
          </h3>
          <span className="flex shrink-0 items-center gap-0.5 text-xs text-slate-500">
            <Star className="h-3 w-3 fill-current" />
            {course.rating}
          </span>
        </div>
        <p className="mt-1 text-[10px] text-slate-500">by {course.creator}</p>
        <div className="mt-2 flex items-center gap-2 text-[9px] text-slate-500">
          <span className="rounded bg-slate-100 px-2 py-1">{course.level}</span>
          <span>
            {course.students}{" "}
            {course.students === "199" ? "Students" : "Students"}
          </span>
        </div>
        <div className="mt-2 text-sm font-bold text-brand-blue">
          {course.price}
          <span className="ml-1 text-[9px] font-normal text-slate-400">
            /lifetime
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
