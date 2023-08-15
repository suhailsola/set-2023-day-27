import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState(null);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count >= 10) {
      setBgColor("red");
    }
  }, [count]);

  useEffect(() => {
    if (bgColor) {
      console.log("color changed");
    }
  }, [count]);
  return (
    // fragment, can also use div
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
      <h1>{count}</h1>
      <button onClick={handleClick} className=" border border-black p-4">
        +1
      </button>
      <div
        className=" flex h-[100px] w-[100px] bg-slate-300 justify-center items-center"
        style={{ backgroundColor: bgColor }}
      >
        Colour
      </div>
    </div>
  );
}

export default App;
