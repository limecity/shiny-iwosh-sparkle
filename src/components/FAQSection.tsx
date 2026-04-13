import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Was kostet eine Wäsche?", a: "Du bestimmst den Preis selbst. Je nachdem, wie lange du wäschst, kostet es in der Regel zwischen 2 € und 7 €." },
  { q: "Muss ich einen Termin machen?", a: "Nein, du kannst jederzeit während der Öffnungszeiten vorbeikommen – ganz ohne Termin." },
  { q: "Ist das sicher für mein Auto?", a: "Ja, unsere Anlagen verwenden schonende Hochdrucktechnik und enthärtetes Wasser, das den Lack schützt." },
  { q: "Wie funktioniert die Wäsche?", a: "Einfach in die Waschbox fahren, Programm wählen und mit dem Hochdruckreiniger dein Auto waschen." },
  { q: "Gibt es versteckte Kosten?", a: "Nein, du zahlst nur für die Zeit, die du nutzt. Keine versteckten Gebühren." },
  { q: "Wie kann ich bezahlen?", a: "Du kannst mit Münzen oder kontaktlos über die Ready2Wash App bezahlen." },
  { q: "Wie erreiche ich euch?", a: "Über unser Kontaktformular auf dieser Seite oder direkt vor Ort an unseren Standorten." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">FAQ</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">Häufige Fragen</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-surface rounded-xl px-6 border border-border">
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
    </div>
  </section>
);

export default FAQSection;
