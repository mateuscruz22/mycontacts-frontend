import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import {
  Card, Container, Header, InputSearchContainer, ListHeader,
} from './styles'

import arrow from '../../assets/images/arrow.svg'
import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'

export function Home() {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('desc')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContacts = useMemo(() => contacts.filter((contact) => {
    const contactName = contact.name.toLowerCase()
    return contactName.startsWith(searchTerm.toLowerCase())
  }), [contacts, searchTerm])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
        setContacts(await response.json())
      } catch (error) {
        throw new Error(error.message)
      }
    })()
  }, [orderBy])

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }
  function handleChangeSearchTerm(value) {
    setSearchTerm(value)
  }

  return (
    <Container>
      <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquise pelo nome..."
          onChange={(event) => handleChangeSearchTerm(event.target.value)}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button className="sortButton" type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>

            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small href="/">{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  )
}
