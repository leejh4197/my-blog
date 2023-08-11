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
        <div className="text-left">
          <p>이런걸 해볼껀데 </p>
          <p>어떻게 생각하시나요?</p>
          <p>
            <img src="data:image/jpeg;base64,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" />
          </p>
          <div className="ql-size-large">큰 글씨</div>
          <p>사진도 넣어볼게요</p>
          <blockquote>
            <p>이건코드임요</p>
          </blockquote>
          <u>먹히나 ?</u>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
