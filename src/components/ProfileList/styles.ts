import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ListContent = styled.div``

export const List = styled.ul`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  list-style: none;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const BotaoFechar = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;

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
  position: relative;
  max-width: 1024px;
  display: flex;
  z-index: 1;
  padding: 32px;
  background-color: ${cores.salmao};
  color: ${cores.creme};
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  > div {
    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
  }
`
export const DetailsModal = styled.div`
  display: flex;
  flex-direction: column;
  color: ${cores.branca};

  h3 {
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

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;

    h3 {
      text-align: center;
      font-size: 16px;
    }

    p,
    span {
      text-align: center;
    }
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
  cursor: pointer;
`
