import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const Com = (props) => {
    const counter = props.counter;
    const setCounter = props.setCounter;
    return <button onClick={() => setCounter(counter + 1)}>Dũng Sensei Vô Địch</button>
}

export default function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <Com counter={counter} setCounter={setCounter} />
            <h1>Counter: {counter}</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);