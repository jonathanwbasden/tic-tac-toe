import React from 'react';

export default class View extends React.Component {
	render() {
		var boxes = [];
		for(var i = 1; i <= 9; i++) {
			var className = "box";
			if(this.props.clickedBoxes.indexOf(i) >= 0) {
				className += this.props.grid[i] === 0? " clicked-x" : " clicked-o";
			}
			else {
				className += this.props.player === 0? " x-hover" : " o-hover";
			}
			boxes.push(<div key={i} value={i} className={className} onClick={this.props.handleClick.bind(this, i)} ></div>);
		}

		var className = "btn btn-primary",
			text = "New Game";

		if(this.props.xWon) {
			className += " x-won";
			text = "X Won!";
		}
		else if(this.props.oWon) {
			className += " o-won";
			text = "O Won!";
		}
		else if(this.props.draw) {
			className += " draw";
			text = "Draw!";
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
				<div id="grid" className={gridClass} >{boxes}</div>
				<button className={className} onClick={this.props.resetGame}>{text}</button>
			</div> 
		);
	}
}