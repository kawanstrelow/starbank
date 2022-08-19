import React from 'react';

export default function TestimonialsCard(props) {
  return (
    <div className="w-1/3 testimonialcard">
      <h3 className="border-l-4 border-blue-700 pl-2 font-bold uppercase text-xl mb-2">
        {props.title}
      </h3>
      <p className="text-lg text-zinc-700	">{props.subtitle}</p>
    </div>
  );
}
