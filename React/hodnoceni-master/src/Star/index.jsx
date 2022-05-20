import React, { useState } from 'react';
import './style.css';

const Star = (onGlow) => {
  const [glowing, setGlowing] = useState(false);
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div className={starClass}
      onClick={()=>setGlowing(glowing===true?  false : true)}></div>
  );
};

export default Star;