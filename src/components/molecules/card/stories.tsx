import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from './index'

const pokemons = {
  charizard: {
    name: 'charizard',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
  },
  butterfree: {
    name: 'butterfree',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg',
  },
  pidgey: {
    name: 'pidgey',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg',
  },
}

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Charizard = Template.bind({})
Charizard.args = {
  title: pokemons.charizard.name,
  image: pokemons.charizard.url,
}

export const Butterfree = Template.bind({})
Butterfree.args = {
  title: pokemons.butterfree.name,
  image: pokemons.butterfree.url,
}

export const Pidgey = Template.bind({})
Pidgey.args = {
  title: pokemons.pidgey.name,
  image: pokemons.pidgey.url,
}
