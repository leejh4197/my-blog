"use client";
import React, { useState, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const ToastEditor = () => {
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
    const editorIns = editorRef.current?.getInstance();
    const contentHtml = editorIns.getHTML();
    const contentMark = editorIns.getMarkdown();
    console.log(contentHtml);
    console.log(contentMark);
  };
  return (
    <div className="darkAndlight text-left">
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

      <button onClick={showContent}>제출</button>
    </div>
  );
};

export default ToastEditor;
