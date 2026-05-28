import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-iwosh.png";

const navLinks = [
  { label: "Standorte", href: "#standorte" },
  { label: "Programme", href: "#programme" },
  { label: "Ready2Wash", href: "#ready2wash" },
  { label: "Wau Wash", href: "#wau-wash" },
  { label: "Video", href: "#video" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground relative z-50 p-2 -mr-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ top: 0 }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col px-6 pt-6 pb-8 h-full">
          <div className="flex flex-col gap-1">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 px-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all text-base font-medium"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-border">
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Kontaktiere uns
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
