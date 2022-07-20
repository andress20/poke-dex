import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from './index'

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const PokemonCard = Template.bind({})
PokemonCard.args = {
  title: 'Pokemon Name',
  image: '/vercel.svg',
}
