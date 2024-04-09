import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    render() {
        return (
            <button className='square'
            onClick={() => this.setState({value: this.state.value + 1})}>
                {this.state.value}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square value = {i}></Square>
        )
    }
    render() {
        return (
            <div>
                <div className='board-row'>
                    {this.renderSquare(7)}
                    {this.renderSquare(4)}
                    {this.renderSquare(2002)}
                </div>
            </div>
        )
    }
};



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Board />);