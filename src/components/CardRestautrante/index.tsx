import iconStar from '../../asset/images/star.png'
import Tag from '../Tag'

import * as S from './styles'

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
    <S.CardContainer>
      <img src={image} alt="" />
      <S.Infos>
        {infoTag.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Conteudo>
        <S.Titulo>
          <h4>{title}</h4>
          <S.Score>
            <h4>{score}</h4>
            <img src={iconStar} alt="estala amerela" />
          </S.Score>
        </S.Titulo>
        <p>{getDescription(description)}</p>
        <S.ButtonLink to={`/ProductPage/${id}`}> Saiba mais</S.ButtonLink>
      </S.Conteudo>
    </S.CardContainer>
  )
}

export default Card
