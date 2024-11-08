import React, { useState } from 'react';
import Card from './components/Card';
import './styles.css';

const App = () => {
  const [name, setName] = useState('');
  const [musicPreference, setMusicPreference] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMusicPreferenceChange = (e) => {
    setMusicPreference(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (
      name.length < 3 ||
      name.startsWith(' ') ||
      musicPreference.length < 6
    ) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setShowCard(false);
    } else {
      setErrorMessage('');
      setShowCard(true);
    }
  };

  return (
    <>
    <div className="app">
      <h1>Coloca tu Nombre y elige un gusto musical</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="musicPreference">Gusto Musical:</label>
          <input
            type="text"
            id="musicPreference"
            value={musicPreference}
            onChange={handleMusicPreferenceChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
      {showCard && <Card name={name} musicPreference={musicPreference} />}
    </div>
    </>
  );
};

export default App;