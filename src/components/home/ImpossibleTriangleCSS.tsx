import { CSSProperties } from "react";

interface ImpossibleTriangleCSSProps {
  duration?: number;
  scale?: number;
  colorX?: string;
  colorY?: string;
  colorZ?: string;
  className?: string;
}

export function ImpossibleTriangleCSS({
  duration = 8,
  scale = 1,
  colorX = "#8B0000",
  colorY = "#DC143C",
  colorZ = "#FFFFFF",
  className = "",
}: ImpossibleTriangleCSSProps) {
  const wrapperStyle = {
    "--triangle-duration": `${duration}s`,
    "--triangle-scale": scale,
    "--color-x": colorX,
    "--color-y": colorY,
    "--color-z": colorZ,
  } as CSSProperties;

  const Cube = () => (
    <div className="cube">
      <div className="face x" style={{ "--face-color": colorX } as CSSProperties} />
      <div className="face y" style={{ "--face-color": colorY } as CSSProperties} />
      <div className="face z" style={{ "--face-color": colorZ } as CSSProperties} />
    </div>
  );

  return (
    <div className={`impossible-triangle-wrapper ${className}`} style={wrapperStyle}>
      <div className="view">
        {/* Part 1 */}
        <div className="part">
          <div className="plane">
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <div className="static">
              <Cube />
              <Cube />
            </div>
          </div>
        </div>
        {/* Part 2 */}
        <div className="part">
          <div className="plane">
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <div className="static">
              <Cube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
