import { useState, useEffect } from "react";

const Counter = ({ count, setCount }) => {
  const onClickAdd = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Count 컴포넌트가 생성된 상태입니다."); //2

    if (count > 0) {
      console.log("Counter 업데이트 되었습니다."); //3
    }

    return () => {
      console.log("counter 제거");
    }; //1
  }, [count]); // 추적

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-4xl">{count}</div>
      <button
        onClick={onClickAdd}
        className="bg-red-500 px-4 py-2 rounded-2xl text-white font-bold mt-4"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
