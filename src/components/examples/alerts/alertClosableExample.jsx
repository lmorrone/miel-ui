import { Alert } from '@/components/ui/alert';
import { useState } from 'react';

const handleClose = (e) => {
  console.log('Alerta cerrada!');
  console.log(e.clientX, e.clientY);
};

export default () => {
  const [infoVisible, setInfoVisible] = useState(true);
  const [warningVisible, setWarningVisible] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <Alert closable onClose={handleClose}>
        Ahora los docentes pueden subir contenidos para una comisión en específica.
      </Alert>
      <Alert closable onClose={handleClose} variant="success">
        Sus datos y foto de perfil se guardaron correctamente.
      </Alert>
      <Alert visible={infoVisible} variant="info">
        Ha sido inhabilitado de Computación Transversal Nivel 1 (1200).
        <button className="ml-2 underline" onClick={() => setInfoVisible(false)}>
          Darme por notificado
        </button>
      </Alert>
      <Alert visible={warningVisible} variant="warning">
        Le recomendamos cambiar su contraseña y cargar su email en su perfil.
        <button className="ml-2 underline" onClick={() => setWarningVisible(false)}>
          Lo haré más tarde
        </button>
      </Alert>
    </div>
  );
};

export const code = `import { Alert } from '@/components/ui/alert';

const handleClose = (e) => {
  console.log('Alerta cerrada!');
  console.log(e.clientX, e.clientY);
};

export default () => {
  const [infoVisible, setInfoVisible] = useState(true);
  const [warningVisible, setWarningVisible] = useState(true);

  return (
    <>
      <Alert closable onClose={handleClose}>
        Ahora los docentes pueden subir contenidos para una comisión en específica.
      </Alert>
      <Alert closable onClose={handleClose} variant="success">
        Sus datos y foto de perfil se guardaron correctamente.
      </Alert>
      <Alert visible={infoVisible} variant="info">
        Ha sido inhabilitado de Computación Transversal Nivel 1 (1200).
        <button className="ml-2 underline" onClick={() => setInfoVisible(false)}>
          Darme por notificado
        </button>
      </Alert>
      <Alert visible={warningVisible} variant="warning">
        Le recomendamos cambiar su contraseña y cargar su email en su perfil.
        <button className="ml-2 underline" onClick={() => setWarningVisible(false)}>
          Lo haré más tarde
        </button>
      </Alert>
    </>
  );
};`;
