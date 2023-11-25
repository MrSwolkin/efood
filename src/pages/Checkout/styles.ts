import styled from 'styled-components'
import { breakpoints, color } from '../../styles'

type ButtonProps = {
  marginTop?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const SideBar = styled.aside`
  background-color: ${color.lightPink};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }
`

export const CheckoutContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-visible {
    display: flex;
  }
`

export const FormContainer = styled.div`
  margin-top: 32px;
  padding: 0 8px;
  color: ${color.cream};
  display: block;

  h2 {
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
    margin-bottom: 16px;
  }
  input {
    width: 100%;
    padding: 8px;
    background-color: ${color.cream};
    border: 1px solid ${color.cream};

    &.error {
      border: 3px solid red;
    }

    &.cardCode {
      width: 87px;
      max-width: 100%;
    }

    &.cardNumber {
      width: 228px;
      max-width: 100%;
    }
  }

  label,
  input {
    display: block;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
`

export const SucessText = styled.div`
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 28px;
  }
`

export const SplitInputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;

  div {
    display: block;
  }
`

export const Button = styled.button<ButtonProps>`
  max-width: 344px;
  cursor: pointer;
  height: 24px;
  width: 100%;
  padding: 4px;
  background-color: ${color.cream};
  color: ${color.lightPink};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  border: none;
  margin-top: ${(props) => props.marginTop || '8px'}}
`
