import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Aos from 'aos';

import { FaHome, FaThumbsUp, FaCopy } from 'react-icons/fa';
import '../styles/credits.css'


export function Credits() {

  return (
    <>
      {/* header */}
      <div className="styles_header">
        <nav className="navbar">
          <ul>
            <li><Link to="/"><FaHome className="navbar_icon" />Início</Link></li>
            <li><a className="active"><FaThumbsUp className="navbar_icon" />Créditos</a></li>
            <li><Link to="/posts"><FaCopy className="navbar_icon" />Posts</Link></li>
          </ul>
        </nav>

        <div className="header_container">
          <p className="styles_mb-24">
            <span className="header_waveHand">👋</span>Olá visitante,
          </p>
          <p style={{color: 'var(--support)'}}>seja bem-vindo(a) a aba de:</p>
          <h1 style={{textTransform: 'uppercase', marginTop: '5px'}}>Créditos</h1>
        </div>
      </div>

      <div className="credits_home">
        <h1>Obrigado!</h1>
      </div>

      <div className="credits">
        <div className="credits_title">
          <a href="https://undraw.co/" target="_blank" rel="noreferrer">unDraw</a>
          <hr className="styles_separatorVertical" />
          <p>Ilustrações do site foram baixadas deste site.</p>
        </div>
      </div>

      <div className="credits">
        <div className="credits_title">
          <a href="http://rocketseat.com.br/" target="_blank" rel="noreferrer">Rocketseat</a>
          <hr className="styles_separatorVertical" />
          <p>Inspiração em paleta de cores, design e layout.</p>
        </div>
      </div>
    </>
  );
}
