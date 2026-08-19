import React from 'react';

export type ButtonType = 'primary' | 'secondary' | 'outline' | 'transparent' | 'error' | 'success';
export type BrandTheme = 'TechCabal' | 'Zikoko' | 'TCi' | 'BCM' | string;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  brand?: BrandTheme;
  typeVariant?: ButtonType;
  label?: string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isPressed?: boolean;
}

export const Button = ({
  brand = 'TechCabal',
  typeVariant = 'primary',
  label = 'Button',
  hasLeftIcon = false,
  hasRightIcon = true,
  isLoading = false,
  disabled = false,
  isHovered = false,
  isFocused = false,
  isPressed = false,
  className = '',
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

  const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '16px', height: '16px', flexShrink: 0 }}
    >
      {direction === 'right' ? (
        <path d="M5 12h14M12 5l7 7-7 7" />
      ) : (
        <path d="M19 12H5M12 19l-7-7 7-7" />
      )}
    </svg>
  );

  return (
    <button
      data-theme={activeTheme}
      data-hovered={isHovered ? 'true' : undefined}
      data-focused={isFocused ? 'true' : undefined}
      data-pressed={isPressed ? 'true' : undefined}
      data-disabled={disabled ? 'true' : undefined}
      className={`ds-button ds-button-${typeVariant} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span
          style={{
            width: '16px',
            height: '16px',
            border: '2px solid currentColor',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            display: 'inline-block',
            animation: 'spin 1s linear infinite',
          }}
        />
      ) : (
        <>
          {hasLeftIcon && <ArrowIcon direction="left" />}
          <span>{label}</span>
          {hasRightIcon && <ArrowIcon direction="right" />}
        </>
      )}
    </button>
  );
};
