import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Aos from 'aos';

const Expo = () => {
  useEffect(() => {
    Aos.init(); // Inicializa o AOS para animações
  }, []);
  return (
    <>
      <Nav />
      {/* Container principal */}
      <div className="container mx-auto p-10 mb-96 mt-[10vh]">
        {/* Seção da exposição */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between p-10 bg-slate-100 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          {/* Imagem da exposição à esquerda */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-10">
            <img
              src="3long.jpg"
              alt="foto da exposicao"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Texto sobre a exposição à direita */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl mb-4">Vogue Square: Tons do Brasil</h2>
            <p>
              <strong>Local:</strong> Espaço cultural Vogue Square, Rio de
              janeiro
            </p>
            <p>
              <strong>Data:</strong> 28 de setembro a 25 de novembro
            </p>
            <br />
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Esther participou de uma exposição renomada onde suas obras
              vibrantes ganharam destaque. A exposição Tons do Brasil: Uma
              jornada pela arte e cultura é um convite à apreciação das
              expressões artísticas que compõem o cenário nacional em toda a sua
              diversidade cultural.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              "Em um território marcado pela multiplicidade de paisagens,
              histórias, etnias e tradições, os artistas trazem a riqueza de
              suas experiências, explorando as nuances de sua identidade por
              meio de paletas que vão do vibrante ao sutil, do figurativo ao
              abstrato."
            </p>
          </div>
        </div>

        {/* Seção da exposição */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between p-10 bg-slate-100 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          {/* Imagem da exposição à esquerda */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-10">
            <img
              src="certf2.jpg"
              alt="foto da exposicao"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Texto sobre a exposição à direita */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl mb-4">Novos Mares, Novas Cores</h2>
            <p>
              <strong>Local:</strong> Galeria de Arte 1, Búzios
            </p>
            <p>
              <strong>Data:</strong> 28 de fevereiro a 03 de abril
            </p>
            <br />
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {' '}
              O local se destaca por receber um grande fluxo de visitantes
              locais e estrangeiros que afluem durante o ano todo no balneário.
              A visitação ocorreu de quinta a domingo, das 16h às 22h.
            </p>
          </div>
        </div>

        {/* Seção da exposição */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between p-10 bg-slate-100 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          {/* Imagem da exposição à esquerda */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-10">
            <img
              src="certf.jpg"
              alt="foto da exposicao"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Texto sobre a exposição à direita */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl mb-4">
              Flags, seas, rivers, colors and loves
            </h2>
            <p>
              <strong>Local:</strong> Art100Gallery, Porto Alegre
            </p>
            <p>
              <strong>Data:</strong> 8 de agosto a 18 de setembro
            </p>
            <br />
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A mostra explorou temas como identidade, natureza e emoção,
              através de uma série de obras vibrantes e profundamente
              simbólicas. Os artistas participantes refletiram sobre como os
              mares, os rios e as cores podem representar diferentes formas de
              amor, união e conexão com o mundo ao nosso redor.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Com sua sensibilidade única, Esther Cerqueira apresentou obras que
              destacam sua perspectiva sobre a inter-relação entre o ser humano
              e os elementos da natureza, utilizando cores intensas e formas
              fluidas para criar uma narrativa visual envolvente. Sua
              participação na exposição foi marcada pela profundidade emocional
              de suas peças e pela capacidade de provocar reflexões nos
              espectadores.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Expo;
