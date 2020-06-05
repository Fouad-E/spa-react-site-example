import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Media from 'reactstrap';

import Bonjour from '../../images/bonjourLSF.jpg';

import './home.css';

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <figure>
          <img src={Bonjour} alt="Bonjour en LSF" />
          <figcaption>Bonjour en LSF</figcaption>
        </figure>
        <h1>Bienvenue sur le site Découverte de la langue des signes française</h1>
      </Jumbotron>
    </div>

  );
};

export default Home;
