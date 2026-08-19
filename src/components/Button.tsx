import React from 'react';

export type Brand = 'TC' | 'Zkk' | 'TCi' | 'BCM';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 's' | 'm' | 'l' | 'xl';
export type ButtonState = 'default' | 'hover' | 'pressed' | 'inactive';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  brand?: Brand;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const brandFontMap: Record<Brand, string> = {
  TC: 'font-tc',
  Zkk: 'font-zkk',
  TCi: 'font-tci',
  BCM: 'font-bcm',
};

const sizeMap: Record<ButtonSize, string> = {
  s: 'px-xs py-xxs text-xs gap-xxs rounded-xs',
  m: 'px-s py-xs text-s gap-xs rounded-s',
  l: 'px-m py-s text-m gap-xs rounded-m',
  xl: 'px-l py-m text-l gap-s rounded-l',
};

const getBrandStyles = (brand: Brand, variant: ButtonVariant, isInactive: boolean) => {
  if (isInactive) {
    return 'bg-gray-200 text-gray-400 border-transparent cursor-not-allowed';
  }

  // Exact brand colors derived from BCM primitives documentation
  switch (variant) {
    case 'primary':
      switch (brand) {
        case 'TC': return 'bg-[#D32F2F] hover:bg-[#C62828] active:bg-[#B71C1C] text-white'; // TechCabal Cherry Red
        case 'Zkk': return 'bg-[#AB6BEB] hover:bg-[#9A2BC2] active:bg-[#731BCA] text-white'; // Zikoko Purple
        case 'TCi': return 'bg-[#121212] hover:bg-[#2C2C2C] active:bg-[#000000] text-white'; // TC Insights Black
        case 'BCM': return 'bg-[#4A154B] hover:bg-[#3F1142] active:bg-[#2E0D31] text-white'; // BCM Royal Purple
      }
      break;
    case 'secondary':
      return 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-900 border-transparent';
    case 'outline':
      switch (brand) {
        case 'TC': return 'border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-red-50 bg-transparent';
        case 'Zkk': return 'border-2 border-[#AB6BEB] text-[#AB6BEB] hover:bg-purple-50 bg-transparent';
        case 'TCi': return 'border-2 border-[#121212] text-[#121212] hover:bg-gray-100 bg-transparent';
        case 'BCM': return 'border-2 border-[#4A154B] text-[#4A154B] hover:bg-purple-50 bg-transparent';
      }
      break;
    case 'ghost':
      return 'bg-transparent hover:bg-gray-100 text-gray-800 border-transparent';
  }
};

export const Button: React.FC<ButtonProps> = ({
  brand = 'TC',
  variant = 'primary',
  size = 'm',
  state = 'default',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}) => {
  const isInactive = disabled || state === 'inactive';
  const fontClass = brandFontMap[brand];
  const sizeClass = sizeMap[size];
  const brandStyle = getBrandStyles(brand, variant, isInactive);
  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      disabled={isInactive}
      className={`inline-flex items-center justify-center font-bold tracking-wide transition-all duration-150 border focus:outline-none ${fontClass} ${sizeClass} ${brandStyle} ${widthClass} ${className}`}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
