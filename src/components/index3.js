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

class Index3 extends Component {  
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
                    Pois bem! Resíduos Sólidos é qualquer material, substância, objeto ou bem descartado resultante 
                    de atividades humanas em sociedade, que esteja nos estados sólido ou semissólido e que não podem 
                    ter como destinação final a rede pública de esgotos, muito menos os rios, lagos, etc. Ah! Se 
                    inclui também como resíduos sólidos os que possuem algum tratamento especifico para sua destinação
                    final devido a sua natureza.
                  </Typist>
                </div>
                
            </div>
            
            <ProgressBar animated now={60} label={`${60}%`} id="barrinha"/>
        </div>
        <div className="botao">
          <Link to="/pag2"><Button className="btn btn-warning ">Voltar</Button></Link>
          <Link to="/pag4"><Button className="btn btn-success ">Prosseguir</Button></Link>
        </div>
      </Container>
    );
  }
  
  }

  export default Index3;