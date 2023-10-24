import logo from '../../asset/images/logo.png'
import instagram from '../../asset/images/icons/instagram-icon.png'
import facebook from '../../asset/images/icons/facebook-icon.png'
import twitter from '../../asset/images/icons/twitter-icon.png'

import { Container, IconsContainer, LinkLogo } from './styles'

const Footer = () => (
  <Container>
    <LinkLogo to={'/'}>
      <img src={logo} alt="logo EFOOD" />
    </LinkLogo>
    <IconsContainer>
      <li>
        <a href="">
          <img src={instagram} alt="icone Instagram" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={facebook} alt="icone Facebook" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={twitter} alt="icone Twitter" />
        </a>
      </li>
    </IconsContainer>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
