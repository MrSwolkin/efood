import { createGlobalStyle } from 'styled-components'

export const cores = {
  BgColor: '#FFF8F2',
  branca: '#FFFFFF',
  salmao: '#E66767',
  creme: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.BgColor};
    color: ${cores.salmao};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
