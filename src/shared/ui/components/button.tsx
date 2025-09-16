import LoadingIcon from '@shared/icons/loading-icon';
import { cn } from '@shared/lib/cn';
import type { VariantProps } from 'class-variance-authority';
import { type buttonVariants, Button as ShadcnButton } from '../button';

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = 'default',
  size = 'default',
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
      className={cn(fullWidth && 'w-full', loading && 'cursor-not-allowed', className)}
      {...props}
    >
      {loading && <LoadingIcon />}

      {leftIcon && <span className="mr-1">{leftIcon}</span>}

      {children}

      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </ShadcnButton>
  );
};

export { Button, type ButtonProps };
