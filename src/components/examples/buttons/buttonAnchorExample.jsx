import { ButtonAnchor } from '@/components/ui/buttonAnchor';
import { ButtonIconAnchor } from '@/components/ui/buttonIconAnchor';
import { ChevronRight } from 'lucide-react';

export default () => (
  <div className="flex flex-wrap gap-2">
    <ButtonAnchor Icon={ChevronRight} href="#" target="_blank">
      Ir al calendario
    </ButtonAnchor>
    <ButtonIconAnchor Icon={ChevronRight} href="#" />
  </div>
);

export const getCode = () => {
  return `import { ButtonAnchor } from '@/components/ui/buttonAnchor';
import { ButtonIconAnchor } from '@/components/ui/buttonIconAnchor';
import { ChevronRight } from 'lucide-react';

<ButtonAnchor Icon={ChevronRight} href="#" target="_blank">Ir al calendario</ButtonAnchor>
<ButtonIconAnchor Icon={ChevronRight} href="#" />`;
};
