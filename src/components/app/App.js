import React, { useState } from 'react';
import './App.css';

const User = ({firstName, lastName, link}) => {
  const [counter, setCounter] = useState(0)
  const [isLogin, setIsLogin] = useState(false)

  const onIncrement = () =>{
    setCounter(prevState => prevState + 1)
  }
  const onDicrement = () =>{
    setCounter(prevState => prevState - 1)
  }
  const onToogleLogin = () =>{
    setIsLogin(prevState => !prevState)
  }

  return(
    <div className='w-50 mx-auto mb-5'>
      <div className='border p-3 mt-5'>
        <h1>
          My name is - {firstName}, lastName - {lastName}
        </h1>
        <a href={link}>Youtube</a>
        <p className='text-center'>{counter}</p>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-success' onClick={onIncrement}>+</button>
          <button className='btn btn-danger mx-2' onClick={onDicrement}>-</button>
        </div>
        {isLogin ? <p className='text-center mt-3'>Login</p> : null}
        <div className='d-flex justify-content-center'>
          <button className='btn btn-outline-primary' onClick={onToogleLogin}>TOOGLE</button>
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

// const User =({firstName, lastName, link}) => {
//   const [state, setState] = useState({
//     counter: 0,
//     isLogin: false,
//   })
// }