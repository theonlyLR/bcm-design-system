import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/index.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global Brand Theme',
      defaultValue: 'techcabal',
      toolbar: {
        title: 'Brand Theme',
        icon: 'paintbrush',
        items: [
          { value: 'techcabal', title: 'TechCabal' },
          { value: 'zikoko', title: 'Zikoko' },
          { value: 'tci', title: 'TCi' },
          { value: 'bcm', title: 'BCM' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'techcabal';
      return (
        <div data-theme={theme} style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
