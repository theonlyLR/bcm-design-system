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
    'inline-flex items-center justify-center font-medium transition-all border cursor-pointer rounded-[var(--Spacing-\\&-Corner-radius-xxs)] disabled:opacity-50 disabled:pointer-events-none disabled:bg-[var(--Colors-Primary-Button-fill-Inactive)]';

  const variantStyles = {
    primary:
      'bg-[var(--Colors-Primary-Button-fill-Default)] text-[var(--Colors-Primary-Text-\\&-icon-Default)] border-[var(--Colors-Primary-Button-stroke-Default)] hover:bg-[var(--Colors-Primary-Button-fill-Hover)] active:bg-[var(--Colors-Primary-Button-fill-Pressed)]',
    secondary:
      'bg-[var(--Colors-Secondary-Button-fill-Default)] text-[var(--Colors-Secondary-Text-Label)] border-[var(--Colors-Secondary-Button-stroke-Default)]',
    error:
      'bg-[var(--Colors-Error-Button-fill-Default)] text-[var(--Colors-Error-Button-stroke-Default)] border-[var(--Colors-Error-Button-stroke-Default)]',
    success:
      'bg-[var(--Colors-Success-Button-fill-Default)] text-[var(--Colors-Success-Button-stroke-Default)] border-[var(--Colors-Success-Button-stroke-Default)]',
  };

  const sizeStyles = {
    sm: 'h-8 px-[var(--Spacing-\\&-Corner-radius-xs)] text-xs',
    md: 'h-10 px-[var(--Spacing-\\&-Corner-radius-s)] text-sm',
    lg: 'h-12 px-[var(--Spacing-\\&-Corner-radius-l)] text-base',
  };

  return (
    <button
      style={{ fontFamily: 'var(--Typography-Font-Primary)' }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
