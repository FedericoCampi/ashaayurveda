import React from 'react';

const DeleteUserDataPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Eliminación de Datos del Usuario</h1>

      <p className="mb-4">
        Si deseas que eliminemos tus datos personales almacenados en nuestra aplicación <strong>Asha ayurveda</strong>, por favor seguí el siguiente procedimiento.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Instrucciones</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Envianos un correo electrónico a <strong>info@ashaayur.site</strong>.</li>
        <li>Incluí en el mensaje tu nombre, dirección de correo asociada a la cuenta y el motivo de la solicitud.</li>
        <li>Procesaremos tu solicitud en un plazo máximo de 10 días hábiles.</li>
      </ol>

      {/* <p className="mb-4">
        También podés solicitarnos directamente desde la aplicación, en la sección de ajustes → “Eliminar mi cuenta”.
      </p> */}

      <p className="text-sm text-gray-500">
        Tené en cuenta que una vez eliminados tus datos, no se podrá recuperar tu cuenta.
      </p>
    </div>
  );
};

export default DeleteUserDataPage;
