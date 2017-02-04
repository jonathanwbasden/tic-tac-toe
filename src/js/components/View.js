import React from 'react';

export default class View extends React.Component {
	render() {
		var boxes = [];
		for(var i = 1; i <= 9; i++) {
			var className = "box";
			var text = "";
			if(this.props.clickedBoxes.indexOf(i) >= 0) {
				className += this.props.grid[i] === 0? " clicked-x" : " clicked-o";
				text = this.props.grid[i] === 0? "X" : "O";
			}
			else {
				className += this.props.player === 0? " x-hover" : " o-hover";
			}
			boxes.push(<div key={i} value={i} className={className} onClick={this.props.handleClick.bind(this, i)}>{text}</div>);
		}

		var className = "btn btn-primary",
			text = "New Game";

		if(this.props.xWon) {
			className += " x-won";
			text = "X Won! New Game?";
		}
		else if(this.props.oWon) {
			className += " o-won";
			text = "O Won! New Game?";
		}
		else if(this.props.draw) {
			className += " draw";
			text = "Draw! New Game?";
		}
		else {
			className += " hidden";
		}

		var gridClass;
		if(this.props.xWon || this.props.oWon || this.props.draw) {
			gridClass = "no-click";
		}

		return (
			<div>
				<div className="jumbotron" id="header"><strong>Tic Tac Toe</strong></div>
				<div id="grid" className={gridClass} >{boxes}</div>
				<button className={className} onClick={this.props.resetGame}>{text}</button>
			</div> 
		);
	}
}