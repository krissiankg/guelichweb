import assert from 'node:assert/strict'
import test from 'node:test'
import { studioSecretsMatch } from './studioActionAuth.js'

test('accepts only the exact studio action secret', () => {
    assert.equal(studioSecretsMatch('secret-value', 'secret-value'), true)
    assert.equal(studioSecretsMatch('secret-value', 'secret-valuE'), false)
    assert.equal(studioSecretsMatch('secret-value', 'secret-value-extra'), false)
    assert.equal(studioSecretsMatch('', 'secret-value'), false)
    assert.equal(studioSecretsMatch('secret-value', ''), false)
})
