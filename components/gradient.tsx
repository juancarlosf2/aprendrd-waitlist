import Image from "next/image";
import React from "react";

type Props = {};

function Gradient({}: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
      <div className="opacity-100">
        <Image
          alt=""
          className="object-fill top-0 left-0 h-full w-full absolute"
          height={1080}
          src="/gradient-gray-bg.webp"
          width={1920}
        />
      </div>
    </div>
  );
}

export default Gradient;
