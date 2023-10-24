import { Imagem, Logo, Title } from './styles'
import fundo from '../../asset/images/fundo.png'
import logo from '../../asset/images/logo.png'

import { Link } from 'react-router-dom'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <Link to="/">
      <Logo src={logo} alt="logo" />
    </Link>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Imagem>
)

export default Hero
