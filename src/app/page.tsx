"use client";
import Link from "next/link";
import Image from "next/image";
import TelegramLogo from "@/telegram_logo";
import DexScreenerLogo from "@/dexscreener_logo";
import { useEffect, useState } from "react";

export default function Home() {
  // const info = await fetch(
  //   "https://api.dexscreener.com/latest/dex/pairs/solana/A2PNuT5Q43q1m3mRSFdcEv429TP4phuv2UwcmTFW5UUM",
  // );
  // const data: DexPair = await info.json();

  // const FDV = data?.pairs?.[0]?.fdv as number;
  // const P24 = data?.pairs?.[0]?.priceChange.h24 as number;
  // const P6 = data?.pairs?.[0]?.priceChange.h6 as number;
  // const P1 = data?.pairs?.[0]?.priceChange.h1 as number;
  // const M5 = data?.pairs?.[0]?.priceChange.m5 as number;
  const [data, setData] = useState<DexPair>(null!);

  // Function to fetch data
  async function fetchData() {
    const info = await fetch(
      "https://api.dexscreener.com/latest/dex/pairs/solana/A2PNuT5Q43q1m3mRSFdcEv429TP4phuv2UwcmTFW5UUM",
    );
    const newData = await info.json();
    setData(newData);
  }

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 1200); // Fetch every 2 minutes

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  if (!data) return <div>Loading...</div>; // Or any other loading state

  const FDV = data.pairs?.[0]?.fdv!;
  const P24 = data.pairs?.[0]?.priceChange.h24!;
  const P6 = data.pairs?.[0]?.priceChange.h6!;
  const P1 = data.pairs?.[0]?.priceChange.h1!;
  const M5 = data.pairs?.[0]?.priceChange.m5!;

  return (
    <main className="no-scrollbar flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#02296d] to-[#15152c] text-white">
      <div className="no-scrollbar container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h2 className="flex flex-col place-items-center text-center text-2xl font-bold">
          <Image
            className="rounded-3xl"
            alt="cet"
            width="400"
            height="400"
            src={
              "https://pump.mypinata.cloud/ipfs/QmdeTdJ7oucvqyTEURKb6KfLNCSTwQiddvH5bKQ5nsUB8k"
            }
          />
          <div className="text-lg">
            Cet Coin ran to <span className="font-bold">$10m.</span>
            <br /> We&apos;re going to flip it and go straight to $100m.
          </div>
          {FDV && <h1>We are currently at ${FDV.toLocaleString()}</h1>}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://t.me/cetsonsol"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Join the Telegram →</h3>
            <div className="flex h-fit w-full flex-col place-content-center place-items-center p-4">
              <TelegramLogo className={"h-[200px] w-[200px]"} />
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://dexscreener.com/solana/A2PNuT5Q43q1m3mRSFdcEv429TP4phuv2UwcmTFW5UUM"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">BUY NOW →</h3>
            <div className="flex h-fit w-full flex-col place-content-center place-items-center p-4">
              <DexScreenerLogo classNameExtra={"h-[200px] w-[200px]"} />
            </div>

            <div className="text-xs">
              get in now on the next 100x coin.
              <br /> we&apos;re going to flip it and go parabolic.
            </div>
          </Link>{" "}
          <div className="flex flex-col gap-4 lg:absolute lg:right-10 lg:top-10">
            <div className="flex justify-between">
              <div className="text-center">Time</div>
              <div className="text-center">Price Change</div>
            </div>
            <div className="flex justify-between">
              <div>P24</div>
              <div
                className={`rounded-lg bg-white/20 ${P24 >= 0 ? "text-emerald-500" : "text-red-500"}`}
              >
                {P24}%
              </div>
            </div>
            <div className="flex justify-between">
              <div>P6</div>
              <div
                className={`rounded-lg bg-white/20 ${P6 >= 0 ? "text-emerald-500" : "text-red-500"}`}
              >
                {P6}%
              </div>
            </div>
            <div className="flex justify-between">
              <div>P1</div>
              <div
                className={`rounded-lg bg-white/20 ${P1 >= 0 ? "text-emerald-500" : "text-red-500"}`}
              >
                {P1}%
              </div>
            </div>
            <div className="flex justify-between">
              <div>M5</div>
              <div
                className={`rounded-lg bg-white/20 ${M5 >= 0 ? "text-emerald-500" : "text-red-500"}`}
              >
                {M5}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
