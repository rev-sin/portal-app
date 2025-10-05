"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  return (
    <div className="font-sans justify-items-center">
      <main className="flex-column justify-items-center">
        <h1 className="text-xl py-5">Portal AI India.</h1>
        <div className="flex gap-4">
          <Button
            type="button"
            onClick={() => router.push("/sign-up")}
            className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200"
          >
            Sign Up
          </Button>
          <Button
            type="button"
            onClick={() => router.push("/sign-in")}
            className="border border-white text-white font-medium px-6 py-2 rounded-md hover:bg-neutral-800"
          >
            Sign In
          </Button>
        </div>
      </main>
    </div>
  );
}
