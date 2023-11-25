import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { color } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${color.white};
  max-width: 480px;
  height: 398px;
  position: relative;
  border: solid 1px ${color.lightPink};
  border-top: none;

  img {
    width: 100%;
    height: 217px;
    max-height: 100%;
    object-fit: cover;
  }
`

export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`
export const Score = styled.div`
  widht: 60px;
  height: 21px;
  display: flex;
  font-size: 18px;
  font-weight: bold;

  img {
    margin-left: 8px;
    width: 21px;
  }
`

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  padding: 8px;
  padding-bottom: 8px;
  // border: solid 1px ${color.lightPink};
  // border-top: none;

  p {
    width: 456px;
    margin: 16px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`
export const ButtonLink = styled(Link)`
  max-width: 82px;
  font-size: 14px;
  background-color: ${color.lightPink};
  color: ${color.cream};
  font-weight: 700;
  padding: 4px 6px;
  margin-top: 16px;

  text-decoration: none;
`

export const Infos = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`
