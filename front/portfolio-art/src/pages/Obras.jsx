import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Aos from 'aos';

const obras = [
  { id: 1, src: '01.jpg', alt: 'tela1' },
  { id: 2, src: '02.jpg', alt: 'tela2' },
  { id: 3, src: '03.jpg', alt: 'tela3' },
  { id: 4, src: '04.jpg', alt: 'tela4' },
  { id: 5, src: '05.jpg', alt: 'tela5' },
  { id: 6, src: '06.jpg', alt: 'tela6' },
  { id: 7, src: '07.jpg', alt: 'tela7' },
  { id: 8, src: '08.jpg', alt: 'tela8' },
  { id: 9, src: '09.jpg', alt: 'tela9' },
  { id: 10, src: '10.jpg', alt: 'tela10' },
  { id: 11, src: '11.jpg', alt: 'tela11' },
  { id: 12, src: '12.jpg', alt: 'tela12' },
  { id: 13, src: '13.jpg', alt: 'tela13' },
  { id: 14, src: '14.jpg', alt: 'tela14' },
  { id: 15, src: '15.jpg', alt: 'tela15' },
  { id: 16, src: '16.jpg', alt: 'tela16' },
  { id: 17, src: '17.jpg', alt: 'tela17' },
  { id: 18, src: '18.jpg', alt: 'tela18' },
  { id: 19, src: '19.jpg', alt: 'tela19' },
  { id: 20, src: '20.jpg', alt: 'tela20' },
  { id: 21, src: '21.jpg', alt: 'tela21' },
  { id: 22, src: '22.jpg', alt: 'tela22' },
  { id: 23, src: '23.jpg', alt: 'tela23' },
  { id: 24, src: '24.jpg', alt: 'tela24' },
];

const Obras = () => {
  useEffect(() => {
    Aos.init(); // inicializa o AOS
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = image => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <Nav />

      {/*Container de obras */}
      <div data-aos="fade-up" className="container mx-auto p-10 mt-[10vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center ">
          {obras.map(obra => (
            <div key={obra.id}>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <img
                src={obra.src}
                alt={obra.alt}
                className="w-80 h-[500px] object-cover cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform "
                onClick={() => openImage(obra.src)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal para exibir imagem ampliada */}
      {selectedImage && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeImage}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Ampliada"
              className="max-w-full max-h-full"
            />
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="absolute top-2 right-2  text-white text-4xl"
              onClick={closeImage}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Obras;
