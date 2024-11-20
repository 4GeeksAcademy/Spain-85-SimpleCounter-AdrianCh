import React from "react";

import ValueInput from "./value_input";
//create your first component
const Home = () => {
	const timeValue = ValueInput();
	return (
		<>
		<div className="">
			<div className="d-flex">
				<input className="bg-dark text-white mx-auto fs-1 text-center " type="text" readOnly value={timeValue}></input>
			</div>
		</div>
		</>
	);
};

export default Home;
