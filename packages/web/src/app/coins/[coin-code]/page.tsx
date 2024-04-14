import OrderBook from "@/app/coins/order-book";

export default function CoinCodePage({
  params,
}: {
  params: { "coin-code": string };
}) {
  return (
    <div>
      <OrderBook code={params["coin-code"]} />
    </div>
  );
}
