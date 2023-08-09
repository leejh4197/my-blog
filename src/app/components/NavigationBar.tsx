"use client";
import React, { useEffect, useState } from "react";
import Navbutton from "./shared/Navbutton";
import Image from "next/image";
import useDarkmode from "@/hook/useDarkmode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useRouter } from "next/navigation";

const NavigationBar = () => {
  const router = useRouter();
  // 임시 데이터
  const [own, setOwn] = useState(false);
  const [colorTheme, setTheme] = useDarkmode();
  const [darkSide, setDarkSide] = useState<boolean>(
    colorTheme === "dark" ? true : false
  );
  // const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  // [MARK] : 스크롤 값이 50이하 일 경우에 애니메이션을 걸어 보지이지 않도록 하였다.
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll < 50);
      // setPrevScroll(currentScroll);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // [MARK] : 다크모드 해, 달 커스텀 직접 DOM에 접근하는 방법을 사용했다.
  useEffect(() => {
    const circleElement = document.querySelectorAll("svg circle");
    if (circleElement && circleElement.length >= 2) {
      const secondeCircle = circleElement[1];
      secondeCircle.setAttribute("fill", darkSide ? "#FFDB58" : "coral");
    }
  }, [darkSide]);
  return (
    <nav
      className={`sticky top-0 darkAndlight border-b border-grayLine flex w-full h-20 justify-between ${
        visible ? "opacity-100 " : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 transform`}
    >
      <Image
        onClick={() => {
          router.push("/");
        }}
        src="/bloglogo.png"
        width={110}
        height={80}
        alt="로고 이미지 "
      />
      <div
        className={`flex items-center w-96 justify-between pr-10 lg:w-80 ${
          !own && "lg:w-2/6"
        }`}
      >
        {own && (
          <>
            <Navbutton
              className=""
              label="write"
              path="manager/write"
              own={own}
            />
            <Navbutton
              className=""
              label="오늘의 한마디"
              path="manager/todayword"
              own={own}
            />
          </>
        )}
        <DarkModeSwitch
          className="text-customYellow dark:text-mainColor"
          checked={darkSide}
          onChange={handleDarkMode}
          size={25}
        />
        <Navbutton path="tags" className="" label="tags" own={true} />
        <Navbutton path="about" className="" label="about" own={true} />
      </div>
    </nav>
  );
};

export default NavigationBar;
