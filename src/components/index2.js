import React, { Component } from 'react';
import '../App.css';
import 'react-bootstrap';
import Personagem from '../img/personagem.png'
import Anuncios from './anuncios';
import Typist from 'react-typist';

import { Link } from 'react-router-dom'

/* BOOTSTRAP */
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Index2 extends Component {
  render() {
    return (
      <Container>
        <Anuncios></Anuncios>
        <div className="centerT" id="aa">
          
            <img className="tt img-responsive imgTxt" src={Personagem} alt="Imagem do Personagem "/>
            <ProgressBar animated now={60} label={`${60}%`} id="barrinha"/>
            <div className="offer offer-success">
                <div className="shape"></div>
                <div className="offer-content">
                  <Typist>
                    Você sabia que temos uma Lei Federal que fala como devemos tratar nosso lixo?
                    <Typist.Delay ms="1000" />
                    <form className="form1">
                      <Link to="/pag3"><input TYPE="RADIO" NAME="op" VALUE="sim" id="simm" onclick="sim()" /></Link> Sim
                      <Link to="/pag3"><input TYPE="RADIO" NAME="op" VALUE="nao" /></Link> Não
                    </form>
                  </Typist>
                </div>
            </div>
            
        </div>
      </Container>
    );
  }
  
  }

  export default Index2;