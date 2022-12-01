import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import React, { StrictMode } from 'react'
import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/themes/default'
import { Container } from './styles'
import Header from '../Header'
import Routes from '../../Routes'
import ToastContainer from '../Toast/ToastContainer'

function App() {
  return (
    <BrowserRouter>
      <StrictMode>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />

          <ToastContainer />

          <Container>
            <Header />
            <Routes />
          </Container>
        </ThemeProvider>
      </StrictMode>
    </BrowserRouter>
  )
}

export default App
