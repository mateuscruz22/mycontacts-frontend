import PropTypes from 'prop-types'
import { Container } from './styles'
import CheckCircle from '../../../assets/images/icons/check-circle.svg'
import XCircle from '../../../assets/images/icons/x-circle.svg'

export default function ToastMessage({ type, text }) {
  return (
    <Container variant={type}>
      {type === 'success' && <img src={CheckCircle} alt="Check" />}
      {type === 'danger' && <img src={XCircle} alt="X" />}
      <strong>{text}</strong>
    </Container>
  )
}

ToastMessage.propTypes = {
  type: PropTypes.oneOf([
    'default',
    'success',
    'danger',
  ]),
  text: PropTypes.string.isRequired,
}

ToastMessage.defaultProps = {
  type: 'default',
}
