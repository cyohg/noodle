import React, { useState } from 'react';
import '../styles/HoverTitle.css';

const HoverTitle = ({text1, text2}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <span className="hovered-element">
            {text1}
        </span>
        {isHovered && <div className="displayed-element">{text2} &gt;</div>}
    </div>
  );
};

export default HoverTitle;