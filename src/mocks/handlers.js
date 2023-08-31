import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/dashboard', (req, res, ctx) => {
    return rest(ctx.json({ message: 'here OK OK' }))
  }),
]
