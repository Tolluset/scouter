import OrderBook from "@/app/coins/order-book";
import Order from "@/app/coins/order";
import { createClient } from "@/utils/supabase/server";

export default async function CoinCodePage({
  params,
}: {
  params: { "coin-code": string };
}) {
  const client = createClient();

  const code = params["coin-code"];

  return (
    <main className="flex h-full">
      <OrderBook code={code} />
      <Order code={code} />
    </main>
  );
}
