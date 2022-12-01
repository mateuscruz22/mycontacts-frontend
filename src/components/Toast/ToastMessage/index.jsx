import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Container } from './styles'
import CheckCircle from '../../../assets/images/icons/check-circle.svg'
import XCircle from '../../../assets/images/icons/x-circle.svg'

export default function ToastMessage({ message, onRemoveMessage }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id)
    }, message.duration || 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [message, onRemoveMessage])

  function handleRemoveToast() {
    onRemoveMessage(message.id)
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Container variant={message.type} onClick={handleRemoveToast}>
      {message.type === 'success' && <img src={CheckCircle} alt="Check" />}
      {message.type === 'danger' && <img src={XCircle} alt="X" />}
      <strong>{message.text}</strong>
    </Container>
  )
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf([
      'default',
      'success',
      'danger',
    ]),
    text: PropTypes.string.isRequired,
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
}
