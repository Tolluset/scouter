import { MARKET_ALL } from "@/constants";

export function getNameByMarket(market: string) {
  const foundMarket = MARKET_ALL.find((item) => item.market === market);
  return foundMarket ? foundMarket.korean_name : null;
}

export function getHumanReadableCode(code: string) {
  return `${code.split("-")[1]}/${code.split("-")[0]}`;
}
