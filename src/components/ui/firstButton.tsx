import React from 'react'

interface FirstButtonProps {
    titulo: string;
    padding?: string;
    tamano?: string;
    forma? : string;
}

const FirstButton: React.FC<FirstButtonProps> = ({ titulo, padding, tamano, forma }) => {
  return (
    <button className={`${padding} ${tamano} mainColorbg text-white rounded-md`}>
      {titulo}
    </button>
  )
}

export default FirstButton
