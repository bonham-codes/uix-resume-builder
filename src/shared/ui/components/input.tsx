import * as React from "react";
import { ShadcnInput } from "../shadcn-input";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { leftIcon, rightIcon, fullWidth, className, wrapperClassName, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "relative flex items-center",
          fullWidth && "w-full",
          wrapperClassName
        )}
      >
        {leftIcon && (
          <span className="absolute left-3 text-muted-foreground pointer-events-none">
            {leftIcon}
          </span>
        )}

        <ShadcnInput
          ref={ref}
          className={cn(leftIcon && "pl-9", rightIcon && "pr-9", className)}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 text-muted-foreground pointer-events-none">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, type InputProps };
