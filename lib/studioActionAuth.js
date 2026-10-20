import { timingSafeEqual } from 'crypto'

function configuredProjectId() {
    return (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '').replace(/^["']|["']$/g, '').trim()
}

export function studioSecretsMatch(expected, provided) {
    if (!expected || !provided) return false
    const left = Buffer.from(expected)
    const right = Buffer.from(provided)
    if (left.length !== right.length) return false
    return timingSafeEqual(left, right)
}

async function tokenCanAccessProject(token) {
    const projectId = configuredProjectId()
    if (!projectId || !token) return false

    const response = await fetch(`https://api.sanity.io/v2021-06-07/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
    })
    return response.ok
}

export async function isStudioActionAuthorized(request) {
    const expected = process.env.STUDIO_ACTION_SECRET || ''
    const provided = request.headers.get('x-studio-action-secret') || ''
    if (studioSecretsMatch(expected, provided)) return true

    const header = request.headers.get('authorization') || ''
    const token = header.startsWith('Bearer ') ? header.slice('Bearer '.length).trim() : ''
    if (!token) return false

    try {
        return await tokenCanAccessProject(token)
    } catch (error) {
        console.error('Studio action token check failed:', error)
        return false
    }
}

export function unauthorizedResponse() {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
}
