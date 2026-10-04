const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim()
const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
  || window.location.hostname.match(/^(.*)-5173\.app\.github\.dev$/)?.[1]

export const API_BASE_URL = configuredApiBaseUrl || (
  import.meta.env.DEV
    ? ''
    : codespaceName
      ? `https://${codespaceName}-8000.app.github.dev`
      : 'http://localhost:8000'
)

export async function fetchCollection(path, signal) {
  const response = await fetch(`${API_BASE_URL}${path}`, { signal })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const payload = await response.json()

  if (Array.isArray(payload)) {
    return payload
  }

  if (payload && typeof payload === 'object') {
    for (const key of ['results', 'data', 'items']) {
      if (Array.isArray(payload[key])) {
        return payload[key]
      }
    }
  }

  throw new Error('The API response did not contain a collection.')
}
