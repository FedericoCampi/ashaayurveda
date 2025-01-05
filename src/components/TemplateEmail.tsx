import * as React from 'react';

interface TemplateEmailProps {
  email: string;
  message: string;
}

export const TemplateEmail: React.FC<Readonly<TemplateEmailProps>> = ({
    email,
    message
  }) => {

  return(
    <div className='flex'>
      <p>
        Email enviado por: {email}
      </p>
      <p>Mensaje:</p>
      <p>{message}</p>
    </div>
  )
};