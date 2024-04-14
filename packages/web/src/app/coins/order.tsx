import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Order() {
  return (
    <div className="flex justify-center w-full  px-2 sm:px-4 flex items-center justify-center oveflow-scroll">
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
          <Card className="h-full">
            <CardContent className="space-y-2">
              <div className="text-sm font-medium pt-4">주문가능: 0</div>
              <hr />
              <div className="space-y-1">
                <Label htmlFor="name" className="text-right">
                  주문가격
                </Label>
                <Input id="name" defaultValue="" />
              </div>
              <div className="space-y-1 pb-2">
                <Label htmlFor="username">주문수량</Label>
                <Input id="username" defaultValue="" />
              </div>
              <hr />
              <div className="text-sm font-medium text-right">주문총액: 0</div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="bg-red-500 text-white w-full"
              >
                매수
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sell">
          <Card className="h-full">
            <CardContent className="space-y-2">
              <div className="text-sm font-medium pt-4">주문가능: 0</div>
              <hr />
              <div className="space-y-1">
                <Label htmlFor="name" className="text-right">
                  주문가격
                </Label>
                <Input id="name" defaultValue="" />
              </div>
              <div className="space-y-1 pb-2">
                <Label htmlFor="username">주문수량</Label>
                <Input id="username" defaultValue="" />
              </div>
              <hr />
              <div className="text-sm font-medium text-right">주문총액: 0</div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="bg-blue-500 text-white w-full"
              >
                매도
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
