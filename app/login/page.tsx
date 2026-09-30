"use client";

import Navbar from "@/components/Navbar";
import { loginUser } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submit = async (data: FormData) => {
    try {
      await loginUser(data.email, data.password);
      toast.success("Signed in successfully");
      router.push("/");
      router.refresh();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(
        error?.code === "auth/invalid-credential"
          ? "Invalid email or password"
          : (error?.message ?? "Unable to sign in"),
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0738E6] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-size-[96px_64px]">
      <Navbar />
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pt-20 lg:grid-cols-2">
        <div className="hidden text-white lg:block">
          <p className="text-sm text-[#C9FF00]">Sign in with ease</p>
          <h1 className="mt-3 text-6xl font-black leading-none">
            Welcome
            <br />
            Back
          </h1>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="rounded-3xl bg-white p-7 shadow-2xl sm:p-10"
        >
          <h2 className="text-2xl font-black">Welcome Back</h2>
          <p className="mt-2 text-xs text-slate-500">
            Sign in to continue learning.
          </p>
          <label className="mt-7 block text-xs font-semibold">
            Email
            <input
              {...register("email")}
              placeholder="abcd@example.com"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#C9FF00]"
            />
            {errors.email && (
              <span className="mt-1 block text-[10px] text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="mt-4 block text-xs font-semibold">
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
            {isSubmitting ? "Signing In…" : "Sign In"}
          </button>
          <p className="mt-6 text-center text-xs text-slate-500">
            New user?{" "}
            <Link className="font-semibold text-[#C9FF00]" href="/signup">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
