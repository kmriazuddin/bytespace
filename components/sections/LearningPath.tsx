import { learningPaths } from "@/lib/data";
import {
  BriefcaseBusiness,
  Camera,
  Code2,
  Megaphone,
  MonitorPlay,
  Sparkles,
} from "lucide-react";

const icons = {
  Sparkles,
  Code2,
  MonitorPlay,
  BriefcaseBusiness,
  Megaphone,
  Camera,
};

const LearningPath = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-black text-slate-800 sm:text-3xl">
          Explore Diverse Learning Paths at ByteSpace
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Our diverse range of courses spans various fields, ensuring theres
          something for everyone.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {learningPaths.map(([name, iconName]) => {
          const Icon = icons[iconName as keyof typeof icons];
          return (
            <div
              key={name}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm cursor-pointer"
            >
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#C9FF00] text-slate-900">
                <Icon className="h-4 w-4" />
              </div>
              <p className="mt-3 text-xs font-semibold text-slate-800">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LearningPath;
