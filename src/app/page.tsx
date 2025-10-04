"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/header";
export default function Home() {
  const router = useRouter();
  return (
    <Header/>
  );
}
