"use client";
import Boards from "./components/Boards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="darkAndlight flex flex-col h-full relative">
      <div className="flex justify-center">
        <Image src="/bloglogo.png" width={110} height={80} alt="로고 이미지 " />
      </div>
      <Boards />
    </div>
  );
}
