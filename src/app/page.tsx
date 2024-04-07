import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";
import Image from "next/image";
import TelegramLogo from "@/telegram_logo";
import DexScreenerLogo from "@/dexscreener_logo";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const info = await fetch(
    "https://api.dexscreener.com/latest/dex/pairs/solana/A2PNuT5Q43q1m3mRSFdcEv429TP4phuv2UwcmTFW5UUM",
  );
  const data = await info.json();

  const FDV = data.pairs[0].fdv;
  const MARKET_CAP = data.pairs[0].marketCap;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {/* <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-zinc-300">CET</span>
        </h1> */}
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
            <br /> We're going to flip it and go straight to $100m.
          </div>
          <h1>We are currently at ${FDV}</h1>
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
              <DexScreenerLogo className={"h-[200px] w-[200px]"} />
            </div>

            <div className="text-xs">
              get in now on the next 100x coin.
              <br /> we're going to flip it and go parabolic.
            </div>
          </Link>
        </div>

        {/* <CrudShowcase /> */}
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
