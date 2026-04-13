const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-display font-bold text-foreground text-lg">
        <span className="text-gradient">i-wosh</span>
      </span>
      <p>© {new Date().getFullYear()} i-wosh. Alle Rechte vorbehalten.</p>
      <div className="flex gap-6">
        <a href="#standorte" className="hover:text-foreground transition-colors">Standorte</a>
        <a href="#programme" className="hover:text-foreground transition-colors">Programme</a>
        <a href="#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
      </div>
    </div>
  </footer>
);

export default Footer;
