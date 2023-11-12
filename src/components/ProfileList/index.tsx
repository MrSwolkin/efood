import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ProfileProduct from '../ProfileProduct'
import fechar from '../../asset/images/icons/icon-close.png'
import {
  List,
  ListContent,
  Modal,
  ModalContent,
  DetailsModal,
  BotaoFechar,
  ButtonModal
} from './styles'
import { CardapioItem } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

interface modalState extends CardapioItem {
  isVisible: boolean
}
type Props = {
  items: CardapioItem[]
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProfileList = ({ items }: Props) => {
  const dispatch = useDispatch()
  const addToCart = (item: CardapioItem) => {
    dispatch(add(item))
    dispatch(open())
  }
  const [modal, setModal] = useState<modalState>({
    isVisible: false,
    id: 0,
    foto: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      id: 0,
      foto: '',
      nome: '',
      descricao: '',
      porcao: '',
      preco: 0
    })
  }

  return (
    <ListContent className="container">
      <List>
        {items.map((food) => (
          <li
            key={food.id}
            onClick={() =>
              setModal({
                isVisible: true,
                id: food.id,
                foto: food.foto,
                nome: food.nome,
                descricao: food.descricao,
                porcao: food.porcao,
                preco: food.preco
              })
            }
          >
            <ProfileProduct
              image={food.foto}
              title={food.nome}
              description={food.descricao}
            />
          </li>
        ))}
      </List>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent
          className="container
          "
        >
          <div>
            <img src={modal.foto} alt="" />
          </div>
          <DetailsModal>
            <h3>{modal.nome}</h3>
            <p>{modal.descricao}</p>
            <span>Serve: {modal.porcao}</span>
            <ButtonModal onClick={() => addToCart(modal)}>
              Adicionar ao carrinho - {formatPrice(modal.preco)}
            </ButtonModal>
          </DetailsModal>
          <BotaoFechar
            src={fechar}
            alt="botao fechar"
            onClick={() => closeModal()}
          />
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </ListContent>
  )
}

export default ProfileList
