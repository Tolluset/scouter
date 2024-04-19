import { MARKET_ALL } from "@/constants";

export function getNameByMarket(market: string) {
  const foundMarket = MARKET_ALL.find((item) => item.market === market);
  return foundMarket ? foundMarket.korean_name : null;
}

export function getHumanReadableCode(code: string) {
  return `${code.split("-")[1]}/${code.split("-")[0]}`;
}

export function numberCommas(num: number | string) {
  if (+num < 1) {
    return num;
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function millionNumbers(num: number) {
  return numberCommas((num / 1000000).toFixed(0)) + "백만";
}
