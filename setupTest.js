import '@testing-library/jest/dom'

import { server } from '@mocks'
import { afterEach } from 'node:test'

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests.
// so they don't affect other requests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
