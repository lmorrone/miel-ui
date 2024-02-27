import { ButtonIcon, type ButtonIconProps } from '@/components/ui/buttonIcon';
import type { HTMLAttributeAnchorTarget } from 'react';

export interface ButtonLinkIconProps extends ButtonIconProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export function ButtonLinkIcon({ href, target, ...props }: ButtonLinkIconProps) {
  return (
    <ButtonIcon asChild {...props}>
      <a href={href} target={target} />
    </ButtonIcon>
  );
}
