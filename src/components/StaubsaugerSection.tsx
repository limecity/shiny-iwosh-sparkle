import { Zap, Clock, Play, Car, Target } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Zap, title: "Leistungsstark & gründlich", desc: "Unsere Staubsauger entfernen selbst hartnäckigen Schmutz zuverlässig." },
  { icon: Clock, title: "Immer verfügbar", desc: "Während der Öffnungszeiten jederzeit für dich bereit." },
  { icon: Play, title: "Einfach & sofort nutzbar", desc: "Einwerfen, starten und direkt loslegen – ganz ohne Aufwand." },
  { icon: Car, title: "Innen & außen sauber", desc: "Kombiniere Autowäsche und Innenreinigung an einem Ort." },
  { icon: Target, title: "Für jeden Bereich geeignet", desc: "Perfekt für Fußmatten, Sitze und schwer erreichbare Stellen." },
];

const StaubsaugerSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Staubsauger</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">Starke Staubsauger für ein perfektes Ergebnis</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4 p-5 rounded-xl hover:bg-accent/50 transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <f.icon className="text-primary" size={18} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-1">{f.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StaubsaugerSection;
