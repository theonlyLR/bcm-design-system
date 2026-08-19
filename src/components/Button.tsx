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
  ...props
}: ButtonProps) => {
  /* Exact Figma Layout & Style CSS:
     display: inline-flex; height: 48px; padding: 20px 16px;
     justify-content: center; align-items: center; gap: 8px;
     border-radius: var(--Corner-radius-8px, 8px);
     background: var(--Colors-Primary-Button-fill-Default, #F23204);
  */
  const baseStyles =
    'inline-flex h-[48px] px-[16px] py-[20px] justify-center items-center gap-[8px] font-brand rounded-[var(--Corner-radius-8px,8px)] font-medium border border-transparent transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:bg-[var(--Colors-Primary-Button-fill-Inactive,#ECECEC)]';

  const variantStyles = {
    primary:
      'bg-[var(--Colors-Primary-Button-fill-Default,#F23204)] text-[var(--Colors-Primary-Text-\\&-icon-Default,#FFFFFF)] border-[var(--Colors-Primary-Button-stroke-Default,transparent)] hover:bg-[var(--Colors-Primary-Button-fill-Hover,#FB4E22)] active:bg-[var(--Colors-Primary-Button-fill-Pressed,#501101)]',
    transparent:
      'bg-transparent text-[var(--Colors-Secondary-Text-Label,#F23204)] border-transparent hover:bg-[var(--Colors-Secondary-Button-fill-Default,#FFEFEB)]',
    outline:
      'bg-transparent text-[var(--Colors-Secondary-Text-Label,#F23204)] border-[var(--Colors-Secondary-Button-stroke-Default,#FB4E22)] hover:bg-[var(--Colors-Secondary-Button-fill-Default,#FFEFEB)]',
    secondary:
      'bg-[var(--Colors-Secondary-Button-fill-Default,#FFEFEB)] text-[var(--Colors-Secondary-Text-Label,#F23204)] border-[var(--Colors-Secondary-Button-stroke-Default,#FB4E22)]',
  };

  const DefaultRightArrow = () => (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  return (
    <button
      className={`${baseStyles} ${variantStyles[typeVariant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      ) : (
        <>
          <span>{children || label}</span>
          {rightIcon !== undefined ? rightIcon : <DefaultRightArrow />}
        </>
      )}
    </button>
  );
};
