function Footer() {
  return (
    <footer className="footer">
      <a href="mailto: spalee300@gmail.com">Mail</a>
      <a
        href="https://www.linkedin.com/in/stefan-spasic-765925260/"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
      <a href="https://github.com/spale300" target="_blank" rel="noreferrer">
        Github
      </a>
      <p>&copy; Copyright {new Date().getFullYear()} Stefan Spasic</p>
    </footer>
  );
}

export default Footer;
