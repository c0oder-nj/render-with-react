import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(1)

  const countPlus = ()=>{
    // let temp = count
    // temp += 1
    // setCount(temp)

    setCount(++count);
    //  console.log(count) 

    // apporach in which I'm facing doubt
    setCount(count++);
    // basically yaha pr pehle count set ho raha hai then increment ho raha hai since if i choose this type of updation i need to click button twice
    // e.g. count = 1 i click on button + then it set count 1 then increment when i click second time the it set count 2 then increment, 
  }

  const countMinus = ()=>{
    let temp = count
    temp -= 1
    setCount(temp)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {5*8}
        </p>
        <div className='my-btn'>
        <button className='btn info' onClick={countMinus} >-</button><h1>{count}</h1> <button className='btn info' onClick={countPlus}>+</button>
        </div>
        {/* <button>Update Count</button> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn React 
        </a>
      </header>
    </div>
  );
}

export default App;
