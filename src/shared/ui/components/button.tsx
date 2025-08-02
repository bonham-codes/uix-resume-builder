import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants, ShadcnButton } from "../shadcn-button";

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "default",
  size = "default",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  className,
  asChild = false,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <ShadcnButton
      variant={variant}
      size={size}
      disabled={isDisabled}
      asChild={asChild}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${loading ? "cursor-not-allowed" : ""}
        ${className || ""}
      `.trim()}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {leftIcon && <span className="mr-1">{leftIcon}</span>}

      {children}
      
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </ShadcnButton>
  );
};

export { Button, type ButtonProps };
