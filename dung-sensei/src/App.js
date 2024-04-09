import './App.css';
import { useState, useEffect } from 'react';

function Com() {
  console.log('Com render');
  useEffect(() => {
    console.log('Com Effect');
  }, []);
  return (
    <></>
  )
}


export default function App() {
  const [counter, setCounter] = useState(0);
  console.log('App render, counter: ', counter);

  useEffect(() => {
    console.log('App effect, counter: ', counter);
    if (counter < 5) setCounter(counter+1);
    return () => {
      console.log('App cleanup');
    }
  }, [counter]);

  return (
    <>
    Counter: {counter}
    <Com />
    </>
  )
}