import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Is a refund available if I'm not satisfied?",
      answer: "Due to immediate access to exclusive content, premium training materials, and direct brand partnership opportunities, we maintain a strict no-refund policy. However, we're confident you'll see results quickly—most creators report positive ROI within their first month of consistent effort."
    },
    {
      question: "How quickly can I expect to see results and earn money?",
      answer: "Results vary by individual effort and consistency, but many MediaLabs creators report making their investment back within just 1 month of posting consistently. Some have secured their first brand deals within the first week. Your success depends on applying the training, engaging with the community, and creating quality content regularly."
    },
    {
      question: "What type of content will I be creating for brands?",
      answer: "You'll be trained to create professional User Generated Content (UGC)—authentic, high-quality short-form videos that brands use for their marketing campaigns. This includes product reviews, unboxing videos, testimonials, how-to guides, and lifestyle content. We teach you exactly what brands want and how to deliver exceptional results."
    },
    {
      question: "Do I need prior video creation experience to join?",
      answer: "No prior professional experience is required! While some content creation background is helpful, our comprehensive training program takes you from beginner to professional. Our expert coaches will teach you everything from filming techniques and editing to brand communication and content strategy."
    },
    {
      question: "How does the brand partnership process work?",
      answer: "After completing our entry assessment, you gain near-immediate access to our exclusive brand partnership network. We match you with relevant brands based on your niche, audience, and content style. You'll receive opportunities for both one-time campaigns and ongoing retainer agreements, providing stable monthly income."
    },
    {
      question: "What equipment do I need to get started?",
      answer: "You don't need expensive equipment! Most successful MediaLabs creators start with just a smartphone, good natural lighting, and a quiet space. As you grow and earn, you can invest in additional equipment. We'll teach you how to create professional-quality content with minimal gear."
    },
    {
      question: "How much time do I need to commit weekly?",
      answer: "We recommend dedicating at least 10-15 hours per week to see consistent results. This includes content creation, training review, community engagement, and brand communications. Many creators treat this as a part-time business initially, then transition to full-time as their income grows."
    },
    {
      question: "What makes MediaLabs different from other creator programs?",
      answer: "MediaLabs provides the complete ecosystem: expert coaching from proven $100K+ GMV professionals, immediate access to exclusive brand deals (not just training), a supportive community of successful creators, and proven frameworks that work. We don't just teach—we provide real earning opportunities from day one."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Got Questions?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked
              <span className="block text-gradient mt-2">Questions</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Everything you need to know about joining MediaLabs and starting your creator journey
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="glass-card p-8 rounded-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50 last:border-0 pb-4 last:pb-0"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? Our community managers are here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:midealab360@gmail.com"
                className="text-accent hover:text-accent-glow transition-colors font-medium"
              >
                midealab360@gmail.com
              </a>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="text-muted-foreground">Response time: &lt; 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
