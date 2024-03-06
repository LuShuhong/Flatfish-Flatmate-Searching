import { useEffect, useState } from "react";

const INITIAL_OFFSET: number = -2;
const IMG_COUNT: number = 4;

export const SlideShow: React.FC = () => {
  const [imgNum, setImgNum] = useState<number>(INITIAL_OFFSET);
  const transition = () => {
    if (imgNum >= IMG_COUNT - 1) {
      setImgNum(() => 0);
    } else {
      setImgNum((num) => num + 1);
    }
  };
  useEffect(() => {
    setTimeout(transition, 5000);
  });
  console.log(imgNum);
  return (
    <div className="flex justify-center items-center w-2/5 h-5/6 m-2 bg-white bg-opacity-10 rounded-xl overflow-hidden">
      {imgNum === 0 ? (
        <div className="bg-bg1 bg-contain bg-no-repeat bg-center h-full w-full"></div>
      ) : imgNum === 1 ? (
        <div className="bg-bg2 bg-contain bg-no-repeat bg-center h-full w-full"></div>
      ) : imgNum === 2 ? (
        <div className="bg-bg3 bg-contain bg-no-repeat bg-center h-full w-full"></div>
      ) : (
        <div className="bg-bg4 bg-contain bg-no-repeat bg-center h-full w-full"></div>
      )}
    </div>
  );
};
