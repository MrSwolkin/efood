import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import lixo from '../../asset/images/icons/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }
`
export const CartItems = styled.li`
  display: flex;
  background-color: ${cores.creme};
  width: 344px;
  padding: 8px;
  max-width: 100%;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 900;
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }

  button {
    background-image: url(${lixo});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 16px;

  color: ${cores.creme};
`
export const CartButton = styled.button`
  max-width: 344px;
  height: 24px;
  width: 100%;
  padding: 4px;
  background-color: ${cores.creme};
  color: ${cores.salmao};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  border: none;
`
