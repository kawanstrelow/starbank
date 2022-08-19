import React from 'react';

export default function TopicsContent(props) {
  return (
    <div className="flex pl-10 py-3 border-b-1">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-cyan-500 shadow-lg shadow-gray-300	rounded-lg flex items-center justify-center m-auto">
        <img className="w-8 m-auto" src={props.icon} alt="Icon" />
      </div>
      <div className="pl-6">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p className="text-md font-light">{props.subtitle}</p>
      </div>
    </div>
  );
}
