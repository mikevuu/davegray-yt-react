import './App.css';
import Header from './Header';
import {useState, useEffect, useRef} from 'react';


function App() {
  const [inputValue,setInputValue] = useState("");
  const prevInputValue = useRef("");

  useEffect( () => {prevInputValue.current = inputValue;}, [inputValue]);

  const changeValue = (e) => setInputValue(e.target.value);

  return (
    <div className="App">
       <input type = 'text' value = {inputValue} onChange = {changeValue} />
       <h2> Current Value: {inputValue}</h2>
       <h2> Previous Value : {prevInputValue.current}</h2>
    </div>
  );
}

export default App;
