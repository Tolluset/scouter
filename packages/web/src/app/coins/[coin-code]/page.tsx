import OrderBook from "@/app/coins/order-book";
import Order from "@/app/coins/order";
import { getNameByMarket } from "@/utils/coins";

export default function CoinCodePage({
  params,
}: {
  params: { "coin-code": string };
}) {
  return (
    <main className="flex flex-col h-full ">
      <CoinName code={params["coin-code"]} />
      <div className="flex h-full pt-10">
        <OrderBook code={params["coin-code"]} />
        <Order />
      </div>
    </main>
  );
}

function CoinName({ code }: { code: string }) {
  return (
    <div className="fixed w-full bg-white z-50 flex justify-center gap-x-2 py-2">
      <strong>{getNameByMarket(code)}</strong>
      <p>{code}</p>
    </div>
  );
}
