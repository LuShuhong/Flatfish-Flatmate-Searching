import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "../Saved/Saved.css";
// import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const Saved: React.FC = () => {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<any>(null);

  const scrollTo = () => {
    smoother.current.scrollTo(".box-c", true, "center center");
  };
  useLayoutEffect(() => {
    if (main.current) {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
      ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: true,
      });
    }
  }, []);

  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <header className="header">
            <h2 className="title">GSAP ScrollSmoother in React</h2>
            <button className="button" onClick={scrollTo}>
              Jump to C
            </button>
          </header>
          <div className="box box-a gradient-blue" data-speed="0.5">
            a
          </div>
          <div className="box box-b gradient-orange" data-speed="0.8">
            b
          </div>
          <div className="box box-c gradient-purple" data-speed="1.5">
            c
          </div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};
