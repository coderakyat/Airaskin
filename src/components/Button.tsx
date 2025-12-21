import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseStyles = 'relative font-medium rounded-full overflow-hidden transition-all inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-500/50',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50 shadow-md',
    outline: 'border-2 border-pink-500 text-pink-500 hover:bg-pink-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center space-x-2">
        {Icon && <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />}
        <span>{children}</span>
      </span>
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
}
