import React from "react";
import Board from "./shared/Board";
import { title } from "process";
import ArrowBtn from "./shared/ArrowBtn";

const Boards = () => {
  const boardDummy = [
    {
      title: "블로그 제목",
      content:
        " 블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용",
      date: "2022.01.02",
      hash: "#맛집#추천#최고",
    },
    {
      title: "블로그 제목",
      content:
        " 블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용",
      date: "2022.01.02",
      hash: "#맛집#추천#최고",
    },
    {
      title: "블로그 제목",
      content: " 블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용",
      date: "2022.01.02",
      hash: "#맛집#추천#최고",
    },
    {
      title: "블로그 제목",
      content: " 블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용",
      date: "2022.01.02",
      hash: "#맛집#추천#최고",
    },
    {
      title: "블로그 제목",
      content: " 블로그 내용블로그 내용블로그 내용블로그 내용블로그 내용",
      date: "2022.01.02",
      hash: "#맛집#추천#최고",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center h-full">
      {boardDummy.map((data, index) => {
        return (
          <Board
            key={index}
            title={data.title}
            content={data.content}
            date={data.date}
            hash={data.hash}
          />
        );
      })}
      <div className="flex w-2/3 justify-between">
        <ArrowBtn label="Next Posts" className="" />
        <ArrowBtn label="Prev Posts" className="" />
      </div>
    </div>
  );
};

export default Boards;
