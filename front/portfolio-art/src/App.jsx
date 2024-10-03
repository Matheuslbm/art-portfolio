import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Obras from "./pages/Obras";
import Expo from "./pages/Exposicao";
import Perfil from "./pages/Perfil";
import Contato from "./pages/Contato";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/obras" element={<Obras />} />
				<Route path="/exposicoes" element={<Expo/>} />
				<Route path="/perfil" element={<Perfil />} />
				<Route path="/contato" element={<Contato />} />



			</Routes>
		</Router>
	)
}

export default App;