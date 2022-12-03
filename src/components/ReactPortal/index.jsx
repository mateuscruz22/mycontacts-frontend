import PropTypes from 'prop-types'

export default function ReactPortal({ containerId }) {
  let container = document.getElementById(containerId)

  if (!container) {
    container = document.createElement('div')

    container.setAttribute('id', containerId)

    document.body.appendChild(container)
  }

  return document.getElementById(containerId)
}

ReactPortal.propTypes = {
  containerId: PropTypes.string.isRequired,
}
