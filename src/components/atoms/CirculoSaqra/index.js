import CirculoSaqra from 'assets/decorators/CirculoSaqra.png';
import CS from 'assets/brand/logo.png';
import { CircleDecorator, SaqraImage, Container, Content } from './styled';

const index = () => {
  return (
    <Container>
      <Content>
        <CircleDecorator src={CirculoSaqra} alt="Circulo Saqra"/>
        <SaqraImage src={CS} alt="Circulo Saqra"/>
      </Content>
    </Container>
  )
}

export default index
