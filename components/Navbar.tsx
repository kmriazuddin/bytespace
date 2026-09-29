"use client";

import { logoutUser } from "@/lib/auth";
import { setMobileMenuOpen } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((s: RootState) => s.auth.user);
  const open = useSelector((s: RootState) => s.ui.mobileMenuOpen);
  const navLinks = [
    ["Home", "/"],
    ["Courses", "/courses"],
    ["Creators", "/creators"],
  ];

  const logout = async () => {
    await logoutUser();
    // toast.success("Signed out");
  };

  return (
    <div className="absolute inset-x-0 top-0 z-50 text-white bg-lime-400">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-brand-lime text-[10px] text-brand-blue">
            B
          </span>
          ByteSpace
        </Link>
        <nav className="hidden items-center gap-8 text-xs md:flex">
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="opacity-80 transition hover:opacity-100"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <span className="max-w-28 truncate text-xs text-white/70">
                {user?.displayName || "User"}
              </span>
              <button
                onClick={logout}
                className="text-xs opacity-80 hover:opacity-100"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-xs opacity-80 transition hover:opacity-100"
              >
                Sign In
              </Link>
              <span className="opacity-40">|</span>
              <Link
                href="/signup"
                className="text-xs opacity-80 transition hover:opacity-100"
              >
                Join Us
              </Link>
            </>
          )}
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => dispatch(setMobileMenuOpen(!open))}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-brand-blue px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => dispatch(setMobileMenuOpen(false))}
              >
                {label}
              </Link>
            ))}
            {user ? (
              <button onClick={logout}>Sign Out</button>
            ) : (
              <>
                <Link href="/login">Sign In</Link>
                <Link href="/signup">Join Us</Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
