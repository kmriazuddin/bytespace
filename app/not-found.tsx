import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-[#0738E6] bg-blue-grid text-white bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-size-[96px_64px]">
        <Navbar />
        <div className="mx-auto flex min-h-[680px] max-w-6xl flex-col items-center justify-center px-5 pb-20 pt-28 text-center">
          <div className="select-none text-[210px] font-black leading-[.72] tracking-[-.08em] text-[#C9FF00]/90 sm:text-[330px]">
            404
          </div>
          <h1 className="relative z-10 mt-6 max-w-4xl text-4xl font-black leading-[1.05] sm:-mt-3 sm:text-6xl">
            The page you are looking
            <br className="hidden sm:block" /> for doesn’t exist
          </h1>
          <p className="mt-6 text-sm text-white/75">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex rounded-full bg-[#C9FF00] text-slate-800 px-7 py-3 text-sm font-semibold transition hover:brightness-95"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
