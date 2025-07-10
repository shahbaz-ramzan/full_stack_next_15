import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "gradient"
    | "gradient-secondary"
    | "gradient-accent";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";

  const variantClasses = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500 shadow-lg hover:shadow-violet-500/25",
    secondary:
      "bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500 shadow-lg hover:shadow-slate-500/25",
    outline:
      "border-2 border-violet-300 bg-white/50 text-violet-700 hover:bg-violet-50 focus:ring-violet-500 dark:border-violet-600 dark:bg-gray-800/50 dark:text-violet-300 dark:hover:bg-violet-900/20 backdrop-blur-sm",
    ghost:
      "text-slate-700 hover:bg-slate-100/80 focus:ring-slate-500 dark:text-slate-300 dark:hover:bg-slate-800/80 backdrop-blur-sm",
    gradient: "btn-gradient focus:ring-violet-500",
    "gradient-secondary": "btn-gradient-secondary focus:ring-pink-500",
    "gradient-accent": "btn-gradient-accent focus:ring-blue-500",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm font-medium",
    lg: "px-8 py-4 text-base font-medium",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
