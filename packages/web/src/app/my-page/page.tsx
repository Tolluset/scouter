import { Button } from "@/components/ui/button";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ROUTES } from "@/constants";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";
import { numberCommas } from "@/utils/coins";

export default async function MyPage() {
  const client = createClient();
  const user = await client.auth.getUser();

  if (!user.data.user) {
    return redirect(ROUTES.login);
  }

  const accounts = await client
    .from("Accounts")
    .select("*")
    .eq("user_id", user.data.user.id);

  const charge = async () => {
    const client = createClient();
  };

  return (
    <main className="h-full flex flex-col items-center w-full">
      <div className="flex-1 flex flex-col w-full px-6 sm:max-w-md justify-center gap-2">
        <h1 className="text-lg font-bold pb-8">내 정보</h1>
        <p>내 이메일: {user.data.user.email}</p>
        {accounts.data?.map((account) => {
          return (
            <div key={account.id}>
              <p className="text-sm">계좌이름: {account.account_name}</p>
              <p className="text-sm">계좌번호: {account.account_number}</p>
              <p className="pt-4">
                계좌잔고: {numberCommas(account.balance)} 원
              </p>
            </div>
          );
        })}
        <Button variant="default">충전하기</Button>
        {/* <Table> */}
        {/*   <TableHeader> */}
        {/*     <TableRow> */}
        {/*       <TableHead>종목</TableHead> */}
        {/*     </TableRow> */}
        {/*   </TableHeader> */}
        {/* </Table> */}
        <div className="pt-10">
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
