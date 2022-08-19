import React from 'react';

export default function VantagensCard(props) {
  return (
    <article className="bg-white w-1/4 vantagenscard px-4 mr-3 mb-3 py-6 rounded-lg">
      <div>
        <img className="w-8 mb-4" src={props.img} alt="" />
      </div>
      <h5 className="text-xl font-bold mb-4">{props.title}</h5>
      <p className="mb-4 text-gray-500	">{props.subtitle}</p>
      <a
        href="http://google.com.br"
        className="text-blue-600 hover:text-blue-800 text-sm font-bold underline underline-offset-3"
      >
        VEJA AS OPÇÕES
      </a>
    </article>
  );
}
