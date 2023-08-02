import Image from "next/image";
import React from "react";

const footer = () => {
  return (
    <footer className="flex flex-col items-center h-full py-6 bg-mainColor border-t border-grayLine  w-full">
      <div className="flex  justify-between mb-5 w-64">
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

export default footer;
