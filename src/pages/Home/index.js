import { Blur, Container } from 'components/atoms';
import { Hero, Navbar, History, Clips, Discography, Merch } from 'components/organisms';
import { useParallaxPointer } from 'hooks';
import { useEffect } from 'react';
import { useRef } from 'react';

const Index = () => {
  const blurRef = useRef();
  const { setParallaxItem } = useParallaxPointer();
  useEffect(() => {
    setParallaxItem([blurRef.current]);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Container>
        <Blur color="primary" position="fixed" ref={blurRef} speed="12" size="800px"/>
        <Navbar/>
        <Hero/>
      </Container>
      <History/>
      <Clips/>
      <Discography/>
      <Merch/>
    </>
  )
}

export default Index
