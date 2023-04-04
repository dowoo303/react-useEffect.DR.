import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {toggle && <Counter count={count} setCount={setCount} />}
      {/* {toggle ? <Counter /> : "카운터"} */}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="bg-red-500 text-white m-2 px-4 py-2 font-black rounded-2xl text-lg"
      >
        버튼
      </button>
    </div>
  );
}

export default App;
