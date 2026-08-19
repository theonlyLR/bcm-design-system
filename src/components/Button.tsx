import React from 'react';

export type ButtonType = 'primary' | 'transparent' | 'outline' | 'secondary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  // Get variant background, text color, and border
  const getVariantStyles = (): React.CSSProperties => {
    switch (typeVariant) {
      case 'transparent':
        return {
          backgroundColor: 'transparent',
          color: 'var(--Colors-Secondary-Text-Label, #F23204)',
          borderColor: 'transparent',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--Colors-Secondary-Text-Label, #F23204)',
          borderColor: 'var(--Colors-Secondary-Button-stroke-Default, #FB4E22)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--Colors-Secondary-Button-fill-Default, #FFEFEB)',
          color: 'var(--Colors-Secondary-Text-Label, #F23204)',
          borderColor: 'var(--Colors-Secondary-Button-stroke-Default, #FB4E22)',
        };
      case 'primary':
      default:
        return {
          backgroundColor: 'var(--Colors-Primary-Button-fill-Default, #F23204)',
          color: 'var(--Colors-Primary-Text-and-icon-Default, #FFFFFF)',
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
