"use client";

import { useEffect, useState } from "react";

import { MARKET_ALL } from "@/constants";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type Root = {
  type: string;
  code: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  prev_closing_price: number;
  acc_trade_price: number;
  change: string;
  change_price: number;
  signed_change_price: number;
  change_rate: number;
  signed_change_rate: number;
  ask_bid: string;
  trade_volume: number;
  acc_trade_volume: number;
  trade_date: string;
  trade_time: string;
  trade_timestamp: number;
  acc_ask_volume: number;
  acc_bid_volume: number;
  highest_52_week_price: number;
  highest_52_week_date: string;
  lowest_52_week_price: number;
  lowest_52_week_date: string;
  market_state: string;
  is_trading_suspended: boolean;
  delisting_date: any;
  market_warning: string;
  timestamp: number;
  acc_trade_price_24h: number;
  acc_trade_volume_24h: number;
  stream_type: string;
} & { updated: "up" | "down" | "none" };

export default function CoinList() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Root[]>([]);

  const krwMarkets = MARKET_ALL.filter((item) =>
    item.market.startsWith("KRW"),
  ).map((item) => item.market);

  useEffect(() => {
    const ws = new WebSocket("wss://api.upbit.com/websocket/v1");

    ws.onopen = () => {
      console.log("connected");

      ws.send(
        JSON.stringify([
          { ticket: "test" },
          {
            type: "ticker",
            codes: krwMarkets,
          },
        ]),
      );
    };

    ws.onmessage = async (event) => {
      const text = await event.data.text();
      const data = JSON.parse(text);
      setMessages((prev) => {
        const filtered = prev.filter((item) => item.code !== data.code);
        const sortyBy = (item: Root) => {
          return item.acc_trade_price_24h;
        };
        const dataIsUpdated = {
          ...data,
          updated: data.change === "RISE" ? "up" : "down",
        };
        const sorted = [...filtered, dataIsUpdated].sort(
          (a, b) => sortyBy(b) - sortyBy(a),
        );

        sorted.forEach((item) => {
          if (item.code === data.code) {
            setTimeout(() => {
              setMessages((prev) =>
                prev.map((m) =>
                  m.code === data.code ? { ...m, updated: "none" } : m,
                ),
              );
            }, 500);
          }
        });

        return sorted;
      });
    };

    ws.onclose = () => {
      console.log("disconnected");

      setSocket(null);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const getNameByMarket = (market: string) => {
    const foundMarket = MARKET_ALL.find((item) => item.market === market);
    return foundMarket ? foundMarket.korean_name : null;
  };

  const numberCommas = (num: number | string) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const millionNumbers = (num: number) => {
    return numberCommas((num / 1000000).toFixed(0)) + "백만";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>한글명</TableHead>
          <TableHead>현재가</TableHead>
          <TableHead>전일대비</TableHead>
          <TableHead>거래대금</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {messages.map((m, i) => {
          return (
            <TableRow key={i} className="h-20">
              <TableCell>
                {getNameByMarket(m.code)} <br /> {m.code}
              </TableCell>
              <TableCell>{numberCommas(m.trade_price)}</TableCell>
              <TableCell>
                <div
                  className={`p-2 box-border ${m.updated === "up" ? "animate-price-up" : "animate-price-down"}`}
                >
                  {(m.signed_change_rate * 100).toFixed(0)}%
                  <br />
                  {m.signed_change_price > 0
                    ? "+" + m.signed_change_price
                    : m.signed_change_price}
                </div>
              </TableCell>
              <TableCell>{millionNumbers(m.acc_trade_price_24h)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
