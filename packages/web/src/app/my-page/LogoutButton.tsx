"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const client = createClient();
    await client.auth.signOut();

    router.push(ROUTES.home);
    router.refresh();
  };

  return (
    <Button variant="outline" onClick={logout}>
      로그아웃
    </Button>
  );
}
