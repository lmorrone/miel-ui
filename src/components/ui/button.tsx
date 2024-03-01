import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Loader2, type LucideIcon } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium whitespace-nowrap rounded-md ring-offset-background transition focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-700 focus:ring-primary/30 shadow',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive-700 focus:ring-destructive-200 shadow',
        secondary:
          'border border-secondary-300 hover:bg-secondary-100 hover focus:ring-secondary/70 shadow-sm',
        dashed:
          'border border-secondary-300 border-dashed hover:bg-primary-50 hover:border-primary focus:ring-primary/30 shadow-sm',
        ghost: 'hover:bg-secondary-100 focus:ring-secondary/70',
        link: 'text-primary underline-offset-4 hover:underline focus:ring-primary/30 focus:ring-0',
      },
      size: {
        md: 'h-9 px-4',
        sm: 'h-7 rounded-md px-3',
        lg: 'h-11 rounded-md px-6 text-lg',
      },
      mobile: {
        true: 'w-full sm:w-auto',
        false: '',
      },
      block: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      mobile: false,
      block: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  Icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      mobile,
      block,
      loading,
      disabled,
      Icon,
      iconPosition = 'left',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const iconSize = size == 'lg' ? 'size-5' : 'size-4';

    return (
      <Comp
        className={cn(buttonVariants({ mobile, block, variant, size, className }))}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {Icon && !loading && iconPosition == 'left' && <Icon className={`mr-2 ${iconSize}`} />}
        {loading && iconPosition == 'left' && (
          <Loader2 className={`mr-2 ${iconSize} animate-spin`} />
        )}
        <Slottable>{props.children}</Slottable>
        {Icon && !loading && iconPosition == 'right' && <Icon className={`ml-2 ${iconSize}`} />}
        {loading && iconPosition == 'right' && (
          <Loader2 className={`ml-2 ${iconSize} animate-spin`} />
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
