import React from "react";

interface BoardTypes {
  title: string;
  content: string;
  date: string;
  hash: string[];
}

const Board = ({ title, content, date, hash }: BoardTypes) => {
  return (
    <ul className="darkAndlight mb-5 border border-grayLine  w-2/3 h-auto rounded-xl text-left p-3">
      <li className="font-bold text-2xl">{title}</li>
      <li className="truncate font-semibold">{content}</li>
      <div className="flex mt-5">
        <li className="mr-4 text-gray-500">{date}</li>
        <li className="inline-block">
          {hash.map((data, index) => {
            return (
              <span key={index} className="border-b mr-2 text-gray-500">
                #{data}
              </span>
            );
          })}
        </li>
      </div>
    </ul>
  );
};

export default Board;
