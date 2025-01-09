"use client";
import React, { useEffect } from "react";
import anime from "animejs";
import { useInView } from "react-intersection-observer";

interface FadeInRightProps {
  duration?: number;
  children: React.ReactNode;
  className: string;
  style?: string;
}

const FadeInRight: React.FC<FadeInRightProps> = ({
  duration = 1000,
  children,
  className,
  style,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      anime({
        targets: `.${className}`,
        opacity: [0, 1],
        translateX: [100, 0], 
        easing: "easeOutQuad",
        duration: duration,
      });
    }
  }, [inView, duration, className]);

  return (
    <div
      ref={ref} 
      className={`${className} ${style}`}
      style={{ opacity: 0, transform: "translateX(100px)" }} 
    >
      {children}
    </div>
  );
};

export default FadeInRight;
