"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
const BoardEditor = () => {
  const [test, setTest] = useState("");
  const handleOnchange = (e: any) => {
    setTest(e);
  };
  console.log(test);
  return (
    <QuillNoSSRWrapper
      onChange={handleOnchange}
      className="h-96"
      modules={modules}
      formats={formats}
      theme="snow"
    />
  );
};

export default BoardEditor;
