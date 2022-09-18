import ContactForm from '../../components/ContactForm'
import Modal from '../../components/Modal'
import { PageHeader } from '../../components/PageHeader'

export function NewContact() {
  return (
    <>
      <Modal danger />

      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" />
    </>
  )
}
