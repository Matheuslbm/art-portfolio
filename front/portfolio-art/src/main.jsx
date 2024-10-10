import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const InitAos = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return null; // Este componente não precisa renderizar nada
};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InitAos />
    <App />
  </StrictMode>
);
