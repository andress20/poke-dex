import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PokemonButton } from './index'

export default {
  title: 'Atoms/Button',
  component: PokemonButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PokemonButton>

const Template: ComponentStory<typeof PokemonButton> = args => <PokemonButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
