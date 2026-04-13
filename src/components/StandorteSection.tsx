import { MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Schwarzenbach",
    address: "Am Alten Gericht 2",
    zip: "95131 Schwarzenbach am Wald",
    maps: "https://www.google.com/maps/place/i-wosh/@50.2897447,11.6275839,17z",
  },
  {
    name: "Hof",
    address: "Fuhrmannstraße 1",
    zip: "95030 Hof",
    maps: "https://www.google.com/maps/place/i-wosh/@50.3107146,11.8778227,17z",
  },
  {
    name: "Helmbrechts",
    address: "Frankenstraße 12",
    zip: "95233 Helmbrechts",
    maps: "https://www.google.com/maps/place/i-wosh/@50.2395084,11.72178,16z",
  },
];

const StandorteSection = () => (
  <section id="standorte" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Unsere Standorte</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">Finde uns in deiner Nähe</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-surface rounded-xl p-8 hover:border-primary/40 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <MapPin className="text-primary" size={22} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{loc.name}</h3>
            <p className="text-muted-foreground text-sm mb-1">{loc.address}</p>
            <p className="text-muted-foreground text-sm mb-5">{loc.zip}</p>
            <a
              href={loc.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              Route planen <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StandorteSection;
