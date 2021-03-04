import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from './AppContext';

function Log({areaDescription, title}) {
  const [list, setList] = useState([]);
  const [
    numberOfDigits,
    setNumberOfDigits,
    solution,
    setSolution,
    listOfGuesses,
    setListOfGuesses,
  ] = useContext(AppContext);
  useEffect(() => {
    let filteredList;
    if (areaDescription === 'low') {
      filteredList = listOfGuesses.filter(
        (guess) => solution > Number(guess.split(',').join(''))
      );
    } else {
      filteredList = listOfGuesses.filter(
        (guess) => solution < Number(guess.split(',').join(''))
      );
    }
    if (filteredList.length > 1) {
      filteredList.unshift(filteredList.pop());
    }
    filteredList = filteredList.map((number) => number.toLocaleString());
    setList(filteredList);
  }, [listOfGuesses, setListOfGuesses]);
  return (
    <div
      className={
        'log-header ' +
        (areaDescription === 'high' ? 'too-high-area' : 'too-low-area')
      }
    >
      <div
        className={
          'log-header ' +
          (areaDescription === 'high' ? 'too-high-title' : 'too-low-title')
        }
      >
        <h4 className="m-0">{title}</h4>
      </div>
      <div
        className={
          'log-header' + (areaDescription === 'high')
            ? 'too-high-list'
            : 'too-low-list'
        }
      >
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Log;
