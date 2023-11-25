import * as S from './styled'

type Props = {
  image: string
  title: string
  description: string
}

const ProfileList = ({ image, title, description }: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 111) {
      return text.slice(0, 110) + '...'
    }
  }
  return (
    <S.CardProductContainer>
      <img src={image} alt="" />
      <S.CardProducTitle>{title}</S.CardProducTitle>
      <S.CardProductDescription>
        {getDescription(description)}
      </S.CardProductDescription>
      <S.CardProductButton>Adicionar ao carrinho</S.CardProductButton>
    </S.CardProductContainer>
  )
}

export default ProfileList
