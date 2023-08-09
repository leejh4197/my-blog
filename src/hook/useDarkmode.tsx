"use client ";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

// 훅을 사용할 때 string, set함수 이므로 타입 정의를 해줘야함..
const useDarkmode = (): [string, Dispatch<SetStateAction<string>>] => {
  const isClient = typeof window !== "undefined";
  const [theme, setTheme] = useState(isClient && localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  // class에 dark를 넣고 뺀다
  useEffect(() => {
    console.log(window.document.body);
    // const root = window.document.documentElement;
    const root = window.document.body;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
};

export default useDarkmode;
