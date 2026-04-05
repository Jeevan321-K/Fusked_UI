import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg";
  const variants = {
    primary: "bg-[var(--primary-color)] text-white",
    outline: "border-2 border-[var(--primary-color)] text-[var(--primary-color)] bg-transparent hover:bg-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};