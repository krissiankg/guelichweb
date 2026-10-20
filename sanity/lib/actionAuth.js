function readStoredStudioToken(projectId) {
    if (!projectId || typeof window === 'undefined') return ''
    try {
        const raw = window.localStorage.getItem(`__studio_auth_token_${projectId}`)
        if (!raw) return ''
        const parsed = JSON.parse(raw)
        return typeof parsed?.token === 'string' ? parsed.token : ''
    } catch {
        return ''
    }
}

export function studioActionHeaders(client) {
    const config = client?.config?.() || {}
    const token = config.token || readStoredStudioToken(config.projectId)
    const headers = { 'Content-Type': 'application/json' }
    if (token) headers.Authorization = `Bearer ${token}`

    const secret = process.env.NEXT_PUBLIC_STUDIO_ACTION_SECRET
    if (secret) headers['x-studio-action-secret'] = secret
    return headers
}

export function studioActionHasCredential(headers) {
    return Boolean(headers.Authorization || headers['x-studio-action-secret'])
}
