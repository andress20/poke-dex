import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dashboard from './index'

const pokemons = {
  images: [
    {
      name: 'charizard',
      url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
    },
    {
      name: 'butterfree',
      url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg',
    },
    {
      name: 'pidgey',
      url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg',
    },
  ],
}

export default {
  title: 'Organisms/Dashboard',
  component: Dashboard,
  argTypes: {},
} as ComponentMeta<typeof Dashboard>

const Template: ComponentStory<typeof Dashboard> = args => <Dashboard {...args} />

export const Default = Template.bind({})
Default.args = pokemons
