import styled from 'styled-components'
import { cores } from '../../styles'

export const CardProductContainer = styled.div`
  width: 320px;
  height: 328px;
  display: block;
  padding: 8px;
  background-color: ${cores.salmao};

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`
export const CardProducTitle = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 18.75px;
  color: ${cores.creme};
  margin: 8px 0;
`
export const CardProductDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.creme};
`

export const CardProductButton = styled.button`
  display: flex;
  width: 304px;
  justify-content: center;
  background-color: ${cores.creme};
  padding: 4px 0;
  margin-top: 14px;
  border: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.salmao};
  cursor: pointer;
`
