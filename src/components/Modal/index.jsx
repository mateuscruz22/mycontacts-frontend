import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Button from '../Button'
import ReactPortal from '../ReactPortal'
import Spinner from '../Spinner'
import { Container, Overlay, Footer } from './styles'

export default function Modal({
  danger,
  visible,
  isLoading,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) {
  if (!visible) {
    return null
  }

  const container = ReactPortal('modal-root')

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{ title }</h1>

        <div className="modal-body">
          { children }
        </div>

        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
            disabled={isLoading}
          >
            { cancelLabel }
          </button>

          <Button
            type="button"
            onClick={onConfirm}
            danger={danger}
          >
            { !isLoading ? confirmLabel : <Spinner /> }
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    container,
  )
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  danger: false,
  isLoading: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
}
