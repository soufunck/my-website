import { Link } from "react-router-dom";
import notFoundImg from "../assets/warning.svg";
import { HiExternalLink } from 'react-icons/hi';

import "../styles/notfound.css";

export function NotFound() {
  return (
    <>
      <div className="notFound">

        <aside> 
          <img className="notFound_illustration" src={notFoundImg} alt="Ilustração de manutenção" /> 
        </aside>

        <main>

          <div className="notFound_content">
            <h1 className="notFound_content__title">Calma lá!</h1>

            <div className="notFound_content__subtitle">
              <p style={{ marginBottom: "10px" }}>
                Aparentemente, o <strong>URL</strong> que você digitou ou foi redirecionado <strong>não existe</strong>. Mas, relaxa, retorne a navegação clicando no botão abaixo <strong>:D</strong>
              </p>

              <a href="https://www.instagram.com/soufunck/" target="_blank" style={{ display: "flex", justifyContent: "space-between" }}>
                Foi uma falha? Me conte no Instagram!
                <HiExternalLink className="notFound_content__icon" style={{ fontSize: "17px" }} />
              </a>

            </div>

            <Link className="notFound_content__btn" to="/">Retornar</Link>
          </div>

        </main>
      </div>
    </>
  );
}
