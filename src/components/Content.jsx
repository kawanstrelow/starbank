import React from 'react';

export default function Content(props) {
  return (
    <section
      className={`h-screen justify-center px-72 py-8 ${props.fundo} ${props.className} overflow-hidden	`}
      dataanime={`${props.dataanime}`}
    >
      {props.children}
    </section>
  );
}
