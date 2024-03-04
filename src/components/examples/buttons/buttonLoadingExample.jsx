import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/buttonIcon';
import { SendHorizonal } from 'lucide-react';

export default () => (
  <div class="flex flex-wrap gap-2">
    <Button loading>Enviando</Button>
    <Button loading iconPosition="right">
      Enviando
    </Button>
    <ButtonIcon Icon={SendHorizonal} loading />
  </div>
);

export const getCode = () => {
  return `import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/buttonIcon';
import { SendHorizonal } from 'lucide-react';

<Button loading>Enviando</Button>
<Button loading iconPosition="right">Enviando</Button>
<ButtonIcon Icon={SendHorizonal} loading />`;
};
