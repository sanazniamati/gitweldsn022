import React, { useState } from "react";
import { Rect, Layer, Stage } from "react-konva";

function KCanvas() {
  // Fixed stage size
  const SCENE_BASE_WIDTH = 500;
  const SCENE_BASE_HEIGHT = 500;

  // Max upscale
  var SCENE_MAX_WIDTH = 1024;
  var SCENE_MAX_HEIGHT = 768;
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
  const stageWidth =
    window.innerWidth % 2 !== 0 ? window.innerWidth - 1 : window.innerWidth;
  const stageHeight =
    window.innerHeight % 2 !== 0 ? window.innerHeight - 1 : window.innerHeight;
  const stageSize = { width: stageWidth, height: stageHeight };

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
        <Rect x={0} y={50} width={50} height={50} fill={"green"} />
        <Rect
          x={SCENE_BASE_WIDTH - 50}
          y={50}
          width={50}
          height={50}
          fill={"green"}
        />
        <Rect
          x={0}
          y={SCENE_BASE_HEIGHT - 250}
          width={50}
          height={50}
          fill={"red"}
        />
        <Rect
          x={SCENE_BASE_WIDTH - 50}
          y={SCENE_BASE_HEIGHT - 250}
          width={50}
          height={50}
          fill={"red"}
        />
      </Layer>
    </Stage>
  );
}

export default KCanvas;
