import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);

    const user = await supabase.auth.getUser();

    const accounts = await supabase
      .from("Accounts")
      .select("*")
      .eq("user_id", user.data.user?.id);

    if (!accounts || accounts.error || accounts.data.length > 0) {
      return NextResponse.redirect(`${origin}/`);
    }

    const account = {
      number: crypto.randomUUID(),
      name: "시작계좌",
    };

    await supabase.from("Accounts").insert({
      user_id: user.data.user?.id,
      account_number: account.number,
      account_name: account.name,
      balance: 0,
    });
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/`);
}
