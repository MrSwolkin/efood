import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${cores.branca};
  max-width: 480px;
  height: 400px;
  position: relative;
  border: solid 1px ${cores.salmao};
  border-top: none;

  img {
    width: 100%;
    height: 217px;
    max-height: 100%;
  }
`

export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
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
  background-color: ${cores.branca};
  padding: 8px;
  padding-bottom: 8px;

  p {
    width: 456px;
    margin: 16px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.salmao};
  color: ${cores.creme};
  font-weight: 700;
  padding: 4px 6px;
  margin-bottom: 8px;
  text-decoration: none;
`

export const Infos = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`
