import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

import img_1 from "@/public/images/ring.png";
import img_2 from "@/public/images/hlogo-2.png";
import img_3 from "@/public/images/hlogo-3.png";
import img_4 from "@/public/images/Cone.png";
import img_5 from "@/public/images/Cone-2.png";
import { Progress, ProgressLabel, ProgressValue } from "../ui/progress";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0738E6]
        pt-28
        text-white
        bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-size-[96px_64px]
      "
    >
      {/* Shape - Left */}
      <div className="absolute md:hidden -left-5 top-36 z-10 h-24 w-24 rounded-[45%] bg-[#C9FF00] sm:left-0 sm:h-32 sm:w-32" />

      {/* Shape - Right */}
      <Image
        src={img_4}
        alt="Squiggle decoration"
        width={130}
        height={130}
        className="absolute -right-5 top-28 z-10 opacity-95"
      />
      <Image
        src={img_5}
        alt="Squiggle decoration"
        width={130}
        height={130}
        className="absolute right-80 top-60 z-10 opacity-95 hidden sm:block"
      />

      {/* Squiggle */}
      <Image
        src={img_3}
        alt="Squiggle decoration"
        width={130}
        height={130}
        className="absolute left-0 top-40 z-10 hidden opacity-95 sm:block"
      />

      {/* Ring */}
      <Image
        src={img_1}
        alt=""
        width={96}
        height={96}
        className="absolute bottom-4 left-5 z-10 hidden sm:block"
      />

      {/* Ring */}
      <Image
        src={img_2}
        alt="logo"
        width={96}
        height={96}
        className="absolute right-8 bottom-10 z-10 hidden sm:block"
      />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-5 text-center">
        <h1 className="mx-auto max-w-3xl text-[38px] font-black leading-[0.98] tracking-[-0.04em] sm:text-[58px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[11px] leading-5 text-white/65 sm:text-xl">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search */}
        <div className="mx-auto mt-7 flex max-w-104 items-center rounded-full bg-white p-1 shadow-2xl">
          <Search className="ml-3 h-4 w-4 shrink-0 text-slate-400" />

          <input
            type="text"
            placeholder="Course, topic, creator"
            className="min-w-0 flex-1 bg-transparent px-2 text-xs text-slate-700 outline-none placeholder:text-slate-400"
          />

          <Button className="rounded-full px-4 py-2 text-[10px] bg-[#C9FF00] text-black hover:bg-[#C9FF00] hover:text-black">
            <Link href="/courses">Search</Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative z-20 mx-auto mt-8 h-75 max-w-5xl sm:h-90">
        {/* Lime Circle */}
        <div className="absolute left-1/2 top-14 h-90 w-90 -translate-x-1/2 rounded-full bg-[#C9FF00] sm:h-120 sm:w-120" />

        {/* Main Image */}
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 sm:h-96 sm:w-96">
          <Image
            src="/images/image-1.png"
            alt="Learner holding a laptop"
            fill
            priority
            className="object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* UI/UX Card */}
        <div className="absolute left-[10%] top-12 rounded-xl bg-white px-3 py-2 text-left text-[12px] leading-4 text-black shadow-lg">
          <b>UI/UX Design</b>
          <br />
          <span className="text-slate-500">200 Courses</span>{" "}
          <span className="text-slate-500">100+ Students</span>
        </div>

        {/* Progress Card */}
        <div className="absolute md:right-[16%] right-[5%] md:top-16 top-10 rounded-xl bg-white px-4 py-3 text-left text-[8px] leading-4 text-black shadow-lg">
          <span className="text-slate-400">Course Learning</span>
          <br />
          <Progress value={55} className="w-full max-w-sm">
            <ProgressLabel>Learning Progress Progress</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>

        {/* Students Card */}
        <div className="absolute bottom-5 md:left-[18%] left-[5%] rounded-xl bg-white px-3 py-2 text-left text-[12px] leading-4 text-black shadow-lg">
          <b>Happy Students</b>
          <br />
          <span>2K+</span> learners
          <AvatarGroup className="grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/pranathip.png"
                alt="@pranathip"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>
      </div>
    </section>
  );
};

export default Hero;
