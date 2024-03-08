import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default () => (
  <div className="flex flex-col gap-4">
    <Alert>
      <AlertTitle>Nuevas características de la plataforma</AlertTitle>
      <AlertDescription>
        Ahora los docentes pueden subir contenidos para una comisión en específica.
      </AlertDescription>
    </Alert>
    <Alert variant="success">
      <AlertTitle>Datos guardados</AlertTitle>
      <AlertDescription>Sus datos y foto de perfil se guardaron correctamente.</AlertDescription>
    </Alert>
    <Alert variant="info">
      <AlertTitle>Ha sido inhabilitado de Computación Transversal Nivel 1 (1200)</AlertTitle>
      <AlertDescription>Mensaje del docente: No cumple con las fechas de entrega.</AlertDescription>
    </Alert>
    <Alert variant="warning">
      <AlertTitle>Advertencia de seguridad</AlertTitle>
      <AlertDescription>
        Le recomendamos cambiar su contraseña y cargar su email en su perfil.
      </AlertDescription>
    </Alert>
    <Alert variant="error">
      <AlertTitle>Datos incorrectos</AlertTitle>
      <AlertDescription>El DNI ingresado no corresponde a ningún usuario de MIeL.</AlertDescription>
    </Alert>
  </div>
);

export const code = `import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

<Alert>
  <AlertTitle>Nuevas características de la plataforma</AlertTitle>
  <AlertDescription>Ahora los docentes pueden subir contenidos para una comisión en específica.</AlertDescription>
</Alert>
<Alert variant="success">
  <AlertTitle>Datos guardados</AlertTitle>
  <AlertDescription>Sus datos y foto de perfil se guardaron correctamente.</AlertDescription>
</Alert>
<Alert variant="info">
  <AlertTitle>Ha sido inhabilitado de Computación Transversal Nivel 1 (1200)</AlertTitle>
  <AlertDescription>Mensaje del docente: No cumple con las fechas de entrega.</AlertDescription>
</Alert>
<Alert variant="warning">
  <AlertTitle>Advertencia de seguridad</AlertTitle>
  <AlertDescription>Le recomendamos cambiar su contraseña y cargar su email en su perfil.</AlertDescription>
</Alert>
<Alert variant="error">
  <AlertTitle>Datos incorrectos</AlertTitle>
  <AlertDescription>El DNI ingresado no corresponde a ningún usuario de MIeL.</AlertDescription>
</Alert>`;
