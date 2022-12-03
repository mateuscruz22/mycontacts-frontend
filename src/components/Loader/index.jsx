import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import { Overlay } from './styles'
import Spinner from '../Spinner'
import ReactPortal from '../ReactPortal'

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null
  }

  const container = ReactPortal('loader-root')

  return ReactDom.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    container,
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}
