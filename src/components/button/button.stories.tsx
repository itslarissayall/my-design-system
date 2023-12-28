import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    type: 'primary',
    children: 'Button',
    size: 'md',
    colorMode: 'dark',
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    children: 'Button',
    size: 'md',
    colorMode: 'dark',
  },
};

export const Large = {
  args: {
    type: 'primary',
    children: 'Button',
    size: 'lg',
    colorMode: 'dark',
  },
};

export const Small = {
  args: {
    children: 'Button',
    size: 'sm',
  },
};
