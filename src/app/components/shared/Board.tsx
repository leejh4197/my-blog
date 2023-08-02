import React from "react";

interface BoardTypes {
  title: string;
  content: string;
  date: string;
  hash: string;
}

const Board = ({ title, content, date, hash }: BoardTypes) => {
  return (
    <ul className="darkAndlight mb-5 border border-grayLine  w-2/3 h-full rounded-xl text-left p-3">
      <li>{title}</li>
      <li className="truncate">{content}</li>
      <div className="flex mt-5">
        <li>{date}</li>
        <li>{hash}</li>
      </div>
    </ul>
  );
};

export default Board;
