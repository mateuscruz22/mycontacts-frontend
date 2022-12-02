import { useRef, useCallback } from 'react'
import ContactForm from '../../components/ContactForm'
import { PageHeader } from '../../components/PageHeader'
import ContactsService from '../../services/ContactsService'
import toast from '../../utils/toast'

export function NewContact() {
  const contactFormRef = useRef(null)

  const handleSubmit = useCallback(async (formData) => {
    try {
      await ContactsService.createContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      })

      contactFormRef.current.resetFields()

      toast('success', 'Contato cadastrado com sucesso!')
    } catch (error) {
      toast('danger', 'Ocorreu um erro ao cadastrar o contato!')
    }
  }, [])

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  )
}
