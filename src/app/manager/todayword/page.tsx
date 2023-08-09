import React from "react";

const TodayWord = () => {
  return (
    <div className="darkAndlight">
      <h1>오늘의 한마디</h1>
      <input className="border outline-none mr-3" type="text" />
      <button className="border rounded-lg p-1">허세버튼</button>
    </div>
  );
};

export default TodayWord;
