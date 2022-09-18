import PropTypes from 'prop-types'
import { Button } from '../Button'
import FormGroup from '../FormGroup'
import { Input } from '../Input'
import { Select } from '../Select'
import { ButtonContainer, Form } from './styles'

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input type="email" placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input type="tel" placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="categoria">Categoria</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
