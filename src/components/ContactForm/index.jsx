import PropTypes from 'prop-types'
import { useState } from 'react'
import isEmailValid from '../../utils/isEmailValid'
import { Button } from '../Button'
import FormGroup from '../FormGroup'
import useErrors from '../hooks/useErrors'
import { Input } from '../Input'
import { Select } from '../Select'
import { ButtonContainer, Form } from './styles'

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const { setError, removeError, getErrorMessageByFielName } = useErrors()

  function handleNameChange(value) {
    setName(value)

    if (!value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' })
    } else {
      removeError({ field: 'name' })
    }
  }

  function handleEmailChange(value) {
    setEmail(value)

    if (value && !isEmailValid(value)) {
      setError({ field: 'email', message: 'E-mail inválido.' })
    } else {
      removeError({ field: 'email' })
    }
  }

  function handlePhoneChange(value) {
    setPhone(value)
  }

  function handleCategoryChange(value) {
    setCategory(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <FormGroup error={getErrorMessageByFielName('name')}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => handleNameChange(event.target.value)}
          error={getErrorMessageByFielName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFielName('email')}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => handleEmailChange(event.target.value)}
          error={getErrorMessageByFielName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(event) => handlePhoneChange(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => handleCategoryChange(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
