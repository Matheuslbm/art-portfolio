import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Aos from 'aos';

const Home = () => {
  useEffect(() => {
    Aos.init(); // inicializa o AOS
  }, []);
  return (
    <>
      <Nav />
      {/* Container da foto da artista e texto */}
      <div className="flex flex-col lg:flex-row items-center justify-center p-10">
        {/* Foto da artista */}
        <img
          src="fotoesther2.jpg"
          alt="Foto da artista Esther"
          className=" lg:max-w-2xl object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 mb-7 mr-8 "
        />

        {/* Texto e botão */}
        <div className="text-left">
          <h2 className=" text-3xl font-bold text-gray-800 mb-4 ">Sobre 🖌️</h2>

          <p className="text-gray-700  leading-relaxed max-w-prose mb-4 text-lg">
          Para mim, as obras de <strong>arte</strong> são capazes de adicionar uma dose extra de <strong>personalidade e estilo a qualquer ambiente</strong>. A harmonia de cores e formas presentes nessas obras únicas, cria uma atmosfera cativante!
          </p>

          <p className="text-gray-700  leading-relaxed max-w-prose mb-4 text-lg">
             É impressionante como a combinação certa de cores pode influenciar nossas emoções e criar uma <strong>sensação de equilíbrio e harmonia em um espaço. </strong>
          </p>

          <p className="text-gray-700  leading-relaxed max-w-prose mb-4 text-lg">
          Essas obras de arte podem transformar completamente o ambiente, adicionando um toque de <strong>sofisticação e expressão artística</strong>.
          </p>

          <Link to="/perfil">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button className=" mt-5 px-4 py-4 text-sm md:text-base bg-slate-800 text-white font-semibold rounded-full transition duration-300 hover:bg-slate-600">
              Ver perfil completo
            </button>
          </Link>
        </div>
      </div>

      {/* Imagem 1.jpg com efeito AOS */}
      <div data-aos="fade-up" data-aos-duration="1500" className="my-20">
        <img
          src="quadros.jpg"
          alt="obra de ate"
          className="mx-auto w-full max-w-[1500px] object-contain border border-gray-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Imagem 2.jpg com efeito AOS */}
      <div data-aos="fade-up" data-aos-duration="1500" className="my-20">
        <img
          src="quadros2.jpg"
          alt="obra de ate"
          className="mx-auto w-full max-w-[1500px] object-contain border border-gray-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Container final*/}
      <div data-aos="fade-up" className="flex items-center justify-center p-10">
        {/*Foto da artita */}
        <img
          src="fotoesther.jpeg"
          alt="Foto da artista Esther"
          className="w-40 h-40 object-cover rounded-full mr-8"
        />

        {/*Texto e botao*/}
        <div className="flex flex-col">
          <p className="text-gray-700 mb-4">
            "A arte não apenas expressa emoções, mas também tem o poder de transformar e compor o ambiente."
          </p>
          <Link to="/obras">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button className="px-1 py-3 lg:px-8 bg-slate-800 text-white font-semibold rounded-full transition duration-300 hover:bg-slate-600">
              Explore a galeria
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
