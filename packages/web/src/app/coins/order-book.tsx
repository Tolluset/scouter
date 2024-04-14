"use client";

import { useEffect, useState } from "react";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getNameByMarket } from "../coin-list/CoinList";

export interface Ordrbook {
  type: string;
  code: string;
  timestamp: number;
  total_ask_size: number;
  total_bid_size: number;
  orderbook_units: OrderbookUnit[];
  stream_type: string;
  level: number;
}

export interface OrderbookUnit {
  ask_price: number;
  bid_price: number;
  ask_size: number;
  bid_size: number;
}

export default function OrderBook({ code }: { code: string }) {
  const [messages, setMessages] = useState<OrderbookUnit[]>([]);
  const [top, setTop] = useState<{ bid_size: number; ask_size: number }>({
    bid_size: 0,
    ask_size: 0,
  });

  useEffect(() => {
    const ws = new WebSocket("wss://api.upbit.com/websocket/v1");

    ws.onopen = () => {
      console.log("connected");

      ws.send(
        JSON.stringify([
          { ticket: "test" },
          {
            type: "orderbook",
            codes: [code.toUpperCase()],
          },
        ]),
      );
    };

    ws.onmessage = async (event) => {
      const text = await event.data.text();
      const data = JSON.parse(text);
      setMessages(data.orderbook_units);
      setTop(
        data.orderbook_units.reduce(
          (
            prev: { bid_size: number; ask_size: number },
            cur: { bid_size: number; ask_size: number },
          ) => {
            return {
              bid_size:
                prev.bid_size > cur.bid_size ? prev.bid_size : cur.bid_size,
              ask_size:
                prev.ask_size > cur.ask_size ? prev.ask_size : cur.ask_size,
            };
          },
          { bid_size: 0, ask_size: 0 },
        ),
      );
    };

    ws.onclose = () => {
      console.log("disconnected");
    };

    return () => {
      ws.close();
    };
  }, [code]);

  return (
    <>
      <div className="flex justify-center gap-x-2 py-2">
        <strong>{getNameByMarket(code)}</strong>
        <p>{code}</p>
      </div>
      <Table>
        <TableBody>
          {messages
            .slice(0)
            .reverse()
            .map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="relative text-right bg-blue-100">
                    <div className="flex justify-end">
                      <div
                        style={{
                          width: `${(item.ask_size / top.ask_size) * 100}%`,
                        }}
                        className="bg-blue-200 h-6"
                      >
                        &nbsp;
                      </div>
                      <p className="absolute top-1/2 -translate-y-2/4">
                        {item.ask_size.toFixed(3)}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="w-40 bg-blue-200 text-center">
                    {item.ask_price}
                  </TableCell>
                  <TableCell />
                </TableRow>
              );
            })}

          {messages.map((item, i) => {
            return (
              <TableRow key={i}>
                <TableCell />
                <TableCell className="w-40 bg-red-200 text-center">
                  {item.bid_price}
                </TableCell>
                <TableCell className="relative text-left bg-red-100">
                  <div className="flex justify-start">
                    <div
                      style={{
                        width: `${(item.bid_size / top.bid_size) * 100}%`,
                      }}
                      className="bg-red-200 h-6"
                    >
                      &nbsp;
                    </div>
                    <p className="absolute top-1/2 -translate-y-2/4">
                      {item.bid_size.toFixed(3)}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
