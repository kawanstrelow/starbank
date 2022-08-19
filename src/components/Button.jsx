import React from 'react';
import UserImg from '../img/user.png';

export default function Button(props) {
  return (
    <a
      href="#"
      className={`bg-slate-50 w-48 h-12 rounded-lg text-center align-center flex items-center p-4 ${props.className}`}
    >
      <h4 className="text-xl w-32">{props.children}</h4>
      <img src={UserImg} className="w-6" alt="Login" />
    </a>
  );
}
