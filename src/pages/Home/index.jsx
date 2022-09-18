import { Link } from 'react-router-dom'
import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles'

import arrow from '../../assets/images/arrow.svg'
import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'

export function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button className="sortButton" type="button">
            <span>Nome</span>

            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Araújo</strong>
              <small href="/">Instagram</small>
            </div>
            <span>mateuscruz22@gmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
