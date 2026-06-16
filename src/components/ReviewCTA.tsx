import { useState } from "react";
import { Star, Send } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const ReviewCTA = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setRating(0);
    setHover(0);
    setName("");
    setReview("");
  };

  return (
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
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
          Zufrieden mit deinem Ergebnis?
        </h2>
        <p className="text-muted-foreground mb-8">
          Dann unterstütze uns mit einer Bewertung.
        </p>

        <Dialog
          open={open}
          onOpenChange={(v) => {
            setOpen(v);
            if (!v) setTimeout(reset, 200);
          }}
        >
          <DialogTrigger asChild>
            <button className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Jetzt bewerten
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            {sent ? (
              <div className="text-center py-8">
                <Send className="text-primary mx-auto mb-4" size={32} />
                <p className="font-display font-semibold text-lg">
                  Vielen Dank für deine Bewertung!
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Dein Feedback hilft uns, besser zu werden.
                </p>
              </div>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle className="font-display">
                    Bewerte iWosh
                  </DialogTitle>
                  <DialogDescription>
                    Wie war deine Erfahrung bei uns?
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-5 mt-2">
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setRating(s)}
                        onMouseEnter={() => setHover(s)}
                        onMouseLeave={() => setHover(0)}
                        className="transition-transform hover:scale-110"
                        aria-label={`${s} Sterne`}
                      >
                        <Star
                          size={36}
                          className={
                            (hover || rating) >= s
                              ? "text-primary fill-primary"
                              : "text-muted-foreground"
                          }
                        />
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dein Name"
                    className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <textarea
                    required
                    rows={4}
                    maxLength={1000}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Schreibe deine Bewertung..."
                    className="w-full bg-accent/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={rating === 0}
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Bewertung absenden
                  </button>
                </form>
              </>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
};

export default ReviewCTA;
