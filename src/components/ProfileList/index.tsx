import { useState } from 'react'
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

type Props = {
  items: CardapioItem[]
}
interface modalState extends CardapioItem {
  isVisible: boolean
}

const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProfileList = ({ items }: Props) => {
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
        <ModalContent>
          <div>
            <img src={modal.foto} alt="" />
          </div>
          <DetailsModal>
            <h3>{modal.nome}</h3>
            <p>{modal.descricao}</p>
            <span>Serve: {modal.porcao}</span>
            <ButtonModal>
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
