"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

// const ToastEditorArrow = dynamic(() => import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });

const ToastEditor = () => {
  return <Editor />;
};

export default ToastEditor;
