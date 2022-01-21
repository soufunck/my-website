import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { 
  FaMapMarkerAlt, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  
  FaGithub, 
  FaTwitter,
  FaInstagram,

  FaNodeJs,
  FaHome,
  FaThumbsUp,
  FaCopy
} from 'react-icons/fa';

import { 
  SiJavascript,
  SiFirebase
} from 'react-icons/si';

import { HiExternalLink } from 'react-icons/hi';

import profileImg from '../assets/dogao.jpg';
import podpahImg from '../assets/podpah.jpg';
import riesenImg from '../assets/riesen.jpg';
import gimenisImg from '../assets/gimenis.png';
import templateImg from '../assets/template.webp';

import '../styles/home.css';

export function Home() {
  useEffect(() => {
    Aos.init({
      disable: false,
      delay: 0,
      duration: 50,
      easing: 'ease',
      once: true,
      mirror: false,
    })
  })

  return (
     <>
    {/* header */}
    <div className="styles_header">

      <nav className="navbar">
        <ul>
          <li><a className="active"><FaHome className="navbar_icon" />Início</a></li>
          <li><Link to="/creditos"><FaThumbsUp className="navbar_icon" />Créditos</Link></li>
          <li><Link to="/posts"><FaCopy className="navbar_icon" />Posts</Link></li>
        </ul>
      </nav>

      <div className="header_container">
        <p><span className="header_waveHand">👋</span>Olá visitante,</p>
        <h1>seja bem-vindo</h1>
        <p>ao meu portfolio.</p>
      </div>
    </div>


    <div className="styles_container">
      
      <aside>
        {/* content */}
        <div className="styles_content">
          <div className="content_profile">

            <div className="profile_img">
              <img src={profileImg} alt="Foto do criador do website" width="100%" />
            </div>

            <h1 className="styles_title">Funck</h1>
            <h4 className="styles_subtitle">Programador Front-end</h4>

            {/* ICONS SOCIAL */}
            <div className="styles_list">
              <ul>
                <li title="Instagram"><a target="_blank" href="https://www.instagram.com/soufunck" rel="noreferrer"><FaInstagram /></a></li>
                <li title="GitHub"><a target="_blank" href="https://github.com/soufunck" rel="noreferrer"><FaGithub /></a></li>
                <li title="Twitter"><a target="_blank" href="https://twitter.com/soufunck" rel="noreferrer"><FaTwitter /></a></li>
              </ul>
            </div>

            <div className="styles_separator"></div>

            <span><FaMapMarkerAlt className="styles_icon" /> Porto Alegre, RS</span>
            
          </div>
        </div>


      </aside>  

      {/* MAIN CONTENT */}
      <main>

        <div className="styles_main styles_mb-24 styles_main__start" data-aos="fade-left">
          <div className="styles_tabset">

            <input type="radio" name="styles_tabset" id="works" checked/>
            <label for="works">Trabalhos</label>

            <input type="radio" name="styles_tabset" id="contact-me" />
            <label for="contact-me">Contato</label>

            <input type="radio" name="styles_tabset" id="support" />
            <label for="support">Apoiar</label>

            <div className="styles_tabPanels">

              {/* Trabalhos */}
              <section className="styles_tabPanel">
                <div className="styles_flexTitle context">
                  <h2>Meus trabalhos</h2>
                  <p>Visite meu <a href="http://github.com/soufunck" target="_blank" rel="noopener noreferrer">GitHub</a> para mais!</p>
                </div>

                <div className="styles_gallery">

                  {/* Podpah */}
                  <div className="styles_galleryItem">
                    <img src={podpahImg} alt="Imagem do Podpah" />
                  
                    <div className="gallery_info">

                      <a className="gallery_title" href="https://soufunck.github.io/podpah-website/" target="_blank" title="Ver o trabalho">
                        <h4>Podpah</h4>
                        <i><HiExternalLink/></i>
                      </a>

                      <div className="galleryItem_desc">
                        <p>Website feito para o <strong>Podpah Podcast</strong>.</p>
                      </div>

                    </div>
                  </div>

                  {/* Riesen */}
                  <div className="styles_galleryItem">
                    <img src={riesenImg} alt="Imagem do site da comunidade Riesen" />
                  
                    <div className="gallery_info">

                      <a className="gallery_title" href="https://riesen.glitch.me/" target="_blank" title="Ver o trabalho">
                        <h4>Riesen</h4>
                        <i><HiExternalLink/></i>
                      </a>

                      <div className="galleryItem_desc">
                        <p>Site para a comunidade <strong>Riesen</strong>.</p>
                      </div>

                    </div>
                  </div>
                
                  {/* Gimenis */}
                  <div className="styles_galleryItem">
                  <img src={gimenisImg} alt="Imagem do site de advocacia Gimenis" />
                  
                    <div className="gallery_info">

                      <a className="gallery_title" href="https://gimenis.adv.br/" target="_blank" title="Ver o trabalho">
                        <h4>Gimenis</h4>
                        <i><HiExternalLink/></i>
                      </a>

                      <div className="galleryItem_desc">
                        <p>Site da empresa <strong>Gimenis Advocacia</strong>.</p>
                      </div>

                    </div>
                  </div>
                  
                  {/* Template */}
                  <div className="styles_galleryItem">
                    <img src={templateImg} alt="Imagem do Template" />
                    <div className="gallery_info">

                      <a className="gallery_title" href="https://soufunck.github.io/teste/" target="_blank" title="Ver o tabalho">
                        <h4>Template</h4>
                        <i><HiExternalLink /></i>
                      </a>

                      <div className="galleryItem_desc">
                        <p>Template feito para estudos de <strong>HTML/CSS/JS</strong>.</p>
                      </div>

                    </div>
                  </div>

              
                </div>

              </section>

              {/* Contactar-me */}
              <section className="styles_tabPanel">
                <div className="styles_flexTitle context">
                  <h2>Entrar em contato</h2>
                  <p>Posso não responder de imediato!</p>
                </div>

                <ol>
                  <li>Me chame na DM do <a href="https://twitter.com/soufunck" target="_blank" rel="noreferrer">Twitter</a>.</li>
                  <li>Me chame na DM do <a href="https://www.instagram.com/soufunck/" target="_blank" rel="noreferrer">Instagram</a>.</li>
                  <li>Envie um <a href="mailto:kystershg@gmail.com">e-mail</a> para mim.</li>
                  <li>Adicione-me no Discord: <b>soufunck#4003</b>.</li>
                </ol>

              </section>

              {/* Apoiar */}
              <section className="styles_tabPanel">
                <div className="styles_flexTitle context">
                  <h2>Apoiar meu trabalho</h2>
                  <p>Agradeço desde já!</p>
                </div>

                <ol>
                  <li>Envie-me um <a href="https://nubank.com.br/pagar/102niu/2aVzUkZU4t" target="_blank" rel="noreferrer">PIX</a>.</li>
                  <li>Compartilhe meus trabalhos para que eu ganhe mais clientes.</li>
                  <li>Siga-me nas <label for="contact-me">redes-sociais</label>.</li>
                </ol>

              </section>

            </div>
  
          </div>
        </div>

        <div className="styles_main" data-aos="fade-right">
          {/* TITLE */}
          <div className="styles_flexTitle">
            <h2>Sobre mim</h2>
            <p>Saiba mais sobre mim</p>
          </div>

          {/* TEXT */}
          <p>
            Sou um programador focado no <b>Front-end</b>. Estou sempre a procura de aprender novas tecnologias
            para me manter dentro do mercado e suas necessidades. Sou <b>ambicioso</b> e <b>muito focado no meu trabalho</b>.
          </p>

          <br />

          <p>
            Atualmente, estou estudando <b>React</b> (Inclusive, este portfólio foi criado com <b>React</b>! Se quiser ver o código, acesse meu <a href="https://github.com/soufunck/" target="_blank" rel="noreferrer">GitHub</a>). Tenho conhecimento em <b>Figma</b>, <b>Zeplin</b> e <b>Photoshop</b>, mas apenas o básico
            para conseguir recriar o layout enviado pelo cliente.
          </p>
        </div>


        <div className="styles_main styles_mt-24" data-aos="fade-left">

          {/* TITLE */}
          <div className="styles_flexTitle">
            <h2>Tecnologias</h2>
            <p>As tecnologias que eu domino</p>
          </div>

          {/* ICONS TECHNOLOGIES */}
          
            <div className="styles_list">
              <ul>
                <li data-text="ReactJS" className="styles_tooltip"><FaReact /></li>
                <li data-text="HTML" className="styles_tooltip"><FaHtml5 /></li>
                <li data-text="CSS" className="styles_tooltip"><FaCss3Alt /></li>
                <li data-text="Javascript" className="styles_tooltip"><SiJavascript /></li>
                <li data-text="NodeJS" className="styles_tooltip"><FaNodeJs /></li>
                <li data-text="Firebase" className="styles_tooltip"><SiFirebase /></li>
              </ul>
            </div>

        </div>
      </main>

    </div>
     </>
  )
}
