import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-brand rounded-button font-medium border transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:bg-btn-primary-disabled';

  const variantStyles = {
    primary:
      'bg-btn-primary-fill text-btn-primary-text border-btn-primary-border hover:bg-btn-primary-hover active:bg-btn-primary-pressed',
    secondary:
      'bg-btn-secondary-fill text-btn-secondary-text border-btn-secondary-border',
    error:
      'bg-btn-error-fill text-btn-error-border border-btn-error-border',
    success:
      'bg-btn-success-fill text-btn-success-border border-btn-success-border',
  };

  const sizeStyles = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
