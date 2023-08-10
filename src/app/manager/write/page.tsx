"use client";
import BoardEditor from "@/app/components/BoardEditor";
import React from "react";

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

        <BoardEditor />
      </div>
    </div>
  );
};

export default Write;
