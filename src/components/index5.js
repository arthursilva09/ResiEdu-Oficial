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
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Index5 extends Component {  
  render() {
    return (
      <Container>
        <Anuncios></Anuncios>
        <div className="centerT" id="aa">
            <Image className="tt img-responsive imgTxt" src={Personagem} alt="Imagem do Personagem "/>
            <ProgressBar animated now={60} label={`${60}%`} id="barrinha"/>
            <div className="offer offer-success">
                <div className="shape"></div>
                <div className="offer-content">
                  <Typist>
                    Olha que legal! Temos uma Política Nacional de Resíduos Sólidos! Mas o que seria isso mesmo? Bom, esta Política ela traz 
                    princípios, objetivos e instrumentos de como as pessoas ou empresas, públicas ou privadas, que falamos lá no início, irão 
                    fazer o gerenciamento dos seus Resíduos Sólidos.
                  </Typist>
                </div>
                
            </div>
            
            
        </div>
        <div className="botao">
          <Link to="/pag4"><Button className="btn btn-warning ">Voltar</Button></Link>
          <Link to="/pag6"><Button className="btn btn-success ">Prosseguir</Button></Link>
        </div>    
        </Container>
    );
  }
  
  }

  export default Index5;