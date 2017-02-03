import React from 'react';
import ReactDOM from 'react-dom';

import View from './components/View.js'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class TicTacToe extends React.Component {

	constructor() {
		super();
		this.state = {
			clickedBoxes: [],
			grid: [],
			player: 0, // 0 is X, 1 is O
			xWon: false,
			oWon: false,
			draw: false
		};
	}

	handleClick(clickedBox) {
		if(this.state.grid[clickedBox] === undefined) {
			var newGrid = this.state.grid;
			newGrid[clickedBox] = this.state.player;
			this.setState({
				clickedBoxes: this.state.clickedBoxes.concat(clickedBox),
				grid: newGrid,
				player: this.state.player===0?1:0,
				xWon: xWon(this.state.grid),
				oWon: oWon(this.state.grid),
				draw: draw(this.state.grid)
			});
		}

	}

	resetGame() {
		this.setState({
			clickedBoxes: [],
			grid: [],
			player: 0,
			gameOver: false,
			xWon: false,
			oWon: false,
			draw: false
		});
	}

	render() {
		return (
			<div id="center">
				<View handleClick={this.handleClick.bind(this)} 
					  clickedBoxes={this.state.clickedBoxes} 
					  player={this.state.player} 
					  grid={this.state.grid}
					  resetGame={this.resetGame.bind(this)} 
					  gameOver={this.state.gameOver}
					  xWon={this.state.xWon}
					  oWon={this.state.oWon}
					  draw={this.state.draw} />
			</div>
		);
	}
}

var xWon = function(grid) {
	return (grid[1] === 0 && grid[2] === 0 && grid[3] === 0) ||
		   (grid[4] === 0 && grid[5] === 0 && grid[6] === 0) ||
		   (grid[7] === 0 && grid[8] === 0 && grid[9] === 0) || 
		   (grid[1] === 0 && grid[4] === 0 && grid[7] === 0) ||
		   (grid[2] === 0 && grid[5] === 0 && grid[8] === 0) ||
		   (grid[3] === 0 && grid[6] === 0 && grid[9] === 0) ||
		   (grid[1] === 0 && grid[5] === 0 && grid[9] === 0) ||
		   (grid[3] === 0 && grid[5] === 0 && grid[7] === 0);
};

var oWon = function(grid) {
	return (grid[1] === 1 && grid[2] === 1 && grid[3] === 1) ||
		   (grid[4] === 1 && grid[5] === 1 && grid[6] === 1) ||
		   (grid[7] === 1 && grid[8] === 1 && grid[9] === 1) || 
		   (grid[1] === 1 && grid[4] === 1 && grid[7] === 1) ||
		   (grid[2] === 1 && grid[5] === 1 && grid[8] === 1) ||
		   (grid[3] === 1 && grid[6] === 1 && grid[9] === 1) ||
		   (grid[1] === 1 && grid[5] === 1 && grid[9] === 1) ||
		   (grid[3] === 1 && grid[5] === 1 && grid[7] === 1);
}

var draw = function(grid) {
	for(var i = 1; i <= 9; i++) {
		if(grid[i] === undefined) return false;
	}
	return !xWon(grid) && !oWon(grid);
}

ReactDOM.render(<TicTacToe />, document.getElementById('app'));