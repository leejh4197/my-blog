import React from "react";

interface BtnProps {
  label: string;
  className: string;
}

const ArrowBtn = ({ label, className }: BtnProps) => {
  return (
    <button className={`bg-yellow-300 p-6 mb-5 rounded-lg${className}`}>
      {label}
    </button>
  );
};

export default ArrowBtn;
