import ToastMessage from '../ToastMessage'
import { Container } from './styles'

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="dafault toast" />
      <ToastMessage type="success" text="success toast" />
      <ToastMessage type="danger" text="error toast" />
    </Container>
  )
}
