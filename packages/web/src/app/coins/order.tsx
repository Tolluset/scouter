import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getHumanReadableCode, getNameByMarket } from "@/utils/coins";

type Props = {
  code: string;
};

export default function Order({ code }: Props) {
  return (
    <div className="flex flex-col justify-center w-full px-2 sm:px-4 flex items-center justify-center oveflow-scroll">
      <CoinName code={code} />
      <Tabs defaultValue="buy" className="w-full max-w-lg">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="buy" className="data-[state=active]:text-red-500">
            매수
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="data-[state=active]:text-blue-500"
          >
            매도
          </TabsTrigger>
        </TabsList>
        <TabsContent value="buy" className="h-full">
          <AvailableBalance />
          <Price />
          <Quantity code={code} />
          <TotalAmount />
          <OrderButton type="buy">매수</OrderButton>
        </TabsContent>
        <TabsContent value="sell">
          <AvailableBalance />
          <Price />
          <Quantity code={code} />
          <TotalAmount />
          <OrderButton type="sell">매도</OrderButton>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function CoinName({ code }: { code: string }) {
  return (
    <div className="w-full flex justify-center items-center gap-x-2 py-2">
      <strong>{getNameByMarket(code)}</strong>
      <span className="text-sm">{getHumanReadableCode(code)}</span>
    </div>
  );
}

function AvailableBalance() {
  return <div className="text-xs font-medium pt-4">주문가능: 0 원</div>;
}

function Price() {
  return (
    <div className="space-y-1 pb-2">
      <Label htmlFor="name">주문가격(KRW)</Label>
      <Input id="name" defaultValue="" className="text-right" />
    </div>
  );
}

function Quantity({ code }: { code: string }) {
  return (
    <div className="space-y-1 pb-2">
      <Label htmlFor="username">주문수량({code.split("-")[1]})</Label>
      <Input id="username" defaultValue="" />
    </div>
  );
}

function TotalAmount() {
  return (
    <div className="space-y-1 pb-8">
      <Label htmlFor="username">주문총액(KRW)</Label>
      <Input id="username" defaultValue="" />
    </div>
  );
}

function OrderButton({
  type,
  children,
}: {
  type: "buy" | "sell";
  children: React.ReactNode;
}) {
  const varaints = {
    buy: {
      "bg-color": "bg-red-500",
      "hover:bg-color": "hover:bg-red-600",
    },
    sell: {
      "bg-color": "bg-blue-500",
      "hover:bg-color": "hover:bg-blue-600",
    },
  };

  return (
    <Button
      variant="default"
      className={`${varaints[type]["bg-color"]} ${varaints[type]["hover:bg-color"]} text-white w-full`}
    >
      {children}
    </Button>
  );
}
