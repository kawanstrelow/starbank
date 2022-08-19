import React from 'react';
import '../css/animations.css';

export default function DownloadButton(props) {
  return (
    <a
      href="#"
      className="flex bg-gray-900 w-64 h-20 rounded-lg mr-2 justify-center items-center downloadbutton"
    >
      <div className="w-10 justify-center flex zoomAnimation">
        <img src={props.img} alt="" />
      </div>
      <p className="text-slate-50  w-1/2 justify-center text-center">
        {' '}
        Download via<br></br>
        <span className="font-bold ">{props.subtitle}</span>
      </p>
    </a>
  );
}
