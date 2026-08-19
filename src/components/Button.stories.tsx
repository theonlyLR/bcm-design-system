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
  render: (args) => {
    const states = [
      { title: 'Default', props: {} },
      { title: 'Hover', props: { isHovered: true } },
      { title: 'Focused', props: { isFocused: true } },
      { title: 'Pressed', props: { isPressed: true } },
      { title: 'Inactive', props: { disabled: true } },
    ];

    return (
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {states.map((st) => (
          <div key={st.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#888' }}>{st.title}</span>
            <Button {...args} {...st.props} style={{ minWidth: '120px' }} />
          </div>
        ))}
      </div>
    );
  },
};
