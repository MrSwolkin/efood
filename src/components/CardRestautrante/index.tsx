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
  infoTag: string[]
  title: string
  score: number
  description: string
  id: number
}

const Card = ({ title, infoTag, image, score, description, id }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 190) {
      return description.slice(0, 195) + '...'
    }
  }
  return (
    <CardContainer>
      <img src={image} alt="" />
      <Infos>
        {infoTag.map((info) => (
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
        <p>{getDescription(description)}</p>
        <ButtonLink to={`/ProductPage/${id}`}> Saiba mais</ButtonLink>
      </Conteudo>
    </CardContainer>
  )
}

export default Card
