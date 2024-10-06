import React, {useState, useEffect} from "react";
import Nav from '../components/nav';
import Footer from '../components/Footer'
import Aos from "aos";

const obras = [
    {id: 1, src: "01.jpg", alt:"tela1"},
    {id: 2, src: "03.jpg", alt:"tela2"},
    {id: 3, src: "04.jpg", alt:"tela3"},
    {id: 4, src: "05.jpg", alt:"tela4"},
    {id: 5, src: "06.jpg", alt:"tela5"},
    {id: 6, src: "07.jpg", alt:"tela6"},
    {id: 7, src: "08.jpg", alt:"tela7"},
    {id: 8, src: "09.jpg", alt:"tela8"},

]

const Obras = () => {
    useEffect(() => {
        Aos.init(); // inicializa o AOS
    }, []);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image)
    }

    const closeImage = () => {
        setSelectedImage(null)
    }
    return (
        <>
            <Nav/>

            {/*Container de obras */}
            <div data-aos="fade-up" className="container mx-auto p-10">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center ">
                    {obras.map((obra) => (
                        <div key={obra.id}>
                            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                            <img 
                            src={obra.src}
                            alt={obra.alt} 
                            className="w-80 h-80 object-cover cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform "
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
                        <img src={selectedImage} alt="Ampliada" className="max-w-full max-h-full" />
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                        className="absolute top-2 right-2  text-white text-2xl"
                        onClick={closeImage}
                        >
                            &times;
                            
                        </button>
                    </div>

                </div>
            )}
            

            <Footer/>
        
        </>
    )
}

export default Obras