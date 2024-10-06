import React, {useEffect} from "react";
import Nav from '../components/nav'
import Footer from '../components/Footer'
import Aos from "aos";

const Expo = () => {
    useEffect(() => {
        Aos.init(); // Inicializa o AOS para animações
    }, []);
    return (
        <>
            <Nav/>
              {/* Container principal */}
              <div className="container mx-auto p-10 mb-96">
                    {/* Seção da exposição */}
                    <div className="flex flex-col lg:flex-row items-center justify-between p-10 bg-slate-100 rounded-lg shadow-lg" data-aos='fade-up'>
                         {/* Imagem da exposição à esquerda */}
                         <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-10">
                            <img 
                            src="galeria.jpg" 
                            alt="foto da exposicao" 
                            className="w-full h-auto rounded-lg shadow-lg"
                            />
                         </div>
                          {/* Texto sobre a exposição à direita */}
                          <div className="lg:w-1/2 text-left">
                            <h2 className="text-3xl mb-4">Título da exposição</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">Esther participou de uma exposição renomada onde suas obras vibrantes ganharam destaque. O objetivo da exposição foi explorar temas contemporâneos e provocar emoções profundas nos visitantes.

                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                            A exposição foi um marco importante em sua carreira, permitindo que suas obras alcançassem um novo público e trazendo reconhecimento internacional. Cada obra reflete sua visão única sobre o mundo, envolvendo o público em uma experiência imersiva.

                            </p>
                          </div>

                    </div>
              </div>

            <Footer/>
      
        </>
    )
}

export default Expo