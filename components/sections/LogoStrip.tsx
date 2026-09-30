"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  {
    name: "Design course",
    src: "https://i.ibb.co.com/kvr9fwK/design-amazing-online-course-thumbnail-for-udemy.webp",
  },
  {
    name: "SEO Course",
    src: "https://www.picmaker.com/templates/_next/image?url=https%3A%2F%2Fstatic.picmaker.com%2Fscene-prebuilts%2Fthumbnails%2FYT-0053.png&w=3840&q=75",
  },
  {
    name: "Time Management",
    src: "https://img.magnific.com/free-photo/young-girl-with-backpack-her-shoulders-created-with-generative-ai-technology_185193-161972.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Photoshop",
    src: "https://mir-s3-cdn-cf.behance.net/projects/404/47f6ef214945041.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg",
  },
  {
    name: "Online Business",
    src: "https://img.magnific.com/premium-psd/business-youtube-thumbnail-design-template_1191939-197.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Video Editing",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJ3BIDljC_78K2NBOYOaq-tR01mawAxcnSq0CRQn9Ig&s",
  },
];

const MarqueeSlider = () => {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-6">
      <Marquee speed={45} direction="left" gradient={false} pauseOnHover>
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="mx-8 flex items-center gap-3 sm:mx-12"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={70}
              height={70}
              className="object-contain"
            />

            <span className="whitespace-nowrap text-lg font-semibold text-slate-700">
              {logo.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSlider;
