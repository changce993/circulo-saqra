import { Logo } from 'components/atoms';
import { ChangeLang, Navigation } from 'components/molecules';
import { Container } from './styled';

const index = () => {
  return (
    <Container>
      <Logo/>
      <Navigation/>
      <ChangeLang/>
    </Container>
  )
}

export default index
