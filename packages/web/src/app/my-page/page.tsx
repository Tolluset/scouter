import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ROUTES } from "@/constants";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default async function MyPage() {
  const client = createClient();
  const user = await client.auth.getUser();

  if (!user.data.user) {
    return redirect(ROUTES.login);
  }

  const res = await client
    .from("Accounts")
    .select("*")
    .eq("user_id", user.data.user.id);

  console.debug("🚀 : page.tsx:23: res=", res);

  const charge = async () => {
    const client = createClient();
  };

  return (
    <div>
      <CardTitle>내 이메일: {user.data.user.email}</CardTitle>
      {/* <CardDescription>내 잔고: {user.data.user.id}</CardDescription> */}내
      잔고: {user.data.user.id}
      <Button variant="outline">충전하기</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>종목</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}
