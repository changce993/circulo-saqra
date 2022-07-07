import { Container } from './styled';
import { Icon } from 'components/atoms';

import { ReactComponent as Whatsapp } from 'assets/icons/whatsapp.svg';
import { ReactComponent as Spotify } from 'assets/icons/spotify.svg';
import { ReactComponent as Youtube } from 'assets/icons/youtube.svg';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as Mail } from 'assets/icons/mail.svg';

const index = () => {
  const rrss = [
    {Icon: Whatsapp, alt: "Whatsapp"},
    {Icon: Spotify, alt: "Spotify"},
    {Icon: Youtube, alt: "Youtube"},
    {Icon: Facebook, alt: "Facebook"},
    {Icon: Instagram, alt: "Instagram"},
    {Icon: Mail, alt: "Mail"},
  ];

  return (
    <Container>
      {rrss.map(item => <Icon as={item.Icon} alt={item.alt} key={item.alt}/>)}
    </Container>
  )
}

export default index
