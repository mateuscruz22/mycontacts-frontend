import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/themes/default'
import { Container } from './styles'
import Header from '../Header'
import Routes from '../../Routes'
import ToastContainer from '../Toast/ToastContainer'

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />

          <ToastContainer />

          <Container>
            <Header />
            <Routes />
          </Container>
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  )
}

export default App
