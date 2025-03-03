import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="col">
				<div className="row justify-content-center">
					<Jumbotron />
				</div>
			</div>
			<div className="col">
				<div className="row justify-content-center">
					<Card selectImg="0" />
					<Card selectImg="1" />
					<Card selectImg="2" />
					<Card selectImg="3" />
				</div>
			</div>
			<div className="col">
				<div className="row">
					<div className="card-footer bg-dark" >
						<p style={{ color: 'white', textAlign: 'center' }}>Example</p>
					</div>
				</div>
			</div>
		</div >
	);
};

export default Home;