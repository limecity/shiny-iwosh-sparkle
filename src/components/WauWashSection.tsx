import { motion } from "framer-motion";
import { Dog, ImageIcon } from "lucide-react";

const WauWashSection = () => (
  <section id="wau-wash" className="section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 flex items-center gap-2">
            <Dog size={16} /> Wau Wash
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Der Waschplatz für deinen Hund
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            [Beschreibung folgt]
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted/40 border border-border flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageIcon size={32} strokeWidth={1.5} />
            <span className="text-sm tracking-wide">Bild folgt</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WauWashSection;
