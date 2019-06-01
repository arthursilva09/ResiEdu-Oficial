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
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Index4 extends Component {  
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
                      Pronto! Agora que sabemos o que são os resíduos sólidos podemos prosseguir. ;) <br/>
                      <Typist.Delay ms="1000" />
                      Então você já sabe que temos uma Lei sobre Resíduos Sólidos: LEI Nº 12.305, DE 2 DE AGOSTO DE 2010. É a nossa Política Nacional de Resíduos Sólidos!.
                    </Typist>
                  </div>
              </div>
            <ProgressBar animated now={60} label={`${60}%`} id="barrinha"/>
        </div>
        <div className="botao">
          <Link to="/pag3"><Button className="btn btn-warning ">Voltar</Button></Link>
          <Link to="/pag4"><Button className="btn btn-success ">Prosseguir</Button></Link>
        </div>
      </Container>
    );
  }
  
  }

  export default Index4;