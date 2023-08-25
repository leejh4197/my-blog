"use client";
// import BoardEditor from "@/app/components/BoardEditor";
import dynamic from "next/dynamic";
import React from "react";
const NoSsrWysiwyg = dynamic(() => import("@/app/components/ToastEditor"), {
  ssr: false,
});

const Write = () => {
  return (
    <div className="darkAndlight flex justify-center flex-col items-center h-full">
      <h1 className="mb-5">글쓰기 페이지</h1>

      <div className="flex flex-col w-1/2 darkAndlight">
        <NoSsrWysiwyg />
      </div>
    </div>
  );
};

export default Write;
