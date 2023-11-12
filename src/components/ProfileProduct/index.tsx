import {
  CardProductContainer,
  CardProducTitle,
  CardProductDescription,
  CardProductButton
} from './styled'

type Props = {
  image: string
  title: string
  description: string
}

const ProfileList = ({ image, title, description }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 111) {
      return description.slice(0, 110) + '...'
    }
  }
  return (
    <CardProductContainer>
      <img src={image} alt="" />
      <CardProducTitle>{title}</CardProducTitle>
      <CardProductDescription>
        {getDescription(description)}
      </CardProductDescription>
      <CardProductButton>Adicionar ao carrinho</CardProductButton>
    </CardProductContainer>
  )
}

export default ProfileList
