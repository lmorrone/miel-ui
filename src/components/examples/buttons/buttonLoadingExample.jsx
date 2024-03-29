import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/buttonIcon';
import { SendHorizonal } from 'lucide-react';

export default () => (
  <div className="flex flex-wrap gap-2">
    <Button loading>Enviando</Button>
    <Button loading iconPosition="right">
      Enviando
    </Button>
    <ButtonIcon Icon={SendHorizonal} loading />
  </div>
);

export const code = `import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/buttonIcon';
import { SendHorizonal } from 'lucide-react';

<Button loading>Enviando</Button>
<Button loading iconPosition="right">Enviando</Button>
<ButtonIcon Icon={SendHorizonal} loading />`;
