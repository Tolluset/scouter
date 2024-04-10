import OrderBook from "@/app/features/orderbook/OrderBook";

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
