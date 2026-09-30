import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

import img from "@/public/images/Frame-1.png";
import img2 from "@/public/images/dw-2.png";
import img3 from "@/public/images/dw-3.png";
import img4 from "@/public/images/dw-4.png";
import img5 from "@/public/images/dw-5.png";
import img6 from "@/public/images/hlogo-2.png";
import img7 from "@/public/images/dw-7.png";

const CreatorBanner = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0738E6] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-size-[96px_64px] py-20 text-white"
    >
      <div>
        <Image
          src={img}
          alt="Squiggle decoration"
          width={130}
          height={130}
          className="absolute -left-5 top-0 z-10 opacity-95"
        />
        <Image
          src={img2}
          alt="Squiggle decoration"
          width={230}
          height={130}
          className="absolute -left-10 md:left-10 bottom-0 z-10 opacity-95"
        />
        <Image
          src={img7}
          alt="Squiggle decoration"
          width={100}
          height={100}
          className="absolute left-0 top-35 z-10 opacity-95 hidden sm:block"
        />
        <Image
          src={img6}
          alt="Squiggle decoration"
          width={130}
          height={130}
          className="absolute left-40 top-0 z-10 opacity-95 hidden sm:block"
        />
        {/* Right-Side */}
        <Image
          src={img4}
          alt="Squiggle decoration"
          width={130}
          height={130}
          className="absolute right-30 top-0 z-10 opacity-95 hidden sm:block"
        />
        <Image
          src={img5}
          alt="Squiggle decoration"
          width={130}
          height={130}
          className="absolute -right-5 top-0 z-10 opacity-95"
        />
        <Image
          src={img3}
          alt="Squiggle decoration"
          width={250}
          height={250}
          className="absolute -right-5 md:right-20 bottom-0 z-10 opacity-95"
        />
      </div>
      
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-[#C9FF00]">
          For creators
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">
          Unlock Your Potential as a<br />
          Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/65">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of our creator
          community.
        </p>
        <Button className="mt-7 bg-[#C9FF00] text-slate-900 hover:bg-[#C9FF00]/90">
          <Link href="/signup">Join as Creator</Link>
        </Button>
      </div>
    </section>
  );
};

export default CreatorBanner;
