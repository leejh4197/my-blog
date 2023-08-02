import { useRouter } from "next/navigation";
import React from "react";

interface BtnProps {
  className: string;
  label: string;
  path: string;
}
const Navbutton = ({ className, label, path }: BtnProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/${path}`)}
      className={`hover:font-bold focus:font-bold ${className}`}
    >
      {label}
    </button>
  );
};

export default Navbutton;
