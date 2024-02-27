import { Button, type ButtonProps } from '@/components/ui/button';
import type { HTMLAttributeAnchorTarget } from 'react';

export interface ButtonLinkProps extends ButtonProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export function ButtonLink({ href, target, ...props }: ButtonLinkProps) {
  return (
    <Button asChild {...props}>
      <a href={href} target={target}>
        {props.children}
      </a>
    </Button>
  );
}
