import { useIntersectionObserver } from 'hooks';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Component } from './styled';

const Up = ({ children, delay, once = true, ...props }) => {
  const ref = useRef()
  const isIntersecting = useIntersectionObserver(ref);
  const [ inView, setInView ] = useState(false);

  useEffect(() => {
    if(isIntersecting){
      setInView(true)
    }
  }, [isIntersecting]);

  return (
    <Component
      ref={ref}
      isIntersecting={inView}
      delay={delay}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Up
