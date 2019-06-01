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

class Index7 extends Component {  
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
                    Se você pensou assim, Você quase acertou! Rsr Os Rejeitos são resíduos sólidos que depois do processo de tratamento 
                    para reutilização, por exemplo, ou de recuperação, não apresentem outra possibilidade que não a disposição final 
                    ambientalmente adequada.
                  </Typist>
                </div>
                
            </div>
            
            <ProgressBar animated now={60} label={`${60}%`} id="barrinha"/>
        </div>
        <div className="botao">
          <Link to="/pag6"><Button className="btn btn-warning ">Voltar</Button></Link>
          <Link to="/pag8"><Button className="btn btn-success ">Prosseguir</Button></Link>
        </div>
      </Container>
    );
  }
  
  }

  export default Index7;