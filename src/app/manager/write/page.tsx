import ArrowBtn from "@/app/components/shared/ArrowBtn";
import React from "react";

const Write = () => {
  return (
    <div className="darkAndlight flex justify-center flex-col items-center h-full">
      <h1>글쓰기 페이지</h1>
      <div className="flex flex-col w-1/2 darkAndlight relative">
        <input
          className="mb-4 w-1/2 border-2 outline-none darkAndlight"
          type="text"
        />
        <textarea
          className="border-2 outline-none darkAndlight text-start w-full"
          name=""
          id=""
          cols={40}
          rows={15}
        />
        <button className="px-3 py-2 rounded-lg border absolute right-0 -bottom-20">
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Write;
