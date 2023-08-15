import React, { useState } from "react";

const Dots = () => {
  const initialColor = "#ffffff";
  const [bgColor, setBgColor] = useState(initialColor);
  const [positions, setPositions] = useState([]);
  const [isPainting, setIsPainting] = useState(false);
  const [count, setCount] = useState(0);
  const [penSize, setPenSize] = useState(20);

  const handleMouseDown = (e) => {
    setIsPainting(true);
    handlePainting(e);
  };

  const handleMouseUp = () => {
    setIsPainting(false);
  };

  const handleMouseLeave = () => {
    setIsPainting(false);
  };

  const handleMouseMove = (e) => {
    if (!isPainting) return;

    const x = e.clientX;
    const y = e.clientY;
    setPositions([...positions, { x, y, bgColor, penSize }]);
    setCount(count + 1);
  };

  const handlePainting = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setPositions([...positions, { x, y, bgColor, penSize }]);
    setCount(count + 1);
  };

  const handleChangeColor = (e) => {
    setBgColor(e.target.value);
  };

  const handlePenSize = (e) => {
    console.log(e.target.value);
    setPenSize(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <div className=" bg-orange-400 text-white fixed top-4 right-4 w-fit p-2 z-50">
        <p>Info : {count}</p>
        <div>
          <p>Select dot color</p>
          <input type="color" onChange={(event) => handleChangeColor(event)} />
          <input
            type="range"
            onChange={(event) => handlePenSize(event)}
            name="pen-size"
            min="10"
            max="40"
          />
        </div>
      </div>
      <div
        className="h-screen w-screen bg-slate-300"
        onMouseDown={(event) => handleMouseDown(event)}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
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
                penSize={positions.penSize}
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
  penSize,
  ...rest
}) => {
  return (
    <div
      className="bg-black w-10 h-10 rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all"
      style={{
        top: positionY,
        left: positionX,
        backgroundColor: bgColor,
        height: penSize,
        width: penSize,
      }}
      {...rest}
    >
      <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></p>
    </div>
  );
};

export default Dots;
