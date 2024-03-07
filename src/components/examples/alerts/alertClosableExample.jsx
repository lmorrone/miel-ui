import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const handleClose = (e) => {
  console.log('Alerta cerrada!');
  console.log(e.clientX, e.clientY);
};

export default () => (
  <div className="flex flex-col gap-4">
    <Alert closable onClose={handleClose}>
      <AlertDescription>
        Ahora los docentes pueden subir contenidos para una comisión en específica.
      </AlertDescription>
    </Alert>
    <Alert closable onClose={handleClose} variant="success">
      <AlertDescription>Sus datos y foto de perfil se guardaron correctamente.</AlertDescription>
    </Alert>
    <Alert closable onClose={handleClose} variant="info">
      <AlertDescription>
        Ha sido inhabilitado de Computación Transversal Nivel 1 (1200).
      </AlertDescription>
    </Alert>
    <Alert closable onClose={handleClose} variant="warning">
      <AlertDescription>
        Le recomendamos cambiar su contraseña y cargar su email en su perfil.
      </AlertDescription>
    </Alert>
    <Alert closable onClose={handleClose} variant="error">
      <AlertDescription>El DNI ingresado no corresponde a ningún usuario de MIeL.</AlertDescription>
    </Alert>
  </div>
);

export const getCode = () => {
  return `import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const handleClose = (e) => {
  console.log('Alerta cerrada!');
  console.log(e.clientX, e.clientY);
};

<Alert closable onClose={handleClose}>
  <AlertDescription>Ahora los docentes pueden subir contenidos para una comisión en específica.</AlertDescription>
</Alert>
<Alert closable onClose={handleClose} variant="success">
  <AlertDescription>Sus datos y foto de perfil se guardaron correctamente.</AlertDescription>
</Alert>
<Alert closable onClose={handleClose} variant="info">
  <AlertDescription>Ha sido inhabilitado de Computación Transversal Nivel 1 (1200).</AlertDescription>
</Alert>
<Alert closable onClose={handleClose} variant="warning">
  <AlertDescription>Le recomendamos cambiar su contraseña y cargar su email en su perfil.</AlertDescription>
</Alert>
<Alert closable onClose={handleClose} variant="error">
  <AlertDescription>El DNI ingresado no corresponde a ningún usuario de MIeL.</AlertDescription>
</Alert>`;
};
