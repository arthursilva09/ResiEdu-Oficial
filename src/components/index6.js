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

class Index6 extends Component {  
  render() {
    return (
      <Container>
        <Anuncios></Anuncios>
        <div className="centerT" id="aa">
            <Image className="tt img-responsive imgTxt" src={Personagem} alt="Imagem do Personagem "/>
            <div className="offer offer-success">
                <div className="shape"></div>
                <div className="offer-content">
                  <Typist>
                    Opa! Gerenciamento de Resíduos Sólidos ??? Sacou? É isso mesmo. É o conjunto de ações realizadas para tratar 
                    os resíduos sólidos gerados: incluindo a coleta, transporte, transbordo, tratamento e destinação final ambientalmente 
                    adequada. E não se pode esquecer que os rejeitos também precisam ser descartados adequadamente no ambiente. Eita! Rejeitos?? 
                    Resíduos Sólidos.... Rejeitos.... Parecem ser a mesma coisa não é isso ?
                  </Typist>
                </div>
                
            </div>
            
            <ProgressBar animated now={60} label={`${60}%`} id="barrinha"/>
        </div>
        <div className="botao">
          <Link to="/pag5"><Button className="btn btn-warning ">Voltar</Button></Link>
          <Link to="/pag7"><Button className="btn btn-success ">Prosseguir</Button></Link>
        </div>
      </Container>
    );
  }
  
  }

  export default Index6;