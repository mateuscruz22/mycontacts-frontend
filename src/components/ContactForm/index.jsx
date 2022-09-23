import PropTypes from 'prop-types'
import { useState } from 'react'
import formatPhone from '../../utils/formatPhone'
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
  const {
    errors, setError, removeError, getErrorMessageByFielName,
  } = useErrors()

  const isFormValid = name && email && errors.length === 0

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
    setPhone(formatPhone(value))
  }

  function handleCategoryChange(value) {
    setCategory(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)} noValidate>
      <FormGroup error={getErrorMessageByFielName('name')}>
        <Input
          type="text"
          placeholder="Nome *"
          value={name}
          onChange={(event) => handleNameChange(event.target.value)}
          error={getErrorMessageByFielName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFielName('email')}>
        <Input
          type="email"
          placeholder="E-mail *"
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
          maxLength="15"
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
        <Button
          type="submit"
          disabled={!isFormValid}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
