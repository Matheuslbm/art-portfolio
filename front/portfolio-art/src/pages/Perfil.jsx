import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Aos from 'aos';

const Perfil = () => {
  useEffect(() => {
    Aos.init(); // inicializa o AOS
  }, []);
  return (
    <>
      <Nav />

      <div
        data-aos="zoom-in"
        className="flex flex-col lg:flex-row items-center justify-center lg:items-start p-10 lg:p-20 mb-96 mt-[10vh]"
      >
        {/* Texto da história à esquerda */}
        <div className="lg:w-1/2 text-left mb-8 lg:mb-0 lg:mr-10">
          <h1 className="text-4xl font-bold mb-4">A história de Esther</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Sou carioca, moro no Rio de Janeiro Sou uma artista autodidata, cujo
            coração pulsa ao ritmo das artes . No passado, ousei explorar os
            territórios da moda. Entretanto, a chama das artes plásticas sempre
            ardeu em meu íntimo, deixei o mundo da produção de moda e comecei a
            explorar a arte pintando quadros desenvolvendo, o que sempre sonhei.
            Por circunstâncias adversas, me afastei temporariamente desse
            universo.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            No ano de 2023, após uma década de espera, estou de volta à minha
            antiga paixão. Ter em minhas mãos um pincel ou uma espátula, cercada
            pelas cores vívidas das tintas e a minha frente, uma tela em branco
            que aguarda ansiosamente para ser transformada em uma obra de arte
            através de imaginação e sentimentos.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Cada traço é uma declaração ardente, uma vontade irrefreável de
            desencadear emoções por meio da minha arte. Meu propósito é
            compartilhar essa paixão com o mundo.
          </p>
        </div>
        {/* Foto da artista à direita */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="quadros3.jpg"
            alt="Foto esther"
            className="w-[600px] h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Perfil;
