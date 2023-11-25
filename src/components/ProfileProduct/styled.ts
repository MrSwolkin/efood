import styled from 'styled-components'
import { color } from '../../styles'

export const CardProductContainer = styled.div`
  width: 320px;
  height: 328px;
  display: block;
  padding: 8px;
  background-color: ${color.lightPink};

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
  color: ${color.cream};
  margin: 8px 0;
`
export const CardProductDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${color.cream};
`

export const CardProductButton = styled.button`
  display: flex;
  width: 304px;
  justify-content: center;
  background-color: ${color.cream};
  padding: 4px 0;
  margin-top: 14px;
  border: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: ${color.lightPink};
  cursor: pointer;
`
