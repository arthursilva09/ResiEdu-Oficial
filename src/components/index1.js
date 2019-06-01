import React, { Component } from 'react';
import '../App.css';
import Prs from '../img/prs.png';
import Anuncios from './anuncios';

import { Link } from 'react-router-dom'

/* BOOTSTRAP */
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class Index1 extends Component {
  render() {
    return (
      <Container>
        <Anuncios></Anuncios>
        <div className="centerT">
          <Image src={Prs} alt="Programa Nacional de Residuo Sólidos"/>
          <h2 id="index-h2">Política Nacional de Resíduos Sólidos<br/> Lei 12.305/2010<br/></h2>
          <Link to="/pag2"><Button variant="success" className="btn btn-lg" > Conhecer...</Button></Link>
        </div>
      </Container>
    );
  }
}

export default Index1;