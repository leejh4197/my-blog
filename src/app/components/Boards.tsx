"use client";
import React, { useEffect, useState } from "react";
import Board from "./shared/Board";
import ArrowBtn from "./shared/ArrowBtn";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { collection, onSnapshot } from "firebase/firestore";
import { dbService } from "../util/fbase";

interface Content {
  id: string;
  title: string;
  content: string;
  time: string;
  briefContent: string;
  hash: string[];
}

const Boards = () => {
  const [contents, setContents] = useState<Content[]>([]);
  console.log(contents);
  useEffect(() => {
    onSnapshot(collection(dbService, "content"), (snapshot) => {
      const contentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Content[];
      setContents(contentArray);
    });
  }, []);
  const pathName = usePathname();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      {contents.map((data, index) => {
        return (
          <Link
            className="flex justify-center items-center w-full no-underline"
            key={index}
            href={`/blogpost/${data.id}`}
          >
            <Board
              key={index}
              title={data.title}
              content={data.briefContent}
              time={data.time}
              hash={data.hash}
            />
          </Link>
        );
      })}
      <div className="flex w-2/3 justify-between mb-5">
        <ArrowBtn label="Prev Posts" className="" />
        <ArrowBtn label="Next Posts" className="" />
      </div>
    </div>
  );
};

export default Boards;
