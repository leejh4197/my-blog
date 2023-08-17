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

      <div className="flex flex-col w-1/2 darkAndlight relative">
        <div className="flex justify-between mb-4">
          <input
            className=" w-1/2 border-2 outline-none darkAndlight"
            type="text"
          />
          <button className="px-3 py-2 rounded-lg border ">글쓰기</button>
        </div>

        <NoSsrWysiwyg />
      </div>
    </div>
  );
};

export default Write;
