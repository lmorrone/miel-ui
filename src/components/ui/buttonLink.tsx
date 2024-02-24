import { Button, type ButtonProps } from '@/components/ui/button';

export interface ButtonLinkProps extends ButtonProps {
  href: string;
}

export function ButtonLink({ href, ...props }: ButtonLinkProps) {
  return (
    <Button asChild {...props}>
      <a href={href}>{props.children}</a>
    </Button>
  );
}
