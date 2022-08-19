import React from 'react';
import SetaDireita from '../img/seta-direita.png';
import '../css/animations.css';

export default function ButtonOpenAccount(props) {
  return (
    <a
      href="#"
      className="flex flex-row cursor-pointer items-center justify-center w-64 h-16 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-lg text-center buttonopenaccount"
    >
      <h3 className="font-semibold text-white text-xl">Abrir uma conta</h3>
      <div className="w-6 mr-8 zoomAnimation setadireitadiv">
        <img src={SetaDireita} alt="seta-para-direita" />
      </div>
    </a>
  );
}
