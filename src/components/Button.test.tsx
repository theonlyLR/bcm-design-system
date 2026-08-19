import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders label text correctly', () => {
    render(<Button label="Submit" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('applies disabled state when disabled prop is true', () => {
    render(<Button label="Disabled" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('disables button during loading state', () => {
    render(<Button label="Save" isLoading />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
