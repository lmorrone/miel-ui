import { ButtonLink } from '@/components/ui/buttonLink';
import { ButtonLinkIcon } from '@/components/ui/buttonLinkIcon';
import { ChevronRight } from 'lucide-react';

export default () => (
  <div class="flex flex-wrap gap-2">
    <ButtonLink Icon={ChevronRight} href="#" target="_blank">
      Ir al calendario
    </ButtonLink>
    <ButtonLinkIcon Icon={ChevronRight} href="#" />
  </div>
);
