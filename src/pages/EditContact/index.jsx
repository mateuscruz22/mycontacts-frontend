import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ContactForm from '../../components/ContactForm'
import { PageHeader } from '../../components/PageHeader'
import ContactsService from '../../services/ContactsService'
import Loader from '../../components/Loader'
import toast from '../../utils/toast'
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction'

export function EditContact() {
  const [isLoading, setIsloading] = useState(true)
  const [contactName, setContactName] = useState('')
  const { id } = useParams()
  const history = useHistory()
  const contactFormRef = useRef(null)
  const safeAsyncAction = useSafeAsyncAction()

  useEffect(() => {
    (async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id)

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValue(contact)

          setIsloading(false)

          setContactName(contact.name)
        })
      } catch {
        safeAsyncAction(() => {
          history.push('/')

          toast('danger', 'Contato não encontrado!')
        })
      }
    }())
  }, [id, history, safeAsyncAction])

  const handleSubmit = useCallback(async (formData) => {
    try {
      const contact = await ContactsService.updateContact(id, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      })

      setContactName(contact.name)

      toast('success', 'Contato editado com sucesso!')
    } catch {
      toast('danger', 'Ocorreu um erro ao editar o contato!')
    }
  }, [id])

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  )
}
