import React, { useState } from 'react';
import './App.css';

const User = ({firstName, lastName, link}) => {
  const [counter, setCounter] = useState(0)
  const [age, setAge] = useState(21)

  const onIncrement = () =>{
    setCounter(counter + 1)
  }
  const onDicrement = () =>{
    setCounter(counter - 1)
  }

  return(
    <div className='w-50 mx-auto'>
      <div className='border p-3 mt-5'>
        <h1>
          My name is - {firstName}, lastName - {lastName}, age -{age}
        </h1>
        <a href={link}>Youtube</a>
        <p className='text-center'>{counter}</p>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-success' onClick={onIncrement}>+</button>
          <button className='btn btn-danger mx-2' onClick={onDicrement}>-</button>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <>
    <User firstName='Sanat' lastName="Abdunazarov" link='https://www.youtube.com/'/> 
    <User firstName='Sanat' lastName="Abdunazarov" link='https://www.youtube.com/'/> 
    </>
  )
}
export default App;
