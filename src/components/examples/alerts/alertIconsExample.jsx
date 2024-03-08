import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Rss } from 'lucide-react';

export default () => (
  <div className="flex flex-col gap-4">
    <Alert Icon={Rss}>
      <AlertTitle>Nuevas características de la plataforma</AlertTitle>
      <AlertDescription>
        Ahora los docentes pueden subir contenidos para una comisión en específica.
      </AlertDescription>
    </Alert>
    <Alert noIcon>
      <AlertTitle>Nuevas características de la plataforma</AlertTitle>
      <AlertDescription>
        Ahora los docentes pueden subir contenidos para una comisión en específica.
      </AlertDescription>
    </Alert>
  </div>
);

export const code = `import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Rss } from 'lucide-react';

<Alert Icon={Rss}>
  <AlertTitle>Nuevas características de la plataforma</AlertTitle>
  <AlertDescription>Ahora los docentes pueden subir contenidos para una comisión en específica.</AlertDescription>
</Alert>
<Alert noIcon>
  <AlertTitle>Nuevas características de la plataforma</AlertTitle>
  <AlertDescription>Ahora los docentes pueden subir contenidos para una comisión en específica.</AlertDescription>
</Alert>`;
