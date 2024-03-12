// import React from "react";
// import data from "../../data.json"; // Import data from JSON file
// import { Person } from "../../util/person";

import { Cards } from "../../components/Cards/Cards";

// export const Saved: React.FC = () => {
//   return (
//     <>
//       <div className="card-ctn flex h-full overflow-x-auto">
//         {data.map((savedPerson: Person, index: number) => (
//           <div
//             key={index}
//             className="card w-64 border bg-white rounded-lg shadow-md mx-2"
//           >
//             <p>age: {savedPerson.age}</p>
//             <p>job title: {savedPerson.job_title}</p>
//             <p>instagram: {savedPerson.instagram}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Saved;

// import React from "react";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// import image1 from "../../img/mainBackground1.jpeg";
// import image2 from "../../img/mainBackground2.jpeg";
// import image3 from "../../img/mainBackground3.webp";
// import image4 from "../../img/mainBackground4.jpeg";
// import image5 from "../../img/personimg.jpeg";
// import "../Saved/Saved.css";

// export const Saved: React.FC = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const sliderWrapperRef = useRef<HTMLDivElement>(null);
//   const markerWrapperRef = useRef<HTMLDivElement>(null);
//   const activeSlideRef = useRef<HTMLDivElement>(null);

//   const [target, setTarget] = useState(0);
//   const [current, setCurrent] = useState(0);
//   const [maxScroll, setMaxScroll] = useState(0);
//   const ease = 0.075;

//   const lerp = (start: number, end: number, factor: number): number => {
//     return start + (end - start * factor);
//   };

//   const updateActiveSliderNumber = (
//     markerMove: number,
//     markerMaxMove: number
//   ) => {
//     const partWidth = markerMaxMove / 10;
//     let currentPart = Math.round(markerMove - 70) / partWidth + 1;
//     currentPart = Math.min(10, currentPart);
//     if (activeSlideRef.current) {
//       activeSlideRef.current.textContent = `${currentPart}/10`;
//     }
//   };

//   const update = () => {
//     setCurrent((prevCurrent) => lerp(prevCurrent, target, ease));
//     gsap.set(sliderWrapperRef.current, {
//       x: -current,
//     });

//     let moveRatio = current / maxScroll;
//     let markerMaxMove =
//       window.innerWidth - markerWrapperRef.current!.offsetWidth - 170;
//     let markerMove = 70 + moveRatio * markerMaxMove;
//     gsap.set(markerWrapperRef.current, {
//       x: markerMove,
//     });

//     updateActiveSliderNumber(markerMove, markerMaxMove);
//     requestAnimationFrame(update);
//   };

//   useEffect(() => {
//     if (sliderWrapperRef.current && sliderRef.current) {
//       setMaxScroll(
//         sliderWrapperRef.current.offsetWidth - sliderRef.current.offsetWidth
//       );
//     }
//     update();
//   }, []);

//   useEffect(() => {
//     const resizeHandler = () => {
//       if (sliderWrapperRef.current) {
//         setMaxScroll(sliderWrapperRef.current.offsetWidth - window.innerWidth);
//       }
//     };
//     window.addEventListener("resize", resizeHandler);
//     return () => {
//       window.removeEventListener("resize", resizeHandler);
//     };
//   }, []);

//   useEffect(() => {
//     const wheelHandler = (e: WheelEvent) => {
//       setTarget((prevTarget) =>
//         Math.min(maxScroll, Math.max(0, prevTarget + e.deltaY))
//       );
//     };
//     window.addEventListener("wheel", wheelHandler);
//     return () => {
//       window.removeEventListener("wheel", wheelHandler);
//     };
//   }, [maxScroll]);

