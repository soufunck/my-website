import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { Code } from "../components/SintaxColor";

import Aos from 'aos';
import 'aos/dist/aos.css';

import { 
  FaInstagram,
  FaGithub, 
  FaTwitter, 
  FaHome,
  FaThumbsUp,
  FaCopy
} from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

import pairDev from '../assets/pair-dev.svg';
import codeImg from '../assets/code.svg';
import dreamerImg from '../assets/dreamer.svg';

import '../styles/posts.css';

const identedCode = `// Com identação
<div class="title">
  <h1>React App</h1>
</div>

<div class="subtitle">
  <h5>React App is a example...</h5>
</div>

// Sem identação
<div class="title">
<h1>React App</h1>
</div>
<div class="subtitle">
<h5>React App is a example...</h5>
</div>
`;

const intuitiveNames = `// Nomes aleatórios
const array = ['João Pedro', 'Rafael', 'Carlos'];
const array2 = ['Porto Alegre', 'Cachoeirinha', 'Gravataí'];

// Nomes intuitivos
const names = ['João Pedro', 'Rafael', 'Carlos'];
const cities = ['Porto Alegre', 'Cachoeirinha', 'Gravataí'];
`
const commentCodes = `// Pegar número de itens na array "names"
let arrayNamesLength = names.length;
`

const semicolon = `// Com ponto e vírgula
let windowWidth = window.innerWidth;
console.log(windowWidth);

// Sem ponto e vírgula
let windowWidth = window.innerWidth
console.log(windowWidth)
`

