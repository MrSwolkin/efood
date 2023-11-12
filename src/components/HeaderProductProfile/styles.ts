import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const BannerImage = styled.div`
  width: 100%;
  height: 180px;
`
export const BannerContente = styled.div`
  display: flex;
  padding: 42px 0;
  justify-content: space-around;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  a {
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
  }
`
