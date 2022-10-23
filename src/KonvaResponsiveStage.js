import { Stage, Layer, Rect, Circle } from "react-konva";
import { useEffect, useRef } from "react";
import React, { useState } from "react";

const KonvaResponsiveStage = () => {
  const stageRef = useRef();
  const sceneWidth = 1000;
  const sceneHeight = 1000;
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const checkSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  const stageParent = document.querySelector("stageParent");
  const node = stageRef.current;

  // // now we need to fit stage into parent container
  // const containerWidth = stageParent.offsetWidth;
  //
  // // but we also make the full scene visible
  // // so we need to scale all objects on canvas
  // let scale = containerWidth / sceneWidth;
  // const stageWidth = sceneWidth * scale;
  // const stageHeight = sceneHeight * scale;
  // const stageScale = { x: scale, y: scale };
  return (
    <Stage
      // container={"stageParent"}
      width={window.innerWidth}
      height={window.innerHeight}
      // width={stageWidth}
      // height={stageHeight}
      // scale={stageScale}
      style={{ background: "lightyellow" }}
      ref={stageRef}
    >
      <Layer>
        <Circle
          radius={50}
          fill={"red"}
          x={sceneWidth / 2}
          y={sceneHeight / 2}
        />
        <Rect
          width={100}
          height={100}
          x={window.innerWidth - 100}
          y={window.innerHeight - 100}
          fill={"green"}
        />
      </Layer>
    </Stage>
  );
};
export default KonvaResponsiveStage;
