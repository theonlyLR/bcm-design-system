import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atomics/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    brand: {
      control: 'select',
      options: ['TC', 'Zkk', 'TCi', 'BCM'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l', 'xl'],
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'inactive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryTechCabal: Story = {
  args: {
    brand: 'TC',
    variant: 'primary',
    size: 'm',
    children: 'TechCabal Action',
  },
};

export const ZikokoVariant: Story = {
  args: {
    brand: 'Zkk',
    variant: 'primary',
    size: 'm',
    children: 'Zikoko Action',
  },
};

export const TechCabalInsightsVariant: Story = {
  args: {
    brand: 'TCi',
    variant: 'outline',
    size: 'm',
    children: 'Download Report',
  },
};

export const BCMParentBrand: Story = {
  args: {
    brand: 'BCM',
    variant: 'primary',
    size: 'l',
    children: 'Big Cabal Media',
  },
};
