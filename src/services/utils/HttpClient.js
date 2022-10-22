class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`)

    const contentType = response.headers.get('Content-Type')

    let body = null

    if (contentType.includes('application/json')) {
      body = await response.json()
    }

    if (!response.ok) {
      throw new Error(
        body?.error || `${response.status} - ${response.statusText}`,
      )
    }

    return body
  }

  async post(path, data) {
    return { path, data }
  }
}

export default HttpClient
