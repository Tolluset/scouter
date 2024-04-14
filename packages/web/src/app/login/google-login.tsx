"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function GoogleLogin() {
  const router = useRouter();

  const googleSignIn = async () => {
    const supabase = createClient();
    const origin = window.location.origin;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/v1/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (!data && error) {
      router.push("/login?message=signin_failed");
    }

    if (data.url !== null) {
      router.push(data.url);
    }
  };

  return (
    <Button type="button" variant="outline" onClick={googleSignIn}>
      Google로 시작하기
    </Button>
  );
}
