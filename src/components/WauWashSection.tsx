import { motion } from "framer-motion";
import { Dog, Droplets, Sparkles, Wind, Shield, Bug, SprayCan, CheckCircle2, Clock } from "lucide-react";
import wauImg from "@/assets/wau-wash.png.asset.json";

const features = [
  { icon: Droplets, title: "Warmes Wasser", desc: "Angenehme Wassertemperatur für eine stressfreie Reinigung." },
  { icon: SprayCan, title: "Pflegeshampoo & Conditioner", desc: "Mildes, pH-neutrales Shampoo für tiefgehende Reinigung. Mit integriertem Conditioner für Glanz." },
  { icon: Sparkles, title: "Shampoo für weißes Fell", desc: "Speziell für helles Fell. Entfernt Flecken und sorgt für strahlenden Glanz." },
  { icon: Bug, title: "Floh- & Zeckenschutz", desc: "Unterstützt den Schutz vor Parasiten und beruhigt die Haut." },
  { icon: Wind, title: "Trockner Stufe 1", desc: "Sanfte Trocknung für empfindliche Hunde." },
  { icon: Wind, title: "Trockner Stufe 2", desc: "Stärkere Trocknungsleistung für schnelles Ergebnis." },
  { icon: Shield, title: "Kostenlose Reinigung", desc: "Möglichkeit zur Reinigung der Anlage nach der Nutzung." },
];

const bullets = [
  "Die Anlage wird täglich automatisch desinfiziert.",
  "Einfacher Ablauf: Hund in die Wanne führen, Programm wählen, waschen, spülen und trocknen.",
];

const WauWashSection = () => (
  <section id="wau-wash" className="section-padding" style={{ ["--primary" as never]: "189 41% 38%" }}>
    <div className="container mx-auto">
      {/* Header row: text + image */}
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 flex items-center gap-2">
            <Dog size={16} /> Wau-Wosh – Das SB-Wascherlebnis für deinen Hund
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Sauber. Schonend. Stressfrei.
          </h2>
          <p className="text-foreground/90 font-medium leading-relaxed mb-4">
            Mit unserer Wau-Wosh Hundewaschanlage wird die Pflege deines Vierbeiners einfach,
            hygienisch und komfortabel.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Die wau-wosh Anlage bietet dir ein durchdachtes SB-Wascherlebnis für Hunde. Alle
            Programme sind speziell auf Fell und Haut abgestimmt und sorgen für eine gründliche
            und gleichzeitig schonende Reinigung.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 glass-surface rounded-xl px-5 py-3 border border-primary/20">
            <Clock className="text-primary shrink-0" size={20} />
            <div>
              <p className="text-sm font-semibold text-primary">Öffnungszeiten</p>
              <p className="text-sm text-foreground/90">Täglich von 6:00 Uhr bis 22:00 Uhr</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-surface rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src={wauImg.url}
              alt="Wau Wash – Hundewaschplatz"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Feature grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-surface rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <f.icon className="text-primary" size={18} />
            </div>
            <h3 className="font-display text-base font-semibold mb-2 text-primary">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bullets */}
      <div className="grid md:grid-cols-2 gap-4 mt-6 max-w-6xl mx-auto">
        {bullets.map((b) => (
          <div
            key={b}
            className="glass-surface rounded-xl p-5 flex items-start gap-3"
          >
            <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-foreground/90 leading-relaxed">{b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WauWashSection;
