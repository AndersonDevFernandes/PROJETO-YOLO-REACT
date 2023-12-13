import React from "react"

import '../App.css';

function cadDispositivo() {
  return (

    <div className="main">
      <div className="text">
        <p>Cadastrar Dispositivo</p>
      </div>
      <div className="form">
        <form>
          <div className="box">
            <p className="text-dispositivo">ID do dispositivo</p>
            <input type="number" placeholder="000-000" className="box-cad" />
          </div>
          <div className="box">
            <p className="text-dispositivo">Marca do dispositivo</p>
            <input type="text" placeholder="Samsung, Iphone..." className="box-cad" />
          </div>
          <p className="text-dispositivo seletorBox">Ambiente de instalação</p>
          <select className="seletor" placeholder="cadastre um ambiente" >
            <option className="room">SALA</option>
            <option className="room">QUARTO</option>
            <option className="room">COZINHA</option>
          </select>
          <div className="box">
            <p className="text-dispositivo">Nome do dispositivo</p>
            <input type="number" placeholder="Digite o nome do dispositivo." className="box-cad" />
          </div>
          <div className="box submitBox">
            <input type="submit" value="Cadastrar dispositivo" className="submitCad" />
          </div>
        </form>
      </div>
    </div>
  )
}



export default cadDispositivo