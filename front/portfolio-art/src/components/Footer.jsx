import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-white text-slate-900 py-6">
            <div className="container mx-auto text-center">
                
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="https://www.instagram.com/perfil-da-artista"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-gray-400"
                    >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/perfil-da-artista"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-gray-400"
                    >
                     <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </div>
                <hr className="border-t border-slate-600 my-4" />
                <p>
                    Developed with 🖤 for  {""}
                    <a 
                    href="https://www.linkedin.com/in/matheusslimabm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                    >
                        Matheus Lima
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;