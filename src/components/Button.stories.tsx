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
    },
    typeVariant: {
      name: 'Type',
      control: 'radio',
      options: ['primary', 'secondary', 'outline', 'transparent', 'error', 'success'],
    },
    label: {
      name: 'Label',
      control: 'text',
    },
    hasLeftIcon: {
      name: 'Icon Left',
      control: 'boolean',
    },
    hasRightIcon: {
      name: 'Icon Right',
      control: 'boolean',
    },
    isLoading: {
      name: 'Loading State',
      control: 'boolean',
    },
    disabled: {
      name: 'Disabled (Inactive)',
      control: 'boolean',
    },
    variant: { table: { disable: true } },
    size: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    children: { table: { disable: true } },
    isHovered: { table: { disable: true } },
    isFocused: { table: { disable: true } },
    isPressed: { table: { disable: true } },
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

export const AllTypes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} typeVariant="primary" label="Primary" />
      <Button {...args} typeVariant="secondary" label="Secondary" />
      <Button {...args} typeVariant="outline" label="Outline" />
      <Button {...args} typeVariant="transparent" label="Transparent" />
      <Button {...args} typeVariant="error" label="Error" />
      <Button {...args} typeVariant="success" label="Success" />
    </div>
  ),
};

export const FigmaStatesGrid: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '12px', fontWeight: 600 }}>Default:</span>
        <Button {...args} label="Default" />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '12px', fontWeight: 600 }}>Hover:</span>
        <Button {...args} label="Hover State" isHovered />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '12px', fontWeight: 600 }}>Focused:</span>
        <Button {...args} label="Focused State" isFocused />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '12px', fontWeight: 600 }}>Pressed:</span>
        <Button {...args} label="Pressed State" isPressed />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ width: '80px', fontSize: '12px', fontWeight: 600 }}>Inactive:</span>
        <Button {...args} label="Inactive State" disabled />
      </div>
    </div>
  ),
};
