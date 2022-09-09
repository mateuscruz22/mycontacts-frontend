import { ContactsList } from '../../components/ContactsList'
import { InputSearchContainer } from './styles'

export function Home() {
  return (
    <>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <ContactsList />
    </>
  )
}
