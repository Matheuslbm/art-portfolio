import React, {useEffect} from "react";
import Nav from '../components/nav'
import Footer from '../components/Footer'
import Aos from "aos";

const Perfil = () => {
    useEffect(() => {
        Aos.init(); // inicializa o AOS
    }, []);
    return (
        <>
        
            <Nav/>
              
              <div data-aos="zoom-in" className="flex flex-col lg:flex-row items-center justify-center lg:items-start p-10 lg:p-20 mb-96 mt-[10vh]">
                 {/* Texto da história à esquerda */}
                 <div className="lg:w-1/2 text-left mb-8 lg:mb-0 lg:mr-10">
                    <h1 className="text-4xl font-bold mb-4">A história de Esther</h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Esther é uma renomada artista plástica, cuja jornada nas artes visuais começou desde muito jovem. Suas obras são reconhecidas pela expressividade e pelas cores vibrantes, que refletem emoções profundas e uma interpretação única do mundo contemporâneo.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mt-4">Com uma carreira de mais de duas décadas, ela já participou de exposições nacionais e internacionais, conquistando admiradores por onde passa. Sua arte transcende fronteiras e toca o coração de todos que a contemplam.

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

            <Footer/>
       
        </>
    )
}

export default Perfil;