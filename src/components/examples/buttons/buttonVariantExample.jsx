import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/buttonIcon';

export default ({ variant = 'primary', icon, text }) => (
  <div className="flex flex-col gap-3">
    <div className="flex flex-wrap gap-2">
      <Button variant={variant}>{text}</Button>
      <Button variant={variant} Icon={icon}>
        {text}
      </Button>
      <Button variant={variant} Icon={icon} iconPosition="right">
        {text}
      </Button>
      <ButtonIcon variant={variant} Icon={icon} />
    </div>
    <div className="flex flex-wrap gap-2">
      <Button variant={variant} disabled>
        {text}
      </Button>
      <Button variant={variant} disabled Icon={icon}>
        {text}
      </Button>
      <Button variant={variant} disabled Icon={icon} iconPosition="right">
        {text}
      </Button>
      <ButtonIcon variant={variant} disabled Icon={icon} />
    </div>
  </div>
);

export const getCode = (variant = 'primary', icon, text) => {
  return `import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/buttonIcon';
import { ${icon} } from 'lucide-react';

<Button variant="${variant}">${text}</Button>
<Button variant="${variant}" Icon={${icon}}>${text}</Button>
<Button variant="${variant}" Icon={${icon}} iconPosition="right">${text}</Button>
<ButtonIcon variant="${variant}" Icon={${icon}} />

<Button variant="${variant}" disabled>${text}</Button>
<Button variant="${variant}" Icon={${icon}} disabled>${text}</Button>
<Button variant="${variant}" Icon={${icon}} iconPosition="right" disabled>${text}</Button>
<ButtonIcon variant="${variant}" Icon={${icon}} disabled />`;
};
