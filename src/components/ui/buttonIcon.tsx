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
        default:
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
        default: 'h-9 w-9',
        sm: 'h-7 w-7 rounded-md',
        lg: 'h-11 w-11 rounded-md text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  Icon: LucideIcon;
}

const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ className, variant, size, asChild = false, loading, disabled, Icon, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const iconSize = size == 'lg' ? 'size-5' : 'size-4';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading ? (
          <Loader2 className={`${iconSize} animate-spin`} />
        ) : (
          <Icon className={`${iconSize}`} />
        )}
        <Slottable>{props.children}</Slottable>
      </Comp>
    );
  },
);
ButtonIcon.displayName = 'ButtonIcon';

export { ButtonIcon, buttonVariants };
