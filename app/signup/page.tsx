"use client";

import Navbar from "@/components/Navbar";
import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/lib/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(5, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submit = async (data: FormData) => {
    try {
      await registerUser(data.name, data.email, data.password);
      toast.success("Account created successfully");
      router.push("/");
      router.refresh();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(
        error?.code === "auth/email-already-in-use"
          ? "This email is already registered"
          : (error?.message ?? "Unable to create account"),
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0738E6] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-size-[96px_64px]">
      <Navbar />
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pt-20 lg:grid-cols-2">
        <div className="hidden text-white lg:block">
          <p className="text-sm text-[#C9FF00]">Sign up and come in</p>
          <h1 className="mt-3 text-6xl font-black leading-none">
            Create
            <br />
            an Account
          </h1>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly and at no cost.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="rounded-3xl bg-white p-7 shadow-2xl sm:p-10"
        >
          <h2 className="text-2xl font-black">Create an Account</h2>
          <p className="mt-2 text-xs text-slate-500">
            Start learning with ByteSpace.
          </p>
          <label className="mt-5 block text-xs font-semibold">
            Full Name
            <input
              {...register("name")}
              placeholder="developer name"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#C9FF00]"
            />
            {errors.name && (
              <span className="mt-1 block text-[10px] text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
          <label className="mt-5 block text-xs font-semibold">
            Email
            <input
              {...register("email")}
              type="email"
              placeholder="abcd@example.com"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#C9FF00]"
            />
            {errors.email && (
              <span className="mt-1 block text-[10px] text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="mt-5 block text-xs font-semibold">
            Password
            <input
              {...register("password")}
              type="password"
              placeholder="********"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#C9FF00]"
            />
            {errors.password && (
              <span className="mt-1 block text-[10px] text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
          <button
            disabled={isSubmitting}
            className="mt-6 w-full rounded-full bg-[#C9FF00] px-5 py-3 text-sm font-bold disabled:opacity-50"
          >
            {isSubmitting ? "Creating Account…" : "Continue"}
          </button>
          <p className="mt-6 text-center text-xs text-slate-500">
            Already have an account?{" "}
            <Link className="font-semibold text-[#C9FF00]" href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
