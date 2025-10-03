"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="font-sans justify-items-center">
      <main className="flex-column justify-items-center">
        <h1 className="text-xl py-5">Portal AI India.</h1>
        <iframe
          title="test"
          className="aspect-video rounded-xl h-150"
          src="https://www.youtube.com/embed/I5pG1wbRKOg?autoplay=1&mute=1&controls=0&start=25"
        ></iframe>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.push("/sign-up")}
            className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => router.push("/sign-in")}
            className="border border-white text-white font-medium px-6 py-2 rounded-md hover:bg-neutral-800"
          >
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}
