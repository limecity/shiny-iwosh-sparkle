import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";
import videoThumb from "@/assets/video-thumb.jpg.asset.json";

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
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
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/VTHgNkInf1M?autoplay=1"
              title="i-wosh Video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full group"
              aria-label="Video abspielen"
            >
              <img
                src={videoThumb.url}
                alt="i-wosh Video Vorschau"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
