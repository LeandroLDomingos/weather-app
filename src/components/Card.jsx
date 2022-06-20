/* eslint-disable linebreak-style */
import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const {
    location,
    current,
  } = data;

  return (

    <div className="bg-white p-6 mt-10 rounded-lg shadow-m min-w-[220px]">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="font-bold text-slate-700 flex mt-4">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-2xl mt-2">°C</span>
      </div>

      <div className="text-center">
        <img src={current.condition.icon} alt="" />
        <span className="text-slate-700">{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;