"use client"
import React, { useEffect } from "react";
import anime from "animejs";
import { useInView } from "react-intersection-observer";

interface FadeInOpacityProps {
  duration?: number;
  children: React.ReactNode;
  className: string;
  style?: string;
}

const FadeInOpacity: React.FC<FadeInOpacityProps> = ({
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
        easing: "easeOutQuad",
        duration: duration,
      });
    }
  }, [inView, duration, className]);

  return (
    <div ref={ref} className={`${className} ${style}`} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default FadeInOpacity;
