import React from "react";
import Nav from "../components/nav";

const Home = () => {
    return (
		<>
		<div className="border border-slate-100">
		<Nav/>
		</div>
		<div className="text-center p-5">
			<h1 className="text-3xl font-bold text-gray-800">Home</h1>
			<p className="text-gray-600"> Bem vindo ao portfólio</p>
		</div>
		</>
	)
}

export default Home;