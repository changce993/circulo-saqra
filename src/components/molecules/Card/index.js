import React from 'react';
import { Card, Image, Text } from './styled';

const index = ({ content }) => {
  return (
    <Card as="a" href={content.url}>
      <Image as={content.image}/>
      <Text>{content.title}</Text>
    </Card>
  )
}

export default index
