import React, { useEffect } from 'react';
import SetaParaBaixoImg from '../img/seta-para-baixo.png';

export default function DoubtTopic({
  onArrowClick = null,
  className = '',
  img = null,
  title = 'Título',
  subtitle = 'Subtitle',
}) {
  function toogleSubtitle(e) {
    onArrowClick(e.target.classList.value);
  }

  return (
    <div className="flex w-1/2 doubttopic justify-center items-top pb-8 mt-4 border-b-stone-200 border-b-2 ">
      <div className="flex w-16 h-16 mr-4 justify-center items-center rounded-lg bg-white shadow-lg shadow-gray-300">
        <img className="w-8" src={img} alt="doubt-Icon" />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2 pt-4">{title}</h3>
        <p className={`text-md doubttopichandler noshow ${className}paragraph`}>
          {subtitle}
        </p>
      </div>
      <div className={`w-8 h-8 pt-4 `} onClick={toogleSubtitle}>
        <img
          src={SetaParaBaixoImg}
          className={`${className}`}
          alt="seta-para-baixo"
        />
      </div>
    </div>
  );
}
