import React, { useState, useEffect } from "react";
import { words } from "./assets/wordle_words";
import { Typography } from "@mui/material";
//not sure how to inport shake from reshake 

import "./App.css";

import WordleRow from "./components/wordleRow";
import SuccessModal from "./components/successModal";
import FailureModal from "./components/failureModal";

function App() {
  // Modals
  const [ successModalOpen, setSuccessModalOpen ] = useState(false);
  const [ failureModalOpen, setFailureModalOpen ] = useState(false);

  const [ shakeBoard, setShakeBoard ] = useState(false);
  const [ wordleWord, setWordleWord ] = useState("");
  const [ curRow, setCurRow ] = useState(1);
  const [ guesses, setGuesses ] = useState([[], [], [], [], [], []]);

  const checkWord = (word) => {
    if (!words.includes(word.toLowerCase())){
      setShakeBoard(true)
      setTimeout(function() {
        setShakeBoard(false);
      }, 500);
      return;
    }

      //guesses
    let guess = [];
    let completleyCorrect = true;

    for (let i=0; i < 5; i++) {
      if(wordleWord[i] === word[i]){
        guess.push('g');
      } else if (wordleWord.includes(word[i])){
        guess.push('y');
        completleyCorrect = false;
      } else {
        guess.push('l');
        completleyCorrect = false;
      }
    }

    setGuesses(prevGuesses => {
    const newGuesses = [...prevGuesses];
    newGuesses[curRow - 1] = [...guess];
    return newGuesses
  })
  }




  return (
    <div className="App">

    </div>
  );
}

export default App;