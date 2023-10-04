"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import HomeReno from "@/app/BA.jpeg";
import gsap from "gsap";

export default function InfiniteSlide() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1;
  };

  return (
    <div className="absolute px-10 inset-0">
      <main className="relative flex h-screen overflow-hidden">
        <div className="absolute top-[calc(100vh-350px)] text-neutral-100 opacity-25 -z-10">
          <div ref={slider} className="relative whitespace-nowrap slider">
            <p ref={firstText}>Let's Grow Together -</p>
            <p ref={secondText}>Let's Grow Together -</p>
          </div>
        </div>
      </main>
    </div>
  );
}
