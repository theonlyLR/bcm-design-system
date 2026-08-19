import React from 'react';

export type ButtonType = 'primary' | 'transparent' | 'outline' | 'secondary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Storybook / Figma Brand prop (e.g. Zkk, Zikoko, TC, TechCabal, TCi, BCM) */
  brand?: string;
  /** Figma Property: Type */
  typeVariant?: ButtonType;
  /** Figma Layer: "Button" text */
  label?: string;
  /** Figma Layer: spinner */
  isLoading?: boolean;
  /** Figma Layer: Right arrow */
  rightIcon?: React.ReactNode;
  /** Figma State: Status = Inactive */
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  brand,
  typeVariant = 'primary',
  label = 'Button',
  isLoading = false,
  rightIcon,
  disabled = false,
  children,
  className = '',
  style,
  ...props
}: ButtonProps) => {
  // Normalize brand prop values (e.g., "Zkk" or "Zikoko" -> "zikoko")
  const normalizeBrand = (b?: string) => {
    if (!b) return undefined;
    const lower = b.toLowerCase().trim();
    if (lower.includes('zikoko') || lower === 'zkk') return 'zikoko';
    if (lower.includes('techcabal') || lower === 'tc' || lower.includes('primary tech cabal')) return 'techcabal';
    if (lower.includes('tci') || lower.includes('insights')) return 'tci';
    if (lower.includes('bcm')) return 'bcm';
    return lower;
  };

  const activeTheme = normalizeBrand(brand);

  const getVariantStyles = (): React.CSSProperties => {
    switch (typeVariant) {
      case 'transparent':
        return {
          backgroundColor: 'transparent',
          color: 'var(--Colors-Secondary-Text-Label)',
          borderColor: 'transparent',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--Colors-Secondary-Text-Label)',
          borderColor: 'var(--Colors-Secondary-Button-stroke-Default)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--Colors-Secondary-Button-fill-Default)',
          color: 'var(--Colors-Secondary-Text-Label)',
          borderColor: 'var(--Colors-Secondary-Button-stroke-Default)',
        };
      case 'primary':
      default:
        return {
          backgroundColor: 'var(--Colors-Primary-Button-fill-Default)',
          color: 'var(--Colors-Primary-Text-and-icon-Default)',
          borderColor: 'transparent',
        };
    }
  };

  const combinedStyles: React.CSSProperties = {
    display: 'inline-flex',
    height: '48px',
    padding: '0 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: 'var(--Corner-radius-8px, 8px)',
    fontFamily: 'var(--Typography-Font-Primary, system-ui, sans-serif)',
    fontSize: '14px',
    fontWeight: 600,
    borderWidth: '1px',
    borderStyle: 'solid',
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.15s ease-in-out',
    boxSizing: 'border-box',
    ...getVariantStyles(),
    ...style,
  };

  const DefaultRightArrow = () => (
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
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );

  return (
    <button
      data-theme={activeTheme}
      style={combinedStyles}
      disabled={disabled || isLoading}
      className={className}
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
          <span>{children || label}</span>
          {rightIcon !== undefined ? rightIcon : <DefaultRightArrow />}
        </>
      )}
    </button>
  );
};
