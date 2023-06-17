"use client";

import { FunctionComponent, useRef, useState } from "react";

interface iDifferenceProps {
  url: string;
  compressed?: string;
  raw?: string;
  width: number;
  height: number;
}

const Difference: FunctionComponent<iDifferenceProps> = ({
  url,
  raw,
  compressed,
  width,
  height,
}) => {
  const [split, setSplit] = useState<null | number>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const _handleMouseLeave = () => setSplit(null);
  const _handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = wrapper.current!.getBoundingClientRect();
    const x = e.clientX - left;
    const split = x / width;
    setSplit(split);
  };

  const percent = split !== null ? split * 100 : 0;
  return (
    <div
      ref={wrapper}
      className="w-full h-full relative overflow-hidden rounded-sm flex"
      onMouseLeave={_handleMouseLeave}
      onMouseMove={_handleMouseMove}
    >
      {compressed && (
        <img
          className="pointer-events-auto max-w-full max-h-full rounded-sm absolute inset-0"
          draggable={false}
          src={`/images/${compressed}`}
          alt=""
        />
      )}
      <img
        className="pointer-events-auto max-w-full max-h-full rounded-sm absolte inset-0 z-10"
        draggable={false}
        src={`/images/${url}`}
        alt=""
      />
      {raw && (
        <>
          <img
            draggable={false}
            style={{
              opacity: split !== null ? 1 : 0,
              clipPath: `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`,
            }}
            className="absolute inset-0 z-20"
            src={`/images${raw}`}
            alt=""
          />
          <div
            style={{ left: `${percent}%`, opacity: split !== null ? 1 : 0 }}
            className="z-20 opacity-50 left absolute top-0 bottom-0 border-l border-dashed border-grey-500"
          />
        </>
      )}
    </div>
  );
};

export default Difference;
