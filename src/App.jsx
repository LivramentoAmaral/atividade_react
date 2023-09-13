import React, { useEffect, useState } from 'react';

// import React,{useEffect,useRef} from 'react';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import './app.css';
import Card from './Componentes/Card';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dados = require('./data.json');
    setData(dados);
  }, []);


  return (
    <div className="App">
      <>
        <Navbar />
        <main className='main'>
          {
            data.map((item, index) => (
              <Card
                key={index}
                titulo={item.titulo}
                imagem={item.imagem}
                descricao={item.descricao}
                curriculo={item.curriculo}
              />
            ))
          }
        </main>

        <Footer />

      </>


    </div>
  );
}

export default App;
