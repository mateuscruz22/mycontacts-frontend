class ContactsService {
  async listContacts(orderBy = 'desc') {
    const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)

    const json = await response.json()

    return json
  }
}

export default new ContactsService()
