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
          'bg-primary text-primary-foreground shadow hover:bg-primary-700 focus:ring-primary/30',
        destructive:
          'bg-destructive text-destructive-foreground shadow hover:bg-destructive-700 focus:ring-destructive/30',
        secondary:
          'bg-background border shadow-sm hover:bg-secondary-100 focus:ring-secondary/70 dark:hover:bg-secondary-900',
        dashed:
          'border border-dashed shadow-sm hover:bg-primary-50 hover:border-primary focus:ring-primary/30 dark:hover:bg-primary-950',
        ghost: 'hover:bg-secondary-100 focus:ring-secondary/70 dark:hover:bg-secondary-900',
        link: 'text-primary underline-offset-4 hover:underline focus:ring-primary/30 focus:ring-0',
      },
      size: {
        md: 'h-9 w-9',
        sm: 'h-7 w-7 rounded-md',
        lg: 'h-11 w-11 rounded-md text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
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
    const iconSize = size == 'lg' ? 'size-6' : size == 'sm' ? 'size-4' : 'size-5';

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
