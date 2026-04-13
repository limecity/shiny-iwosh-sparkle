import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-iwosh.png";

const navLinks = [
  { label: "Standorte", href: "#standorte" },
  { label: "Programme", href: "#programme" },
  { label: "Ready2Wash", href: "#ready2wash" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-surface">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#" className="flex items-center">
          <img src={logoImg} alt="i-wosh Logo" className="h-14 md:h-16 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#kontakt" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            Kontaktiere uns
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-surface border-t border-border px-4 pb-6 pt-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)} className="inline-block mt-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium">
            Kontaktiere uns
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
