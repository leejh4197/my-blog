import { useRouter } from "next/navigation";
import React from "react";

interface BtnProps {
  className: string;
  label: string;
  path: string;
  own: boolean;
}
const Navbutton = ({ className, label, path, own }: BtnProps) => {
  const router = useRouter();
  const handleClick = () => {
    if (!own) {
      router.push("/404"); // 페이지가 없는 경우 404 페이지로 리다이렉션
    } else {
      router.push(`/${path}`);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`hover:font-bold focus:font-extrabold focus:text-lg ${className}`}
    >
      {label}
    </button>
  );
};

export default Navbutton;
