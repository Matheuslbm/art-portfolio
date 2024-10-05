import React, {useState} from "react";
import Nav from '../components/nav';
import Footer from '../components/Footer'

const obras = [
    {id: 1, src: "01.jpg", alt:"tela1"},
    {id: 2, src: "03.jpg", alt:"tela2"},
    {id: 3, src: "04.jpg", alt:"tela3"},
    {id: 4, src: "obra1.jpg", alt:"tela4"},
    {id: 5, src: "obra1.jpg", alt:"tela5"},
    {id: 6, src: "obra1.jpg", alt:"tela6"},
    {id: 7, src: "obra1.jpg", alt:"tela7"},
    {id: 8, src: "obra1.jpg", alt:"tela8"},

]

const Obras = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Nav/>
                <div className="flex-grow">
                    
                </div>

            <Footer/>
        </div>
        </>
    )
}

export default Obras