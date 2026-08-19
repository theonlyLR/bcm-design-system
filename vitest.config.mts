import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    server: {
      deps: {
        inline: ['aria-query', '@storybook/addon-vitest'],
      },
    },
  },
  ssr: {
    noExternal: ['aria-query'],
  },
});
