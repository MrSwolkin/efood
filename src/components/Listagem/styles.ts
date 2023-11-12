import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListaContainer = styled.div`
  margin: 0 auto;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  list-style: none;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
