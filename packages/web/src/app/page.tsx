import CoinList from "./features/coin-list/CoinList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-4">
      <CoinList />
    </main>
  );
}
