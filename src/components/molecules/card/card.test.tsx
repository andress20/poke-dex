import { render, screen } from '@testing-library/react'
import PokemonCard from './index'
// import { imagesDashboard } from '@mocks/mockData'
import { renderWithThemeProvider } from '@tests'

test('should render PokemonCard', () => {
  const pokemonCard = renderWithThemeProvider(<PokemonCard image="/pokeball-logo.png" title="first pokemon" />)
  // next step need to show how <Typografy> looks like in the DOM, I mean looks like h1 or p </Typografy>
  //   const pokemonTitle = await screen.findAllByRole
  expect(pokemonCard).toBeTruthy()
})
