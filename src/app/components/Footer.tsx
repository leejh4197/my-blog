"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const totalPageHeight = document.body.scrollHeight;
      const scrollPoint = window.scrollY + window.innerHeight + 0.5;
      if (scrollPoint >= totalPageHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer
      className={`fixed bottom-0 flex flex-col items-center py-6 bg-bgLightColor border-t border-grayLine w-full ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex justify-between mb-5 w-64">
        <Image src="/github.svg" alt="깃허브 아이콘" width={50} height={50} />
        <Image src="/user.svg" alt="깃허브 아이콘" width={50} height={50} />
        <Image
          src="/instagram.svg"
          alt="깃허브 아이콘"
          width={50}
          height={50}
        />
      </div>
      <div className="text-center">&copy;JooHyeongLEE</div>
    </footer>
  );
};

export default Footer;
