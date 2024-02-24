import { ButtonIcon, type ButtonIconProps } from '@/components/ui/buttonIcon';

export interface ButtonLinkIconProps extends ButtonIconProps {
  href: string;
}

export function ButtonLinkIcon({ href, ...props }: ButtonLinkIconProps) {
  return (
    <ButtonIcon asChild {...props}>
      <a href={href} />
    </ButtonIcon>
  );
}
