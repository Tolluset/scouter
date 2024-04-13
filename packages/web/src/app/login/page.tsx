import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AlertMessage from "./alert-message";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  // @TODO: Implement Google Sign-In
  const googleSignIn = async () => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/v1/callback",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (!data && error) {
      return redirect("/login?message=signin_failed");
    }

    if (data.url !== null) {
      return redirect(data.url);
    }
  };

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=signin_failed");
    }

    return redirect("/");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/v1/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=signup_failed");
    }

    return redirect("/ ");
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className=" flex-1 flex flex-col w-full px-6 sm:max-w-md justify-center gap-2">
        <Link
          href="/"
          className="absolute left-2 sm:left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          홈으로
        </Link>

        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <Label className="text-md" htmlFor="email">
            이메일
          </Label>
          <Input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
          <Label className="text-md" htmlFor="password">
            비밀번호
          </Label>
          <Input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            autoComplete="current-password"
            minLength={6}
            required
          />
          <SubmitButton formAction={signIn} pendingText="로그인 중...">
            로그인
          </SubmitButton>
          <SubmitButton
            formAction={signUp}
            variant="secondary"
            pendingText="이메일로 가입 중..."
          >
            이메일로 가입
          </SubmitButton>
          <AlertMessage message={searchParams.message} />
        </form>
      </div>
    </div>
  );
}
