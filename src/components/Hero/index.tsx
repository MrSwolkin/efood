import { Link } from 'react-router-dom'
import fundo from '../../asset/images/fundo.png'
import logo from '../../asset/images/logo.png'

import * as S from './styles'

const Hero = () => (
  <S.Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <Link to="/">
      <S.Logo src={logo} alt="logo" />
    </Link>
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.Imagem>
)

export default Hero
