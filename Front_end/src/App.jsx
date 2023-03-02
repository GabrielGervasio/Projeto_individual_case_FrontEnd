
import reactLogo from './assets/react.svg'
import './App.css'
import { Table, Container } from 'react-bootstrap'

import { useState, useEffect } from "react";



import blogFetch from "./api/Api";


import NavbaReact from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
      try {
          const response = await blogFetch.get('/joias');
          const data = response.data;
          console.log(data)

          setPosts(data);
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {

      getPosts()

  }, []);

  return (
    <div className="App">
      <NavbaReact />
      <div className="destaque">
        <h1 className='destaque2'>Joias</h1>
        <h2 className="destaque3"></h2>
        </div>
        
        {posts.length === 0 ? <div className='centralizar'> <span className="loader"></span></div> : (
            posts.map((equipaments) => (
                <div className='post' key={equipaments.id}>
                    <h2>{ }</h2>
                    <div className="tabela">
                    
                        <div className="informacoes">
                            <h2>Joia: {equipaments.nome}</h2>
                            <p>Cor: {equipaments.cor}</p>
                            <p>Preco: {equipaments.preco}</p>
                            <p>{equipaments.descricao}</p>
                            
                        </div>
                        
                    </div>
                </div>
            ))
        )}

<div className="espaço"></div>
    </div>
    
  )
}

export default App
