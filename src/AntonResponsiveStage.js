import { Stage, Layer, Line, Circle } from "react-konva";
const AntonResponsiveStage = () => {
  // lets think you want to make all your objects visible in
  // 700x700 scene
  const CANVAS_VIRTUAL_WIDTH = 700;
  const CANVAS_VIRTUAL_HEIGHT = 700;
  const scale = Math.min(
    window.innerWidth / CANVAS_VIRTUAL_WIDTH,
    window.innerHeight / CANVAS_VIRTUAL_HEIGHT
  );
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      scaleX={scale}
      scaleY={scale}
      style={{ background: "lightgreen" }}
    >
      <Layer>
        {/*  shapeAr*/}
        {/*<Line*/}
        {/*  points={[*/}
        {/*    124, 139, 176, 114, 272, 112, 334, 139, 306, 156, 278, 166, 257,*/}
        {/*    181, 254, 222, 230, 252, 206, 202, 204, 172,*/}
        {/*  ]}*/}
        {/*  tension={0.4}*/}
        {/*  closed*/}
        {/*  fill={"red"}*/}
        {/*  strokeWidth={5}*/}
        {/*  draggable*/}
        {/*/>*/}
        <Circle
          x={window.innerWidth / 2}
          y={window.innerHeight / 2}
          fill={"red"}
          radius={100}
        />
      </Layer>
    </Stage>
  );
};
export default AntonResponsiveStage;
//https://stackoverflow.com/questions/49943763/responsive-canvas-with-react-and-konva
