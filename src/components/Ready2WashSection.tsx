import { Smartphone, CreditCard, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import ready2washImg from "@/assets/logo-icon.png";

const benefits = [
  { icon: Smartphone, text: "Digitale Token jederzeit kaufen" },
  { icon: CreditCard, text: "Kein Bargeld notwendig" },
  { icon: Zap, text: "Schnell & kontaktlos waschen" },
  { icon: CheckCircle, text: "Einfach per App starten" },
];

const Ready2WashSection = () => (
  <section id="ready2wash" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Digital Waschen</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Waschen ohne Bargeld – einfach per App</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Mit Ready2Wash kannst du deine Wasch-Tokens ganz bequem digital kaufen und direkt an unserer Anlage nutzen. Registriere dich in der Ready2Wash App, lade dein Guthaben auf und starte den Waschvorgang kontaktlos und schnell.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-3">
                <b.icon className="text-primary shrink-0" size={18} />
                <span className="text-sm text-secondary-foreground">{b.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="https://apps.apple.com/de/app/ready2wash/id1210006835" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.wolkabout.sempra" target="_blank" rel="noopener noreferrer" className="border border-border text-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-accent transition-colors">
              Google Play
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img src={ready2washImg} alt="Ready2Wash App" className="w-80 md:w-96 h-auto object-contain" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Ready2WashSection;
