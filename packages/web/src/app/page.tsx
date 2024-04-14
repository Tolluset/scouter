import { Button } from "@/components/ui/button";
import CoinList from "./coins/coin-list";
import Link from "next/link";
import { ROUTES } from "@/constants";
import { createClient } from "@/utils/supabase/server";
import { AvatarIcon } from "@radix-ui/react-icons";

export default async function Home() {
  const client = createClient();

  const user = await client.auth.getUser();

  return (
    <>
      <nav className="flex justify-end w-full p-2 border-b">
        {user.data.user ? (
          <Button variant="ghost">
            <Link href={ROUTES.myPage}>
              <AvatarIcon width={20} height={20} color="lightslategray" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" asChild>
            <Link href={ROUTES.login}>로그인</Link>
          </Button>
        )}
      </nav>
      <main className="flex w-full flex-col items-center justify-between pt-8 p-2 sm:p-4 sm:pt-8">
        <CoinList />
      </main>
    </>
  );
}
