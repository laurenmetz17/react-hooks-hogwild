import React, {useState} from "react";
import Nav from "./Nav";
import HogList from './HogList.js';

import hogs from "../porkers_data";

function App() {

	const [hoggys, setHogs] = useState(hogs);
	return (
		<div className="App">
			<Nav hoggys={hoggys} originalHogs={hogs} setHogs={setHogs}/>
			<HogList hoggys={hoggys}/>
		</div>
	);
}

export default App;
