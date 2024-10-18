import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Aos from 'aos';

const obras = [
  { id: 1, src: '01.jpg', alt: 'tela1', sold: true },
  { id: 2, src: '02.jpg', alt: 'tela2', sold: false },
  { id: 3, src: '03.jpg', alt: 'tela3', sold: false },
  { id: 4, src: '04.jpg', alt: 'tela4', sold: true },
  { id: 5, src: '05.jpg', alt: 'tela5', sold: false },
  { id: 6, src: '06.jpg', alt: 'tela6', sold: false },
  { id: 7, src: '07.jpg', alt: 'tela7', sold: true },
  { id: 8, src: '08.jpg', alt: 'tela8', sold: false },
  { id: 9, src: '09.jpg', alt: 'tela9', sold: false },
  { id: 10, src: '10.jpg', alt: 'tela10', sold: false },
  { id: 11, src: '11.jpg', alt: 'tela11', sold: false },
  { id: 12, src: '12.jpg', alt: 'tela12', sold: false },
  { id: 13, src: '13.jpg', alt: 'tela13', sold: false },
  { id: 14, src: '14.jpg', alt: 'tela14', sold: false },
  { id: 15, src: '15.jpg', alt: 'tela15', sold: false },
  { id: 16, src: '16.jpg', alt: 'tela16', sold: false },
  { id: 17, src: '17.jpg', alt: 'tela17', sold: false },
  { id: 18, src: '18.jpg', alt: 'tela18', sold: false },
  { id: 19, src: '19.jpg', alt: 'tela19', sold: false },
  { id: 20, src: '20.jpg', alt: 'tela20', sold: false },
  { id: 21, src: '21.jpg', alt: 'tela21', sold: false },
  { id: 22, src: '22.jpg', alt: 'tela22', sold: false },
  { id: 23, src: '23.jpg', alt: 'tela23', sold: false },
  { id: 24, src: '24.jpg', alt: 'tela24', sold: true },
  { id: 25, src: '25.jpeg', alt: 'tela25', sold: false },
  { id: 26, src: 'quadros3.jpg', alt: 'tela26', sold: false },


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
            <div key={obra.id} className='relative group'>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <img
                src={obra.src}
                alt={obra.alt}
                className="w-80 h-[500px] object-cover cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform "
                onClick={() => openImage(obra.src)}
              />
              {/* Exibe a mensagem "Indisponível" apenas se a obra foi vendida */}
              {obra.sold && (
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full p-2 text-center text-sm lg:opacity-0 group-hover:opacity-100 transition-opacity">
                  Indisponível
                </div>
              )}
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
