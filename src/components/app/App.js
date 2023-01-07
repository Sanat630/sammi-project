import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import CounterItem from '../counter--item/counter-item';

const User = ({firstName, lastName, link}) => {
  const [counter, setCounter] = useState(0)
  const [active, setActive] = useState(true)

  const onIncrement = () => setCounter(prevState => prevState + 1)

  const onDicrement = () => setCounter(prevState => prevState - 1)
  
  const onToogle = () => setActive(prevState => !prevState)
  
  const number = counter 

  // useEffect(() => {
  //   console.log('effect');
  //   document.title = `Counter: ${counter}` 
  // }, [counter])

  const counterGenerate = useCallback(() => {
    return new Array (counter).fill('').map((_, idx) => `Counter number ${idx + 1}`)
  }, [counter]
  )

  const colors = {
    fonwWeight: 'bold',
    color: active ? 'green' : 'red',
  }

  return(
    <div className='w-50 mx-auto mb-5'>
      <div className='border p-3 mt-5'>
        <h1>
          My name is - {firstName}, lastName - {lastName}
          <p className='text-center' style={colors}>
            User activated {number}</p>
        </h1>
        <a href={link}>Youtube</a>
        <p className='text-center'>{counter}</p>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-success' onClick={onIncrement}>+</button>
          <button className='btn btn-danger mx-2' onClick={onDicrement}>-</button>
          <button className='btn btn-warning mx-2' onClick={onToogle}>Toogle</button>
        </div>
      </div>
      <CounterItem counterGenerate={counterGenerate}/>
    </div>
  )
}

const App = () => {
  return <User firstName='Sanat' lastName="Abdunazarov" link='https://www.youtube.com/'/>
}
export default App;

// const User =({firstName, lastName, link}) => {
//   const [state, setState] = useState({
//     counter: 0,
//     isLogin: false,
//   })
// }