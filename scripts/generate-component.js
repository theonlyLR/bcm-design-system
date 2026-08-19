const fs = require('fs');
const path = require('path');

const name = process.argv[2];

if (!name) {
  console.error('❌ Please specify a component name: npm run generate <ComponentName>');
  process.exit(1);
}

const pascalName = name.charAt(0).toUpperCase() + name.slice(1);
const targetDir = path.join(__dirname, '../src/components', pascalName);

if (fs.existsSync(targetDir)) {
  console.error(`❌ Component "${pascalName}" already exists at ${targetDir}`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

const componentTemplate = `import React from 'react';

export type ${pascalName}Variant = 'primary' | 'secondary' | 'outline' | 'transparent';
export type BrandTheme = 'TechCabal' | 'Zikoko' | 'TCi' | 'BCM' | string;

export interface ${pascalName}Props extends React.HTMLAttributes<HTMLDivElement> {
  brand?: BrandTheme;
  variant?: ${pascalName}Variant;
  label?: string;
  disabled?: boolean;
}

export const ${pascalName} = ({
  brand = 'TechCabal',
  variant = 'primary',
  label = '${pascalName}',
  disabled = false,
  className = '',
  children,
  ...props
}: ${pascalName}Props) => {
  const normalizeBrand = (b?: string) => {
    if (!b) return 'techcabal';
    const lower = b.toLowerCase().trim();
    if (lower.includes('zikoko') || lower === 'zkk') return 'zikoko';
    if (lower.includes('techcabal') || lower === 'tc') return 'techcabal';
    if (lower.includes('tci')) return 'tci';
    if (lower.includes('bcm')) return 'bcm';
    return lower;
  };

  const activeTheme = normalizeBrand(brand);

  return (
    <div
      data-theme={activeTheme}
      data-disabled={disabled ? 'true' : undefined}
      className={\`ds-\${pascalName.toLowerCase()} ds-\${pascalName.toLowerCase()}-\${variant} \${className}\`}
      {...props}
    >
      {children || label}
    </div>
  );
};
`;

const storiesTemplate = `import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ${pascalName} } from './${pascalName}';

const meta: Meta<typeof ${pascalName}> = {
  title: 'Atomics/${pascalName}',
  component: ${pascalName},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The ${pascalName} component triggers user actions and displays structured data across all BCM brands (TechCabal, Zikoko, TCi, BCM).',
      },
    },
  },
  argTypes: {
    brand: {
      name: 'Brand Theme',
      control: 'select',
      options: ['TechCabal', 'Zikoko', 'TCi', 'BCM'],
      tabl category: 'Theming' },
    },
    variant: {
      name: 'Variant',
      control: 'radio',
      options: ['primary', 'secondary', 'outline', 'transparent'],
      table: { category: 'Appearance' },
    },
    label: {
      name: 'Label Text',
      control: 'text',
      table: { category: 'Content' },
    },
    disabled: {
      name: 'Disabled / Inactive',
      control: 'boolean',
      table: { category: 'States' },
    },
  },
  args: {
    brand: 'TechCabal',
    variant: 'primary',
    label: '${pascalName}',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof ${pascalName}>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <${pascalName} {...args} variant="primary" label="Primary" />
      <${pascalName} {...args} variant="secondary" label="Secondary" />
      <${pascalName} {...args} variant="outline" label="Outline" />
      <${pascalName} {...args} variant="transparent" label="Transparent" />
    </div>
  ),
};
`;

const testTemplate = `import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';
import { ${pascalName} } from './${pascalName}';

describe('${pascalName} Component', () => {
  it('renders correctly with default props', () => {
    render(<${pascalName} label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('applies data-theme attribute based on brand prop', () => {
    const { container } = render(<${pascalName} brand="Zikoko" />);
    expect(container.firstChild).toHaveAttribute('data-theme', 'zikoko');
  });
});
`;

const indexTemplate = `export * from './${pascalName}';\n`;

fs.writeFileSync(path.join(targetDir, `${pascalName}.tsx`), componentTemplate);
fs.writeFileSync(path.join(targetDir, `${pascalName}.stories.tsx`), storiesTemplate);
fs.writeFileSync(path.join(targetDir, `${pascalName}.test.tsx`), testTemplate);
fs.writeFileSync(path.join(targetDir, 'index.ts'), indexTemplate);

console.log(`✅ Successfully generated ${pascalName} component system at src/components/${pascalName}/`);
