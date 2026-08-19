import React from 'react';

export type ButtonType = 'primary' | 'secondary' | 'outline' | 'transparent' | 'error' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type BrandTheme = 'TechCabal' | 'Zikoko' | 'TCi' | 'BCM' | string;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  brand?: BrandTheme;
  typeVariant?: ButtonType;
  size?: ButtonSize;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isIconOnly?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isPressed?: boolean;
}

export const Button = ({
  brand = 'TechCabal',
  typeVariant = 'primary',
  size = 'md',
  label = 'Button',
  leftIcon,
  rightIcon,
  isIconOnly = false,
  fullWidth = false,
  isLoading = false,
  disabled = false,
  isHovered = false,
  isFocused = false,
  isPressed = false,
  className = '',
  children,
  ...props
}: ButtonProps) => {
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

  const DefaultArrow = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );

  const classNames = [
    'ds-button',
    `ds-button-${typeVariant}`,
    `ds-button-${size}`,
    isIconOnly ? 'ds-button-icon-only' : '',
    fullWidth ? 'w-full justify-center' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      data-theme={activeTheme}
      data-hovered={isHovered ? 'true' : undefined}
      data-focused={isFocused ? 'true' : undefined}
      data-pressed={isPressed ? 'true' : undefined}
      data-disabled={disabled ? 'true' : undefined}
      className={classNames}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span style={{ width: '16px', height: '16px', border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 1s linear infinite' }} />
      ) : isIconOnly ? (
        leftIcon || rightIcon || <DefaultArrow />
      ) : (
        <>
          {leftIcon}
          <span>{children || label}</span>
          {rightIcon !== undefined ? rightIcon : <DefaultArrow />}
        </>
      )}
    </button>
  );
};
