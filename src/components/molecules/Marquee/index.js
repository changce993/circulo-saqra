import { Container } from 'components/atoms';
import { Marque, Inner, Block, Text, TextContainer } from './styled';

const index = ({ title, children, ...props }) => {
  return (
    <Block {...props}>
      <Marque>
        <Inner>
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
        </Inner>
      </Marque>
      <TextContainer>
        <Container overflow="hidden">
          <Text>{children}</Text>
        </Container>
      </TextContainer>
    </Block>
  )
}

export default index
