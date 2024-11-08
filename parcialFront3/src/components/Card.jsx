import React from 'react';

const Card = ({ name, musicPreference }) => (
  <div className="card">
    <h1>Tu musica favorita es: </h1>
    <p>Hola { name}</p>
    <p>Tu musica favorita es {musicPreference}</p>
  </div>
);

export default Card;