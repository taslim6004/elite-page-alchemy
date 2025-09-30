import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export const Pricing = () => {
  const features = [
    "Access to 7 expert coaches ($100K+ GMV)",
    "Personalized video feedback & reviews",
    "Immediate brand deal opportunities",
    "Exclusive retainer agreements access",
    "Private Discord community membership",
    "Weekly live coaching & Q&A calls",
    "Premium UGC training courses",
    "Content strategy frameworks",
    "Professional portfolio building",
    "Lifetime community access",
    "Continuous skill development",
    "Priority brand matching system"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Limited Time Investment</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Strategic Investment
              <span className="block text-gradient mt-2">in Financial Freedom</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This isn't just a purchase—it's a long-term investment in your career, 
              your financial independence, and your future as a professional content creator.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="relative max-w-2xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary blur-2xl opacity-30 animate-pulse" />
            
            <div className="relative glass-card p-10 md:p-12 rounded-3xl border-2 border-primary/30">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular Choice
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-8 mt-4">
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                  $2,500
                </div>
                <div className="text-lg text-muted-foreground">
                  One-Time Investment • Lifetime Access
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                  <Check className="w-4 h-4" />
                  <span>Average ROI: 30 days or less</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Value Proposition */}
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">
                    $8,200+ Average Monthly Creator Income
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Most creators recover their investment within the first month and continue earning consistent income month after month.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full group"
                onClick={() => window.open('https://whop.com/media-labs?a=muhammadabdurrahman6004', '_blank')}
              >
                Join MediaLabs Today
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Lifetime Updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee Notice */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>
              Due to immediate access to exclusive content and brand partnerships, 
              we maintain a strict no-refund policy. Join with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};