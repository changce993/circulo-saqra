import { useState } from 'react'

const useParallaxPointer = () => {

  const [parallaxItem, setParallaxItem ] = useState([]);

  document.addEventListener("mousemove", parallax);

  function parallax(event) {
    parallaxItem.forEach((shift) => {
      const position = shift.getAttribute("speed");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  return {
    parallaxItem,
    setParallaxItem
  }
}

export default useParallaxPointer
