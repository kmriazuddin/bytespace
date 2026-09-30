import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const note = [
  { tex: "Share Your Expertise" },
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const GrowthSection = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#f7ffd9] via-white to-[#eef1ff] py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-blue">
            Why ByteSpace
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-800 sm:text-4xl">
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey.
          </p>
          <div className="mt-6 flex gap-8">
            <div>
              <b className="text-2xl text-[#0738E6]">12K+</b>
              <p className="text-xs text-slate-500">Students</p>
            </div>
            <div>
              <b className="text-2xl text-[#0738E6]">70+</b>
              <p className="text-xs text-slate-500">Courses</p>
            </div>
            <div>
              <b className="text-2xl text-[#0738E6]">16</b>
              <p className="text-xs text-slate-500">Creators</p>
            </div>
          </div>
        </div>
        <div className="relative min-h-[350px]">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#C9FF00]/60 blur-2xl" />
          <Image
            src="/images/person.png"
            alt="ByteSpace learner"
            width={420}
            height={500}
            className="relative z-10 mx-auto h-[450px] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-[330px]">
          <Image
            src="/images/person-2.png"
            alt="ByteSpace creator"
            width={420}
            height={520}
            className="mx-auto h-[430px] w-auto object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-black text-slate-800">
            Create & Manage
            <br />
            Courses Easily.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">
            ByteSpace supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {[
              "Share Your Expertise",
              "Monetize Your Passion",
              "Flexibility and Autonomy",
              "Build a Community",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 fill-[#0738E6] text-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
