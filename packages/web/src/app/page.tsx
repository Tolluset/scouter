import { Button } from "@/components/ui/button";
import CoinList from "./coins/coin-list";
import Link from "next/link";
import { ROUTES } from "@/constants";

export default function Home() {
  return (
    <>
      <nav className="flex justify-end w-full p-2 border-b sm:p-4">
        <Button variant="outline" asChild>
          <Link href={ROUTES.login}>로그인</Link>
        </Button>
      </nav>
      <main className="flex w-full flex-col items-center justify-between pt-8 p-2 sm:p-4 sm:pt-8">
        <CoinList />
      </main>
    </>
  );
}
