import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ChevronDown } from "lucide-react";

const KontaktSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Kontakt</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Kontaktiere uns</h2>
          <p className="text-muted-foreground">Hast du Fragen oder Feedback? Nutze unser Formular für eine schnelle Rückmeldung.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-surface rounded-xl p-8 space-y-5"
        >
          {sent ? (
            <div className="text-center py-8">
              <Send className="text-primary mx-auto mb-4" size={32} />
              <p className="font-display font-semibold text-lg">Nachricht gesendet!</p>
              <p className="text-muted-foreground text-sm mt-2">Wir melden uns bald bei dir.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <input required type="text" placeholder="Name" className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <input required type="email" placeholder="E-Mail" className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="relative">
                <select required defaultValue="" className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 pr-10 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                  <option value="" disabled className="text-muted-foreground">Betreff auswählen</option>
                  <option value="problem">Problem</option>
                  <option value="feedback">Feedback</option>
                  <option value="allgemein">Allgemeine Anfrage</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
              </div>
              <textarea required rows={5} placeholder="Nachricht" className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Nachricht senden
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default KontaktSection;
