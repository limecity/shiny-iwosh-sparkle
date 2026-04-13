import { Star } from "lucide-react";
import { motion } from "framer-motion";

const ReviewCTA = () => (
  <section className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto max-w-3xl text-center"
    >
      <div className="flex justify-center gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-primary fill-primary" size={24} />
        ))}
      </div>
      <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">Zufrieden mit deinem Ergebnis?</h2>
      <p className="text-muted-foreground mb-8">Dann unterstütze uns mit einer Bewertung auf Google.</p>
      <a
        href="https://www.google.com/maps/place/i-wosh/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        Jetzt bewerten
      </a>
    </motion.div>
  </section>
);

export default ReviewCTA;
