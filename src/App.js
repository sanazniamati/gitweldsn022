import KCanvas from "./KCanvas";
import { Stage, Layer, Line } from "react-konva";

const App = () => {
  return <KCanvas />;
  // lets think you want to make all your objects visible in
  // 700x700 scene
  // const CANVAS_VIRTUAL_WIDTH = 700;
  // const CANVAS_VIRTUAL_HEIGHT = 700;
  // const scale = Math.min(
  //   window.innerWidth / CANVAS_VIRTUAL_WIDTH,
  //   window.innerHeight / CANVAS_VIRTUAL_HEIGHT
  // );
  // return (
  //   <div>
  //     <Stage
  //       width={window.innerWidth}
  //       height={window.innerHeight}
  //       scaleX={scale}
  //       scaleY={scale}
  //       style={{ background: "pink" }}
  //     >
  //       <Layer>
  //         <Line
  //           x={100}
  //           y={100}
  //           points={[
  //             0, 0, 576, 456, 509, 403, 20, 15, 300, 207, 111, 222, 293, 177,
  //           ]}
  //           stroke="black"
  //           strokeWidth={5}
  //           // ref="line"
  //         />
  //       </Layer>
  //     </Stage>
  //   </div>
  // );
};
export default App;
