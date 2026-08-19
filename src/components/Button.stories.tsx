import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    brand: {
      name: 'Brand',
      control: 'select',
      options: ['TechCabal', 'Zikoko', 'TCi', 'BCM'],
      description: 'Select active brand theme',
    },
    typeVariant: {
      name: 'Type',
      control: 'radio',
      options: ['primary', 'secondary', 'outline', 'transparent'],
      description: 'Figma Component Type',
    },
    label: {
      name: 'Label',
      control: 'text',
      description: 'Button text label',
    },
    hasLeftIcon: {
      name: 'Icon Left',
      control: 'boolean',
      description: 'Toggle left icon',
    },
    hasRightIcon: {
      name: 'Icon Right',
      control: 'boolean',
      description: 'Toggle right icon',
    },
    isLoading: {
      name: 'Loading State',
      control: 'boolean',
      description: 'Toggle loading spinner',
    },
    disabled: {
      name: 'Disabled (Inactive)',
      control: 'boolean',
      description: 'Toggle inactive state',
    },
    // Hide internal/redundant props from the control table
    variant: { table: { disable: true } },
    size: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  args: {
    brand: 'TechCabal',
    typeVariant: 'primary',
    label: 'Button',
    hasLeftIcon: false,
    hasRightIcon: true,
    isLoading: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
