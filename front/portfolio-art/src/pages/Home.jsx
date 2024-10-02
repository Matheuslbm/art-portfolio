import React from "react";
import Nav from "../components/nav";
import Footer from '../components/Footer'

const Home = () => {
    return (
		<>
		<div className="flex flex-col min-h-screen">
		<Nav/>
		

			<div className="flex-grow">
				<div className="">
					
				</div>

				<img src="08.jpg" alt="obra de ate" className="mx-auto w-full max-w-[1500px] object-contain border border-gray-400 rounded-lg shadow-lg" />
			</div>

			
		
		<Footer/>
		</div>
		</>
	)
}

export default Home;