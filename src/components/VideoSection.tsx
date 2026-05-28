import { motion } from "framer-motion";

const VideoSection = () => (
  <section id="video" className="section-padding bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Video</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">Seht selbst</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden rounded-2xl glass-surface"
        style={{ aspectRatio: "16 / 9" }}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/VTHgNkInf1M"
          title="i-wosh Video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
