import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {currentYear} Mesto Russia</p>
      <p className="footer__text">Developed by <a className="footer__link" href="https://github.com/genevy/mesto-react#readme">Evgeny Stiganov</a></p>
    </footer>
  );
}

export default Footer;
