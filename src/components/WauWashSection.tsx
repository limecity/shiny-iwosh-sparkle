import { motion } from "framer-motion";
import { Dog, Droplets, Sparkles, Wind, Shield, Bug, SprayCan, CheckCircle2, Clock } from "lucide-react";
import wauImg from "@/assets/wau-wash.png.asset.json";
import wauLogo from "@/assets/wau-wosh-logo.png.asset.json";
import wauCarousel1 from "@/assets/wau-wosh-carousel-1.png.asset.json";
import wauCarousel2 from "@/assets/wau-wosh-carousel-2.png.asset.json";
import wauCarousel4 from "@/assets/wau-wosh-carousel-4.png.asset.json";
import wauCarousel5 from "@/assets/wau-wosh-carousel-5.png.asset.json";
import wauCarousel6 from "@/assets/wau-wosh-carousel-6.png.asset.json";
import wauCarousel9 from "@/assets/wau-wosh-carousel-9.png.asset.json";
import wauCarousel10 from "@/assets/wau-wosh-carousel-10.png.asset.json";
import wauCarousel11 from "@/assets/wau-wosh-carousel-11.png.asset.json";
import wauCarousel12 from "@/assets/wau-wosh-carousel-12.png.asset.json";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

const galleryImages = [
  { src: wauCarousel1.url, alt: "Wau-Wosh Außenansicht mit mehreren Waschboxen" },
  { src: wauCarousel2.url, alt: "Wau-Wosh Seitenansicht mit beleuchteten Anzeigen" },
  { src: wauCarousel4.url, alt: "i-Wosh und Wau-Wosh Waschplätze von außen" },
  { src: wauCarousel5.url, alt: "Staubsaugerplätze auf dem Gelände" },
  { src: wauCarousel6.url, alt: "Waschboxen mit Fahnen und Öffnungszeiten" },
  { src: wauCarousel9.url, alt: "Waschplatz mit Tesla Model S beim Waschen" },
  { src: wauCarousel10.url, alt: "i-Wosh Waschanlage Außenansicht mit Logo" },
  { src: wauCarousel11.url, alt: "Ready2Wash Zahlungsterminal in Detailansicht" },
  { src: wauCarousel12.url, alt: "Hochleistungssauger Station im Winter" },
];

const WauWashSection = () => (
  <section id="wau-wash" className="section-padding pt-10 md:pt-14 pb-12 md:pb-16" style={{ ["--primary" as never]: "190 55% 55%" }}>
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 -mt-4 flex items-center justify-between gap-6"
        >
          <div className="inline-flex items-center gap-3 glass-surface rounded-xl px-5 py-3 border border-primary/20">
            <Clock className="text-primary shrink-0" size={20} />
            <div>
              <p className="text-sm font-semibold text-primary">Öffnungszeiten</p>
              <p className="text-sm text-foreground/90">Täglich von 6:00 Uhr bis 22:00 Uhr</p>
            </div>
          </div>
          <img
            src={wauLogo.url}
            alt="Wau-Wosh Logo"
            className="w-[170px] md:w-[210px] shrink-0"
            loading="eager"
          />
        </motion.div>
      </div>

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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 max-w-6xl mx-auto"
        style={{ ["--primary" as never]: "0 80% 55%" }}
      >
        <div className="flex items-end justify-between gap-4 mb-5">
          <h3 className="font-display text-2xl md:text-3xl font-bold">Einblicke vor Ort</h3>
        </div>

        <Carousel
          opts={{ loop: true, align: "start" }}
          className="px-0 md:px-12"
        >
          <CarouselContent className="-ml-3">
            {galleryImages.map((image, index) => (
              <CarouselItem key={image.src} className="pl-3 basis-full md:basis-1/2 xl:basis-1/3">
                <div className="glass-surface overflow-hidden rounded-xl border border-primary/15 h-full">
                  <div className="aspect-[4/3] overflow-hidden bg-muted/20">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 border-primary/25 bg-background/85 text-primary hover:bg-background" />
          <CarouselNext className="right-2 border-primary/25 bg-background/85 text-primary hover:bg-background" />
        </Carousel>
      </motion.div>
    </div>
  </section>
);

export default WauWashSection;
