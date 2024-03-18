import { useCallback, useEffect, useState } from "react";
import SlideItem from "./SlideItem";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [cur, setCur] = useState(0);

  const len = slides.length;

  const leftHandle = (index) => {
    setCur(index);
  };

  const rightHandle = useCallback(() => {
    setCur(cur + 1 > len - 1 ? 0 : cur + 1);
  }, [cur, len]);

  useEffect(() => {
    // const interval = setTimeout(() => {
    //   rightHandle();
    // }, 1000);
    // return () => clearTimeout(interval);
  }, [rightHandle]);

  return (
    <>
       <div className="btns">
            {slides.map((item,index) => {
                return <span className={index === cur ? 'active' : ""} onClick={(event) => leftHandle(index)}></span>
            })}
        </div> 

      {slides.map((slide, index) => {
        return (
          <div key={index}>{cur === index && <SlideItem slide={slide} />}</div>
        );
      })}
    </>
  );
};

export default Carousel;
