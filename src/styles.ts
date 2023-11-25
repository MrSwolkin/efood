import { createGlobalStyle } from 'styled-components'

export const color = {
  BgColor: '#FFF8F2',
  white: '#FFFFFF',
  lightPink: '#E66767',
  cream: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${color.BgColor};
    color: ${color.lightPink};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
