import { useCallback } from 'react'
import ContactForm from '../../components/ContactForm'
import { PageHeader } from '../../components/PageHeader'
import ContactsService from '../../services/ContactsService'
import toast from '../../utils/toast'

export function NewContact() {
  const handleSubmit = useCallback(async (formData) => {
    try {
      await ContactsService.createContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      })

      toast('success', 'Contato cadastrado com sucesso!')
    } catch (error) {
      toast('danger', 'Ocorreu um erro ao cadastrar o contato!')
    }
  }, [])

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  )
}
