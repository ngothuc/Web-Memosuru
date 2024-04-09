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
            <button 
            className='square'
            onClick={this.onClick()}>
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

    handleClick(i) {
        this.setState({
            value: {i},
        });
    }

    render() {
        return (
            <div>
                <div className='board-row' 
                onClick={(i) => {this.handleClick(i)}}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row' 
                onClick={(i) => {this.handleClick(i)}}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row' 
                onClick={(i) => {this.handleClick(i)}}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Board />)
