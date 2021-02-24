import React, {useState, useContext} from 'react';
import {AppContext} from './components/AppContext';
import './App.css';
import Log from './components/Log';
import GameTitle from './components/GameTitle';
import DigitForm from './components/DigitForm';
import GuessForm from './components/GuessForm';

function App() {
  const [
    numberOfDigits,
    setNumberOfDigits,
    solution,
    setSolution,
    listOfGuesses,
    setListOfGuesses,
  ] = useContext(AppContext);
  return (
    <div className="App">
      <div className="game-container">
        <GameTitle title="Guess My Number" />
        <div className="container main-area">
          <div className="logs">
            <Log areaDescription="high" title="too high" />
            <Log areaDescription="low" title="too low" />
          </div>
          <div className="prompts">
            {numberOfDigits ? <GuessForm /> : <DigitForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
