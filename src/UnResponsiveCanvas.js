import React from "react";
import { Rect, Layer, Stage } from "react-konva";

function UnResponsiveCanvas() {
  return (
    <Stage width={500} height={250} style={{ background: "lightblue" }}>
      <Layer>
        <Rect x={0} y={50} width={50} height={50} fill={"green"} />
        <Rect
          x={window.innerWidth - 150}
          y={50}
          width={50}
          height={50}
          fill={"black"}
        />
        <Rect
          x={0}
          y={window.innerHeight - 250}
          width={50}
          height={50}
          fill={"blue"}
        />
        <Rect
          x={window.innerWidth - 150}
          y={window.innerHeight - 250}
          width={50}
          height={50}
          fill={"red"}
        />
      </Layer>
    </Stage>
  );
}

export default UnResponsiveCanvas;
