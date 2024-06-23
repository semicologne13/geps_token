import { useState } from "react";

import { Binance, Usdt } from 'react-web3-icons'

import { cn } from "@/utils/cn";

import TimeCountdown from "./TimeCountdown";
import { InputWithLabel } from "./InputWithLabel";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";
import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

type CardProps = React.ComponentProps<typeof Card>

export function PurchaseCard({ className, ...props }: CardProps) {
    const [selectedCrypto, setSelectedCrypto] = useState("BNB");

    return(
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <div className="text-center items-center">
                    <CardTitle>GEPS Token Pre-Sale</CardTitle>
                </div>
                <TimeCountdown targetDate="2024-12-31T23:59:59"/>
                <div className="space-y-5">
                    <div className="flex items-center gap-x-3 whitespace-nowrap">
                        <div
                        className="flex w-full h-2 outline outline-offset-2 outline-white rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        >
                            <div
                                className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-green-600"
                                style={{ width: "25%" }}
                            />
                        </div>
                        <div className="w-10 text-end">
                            <span className="text-sm text-gray-800 dark:text-white">25%</span>
                        </div>
                    </div>
                </div> 
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center text-center rounded-md border pt-2 pb-2">
                    <div className="flex-1 space-y-1">
                        <p className="text-md font-medium leading-none">
                            Current Price = $0.01 <span className="text-green-500">(Phase-1)</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-8">
                    <Toggle
                        pressed={selectedCrypto === "BNB"}
                        onPressedChange={() => setSelectedCrypto("BNB")}
                        aria-label="Toggle BNB"
                        variant={selectedCrypto === "BNB" ? 'outline' : 'default'}
                    >
                        <span className="mr-2">Binance</span><Binance/>
                    </Toggle>
                    <Toggle
                        pressed={selectedCrypto === "USDT"}
                        onPressedChange={() => setSelectedCrypto("USDT")}
                        aria-label="Toggle USDT"
                        variant={selectedCrypto === "USDT" ? 'outline' : 'default'}
                    >
                        <span className="mr-2">USDT</span><Usdt/>
                    </Toggle>
                </div>
                <div>
                    <div className="py-3 flex items-center text-sm text-green-500 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-green-600 dark:before:border-white dark:after:border-white">
                        1 GEPS = $ 0.01
                    </div>
                    <div className="flex flex-col gap-3">
                        <InputWithLabel title={`Enter ${selectedCrypto} Amount:`} label='0'/>
                        <InputWithLabel title="GEPS Token you receive" label='0'/>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant="outline">
                    Connect Wallet
                </Button>
            </CardFooter>
        </Card>
    )
}
