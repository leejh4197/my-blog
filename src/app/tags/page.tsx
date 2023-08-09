import Link from "next/link";
import React from "react";

const Tags = () => {
  const tag = [
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
    "#태그",
  ];
  return (
    <div className="darkAndlight flex flex-col justify-center items-center h-full">
      <h1>Tag</h1>
      <div className=" w-1/2 p-3 h-full">
        {tag.map((tg, index) => {
          return (
            <Link
              href="/"
              key={index}
              className="mr-2 mb-5 darkAndlight border p-1 inline-block"
            >
              {tg}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
