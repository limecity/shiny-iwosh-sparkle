import { Droplets, Sparkles, CircleDot, Waves, ShieldCheck, GlassWater } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  { icon: Droplets, name: "Powerschaum", desc: "Enthärtetes Wasser mit Aktiv-Schaum – löst jeden Schmutz!" },
  { icon: CircleDot, name: "Felgen Spezial", desc: "Schaumreiniger nur für Felgen. Kraftvoll sauber, sichtbar glänzend." },
  { icon: Sparkles, name: "Pulverwäsche", desc: "Spezialreiniger – entfernt selbst hartnäckigen Schmutz." },
  { icon: Waves, name: "Spülen", desc: "Enthärtetes Wasser mit HD-Spülung." },
  { icon: ShieldCheck, name: "Wachs", desc: "Spezial-Wachs-Versiegelung mit Nano-Hochglanzeffekt." },
  { icon: GlassWater, name: "Glanzspülen", desc: "Demineralisiertes Wasser für fleckenfreies Trocknen." },
];

const ProgrammeSection = () => (
  <section id="programme" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Waschprogramme</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">Unsere Waschprogramme</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-surface rounded-xl p-7 hover:border-primary/30 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="text-primary" size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{p.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Wohnmobil hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 glass-surface rounded-xl p-8 md:p-10 border-primary/20 text-center max-w-3xl mx-auto"
      >
        <h3 className="font-display text-xl font-semibold mb-3">Mehr Komfort für große Fahrzeuge</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          An unseren Standorten in Schwarzenbach und Helmbrechts sind die Außenboxen mit speziellen Bürsten ausgestattet – perfekt für die einfache und gründliche Reinigung von Wohnmobilen.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProgrammeSection;
