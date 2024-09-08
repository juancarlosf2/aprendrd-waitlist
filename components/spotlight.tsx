"use client";

import React from "react";
import {
  m,
  useMotionValue,
  domAnimation,
  LazyMotion,
  useMotionTemplate,
} from "framer-motion";
import { cn } from "@nextui-org/theme";
import { CardProps } from "@nextui-org/card";

export default function Spotlight({ children, ...props }: CardProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const cardRef = React.useRef<HTMLDivElement>(null);

  function onMouseMove({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!cardRef?.current) return;

    let { left, top } = cardRef.current?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      {...props}
      ref={cardRef}
      className={cn(
        "group relative w-[420px] bg-inherit shadow-large",
        props.className
      )}
      onMouseMove={onMouseMove}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-250 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 40, 200, 0.2),
              transparent 80%
            )
          `, // <- Add your own color here
          }}
        />
      </LazyMotion>
      {children}
    </div>
  );
}
