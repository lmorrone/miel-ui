import { ButtonIcon, type ButtonIconProps } from '@/components/ui/buttonIcon';
import type { HTMLAttributeAnchorTarget } from 'react';

export interface ButtonIconAnchorProps extends ButtonIconProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export function ButtonIconAnchor({ href, target, ...props }: ButtonIconAnchorProps) {
  return (
    <ButtonIcon asChild {...props}>
      <a href={href} target={target} />
    </ButtonIcon>
  );
}
