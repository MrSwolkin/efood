import styled from 'styled-components'
import { breakpoints, color } from '../../styles'

export const ContainerProfile = styled.div`
  max-width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &:: after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background-color: rgba(0, 0, 0, 0.6);
  }
`
export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 160px;
  padding-top: 24px;
  padding-bottom: 24px;
  color: ${color.white};
  font-size: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }

  span {
    font-weight: 100;
    z-index: 1;
  }

  h3 {
    font-weight: 900;
    z-index: 1;
  }
`
