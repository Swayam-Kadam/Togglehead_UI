import { useState } from "react";
import "./Header.scss";

const NAV_LINKS = [
  { label: "Qualifications", href: "#enrolment" },
  { label: "Organizations", href: "#enrolment" },
  { label: "Research & Analysis", href: "#enrolment" },
  { label: "Lorem ipsum", href: "#stats" },
  { label: "Lorem ipsum", href: "#faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <a href="#home" className="header__logo" aria-label="Home">
        <img src="/images/LOGO.svg" alt="LOGO" />
      </a>

      <button
        type="button"
        className={`header__toggle ${open ? "is-open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`header__actions ${open ? "is-open" : ""}`}>
        <nav className="header__nav" aria-label="Main">
          <ul className="header__list">
            {NAV_LINKS.map((link, index) => (
              <li key={`${link.label}-${index}`}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
                <img src="/images/Icon ionic-ios-arrow-down-4.svg" alt="" />
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className="header__search" aria-label="Search">
          <img src="/images/Icon material-search.svg" alt="" />
        </button>

        <a href="#enrolment" className="header__cta" onClick={closeMenu}>
          Enrolment
        </a>
      </div>
    </header>
  );
};

export default Header;
