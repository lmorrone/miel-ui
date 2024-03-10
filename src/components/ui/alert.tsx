import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import {
  X,
  CheckCircle,
  Info,
  Megaphone,
  XCircle,
  AlertTriangle,
  type LucideIcon,
} from 'lucide-react';

const alertVariants = cva('relative w-full rounded-md shadow border p-3', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      success:
        'border-primary-700/50 text-primary-700 bg-primary-50 dark:bg-primary-950 dark:text-inherit',
      info: 'border-blue-700/50 text-blue-700 bg-blue-50 dark:bg-blue-950 dark:text-inherit',
      warning:
        'border-yellow-700/50 text-yellow-700 bg-yellow-50 dark:bg-yellow-950 dark:text-inherit',
      error:
        'border-destructive-700/50 text-destructive-700 bg-destructive-50 dark:bg-destructive-950 dark:text-inherit',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const getAlertIcon = (variant: string) =>
  ({
    default: Megaphone,
    success: CheckCircle,
    info: Info,
    warning: AlertTriangle,
    error: XCircle,
  })[variant];

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  closable?: boolean;
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
  visible?: boolean;
  noIcon?: boolean;
  Icon?: LucideIcon;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      children,
      closable = false,
      onClose,
      visible = true,
      noIcon = false,
      Icon,
      ...props
    },
    ref,
  ) => {
    const [closed, setClosed] = React.useState(false);
    const [hidden, setHidden] = React.useState(!visible);

    React.useEffect(() => {
      if (!visible) {
        setClosed(true);
        setTimeout(() => setHidden(true), 350);
      }
    }, [visible]);

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
      setClosed(true);
      setTimeout(() => setHidden(true), 350);
      if (onClose) onClose(event);
    };

    const AlertIcon = !noIcon ? Icon ?? getAlertIcon(variant ?? 'default') : null;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({ variant }),
          className,
          closed
            ? 'animate-out slide-out-to-top-2 fade-out fill-mode-both duration-300 ease-out'
            : '',
          hidden ? 'hidden' : '',
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          {AlertIcon && <AlertIcon className="size-4" strokeWidth={2.5} />}
          <div className="flex-1 leading-none">{children}</div>
          {closable && (
            <button onClick={handleClose}>
              <X className="size-5 opacity-60 transition-all hover:opacity-100" />
            </button>
          )}
        </div>
      </div>
    );
  },
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