//   return (
//     <>
//       <div className="nav">
//         <div>
//           <div>Codegrid</div>
//           <div>One block at a time</div>
//         </div>
//         <div>est 2024</div>
//       </div>
//       <div className="marker-wrapper" ref={markerWrapperRef}>
//         <div className="marker">
//           <div className="grab"></div>
//         </div>
//         <div className="active-slide" ref={activeSlideRef}>
//           1/10
//         </div>
//       </div>
//       <div className="slider" ref={sliderRef}>
//         <div className="slider-wrapper" ref={sliderWrapperRef}>
//           <div className="slide">
//             <img src={image1} alt="first image" />
//           </div>
//           <div className="slide">
//             <img src={image2} alt="second image" />
//           </div>
//           <div className="slide">
//             <img src={image3} alt="third image" />
//           </div>
//           <div className="slide">
//             <img src={image4} alt="fourth image" />
//           </div>
//           <div className="slide">
//             <img src={image5} alt="fifth image" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import image1 from "../../img/mainBackground1.jpeg";
// import image2 from "../../img/mainBackground2.jpeg";
// import image3 from "../../img/mainBackground3.webp";
// import image4 from "../../img/mainBackground4.jpeg";
// import image5 from "../../img/personimg.jpeg";
// import image6 from "../../img/O-O.jpeg";
// import image7 from "../../img/cat.jpeg";
// import image8 from "../../img/funcat.jpeg";
// import image9 from "../../img/jell.jpeg";
// import image10 from "../../img/wetcat.jpeg";
// import "../Saved/Saved.css";
// gsap.registerPlugin(ScrollTrigger);
// export const Saved: React.FC = () => {
//   const main = useRef<any>();

//   useEffect(() => {
//     const slides = gsap.utils.toArray<any>(".slide");
//     slides.forEach((slide) => {
//       gsap.to(slide, {
//         x: 150,
//         scrollTrigger: {
//           trigger: slide,
//           start: "top top",
//           end: "bottom 90%",
//           scrub: true,
//           markers: true,
//         },
//       });
//     });
//   }, []); // Run only once after the component mounts

//   return (
//     <>
//       <div className="nav">
//         <div>
//           <div>Codegrid</div>
//           <div>One block at a time</div>
//         </div>
//         <div>est 2024</div>
//       </div>
//       {/* <div className="marker-wrapper">
//         <div className="marker">
//           <div className="grab"></div>
//         </div>
//         <div className="active-slide">1/10</div>
//       </div> */}
//       <div className="slider">
//         <div className="slider-wrapper flex-center column">
//           <div className="slide">
//             <img src={image1} alt="first image" />
//           </div>
//           <div className="slide">
//             <img src={image2} alt="second image" />
//           </div>
//           <div className="slide">
//             <img src={image3} alt="third image" />
//           </div>
//           {/* <div className="slide">
//             <img src={image4} alt="fourth image" />
//           </div>
//           <div className="slide">
//             <img src={image5} alt="fifth image" />
//           </div>
//           <div className="slide">
//             <img src={image6} alt="fifth image" />
//           </div>
//           <div className="slide">
//             <img src={image7} alt="fifth image" />
//           </div>
//           <div className="slide">
//             <img src={image8} alt="fifth image" />
//           </div>
//           <div className="slide">
//             <img src={image9} alt="fifth image" />
//           </div>
//           <div className="slide">
//             <img src={image10} alt="fifth image" /> */}
//           {/* </div> */}
//         </div>
//       </div>
//     </>
//   );
// };
import "../Saved/Saved.css";
import data from "../../data.json";
import { Profile } from "../../util/interfaces/Profile";

export const Saved: React.FC = () => {
  return (
    <div className="flex justify-center align-center h-full w-full">
      {data.map((savedPerson: Profile, index: number) => (
        <Cards
          userId={savedPerson.userId}
          name={savedPerson.name}
          age={savedPerson.age} // Parse age as a number
          jobTitle={savedPerson.jobTitle}
          description={savedPerson.description}
          email={savedPerson.email}
          userGender={savedPerson.userGender}
          userInsta={savedPerson.userInsta}
        />
      ))}
    </div>
  );
};
