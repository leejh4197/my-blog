"use client";
import Boards from "./components/Boards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="darkAndlight flex flex-col">
      <div className="flex justify-center">
        <Image
          src="/bloglogo.png"
          width={110}
          height={80}
          alt="로고 이미지 "
          className="my-4 rounded-[50%]"
        />
      </div>
      <Boards />
    </div>
  );
}
