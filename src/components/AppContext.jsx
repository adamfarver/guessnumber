import React, {useState, createContext} from 'react';
export const AppContext = createContext();
export function AppProvider(props) {
  const [listOfGuesses, setListOfGuesses] = useState([]);
  const [numberOfDigits, setNumberOfDigits] = useState('');
  const [solution, setSolution] = useState(0);

  return (
    <AppContext.Provider
      value={[
        numberOfDigits,
        setNumberOfDigits,
        solution,
        setSolution,
        listOfGuesses,
        setListOfGuesses,
      ]}
    >
      {props.children}
    </AppContext.Provider>
  );
}
