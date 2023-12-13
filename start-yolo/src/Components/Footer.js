import React from "react"

import { Link } from 'react-router-dom'
import btnHome from '../Imagens/home.png'
import btnAmbiente from '../Imagens/ambientes.png'
import btnDispositivo from '../Imagens/dispositivos.png'
import notificacoes from '../Imagens/notificações.png'

import '../App.css';

function Footer() {
  return (
    <div className="footer">
      <div className="btn-footer">
        <Link to="/"><button><img src={btnHome} alt="home" /></button></Link>
        <p>Inicio</p>
      </div>
      <div className="btn-footer">
        <Link to="/pages/CadastrarDispositivos"><button><img src={btnAmbiente} alt="Dispositivo" /></button></Link>
        <p>Dispositivos</p>
      </div>
      <div className="btn-footer">
        <Link to="/pages/Ambientes"><button><img src={btnDispositivo} alt="Ambiente" /></button></Link>
        <p>Ambientes</p>
      </div>
      <div className="btn-footer">
        <Link to="/pages/Notificacoes"><button><img src={notificacoes} alt="notificações" /></button></Link>
        <p>Notificações</p>
      </div>
    </div>
  )
}

export default Footer
