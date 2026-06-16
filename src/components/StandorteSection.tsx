import { MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import imgSchwarzenbach from "@/assets/standort-schwarzenbach-v2.asset.json";
import imgHof from "@/assets/standort-hof-new.asset.json";
import imgHelmbrechts from "@/assets/standort-helmbrechts-new.asset.json";

const locations = [
  {
    name: "Schwarzenbach am Wald",
    address: "Am Alten Gericht 2",
    zip: "95131 Schwarzenbach am Wald",
    maps: "https://www.google.de/maps/place/Am+Alten+Gericht+2,+95131+Schwarzenbach+am+Wald,+Tyskland/@50.2897276,11.6276459,17z/data=!3m1!4b1!4m6!3m5!1s0x47a16d096a794495:0x94d93acb782397bf!8m2!3d50.2897276!4d11.6302208!16s%2Fg%2F11k6y9wzb4?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
    image: imgSchwarzenbach.url,
  },
  {
    name: "Hof",
    address: "Fuhrmannstraße 1",
    zip: "95030 Hof",
    maps: "https://www.google.de/maps/place/Fuhrmannstra%C3%9Fe+1,+95030+Hof,+Tyskland/@50.3105959,11.8778367,17z/data=!3m1!4b1!4m6!3m5!1s0x47a110c58a072433:0xd3e6cb04cfab9222!8m2!3d50.3105959!4d11.8804116!16s%2Fg%2F11nnqbmk3t?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
    image: imgHof.url,
  },
  {
    name: "Helmbrechts",
    address: "Frankenstraße 12",
    zip: "95233 Helmbrechts",
    maps: "https://www.google.com/maps/place/i-wosh/@50.2395084,11.72178,16z",
    image: imgHelmbrechts.url,
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
            className="glass-surface rounded-xl overflow-hidden hover:border-primary/40 transition-colors group"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={loc.image}
                alt={`i-wosh Standort ${loc.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StandorteSection;
