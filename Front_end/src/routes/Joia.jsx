import React from 'react'
import blogFetch from '../api/Api'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Joia = () => {

    const navigate = useNavigate()

    const [nome, setNome] = useState();
    const [preco, setPreco] = useState();
    const [cor, setCor] = useState()
    const [descricao, setDescricao] = useState()


    const createPedido = async (e) => {
        e.preventDefault()
        const novoPedido = { nome, preco, cor, descricao };
        await blogFetch.post("/pedidos", {
            nome: nome,
            preco: preco,
            cor: cor,
            descricao: descricao,
            
        })
    }
    const [posts, setPosts] = useState([])
  return (
    <div className='pedido'>



    <h2 className="chamado">Coloque seu pedido aqui:</h2>

    <form onSubmit={(e) => createPedido(e)} className="formularios">

        <div className="form-control2">
            <label htmlFor="title">Nome:</label>
            <input type="text" name='title' id='title' placeholder='digite o que voce deseja' onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="form-control2">
            <label htmlFor="tipoPedido">Desenho:</label>
            <input type="text" name='tipoPedido' id='tipoPedido' placeholder='digite o tipo' onChange={(e) => setPreco(e.target.value)} />
        </div>
        <div className="form-control2">
            <label htmlFor="imagemPedido">Cor:</label>
            <input type="text" name='imagemPedido' id='imagemPedido' placeholder='digite o que voce deseja' onChange={(e) => setCor(e.target.value)} />
        </div>
        <div className="form-control2">
            <label htmlFor="localPedido">Local:</label>
            <input type="text" name='localPedido' id='localPedido' placeholder='digite o que voce deseja' onChange={(e) => setDescricao(e.target.value)} />
        </div>
        <input type="submit" value="Enviar pedido" className='btn envio' />
    </form>

   
    <div className="espaço"></div>
</div>

  )
}

export default Joia