
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) => {
  const baseClasses = 'font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4';
  
  const variantClasses = {
    primary: 'bg-tree-green hover:bg-tree-green-light text-slate-900 focus:ring-tree-green/50 shadow-lg shadow-tree-green/30 hover:shadow-xl hover:shadow-tree-green/40',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white focus:ring-slate-500/50',
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
