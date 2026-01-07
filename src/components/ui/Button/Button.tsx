import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'outline-light';
    size?: 'sm' | 'md' | 'lg';
    icon?: LucideIcon;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
    'aria-label'?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    onClick,
    type = 'button',
    className = '',
    disabled = false,
    'aria-label': ariaLabel
}: ButtonProps) {
    const baseStyles = 'relative inline-flex items-center justify-center font-bold transition-all duration-200 border-b-[4px] active:border-b-0 active:translate-y-[4px] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        // Primary: Rouge
        primary: 'bg-primary border-primary-dark text-white hover:bg-primary-light hover:border-primary',
        // Secondary: Lily (used as light background)
        secondary: 'bg-secondary/20 border-secondary text-dark hover:bg-secondary/30 hover:border-secondary-dark',
        // Outline: Dark border, text dark
        outline: 'bg-transparent border-dark/20 text-dark hover:bg-dark/5 hover:border-dark',
        // Outline Light: White border, text white (for dark backgrounds)
        'outline-light': 'bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm rounded-xl',
        md: 'px-6 py-3 text-base rounded-2xl',
        lg: 'px-8 py-4 text-lg rounded-2xl'
    };

    // Construct the class name
    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            className={combinedClassName}
        >
            {Icon && <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} className="mr-2" aria-hidden="true" />}
            {children}
        </button>
    );
}
