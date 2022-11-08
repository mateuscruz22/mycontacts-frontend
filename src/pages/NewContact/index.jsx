import { useCallback } from 'react'
import ContactForm from '../../components/ContactForm'
import { PageHeader } from '../../components/PageHeader'
import ContactsService from '../../services/ContactsService'

export function NewContact() {
  const handleSubmit = useCallback(async (formData) => {
    try {
      const response = await ContactsService.createContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      })

      console.log(response)
    } catch (error) {
      alert(error)
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
