import { useState } from "react";
import dislike from '../images/dislike.png'
import like from '../images/like.png'
import thinking from '../images/thinking.png'


const SlideItem = ({ slide }) => {
  const [option, setOption] = useState("")

  const handleResponse = (text) => {
    setOption(text)
  }

  return <div className="item-wrapper"> 
            <div className="item">
              <h1>{slide.title} </h1>
            </div>
            <div className="item-res">
              {option && <span className="option">{option}</span>}
              <img src={like} onClick={() => handleResponse('Like')}/> 
              <img src={thinking} onClick={() => handleResponse('Average')}/> 
              <img src={dislike} onClick={() => handleResponse('Dislike')}/> 
            </div>
          </div>;
};

export default SlideItem;
