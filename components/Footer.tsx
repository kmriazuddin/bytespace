import Link from "next/link";
import { Button } from "./ui/button";
export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.3fr_2fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-brand-ink"
          >
            <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-lime-300 text-[10px] text-brand-blue">
              B
            </span>{" "}
            ByteSpace
          </Link>
          <p className="mt-3 max-w-xs text-xs leading-5 text-slate-500">
            Stay up to date with our latest features and releases by joining our
            newsletter.
          </p>
          <div className="mt-5 flex max-w-sm rounded-full border border-slate-200 p-1">
            <input
              className="min-w-0 flex-1 px-3 text-xs outline-none"
              placeholder="Enter your email"
            />
            <Button className="px-4 py-2 text-[10px] bg-lime-400 text-black">Search</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h4 className="text-xs font-bold">Browse</h4>
            <div className="mt-4 space-y-2 text-[11px] text-slate-500">
              <Link className="block" href="/courses">
                Featured Courses
              </Link>
              <Link className="block" href="/courses">
                Featured Categories
              </Link>
              <span>Business</span>
              <span className="block">IT</span>
              <span className="block">Design</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold">Platform</h4>
            <div className="mt-4 space-y-2 text-[11px] text-slate-500">
              <Link className="block" href="/signup">
                Become a Creator
              </Link>
              <span className="block">Affiliate Program</span>
              <span className="block">Contact</span>
              <span className="block">Help</span>
              <span className="block">About</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold">Categories</h4>
            <div className="mt-4 space-y-2 text-[11px] text-slate-500">
              <span className="block">Development</span>
              <span className="block">Marketing</span>
              <span className="block">Photography</span>
              <span className="block">Finance</span>
              <span className="block">Sport</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold">Company</h4>
            <div className="mt-4 space-y-2 text-[11px] text-slate-500">
              <span className="block">Privacy</span>
              <span className="block">Terms</span>
              <span className="block">Cookies</span>
              <span className="block">Settings</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 px-5 py-5 text-[10px] text-slate-400 lg:px-8">
        <div className="mx-auto flex max-w-6xl justify-between">
          <span>© 2026 ByteSpace. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service · Cookies Settings</span>
        </div>
      </div>
    </footer>
  );
}
