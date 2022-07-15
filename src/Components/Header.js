import { useState, useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  const [state, setState] = useState(false);
  function toggle() {
    setState((state) => !state);
  }
  const { toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <header>
        <div className="logo">
          <img
            src={
              theme
                ? "../images/ashishsunny.png"
                : "../images/ashishsunny_neon.png"
            }
            alt="logo"
            id="logo"
          />
        </div>

        <button
          className={
            state ? "nav-open nav-toggle" : "nav-toggle nav-toggle-closed"
          }
          onClick={toggle}
          aria-label="toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

        <div className="onoffswitch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            name="onoffswitch"
            className="onoffswitch-checkbox"
            id="myonoffswitch"
            tabindex="0"
          />
          <label className="onoffswitch-label" for="myonoffswitch"></label>
        </div>
      </header>

      <nav className={state ? "nav" : "nav nav-closed"}>
        <ul className="nav__list">
          <li className="nav__item" onClick={toggle}>
            <Link smooth to="#home" className="nav__link">
              Home
            </Link>
          </li>

          <li className="nav__item" onClick={toggle}>
            <Link smooth to="#services" className="nav__link">
              My Services
            </Link>
          </li>

          <li className="nav__item" onClick={toggle}>
            <Link smooth to="#about" className="nav__link">
              About me
            </Link>
          </li>

          <li className="nav__item" onClick={toggle}>
            <Link smooth to="#work" className="nav__link">
              My Work
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
