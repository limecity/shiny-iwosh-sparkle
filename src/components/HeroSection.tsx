import { motion } from "framer-motion";
import heroImg from "@/assets/hero-carwash.jpg";


const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img src={heroImg} alt="Professionelle Autowäsche" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

    <div className="relative z-10 container mx-auto px-4 text-center pt-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
      >
        Moderne SB-Waschanlagen
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
      >
        DEIN AUTO.
        <br />
        <span className="text-gradient">DEIN GLANZ.</span>
        <br />
        DEINE KONTROLLE.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        Moderne SB-Waschanlagen an 3 Standorten – schnell, effektiv und hochwertig.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="#standorte" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-base">
          Standorte finden
        </a>
        <a href="#programme" className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-accent transition-colors text-base">
          Programme ansehen
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
