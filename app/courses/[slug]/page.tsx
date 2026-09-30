import Image from "next/image";
import { notFound } from "next/navigation";
import { Share2, Play, Layers3, UsersRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { courses, getCourse } from "@/lib/data";
import { Button } from "@/components/ui/button";
import CourseDetailsTabs from "@/components/CourseDetails";
import Link from "next/link";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const isDigital = course.slug === "build-digital-asset";
  return (
    <>
      <section className="relative overflow-hidden bg-[#0738E6] bg-blue-grid bg-[size:52px_52px] pb-14 text-white bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-size-[96px_64px]">
        <Navbar />
        <div className="mx-auto max-w-6xl px-5 pt-28 lg:px-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <h1 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                {course.title}
              </h1>
              <p className="mt-2 text-sm font-semibold">
                {isDigital
                  ? "Unlock the Power of Digital Creation with Expert Guidance"
                  : course.description}
              </p>
              <p className="mt-4 text-xs text-white/75">
                by <span className="text-[#C9FF00]">{course.creator}</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>
                  <Layers3 className="mr-2 h-3 w-3" />
                  {course.level}
                </Badge>
                <Badge>
                  ★ &nbsp;{course.rating} (
                  {isDigital ? "172 reviews" : `${course.comments} reviews`})
                </Badge>
                <Badge>
                  <UsersRound className="mr-2 h-3 w-3" />
                  {course.students} Students
                </Badge>
              </div>
            </div>
            <Button
              variant="default"
              className="hidden shrink-0 sm:inline-flex"
            >
              <Share2 className="mr-2 h-3.5 w-3.5" />
              Share
            </Button>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.55fr_.8fr]">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={isDigital ? "/images/course-hero.jpg" : course.image}
                alt={course.title}
                width={1200}
                height={720}
                className="aspect-[1.55] w-full object-cover"
              />
              {isDigital && (
                <button
                  aria-label="Preview course"
                  className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#0738E6] shadow-xl"
                >
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </button>
              )}
            </div>
            <aside className="rounded-2xl bg-white p-6 text-slate-800 shadow-2xl lg:mt-0">
              <h2 className="text-lg font-black">
                {course.lessons} Lessons ({course.duration})
              </h2>
              <div className="mt-5 space-y-4">
                {course.lessonPreview.map((lesson) => (
                  <div key={lesson.number} className="flex gap-3 text-xs">
                    <span className="font-semibold">{lesson.number}</span>
                    <span className="flex-1 font-medium">{lesson.title}</span>
                    <span className="text-brand-blue">{lesson.duration}</span>
                  </div>
                ))}
                <p className="text-xs text-slate-400">
                  {course.moreLessonsLabel}
                </p>
              </div>
              <p className="mt-6 text-xs leading-5 text-slate-500">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>
              <p className="mt-3 text-3xl font-black text-[#0738E6]">
                {course.price}
                <span className="text-xs font-normal text-slate-500">
                  /lifetime
                </span>
              </p>
              <Button className="mt-4 w-full bg-[#C9FF00] text-slate-800 hover:bg-[#C9FF00]/90 cursor-pointer">
                Enroll Now
              </Button>
              <h3 className="mt-6 text-sm font-black">This course include</h3>
              <div className="mt-3 space-y-2.5 text-xs text-slate-600">
                {course.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[#0738E6]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={course.creatorImage}
                    alt={course.creator}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-semibold">{course.creator}</p>
                    <p className="text-[10px] text-slate-400">
                      {course.creatorRole}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>
                <Button variant="outline" className="mt-3 w-full">
                  <Link href="/creators/purepearl-studio">
                    See Full Profile
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <div className="lg:max-w-[700px]">
          <CourseDetailsTabs course={course} />
        </div>
      </main>
      <Footer />
    </>
  );
}
