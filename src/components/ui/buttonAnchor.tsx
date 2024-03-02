import { Button, type ButtonProps } from '@/components/ui/button';
import type { HTMLAttributeAnchorTarget } from 'react';

export interface ButtonAnchorProps extends ButtonProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export function ButtonAnchor({ href, target, ...props }: ButtonAnchorProps) {
  return (
    <Button asChild {...props}>
      <a href={href} target={target}>
        {props.children}
      </a>
    </Button>
  );
}
