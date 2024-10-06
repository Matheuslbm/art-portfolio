import React, { useEffect} from "react";
import Nav from "../components/nav";
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import Aos from "aos";

const Home = () => {
	useEffect(() => {
        Aos.init(); // inicializa o AOS
    }, []);
    return (
		<>
		
		<Nav/>
		 {/* Container da foto da artista e texto */}
		 <div className="flex items-center justify-center p-10">
			{/* Foto da artista */}
			<img src="artista.jpg" 
			alt="Foto da artista Esther"
			className="w-200 h-230 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 mr-8 " 
			/>

		{/* Texto e botão */}
			<div className="text-left">
				<h2 className=" text-3xl font-bold text-gray-800 mb-4">Sobre mim</h2>
				<p className="text-gray-700  leading-relaxed max-w-prose mb-4 text-lg">Esther é uma artista plástica renomada, conhecida por suas pinturas vibrantes e expressivas.
				Sua arte reflete emoções profundas e explora temas contemporâneos.</p>
				<p className="text-gray-700  leading-relaxed max-w-prose mb-4 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis distinctio, doloribus fuga voluptatem placeat magni in quae, tenetur tempora fugiat delectus, nisi nobis doloremque ullam. Eveniet asperiores facilis suscipit quas?
				</p>
				<Link to='/perfil'>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button className=" mt-5 px-4 py-4 bg-slate-800 text-white font-semibold rounded-full transition duration-300 hover:bg-slate-600">
						Ver perfil completo
					</button>
				</Link>
			</div>
		 </div>


		  {/* Imagem 1.jpg com efeito AOS */}
			<div data-aos="fade-up" data-aos-duration="1500" className="my-20">

				<img src="08.jpg" 
				alt="obra de ate" 
				className="mx-auto w-full max-w-[1500px] object-contain border border-gray-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
				/>
			</div>

			{/* Imagem 2.jpg com efeito AOS */}
			<div data-aos="fade-up" data-aos-duration="1500" className="my-20">

				<img src="09.jpg" 
				alt="obra de ate" 
				className="mx-auto w-full max-w-[1500px] object-contain border border-gray-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
				/>
			</div>

			{/* Container final*/}
			<div data-aos="fade-up" className="flex items-center justify-center p-10">
				{/*Foto da artita */}
				<img src="02.jpg"
				 alt="Foto da artista Esther" 
				 className="w-40 h-40 object-cover rounded-full mr-8"
				 />

				 {/*Texto e botao*/ }
				 <div className="flex flex-col">
					<p className="text-gray-700 mb-4">"A arte lava da alma a poeira da vida cotidiana."</p>
					<Link to='/obras'>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button className="px-4 py-3 bg-slate-800 text-white font-semibold rounded-full transition duration-300 hover:bg-slate-600">
							Explore a galeria
						</button>
					</Link>
				 </div>

			</div>

			
		
		<Footer/>
		
		</>
	)
}

export default Home;