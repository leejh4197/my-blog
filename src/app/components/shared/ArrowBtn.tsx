import React from "react";

interface BtnProps {
  label: string;
  className: string;
}

const ArrowBtn = ({ label, className }: BtnProps) => {
  return (
    <button
      className={`border-grayLine border rounded-lg px-4 py-2 ${className}`}
    >
      {label}
    </button>
  );
};

export default ArrowBtn;
