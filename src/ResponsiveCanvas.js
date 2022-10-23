import React, { useState } from "react";
import { Rect, Layer, Stage, Circle } from "react-konva";

function ResponsiveCanvas() {
  // Fixed stage size
  const SCENE_BASE_WIDTH = 800;
  const SCENE_BASE_HEIGHT = 700;

  // Max upscale
  const SCENE_MAX_WIDTH = 1024;
  const SCENE_MAX_HEIGHT = 600;
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const checkSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  // const stageWidth =
  //   window.innerWidth % 2 !== 0 ? window.innerWidth - 1 : window.innerWidth;
  // const stageHeight =
  //   window.innerHeight % 2 !== 0 ? window.innerHeight - 1 : window.innerHeight;
  // const stageSize = { width: stageWidth, height: stageHeight };
  const stageSize = { width: size.width, height: size.height };

  const scaleX = Math.min(stageSize.width, SCENE_MAX_WIDTH) / SCENE_BASE_WIDTH;

  const scaleY =
    Math.min(stageSize.height, SCENE_MAX_HEIGHT) / SCENE_BASE_HEIGHT;

  const minRatio = Math.min(scaleX, scaleY);
  const scale = { x: minRatio, y: minRatio };

  const stagePos = {
    x: (stageSize.width - SCENE_BASE_WIDTH * minRatio) * 0.5,
    y: (stageSize.height - SCENE_BASE_HEIGHT * minRatio) * 0.5,
  };

  return (
    <Stage
      size={stageSize}
      scale={scale}
      position={stagePos}
      style={{ background: "lightpink" }}
    >
      <Layer>
        {/*<Circle*/}
        {/*  x={stageSize.width / 2}*/}
        {/*  y={stageSize.height / 2}*/}
        {/*  fill={"red"}*/}
        {/*  radius={100}*/}
        {/*/>*/}
        <Rect x={100} y={50} width={50} height={50} fill={"green"} />
        <Rect
          x={stageSize.width - 150}
          y={50}
          width={50}
          height={50}
          fill={"yellow"}
        />
        <Rect
          x={100}
          y={stageSize.height - 350}
          width={50}
          height={50}
          fill={"blue"}
        />
        <Rect
          x={stageSize.width - 150}
          y={stageSize.height - 350}
          width={50}
          height={50}
          fill={"red"}
        />
      </Layer>
    </Stage>
  );
}

export default ResponsiveCanvas;
