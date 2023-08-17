"use client";
import { usePathname } from "next/navigation";
import React from "react";

const BlogPosts = () => {
  const pathName = usePathname().split("/");
  return (
    <div className="darkAndlight flex flex-col items-center">
      <h1 className="mb-20">포스트 페이지</h1>
      <div className="w-2/3 flex flex-col">
        <div className="font-bold text-3xl border-b border-grayLine">
          포스트 제목
        </div>
        <span className="text-left mb-10">{pathName[2]}</span>
      </div>
    </div>
  );
};

export default BlogPosts;
