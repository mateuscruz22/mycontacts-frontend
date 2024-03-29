import PropTypes from 'prop-types'
import Spinner from '../Spinner'
import { StyledButton } from './styles'

export default function Button({
  children, type, disabled, isLoading, danger, onClick,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      danger={danger}
      onClick={onClick}
    >
      { !isLoading ? children : <Spinner size={16} /> }
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  danger: false,
  onClick: undefined,
}
