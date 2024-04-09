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

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    }

    render() {
        return (
            <button className='square'
            onClick={() => this.props.onClick()}>
                {this.state.value}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square 
                key={i}
                value = {this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        )
    }

    render() {
        return (
            <div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
};

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: ['X', 'O'],
            turn: 0,
            squares: Array(9).fill(0),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.players[this.state.turn % 2];
        this.setState({
            squares: squares,
            value: this.state.players[this.state.turn % 2],
            turn: this.state.turn + 1,
        });
    }

    render() {
        return (
            <div className='status'>
                Next Player: {this.state.players[this.state.turn % 2]}
                <Board 
                    squares={this.state.squares}
                    onClick={(i) => this.handleClick(i)}
                />
            </div>
        )
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />);
