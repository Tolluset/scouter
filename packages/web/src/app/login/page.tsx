import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AlertMessage from "./alert-message";
import GoogleLogin from "./google-login";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  if (user.data.user) {
    return redirect("/");
  }

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

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/v1/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=signup_failed");
    }

    const account = {
      number: crypto.randomUUID(),
      name: "시작계좌",
    };

    await supabase.from("Accounts").insert({
      user_id: data.user?.id,
      account_number: account.number,
      account_name: account.name,
      balance: 0,
    });

    return redirect("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className=" flex-1 flex flex-col w-full px-6 sm:max-w-md justify-center gap-2">
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
          <hr className="my-4" />
          <SubmitButton
            formAction={signUp}
            variant="outline"
            pendingText="이메일로 시작하는 중..."
          >
            이메일로 시작하기
          </SubmitButton>
          <GoogleLogin />
          <AlertMessage message={searchParams.message} />
        </form>
      </div>
    </div>
  );
}
