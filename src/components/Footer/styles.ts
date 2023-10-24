import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled.footer`
  background-color: ${cores.creme};
  width: 100%;
  height: 300px;
  margin-top: 120px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 480px;
    display: flex;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
  }
`

export const IconsContainer = styled.ul`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;
  align-items; center;
  gap: 8px;

  li {
    list-style: none;
  }
`

export const LinkLogo = styled(Link)``
