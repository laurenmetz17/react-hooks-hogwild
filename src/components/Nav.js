import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({hoggys, setHogs, originalHogs}) => {


	function handleGreased(event) {
		if (event.target.className === "greased") {
			event.target.classList.remove("greased");
			setHogs((hoggys) => hoggys = originalHogs)
			event.target.textContent="Show Greased Hogs";
		}
		else {
			event.target.className="greased";
			setHogs((hoggys) => hoggys.filter(hog => hog.greased === true))
			event.target.textContent="Show All Hogs"
		}
	}

	function handleSort(event) {
		//sorted is sorted correctly but it is not rerendering in that order
		if(event.target.value==="Sort by Weight") {
			const sorted = hoggys.sort((a,b) => a.weight > b.weight ? -1: 1,)
			console.log(sorted)
			setHogs((hoggys) => hoggys = sorted);
			
		}
		else if(event.target.value==="Sort by Name") {
			const sorted = hoggys.sort((a,b) => a.name.localeCompare(b.name))
			setHogs((hoggys) => hoggys = sorted);
		}
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				<button className="" onClick={handleGreased}>Show Greased Hogs</button>
				<select onChange={handleSort}>
					<option id="default">Sort</option>
					<option id="name">Sort by Name</option>
					<option id="weight">Sort by Weight</option>
				</select>
			</div>
		</div>
	);
};

export default Nav;
