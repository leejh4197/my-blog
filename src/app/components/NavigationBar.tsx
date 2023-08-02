"use client";
import React, { useEffect, useState } from "react";
import Navbutton from "./shared/Navbutton";
import Image from "next/image";
import useDarkmode from "@/hook/useDarkmode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const NavigationBar = () => {
  const [own, setOwn] = useState(false);
  const [colorTheme, setTheme] = useDarkmode();
  const [darkSide, setDarkSide] = useState<boolean>(
    colorTheme === "dark" ? true : false
  );
  const handleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  useEffect(() => {
    const circleElement = document.querySelectorAll("svg circle");
    if (circleElement && circleElement.length >= 2) {
      const secondeCircle = circleElement[1];
      secondeCircle.setAttribute("fill", darkSide ? "#FFDB58" : "coral");
    }
  }, [darkSide]);
  return (
    <nav className="darkAndlight border-b border-grayLine flex w-full h-20 justify-between ">
      <Image src="/bloglogo.png" width={110} height={80} alt="로고 이미지 " />
      <div className="flex"></div>
      <div
        className={`flex items-center w-96 justify-between pr-10 lg:w-80 ${
          own == false && "lg:w-2/6"
        }`}
      >
        {own && (
          <>
            <Navbutton className="" label="write" path="write" />
            <Navbutton className="" label="manager" path="manager" />
          </>
        )}
        <DarkModeSwitch
          className="text-customYellow dark:text-mainColor"
          checked={darkSide}
          onChange={handleDarkMode}
          size={25}
        />
        <Navbutton path="tags" className="" label="tags" />
        <Navbutton path="about" className="" label="about" />
      </div>
    </nav>
  );
};

export default NavigationBar;
