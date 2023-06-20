import type { Meta, StoryObj } from '@storybook/angular';
import Selecter from './selecter.component';

const meta: Meta<Selecter> = {
  title: 'Example/Selecter',
  component: Selecter,
  tags: ['autodocs', 'selecter'],
  render: (args: Selecter) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<Selecter>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
