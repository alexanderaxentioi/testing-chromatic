import { Story, Meta } from '@storybook/react/types-6-0'
import Test from '.'

export default {
  title: 'Test',
  component: Test
} as Meta

export const Default: Story = () => <Test />
