"use client";
import React, { useState, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../util/fbase";
import { useRouter } from "next/navigation";

declare interface Date {
  getFullYear(): number;
  getMonth(): number;
  getDate(): number;
  getDay(): number;
}

const ToastEditor = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [briefContent, setBriefContent] = useState("");

  const contentOnchange = (e: any) => {
    const name = e.target.name;
    if (name === "title") {
      setTitle(e.target.value);
    } else {
      setBriefContent(e.target.value);
    }
  };
  const editorRef = useRef<Editor | null>(null);
  const toolbarItems = [
    ["heading", "bold", "italic"],
    ["hr"],
    ["ul", "ol", "task"],
    ["link"],
    ["image"],
    ["code"],
    ["scrollSync"],
    ["codeblock"],
  ];
  const showContent = () => {
    if (title !== "" && editorRef.current?.getInstance().getMarkdown() !== "") {
      if (confirm("저장할꺼니 주형아 ?")) {
        const editorIns = editorRef.current?.getInstance();
        const contentHtml = editorIns.getHTML();
        const contentMark = editorIns.getMarkdown();

        const contentRef = collection(dbService, "content");
        addDoc(contentRef, {
          title: title,
          content: contentHtml,
          time: today,
          briefContent: briefContent,
          hash: [13, 123, 123],
        });
        router.push("/");
      }
      return;
    } else {
      alert("제목 내용 입력 필수");
    }
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const nowTime = new Date();
  const year = nowTime.getFullYear(); // 년도
  const date = nowTime.getDate(); // 날짜
  const time = nowTime.getHours();
  const monthIndex = new Date().getMonth();
  const month = months[monthIndex];
  const today = year + "." + month + "." + date + "/" + time + "시";
  return (
    <div className="darkAndlight text-left">
      <div className="flex flex-col">
        <input
          name="title"
          className=" w-1/2 border-2 outline-none darkAndlight"
          type="text"
          onChange={contentOnchange}
        />
        <input
          name="briefcontent"
          className=" w-1/2 border-2 outline-none darkAndlight"
          type="text"
          onChange={contentOnchange}
        />
      </div>
      <Editor
        initialEditType="markdown"
        initialValue=""
        ref={editorRef}
        hideModeSwitch={true}
        height="500px"
        theme={""}
        usageStatistics={false}
        toolbarItems={toolbarItems}
      />

      <button
        className="px-3 py-2 rounded-lg border mt-4"
        onClick={showContent}
      >
        글쓰기
      </button>
    </div>
  );
};

export default ToastEditor;
