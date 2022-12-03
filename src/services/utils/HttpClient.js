import APIError from '../../errors/APIError'

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  get(path, options) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    })
  }

  post(path, options) {
    return this.makeRequest(path, {
      method: 'POST',
      headers: options?.headers,
      body: options?.body,
    })
  }

  put(path, options) {
    return this.makeRequest(path, {
      method: 'PUT',
      headers: options?.headers,
      body: options?.body,
    })
  }

  delete(path, options) {
    return this.makeRequest(path, {
      method: 'DELETE',
      headers: options?.headers,
    })
  }

  async makeRequest(path, options) {
    const headers = new Headers()

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value)
      })
    }

    if (options.body) {
      headers.append('Content-Type', 'application/json')
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options.method,
      headers,
      body: JSON.stringify(options.body),
    })

    const contentType = response.headers.get('Content-Type')

    let reponseBody = null

    if (contentType?.includes('application/json')) {
      reponseBody = await response.json()
    }

    if (!response.ok) {
      throw new APIError(response, reponseBody)
    }

    return reponseBody
  }
}

export default HttpClient
