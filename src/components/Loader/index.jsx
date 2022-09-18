import ReactDom from 'react-dom'
import { Overlay } from './styles'

export default function Modal() {
  return ReactDom.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  )
}
