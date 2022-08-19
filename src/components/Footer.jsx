import React from 'react';

export default function Footer(props) {
  return (
    <section
      className={`text-center bg-blue-700 text-white justify-evenly items-center font-semibold text-sm flex px-72 ${props.fundo} ${props.className} overflow-hidden`}
    >
      <p>Copyright © 2022 Todos os direitos reservados.</p>
      <p>Powered by KRS</p>
    </section>
  );
}
