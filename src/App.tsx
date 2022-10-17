import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ color , setColor] = useState("");
  const [answers , setAnswers] = useState<string[]> ([]);
  const [isWrongSelection, SetIsWrongSelection] = useState<boolean | undefined>(undefined)

  const pickColor = () => {
    const actualColor = getRandomColor()
    setColor(actualColor);
    setAnswers([actualColor, getRandomColor(),getRandomColor()].sort(() => 0.5 - Math.random()))
  }

  const getRandomColor = () => {
    const digits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    const color = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("")

    return `#${color}`
  }

  useEffect ( () => {
    pickColor()
  }, []);

  function handleAnswerClicked(answer:string) {
    if (answer === color) {
      SetIsWrongSelection(true)
      pickColor()
    }else{
      SetIsWrongSelection(false)
    }
  }
  return (
    <div className="App">

      <div className='col'>
      <div className='guess-me' style={{background: color}}></div>
        
        {answers.map((answer) => (
          <button onClick={() => handleAnswerClicked(answer)} key={answer}>{answer}</button>
        ))}
        {isWrongSelection === false && <div className='wrong'> Wrong Answer!! </div>}
        {isWrongSelection === true && <div className='correct'> Correct Answer </div>}
      </div>
    </div>
  );
}

export default App;
