import React, { useEffect, useRef, useState } from "react";

const Dots = () => {
  //   const [positionX, setPositionX] = useState(0);
  //   const [positionY, setPositionY] = useState(0);

  //   1
  //   const [positions, setPositions] = useState([{ x: 0, y: 0 }]);
  // 2
  const initialColor = "#ffffff";
  const [bgColor, setBgColor] = useState(initialColor);
  const [positions, setPositions] = useState([]);
  const [count, setCount] = useState(0);

  //   press and hold
  const [counter, setCounter] = useState(100);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => stopCounter();
  }, []);

  const handleMouseDown = (e) => {
    startCounter();
    handleClick(e);
  };

  const handleMouseUp = () => {
    stopCounter();
  };

  const startCounter = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 10);
  };
  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleClick = (e) => {
    // const setpositionX = e.clientX;
    // const setpositionY = e.clientY;
    console.log("Click", e.clientX, e.clientY);
    // console.log(setpositionX, setpositionY);

    // 2
    // setPosition({ x: e.clientX, y: e.clientY });

    // 3
    const x = e.clientX;
    const y = e.clientY;
    setPositions([...positions, { x, y, bgColor }]);
    setCount(count + 1);
    // console.log(count);
  };

  const handleChangeColor = (e) => {
    console.log(e);
    setBgColor(e.target.value);
  };
  return (
    <div>
      <div className=" bg-orange-400 text-white fixed top-4 right-4 w-fit p-2 z-50 rounded-md">
        <p>Info : {count}</p>
        <div>
          <p>Select dot color</p>
          <input type="color" onChange={(event) => handleChangeColor(event)} />
        </div>
      </div>
      <h1
        onMouseDown={startCounter}
        onMouseUp={stopCounter}
        onMouseLeave={stopCounter}
      >
        {counter}
      </h1>
      <div
        className="h-screen w-screen bg-slate-300"
        onMouseDown={(event) => handleMouseDown(event)}
        onMouseUp={handleMouseUp}
      >
        <div>
          {positions.map((positions, index) => {
            return (
              <WhiteDot
                key={index}
                positionX={positions.x}
                positionY={positions.y}
                count={index}
                bgColor={positions.bgColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const WhiteDot = ({
  bgColor,
  count,
  positionX = 0,
  positionY = 0,
  ...rest
}) => {
  return (
    <div
      className="bg-black w-10 h-10 rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all"
      style={{ top: positionY, left: positionX, backgroundColor: bgColor }}
      {...rest}
    >
      <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {count}
      </p>
    </div>
  );
};

export default Dots;
