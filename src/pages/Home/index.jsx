import { Link } from 'react-router-dom'
import {
  useEffect, useMemo, useState, useCallback,
} from 'react'
import {
  Card,
  Container,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
  SearchNotFoundContainer,
} from './styles'

import arrow from '../../assets/images/arrow.svg'
import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'
import sad from '../../assets/images/sad.svg'
import emptyBox from '../../assets/images/empty-box.svg'
import magnifierQuestion from '../../assets/images/magnifier-question.svg'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Loader from '../../components/Loader'
import ContactsService from '../../services/ContactsService'
import APIError from '../../errors/APIError'
import toast from '../../utils/toast'

export function Home() {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null)
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const filteredContacts = useMemo(() => contacts.filter((contact) => {
    const contactName = contact.name.toLowerCase()
    return contactName.startsWith(searchTerm.toLowerCase())
  }), [contacts, searchTerm])

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true)

      const contactsList = await ContactsService.listContacts(orderBy)

      setContacts(contactsList)

      setHasError(false)
    } catch (error) {
      setHasError(true)

      if (error instanceof APIError) {
        console.error(`${error.name}: ${error.message}`)
      } else {
        console.error(error)
      }
    } finally {
      setIsLoading(false)
    }
  }, [orderBy])

  useEffect(() => {
    loadContacts()
  }, [loadContacts])

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }
  function handleChangeSearchTerm(value) {
    setSearchTerm(value)
  }

  function handleTryAgain() {
    loadContacts()
  }

  function handleDeleteContact(contact) {
    setIsDeleteModalVisible(true)
    setContactBeingDeleted(contact)
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false)
    setContactBeingDeleted(null)
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true)

      await ContactsService.deleteContact(contactBeingDeleted.id)

      setContacts((prevState) => (
        prevState.filter((contact) => contact.id !== contactBeingDeleted.id)
      ))

      setIsLoadingDelete(false)

      setIsDeleteModalVisible(false)

      toast('success', 'Contato deletado com sucesso!')
    } catch {
      toast('danger', 'Ocorreu um erro ao deletar o contato!')
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        isLoading={isLoadingDelete}
        title={`Tem certeza que deseja remover o contato ${contactBeingDeleted?.name}?`}
        confirmLabel="Deletar"
        onCancel={() => handleCloseDeleteModal()}
        onConfirm={() => handleConfirmDeleteContact()}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquise pelo nome..."
            onChange={(event) => handleChangeSearchTerm(event.target.value)}
          />
        </InputSearchContainer>
      )}

      <Header hasError={hasError} isEmptyList={contacts.length === 0}>
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad" />

          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>

            <Button type="button" onClick={() => handleTryAgain()}>Tentar novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {(!hasError) && (
        <>
          {(contacts.length === 0 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="emptyBox" />
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão
                {' '}
                <strong>Novo contato</strong>
                {' '}
                à cima para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}

          {(contacts.length > 0 && filteredContacts.length === 0) && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier question" />

              <span>
                Nenhum resultado foi encontrado para
                {' '}
                <strong>{searchTerm}</strong>
              </span>
            </SearchNotFoundContainer>
          )}

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

                <button type="button" onClick={() => handleDeleteContact(contact)}>
                  <img src={trash} alt="Trash" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  )
}
