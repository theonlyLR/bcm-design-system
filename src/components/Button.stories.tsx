import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atomics/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Overview
The **Button** component triggers user actions across all BCM brands (**TechCabal**, **Zikoko**, **TCi**, **BCM**). It automatically adjusts color fills, stroke borders, and font typography based on the selected brand theme.

---

### Brand Typography & Fills
* **TechCabal (\`TechCabal\`)**: Open Sans font with Cherry Red fills (\`#F23204\`).
* **Zikoko (\`Zikoko\`)**: Cabin font with Purple fills (\`#9A2BC2\`).
* **TCi (\`TCi\`)**: IBM Plex Sans font with Black/Neutral fills (\`#181818\`).
* **BCM (\`BCM\`)**: Urbanist font with Neutral fills (\`#181818\`).

---

### Usage & Hierarchy Rules
1. **Primary (\`primary\`)**: Single main call-to-action per screen section (*Submit*, *Subscribe*).
2. **Secondary & Outline (\`secondary\`, \`outline\`)**: Supporting or alternative triggers (*Cancel*, *Save Draft*).
3. **Transparent (\`transparent\`)**: Ghost buttons for card headers or subtle inline links.
4. **Error & Success (\`error\`, \`success\`)**: Destructive alerts (*Delete*) or completion triggers (*Success*).
        `,
      },
    },
  },
  argTypes: {
    brand: {
      name: 'Brand Theme Override',
      control: 'select',
      options: ['TechCabal', 'Zikoko', 'TCi', 'BCM'],
      table: { category: 'Theming' },
    },
    typeVariant: {
      name: 'Type Variant',
      control: 'radio',
      options: ['primary', 'secondary', 'outline', 'transparent', 'error', 'success'],
      table: { category: 'Appearance' },
    },
    size: {
      name: 'Size',
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      table: { category: 'Appearance' },
    },
    label: {
      name: 'Label Text',
      control: 'text',
      table: { category: 'Content' },
    },
    hasLeftIcon: {
      name: 'Show Left Icon',
      control: 'boolean',
      table: { category: 'Icons' },
    },
    hasRightIcon: {
      name: 'Show Right Icon',
      control: 'boolean',
      table: { category: 'Icons' },
    },
    isIconOnly: {
      name: 'Icon Only Mode',
      control: 'boolean',
      table: { category: 'Icons' },
    },
    fullWidth: {
      name: 'Full Width',
      control: 'boolean',
      table: { category: 'Layout' },
    },
    isLoading: {
      name: 'Loading Spinner',
      control: 'boolean',
      table: { category: 'States' },
    },
    disabled: {
      name: 'Disabled / Inactive',
      control: 'boolean',
      table: { category: 'States' },
    },
    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    style: { table: { disable: true } },
    variant: { table: { disable: true } },
    isHovered: { table: { disable: true } },
    isFocused: { table: { disable: true } },
    isPressed: { table: { disable: true } },
  },
  args: {
    typeVariant: 'primary',
    size: 'md',
    label: 'Button',
    hasLeftIcon: false,
    hasRightIcon: true,
    isIconOnly: false,
    fullWidth: false,
    isLoading: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const AllVariants: Story = {
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

export const ButtonIconSet: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button {...args} isIconOnly typeVariant="primary" />
      <Button {...args} isIconOnly typeVariant="secondary" />
      <Button {...args} isIconOnly typeVariant="outline" />
      <Button {...args} isIconOnly typeVariant="transparent" />
    </div>
  ),
};

export const InteractiveStatesGrid: Story = {
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
