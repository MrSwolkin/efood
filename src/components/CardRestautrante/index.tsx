import iconStar from '../../asset/images/star.png'
import Tag from '../Tag'

import {
  CardContainer,
  Titulo,
  Conteudo,
  Infos,
  Score,
  ButtonLink
} from './styles'

type Props = {
  image: string
  infosTag: string[]
  title: string
  score: string
  description: string
}

const Card = ({ title, infosTag, image, score, description }: Props) => (
  <CardContainer>
    <img src={image} alt="" />
    <Infos>
      {infosTag.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Conteudo>
      <Titulo>
        <h4>{title}</h4>
        <Score>
          <h4>{score}</h4>
          <img src={iconStar} alt="estala amerela" />
        </Score>
      </Titulo>
      <p>{description}</p>
      <ButtonLink to={'/ProductPage'}> Saiba mais</ButtonLink>
    </Conteudo>
  </CardContainer>
)

export default Card
