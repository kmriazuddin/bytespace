"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { Star } from "lucide-react";
import type { Course } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ratingCounts: Record<5 | 4 | 3 | 2 | 1, number> = {
  5: 720,
  4: 120,
  3: 21,
  2: 12,
  1: 16,
};

type Tab = "about" | "lesson" | "reviews";
const DEFAULT_TAB: Tab = "about";

function getValidTab(): Tab {
  if (typeof window === "undefined") {
    return DEFAULT_TAB;
  }
  const hash = window.location.hash.replace("#", "");

  if (hash === "about" || hash === "lesson" || hash === "reviews") {
    return hash;
  }
  return DEFAULT_TAB;
}

function subscribeToHash(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);

  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}

export default function CourseDetailsTabs({ course }: { course: Course }) {
  const tab = useSyncExternalStore(
    subscribeToHash,
    getValidTab,
    () => DEFAULT_TAB,
  );

  const [ratingFilter, setRatingFilter] = useState<"all" | 5 | 4 | 3 | 2 | 1>(
    "all",
  );

  const selectTab = (next: Tab) => {
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}#${next}`,
    );
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const reviews = useMemo(
    () =>
      ratingFilter === "all"
        ? course.reviews
        : course.reviews.filter((review) => review.rating === ratingFilter),
    [course.reviews, ratingFilter],
  );

  return (
    <section className="mt-10">
      <Tabs value={tab} onValueChange={(value) => selectTab(value as Tab)}>
        <TabsList className="border-b border-slate-200 pb-3">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="lesson">Lesson</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="pt-8">
          <h2 className="text-lg font-black">This course include</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {course.includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <span className="text-[#0738E6]">✓</span>
                {item}
              </div>
            ))}
          </div>
          <h2 className="mt-10 text-lg font-black">Description</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            {course.description}
          </p>
          {course.slug === "build-digital-asset" && (
            <>
              <p className="mt-7 text-sm leading-7 text-slate-500">
                In the initial modules, youll establish a solid foundation by
                immersing yourself in the foundational concepts that form the
                backbone of digital asset creation. Understand the fundamental
                elements that constitute compelling digital content and gain
                proficiency in leveraging these elements to communicate
                effectively in the digital realm.
              </p>
              <p className="mt-7 text-sm leading-7 text-slate-500">
                As you progress through the course, youll ascend to higher
                levels of expertise, delving into the nuances of design
                principles that drive impactful creations. Uncover the secrets
                behind effective visual communication, exploring color theory,
                typography, and layout strategies that elevate your digital
                assets to new heights. Engage in hands-on exercises that
                reinforce your understanding.
              </p>
            </>
          )}
        </TabsContent>
        <TabsContent value="lesson" className="pt-8">
          <h2 className="text-lg font-black">Explore the Modules</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Immerse yourself in the course content as we break down each module
            into comprehensive lessons, providing practical insights and
            hands-on experiences.
          </p>
          <div className="mt-7 space-y-3">
            {course.modules.map((module, index) => (
              <details
                key={module.title}
                className="group rounded-xl border border-slate-200 bg-white"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-semibold">
                  {module.title}
                  <span className="text-slate-400 transition group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-4 pb-4 pt-3 text-xs leading-6 text-slate-500">
                  {module.description}
                </div>
              </details>
            ))}
          </div>
          <h2 className="mt-10 text-lg font-black">Lesson Content</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Engage with each lesson through captivating video content, detailed
            textual explanations, and interactive elements. Download resources,
            complete assignments, and test your understanding with quizzes.
          </p>
          <div className="mt-7 rounded-xl border border-slate-200 p-5">
            <div className="flex justify-between text-xs font-semibold">
              <span>Learning Progress</span>
              <span>55%</span>
            </div>
            <Progress value={55} className="mt-3" />
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="pt-8">
          <h2 className="text-lg font-black">What Learners Are Saying</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Discover what our learners have to say about their experience with
            {course.title}. Read reviews and ratings from individuals who have
            embarked on the transformative journey of mastering digital asset
            creation.
          </p>

          <Card className="mt-7 overflow-hidden">
            <CardContent className="grid gap-6 p-5 sm:grid-cols-[105px_1fr] sm:items-center">
              <div className="flex h-[78px] w-[105px] flex-col items-center justify-center rounded-lg bg-[#C9FF00]">
                <span className="text-[9px]">Ratings</span>
                <strong className="text-3xl leading-none">4.7</strong>
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div
                    key={rating}
                    className="grid grid-cols-[1fr_88px_28px] items-center gap-3"
                  >
                    <Progress
                      value={
                        rating === 5
                          ? 100
                          : rating === 4
                            ? 30
                            : rating === 3
                              ? 8
                              : rating === 2
                                ? 5
                                : 4
                      }
                    />
                    <div className="flex gap-0.5 text-slate-500">
                      {Array.from({
                        length: 5,
                      }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">
                      {ratingCounts[rating as 5 | 4 | 3 | 2 | 1]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <h3 className="mt-8 text-sm font-black">Individual Reviews:</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {(["all", 5, 4, 3, 2, 1] as const).map((filter) => (
              <button
                key={String(filter)}
                type="button"
                onClick={() => setRatingFilter(filter)}
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-medium ${
                  ratingFilter === filter
                    ? "bg-[#C9FF00] text-slate-800"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {filter === "all" ? (
                  "All rating"
                ) : (
                  <>
                    <Star className="h-3 w-3 fill-current" />
                    {filter}
                  </>
                )}
              </button>
            ))}
          </div>
          <div className="mt-5 space-y-4">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <Card key={`${review.name}-${index}`}>
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-9 w-9 shrink-0">
                        <AvatarImage src={review.avatar} alt={review.name} />
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-xs font-semibold text-slate-800">
                              {review.name}
                            </h4>
                            <p className="mt-0.5 text-[10px] text-slate-400">
                              {review.role}
                            </p>
                          </div>
                          <span className="text-[9px] text-slate-400">
                            {review.date}
                          </span>
                        </div>
                        <div className="mt-3 flex gap-0.5 text-slate-600">
                          {Array.from({
                            length: review.rating,
                          }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                        <p className="mt-4 text-xs leading-6 text-slate-500">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-slate-500">
                    No reviews found for this rating.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