export function Posts() {
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

  return(
    <>
      <div className="styles_header">
        <nav className="navbar">
          <ul>
            <li><Link to="/"><FaHome className="navbar_icon" />Início</Link></li>
            <li><Link to="/creditos"><FaThumbsUp className="navbar_icon" />Créditos</Link></li>
            <li><a className="active"><FaCopy className="navbar_icon" />Posts</a></li>
          </ul>
        </nav>

        <div className="header_container">
          <p className="styles_mb-24">
            <span className="header_waveHand">👋</span>Olá visitante,
          </p>
          <p style={{ color: 'var(--support)' }}>seja bem-vindo(a) a aba de:</p>
          <h1 style={{ textTransform: 'uppercase', marginTop: '5px' }}>Posts</h1>
        </div>
      </div>

      <div className="styles_row">
        <div className="row_rightContent">

          <div className="card" data-aos="fade-right">
            <img src={codeImg} className="card_image" alt="Ilustação do post" />

            <div className="card_header">
              <h2>Sobre as IDEs</h2>
              <div className="card_statistics">
                <MdDateRange className="cardIcons" />
                <p title="Data do post">29 de Novembro, 2021</p>
              </div>
            </div>

            <ul className="card_list">
              <li>
                Visual Studio Code
                <div className="card_list__desc">
                  Visual Studio Code, na minha opnião, é a melhor opção de IDE. Ele tem um terminal integrado, 
                  o que facilita o trabalho ao executar testes, instalações e afins. Também possui 
                  um vasto "mercado" de extensões, o que faz termos mais opções para melhorar ainda mais.
                  A sua única "desvantagem" é ser bem mais pesado do que as demais IDEs.
                </div>
              </li>

              <li>
                Atom
                <div className="card_list__desc">
                  Atom é uma IDE um pouco mais leve de usar do que o VS Code, eu mesmo utilizei por bastante
                  tempo. Infelizmente não possui terminal integrado e é difícil entender como instalar extensões, 
                  plugins e outras coisas.
                </div>
              </li>

              <li>
                Sublime Text
                <div className="card_list__desc">
                  Sublime Text, para mim, é uma boa segunda opção para utilizar caso o seu PC não aguente o VS Code.
                  Ele possui mais funcionalidades do que o Atom e é mais leve. Apesar de não ter um terminal integrdo, 
                  seu tempo de resposta é agradável.
                </div>
              </li>
            </ul>
          </div>
          
          <div class="styles_separator"></div>

          <div className="card" data-aos="fade-right">
            <img src={pairDev} className="card_image" alt="Ilustação do post" />

            <div className="card_header">
              <h2>5 boas práticas</h2>
              <div className="card_statistics">
                <MdDateRange className="cardIcons" />
                <p title="Data do post">28 de Novembro, 2021</p>
              </div>
            </div>

            <ol className="card_listNumbers">
              <li>
                Foco na simplicidade
                <div className="card_list__desc">
                  Utilize o mínimo de código com a menor complexidade possível. <br />
                  Isso facilita o seu entendimento posteriormente e o entendimento de outros desenvolvedores sobre o seu código.
                </div>
              </li>

              <li>
                Utilize ponto e vírgula! (;)
                <div className="card_list__desc">
                  Para indicar que você "quebrou" a linha, coloque o ponto e vírgula (;) no final.
                </div>

                <Code code={semicolon} language="javascript" />
              </li>

              <li>
                Identação
                <div className="card_list__desc">
                  Além de deixar mais bonito, você terá mais facilidade para compreender e mexer futuramente.
                </div>
                <Code code={identedCode} language="html" />
              </li>

              <li>
                Variáveis, classes, funções... com nomes intuitivos
                <div className="card_list__desc">
                  Facilite o trabalho de ter que ler todo o código para tentar entender, apenas leia o nome.
                </div>
                <Code code={intuitiveNames} language="javascript" />
              </li>

              <li>
                Comentar os códigos
                <div className="card_list__desc">
                  Serve como as duas práticas acima. Melhora o entendimento de suas funções.
                </div>
                <Code code={commentCodes} language="javascript" />
              </li>
            </ol>

          </div>

          <div class="styles_separator"></div>

          <div className="card" data-aos="fade-right">
            <img src={dreamerImg} className="card_image" alt="Ilustação do post" />

            <div className="card_header">
              <h2>Quero programar... E agora?</h2>
              <div className="card_statistics">
                <MdDateRange className="cardIcons" />
                <p title="Data do post">17 de Dezembro, 2021</p>
              </div>
            </div>

            <p className="card_description">
              Opa, calma lá! Antes de mais nada, tu precisa definir <b>o que</b> quer programar. <br />
              Na programação, há muitas áreas à serem seguidas, como <b>web</b>, <b>mobile</b>, <b>desktop</b>, <br /> <b>analista de dados</b> e muito mais. <br /> <br />
              Para que tu entenda mais, vou detalhar algumas áreas:
            </p>

            <ul className="card_list" style={{ marginTop: "20px" }}>
              <li>
                Programação Web
                <div className="card_list__desc">
                  Foco em desenvolvimento de sistemas para internet. Tendo diversos "mundos", como <br /> um simples site de uma única página falando sobre um produto, até serviço para gestão de empresas.
                </div>
              </li>

              <li>
                Programador Mobile
                <div className="card_list__desc">
                  Área que está em mais crescimento, onde tu criará diversos aplicativos ou interfaces. <br /> Podendo criar jogos, conteúdo informacional, loja, vendas... Muitas opções. 
                </div>
              </li>

              <li>
                Programador Desktop
                <div className="card_list__desc">
                  Nesse meio, aborda-se muito o foco de usabilidade e performance, mais do que nos sistemas<br /> web. Isso por ser um sistema que rodará diretamente na máquina do usuário. 
                </div>
              </li>

              <li>
                Analista de Dados
                <div className="card_list__desc">
                  Bom, o nome já diz muita coisa sobre... <br /> <br /> Basicamente, se tu gosta de números e estatísticas, essa área pode ser a melhor opção. <br /> Essa área vai pedir que tu leia dados e organize-os.
                </div>
              </li>
            </ul>

            {/* Lista de Recomendações */}

            <ul className="card_list">
              <h3>Recomendações</h3>

              <li>
                <a href="http://rocketseat.com.br" target="_blank" rel="noreferrer">RocketSeat</a>
                <div className="card_list__desc">
                  Nossa missão é capacitar pessoas que buscam se profissionalizar na programação <br /> independente do seu momento ou nível de conhecimento.
                </div>
              </li>

              <li>
                <a href="https://www.cursoemvideo.com/" target="_blank" rel="noreferrer">CursoEmVideo (Gustavo Guanabara)</a>
                <div className="card_list__desc">
                  Lançado em 2013, o projeto de ensinar tecnologia à distância foi ganhando forma e <br /> hoje já conta com milhares de alunos inscritos e uma grande quantidade de material gratuito.
                </div>
              </li>

              <li>
                <a href="https://www.youtube.com/FilipeDeschamps" target="_blank" rel="noreferrer">Filipe Deschamps</a>
                <div className="card_list__desc">
                  Meu último emprego antes de decidir focar 100% no YouTube foi ser CTO do Pagar.me. <br /> Lá tive o prazer de ser responsável por um time com mais de 100 pessoas e aprendi MUITO sobre <br /> gestão (principalmente gestão de times grandes) e sobre como lidar com tecnologia em escala. <br /> Ambos conhecimentos que quero compartilhar nesse canal.
                </div>
              </li>
             
            </ul>

          </div>

        </div>

        <div className="row_leftContent">
          <div className="styles_listSide">
            <ul>
              <li title="Instagram"><a target="_blank" href="https://www.instagram.com/soufunck" rel="noreferrer"><FaInstagram /></a></li>
              <li title="GitHub"><a target="_blank" href="https://github.com/soufunck" rel="noreferrer"><FaGithub /></a></li>
              <li title="Twitter"><a target="_blank" href="https://twitter.com/soufunck" rel="noreferrer"><FaTwitter /></a></li>
            </ul>
          </div>
        </div>

      </div>  
    </>
  )
}
