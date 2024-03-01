import { Button } from '@/components/ui/button';
import { SendHorizonal } from 'lucide-react';

export default () => (
  <div class="flex flex-wrap gap-2">
    <Button Icon={SendHorizonal} block>
      Enviar
    </Button>
    <Button Icon={SendHorizonal} mobile>
      Enviar
    </Button>
  </div>
);
