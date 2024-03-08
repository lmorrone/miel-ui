import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default () => (
  <div className="flex flex-col gap-4">
    <Alert variant="success">Sus datos y foto de perfil se guardaron correctamente.</Alert>
    <Alert variant="success">
      <AlertTitle>Datos guardados</AlertTitle>
      <AlertDescription>Sus datos y foto de perfil se guardaron correctamente.</AlertDescription>
    </Alert>
  </div>
);

export const code = `import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

<Alert variant="success">Sus datos y foto de perfil se guardaron correctamente.</Alert>
<Alert variant="success">
  <AlertTitle>Datos guardados</AlertTitle>
  <AlertDescription>Sus datos y foto de perfil se guardaron correctamente.</AlertDescription>
</Alert>`;
