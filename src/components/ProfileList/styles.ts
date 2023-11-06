import styled from 'styled-components'
import { cores } from '../../styles'

export const ListContent = styled.div`
  cursor: pointer;
`

export const List = styled.ul`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  list-style: none;
`

export const BotaoFechar = styled.img`
  width: 16px;
  height: 16px;
  margin: 8px;
  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  height: 344px;
  display: flex;
  z-index: 1;

  background-color: ${cores.salmao};
  color: ${cores.creme};

  > div {
    img {
      width: 280px;
      height: 280px;
      margin: 32px;
      object-fit: cover;
    }
  }
`
export const DetailsModal = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 32px;
    font-size: 18px;
    font-weight: 900;
  }

  p,
  span {
    margin: 16px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`
export const ButtonModal = styled.button`
  max-width: 220px;
  height: 24px;
  padding: 4px 8px;
  background-color: ${cores.creme};
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.salmao};
`
