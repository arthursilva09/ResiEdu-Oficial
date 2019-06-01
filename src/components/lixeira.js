import React, { Component } from 'react';
import '../App.css';
import 'react-bootstrap';
import Anuncios from './anuncios';
import Typist from 'react-typist';

import { Link } from 'react-router-dom'

/* BOOTSTRAP */
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'

/* IMAGENS */
import Personagem from '../img/personagem.png'
import Star1 from '../img/1star.png'
import Radioativo from '../img/radioativo.jpg'
import Garrafa from '../img/garrafa.jpeg'
import Residuoliq from '../img/residuoliq.jpg'
import Lixeiro from '../img/lixeiro.jpg'

class Lixeira extends Component {

    constructor(){
        super();
        var pont=0;
        var errosa=0;
        var errosb=0;

        this.allowDrop = this.allowDrop.bind(this);
        this.drag = this.drag.bind(this);
        this.drag1 = this.drag1.bind(this);
        this.drag2 = this.drag2.bind(this);
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        this.pont=1;
    }
    drag1(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        this.errosa=1;
    }
    drag2(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        this.errosb=1;
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        var acer = document.getElementById("acer");
        var erros = document.getElementById("erros");
        var total_erros = this.errosa+this.errosb;
      
        acer.innerHTML = "Acertos: "+this.pont;
        erros.innerHTML = "Erros: "+total_erros; 
    }

    render() {
        return (
            <Container>
                <Anuncios></Anuncios>
                <Row>
                    <div className="centerT">
                    <Image className="tt img-responsive imgTxt" src={Personagem} alt="Imagem do Personagem" />

                    <ProgressBar animated now={60} label={`${60}%`} id="barrinha"/>

                    <div className="offer offer-success">
                        <div className="shape">

                        </div>
                        <div className="offer-content">	
                            <Image src={Star1} id="cont" width="20%" height="7%" />	

                            <p className="imgTxt" id="test">Arraste os resíduos sólidos para a lixeira! </p>

                            <div>
                                <div className="aimagens">
                                    <Image src={Radioativo} id="imagem1" className="tamanhoIm" draggable="true" ondragstart={this.drag1()} />
                                    <Image src={Garrafa} id="imagem2" className="tamanhoIm" draggable="true" ondragstart={this.drag()} />
                                    <Image src={Residuoliq} id="imagem3" className="tamanhoIm" draggable="true" ondragstart={this.drag2()} />
                                </div>

                                <div>
                                    <Image src={Lixeiro} width="200px;" ondrop={this.drop()} ondragover={this.allowDrop()} />
                                    <div className="acertos">
                                        <p id="acer" className="acert" >Acertos:  0</p>
                                        <p id="erros" className="erro" >Erros: 0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>

                    <Button variant="success">Verificar</Button>

                </Row>
            </Container>

        );
  }  
}
export default Lixeira;