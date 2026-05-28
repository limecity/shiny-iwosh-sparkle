import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Allgemein",
    items: [
      { q: "Was bietet ihr genau an?", a: "Wir bieten moderne Selbstbedienungs-Waschanlagen in Schwarzenbach, Helmbrechts und Hof. Das bedeutet: Du kannst dein Auto selbst reinigen – günstig, lackschonend und mit richtig viel Spaß. Probier es einfach aus!" },
      { q: "Für wen ist euer Angebot geeignet?", a: "Für alle, die ein Auto haben. Unsere Anlagen sind einfach zu bedienen, liefern perfekte Ergebnisse und stehen dir jederzeit zur Verfügung." },
      { q: "Was unterscheidet euch von anderen?", a: "Unsere Anlagen sind komplett berührungslos – das bedeutet maximale Schonung für deinen Lack. Gerade bei Leasingfahrzeugen oder Autos mit spezieller Lackierung ist das ein großer Vorteil. Mit unserem Powerschaum und der speziellen Hochdruckwäsche bleibt garantiert kein Schmutz zurück." },
      { q: "Wie läuft der Ablauf bei euch ab?", a: "Ganz einfach: 1) Tokens kaufen – online über Ready2Wash oder direkt an unseren Wechselstationen mit Bargeld oder Karte. 2) Tokens in der Waschbox einwerfen. 3) Programm am Display auswählen. 4) Lanze nehmen und loswaschen." },
    ],
  },
  {
    title: "Preise",
    items: [
      { q: "Was kostet eure Dienstleistung?", a: "Das bestimmst du selbst. Je nachdem, wie viel Zeit du dir nimmst. Eine kurze Wäsche kostet in der Regel zwischen 2 € und 5 €." },
      { q: "Gibt es versteckte Kosten?", a: "Nein. Es gibt keine versteckten Kosten. Du zahlst nur das, was du tatsächlich einwirfst – keinen Cent mehr." },
      { q: "Gibt es Rabatte oder Pakete?", a: "Ja, wir belohnen dich beim Kauf größerer Token-Mengen: Für 10 € bekommst du 11 Tokens. Für 50 € bekommst du 60 Tokens." },
    ],
  },
  {
    title: "Ablauf & Organisation",
    items: [
      { q: "Wie kurzfristig kann ich starten?", a: "Du brauchst keinen Termin. Du kannst dein Auto jederzeit zwischen 08:00 und 22:00 Uhr waschen." },
      { q: "Wie lange dauert eine Wäsche?", a: "Das entscheidest du selbst. Ob schnelle Reinigung oder gründliche Pflege – alles ist möglich." },
      { q: "Was muss ich vorbereiten?", a: "Gar nichts. Komm einfach mit deinem Auto vorbei – der Rest ist vor Ort." },
    ],
  },
  {
    title: "Standort & Verfügbarkeit",
    items: [
      { q: "Wo seid ihr tätig?", a: "Du findest unsere Anlagen in: Hof, Schwarzenbach, Helmbrechts." },
    ],
  },
  {
    title: "Kontakt & Support",
    items: [
      { q: "Wie kann ich euch erreichen?", a: "Du erreichst uns jederzeit über unsere Notfallnummer oder das Kontaktformular auf der Website." },
      { q: "Wie schnell antwortet ihr?", a: "Wir sind täglich von 08:00 bis 22:00 Uhr erreichbar. Wenn es ein Problem gibt, sind wir direkt für dich da." },
    ],
  },
  {
    title: "Bonus",
    items: [
      { q: "Muss ich einen Termin machen oder geht das spontan?", a: "Du kannst jederzeit spontan vorbeikommen – ganz ohne Termin." },
      { q: "Welche Zahlungsmethoden akzeptiert ihr?", a: "Wir akzeptieren: Münzen (1 € und 2 €), Scheine (5 €, 10 €, 20 €, 50 €), Kartenzahlung, Ready2Wash App." },
      { q: "Ist mein Fahrzeug bei euch sicher?", a: "Ja. Unsere Anlagen sind videoüberwacht und durch die berührungslose Technik besonders schonend für dein Fahrzeug." },
    ],
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">FAQ</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">Häufig gestellte Fragen</h2>
      </motion.div>

      <div className="space-y-12">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 }}
          >
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">{g.title}</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {g.items.map((f, i) => (
                <AccordionItem key={i} value={`faq-${gi}-${i}`} className="glass-surface rounded-xl px-6 border border-border">
                  <AccordionTrigger className="text-left font-display font-semibold text-sm py-5 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-5 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
