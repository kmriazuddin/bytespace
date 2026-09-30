import { testimonials } from "@/lib/data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-0
          bg-[radial-gradient(circle_at_65%_20%,rgba(201,255,0,0.32)_0%,rgba(201,255,0,0.16)_20%,rgba(201,255,0,0.06)_38%,transparent_60%)]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          bottom-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#C9FF00]
          blur-[100px]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#AFC6FF]/50
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-black leading-tight text-slate-800">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>
          <p className="text-sm leading-6 text-slate-500">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the journey of learning and creating on our platform.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white/95
                p-5
                shadow-sm
                backdrop-blur-sm
              "
            >
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xs font-bold text-slate-800">{t.name}</h3>

                  <p className="text-[10px] text-[#0738E6]">{t.role}</p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-500">
                “{t.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
