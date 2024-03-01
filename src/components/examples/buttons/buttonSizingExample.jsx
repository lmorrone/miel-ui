import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/buttonIcon';
import { SendHorizonal } from 'lucide-react';

export default () => (
  <div class="flex flex-wrap gap-2">
    <Button size="sm">Enviar</Button>
    <ButtonIcon size="sm" Icon={SendHorizonal} />
    <Button>Enviar</Button>
    <ButtonIcon Icon={SendHorizonal} />
    <Button size="lg">Enviar</Button>
    <ButtonIcon size="lg" Icon={SendHorizonal} />
  </div>
);
