import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingDown, Clock, HelpCircle } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Inconsistent Income",
      description: "Struggling with unpredictable paychecks that make financial planning impossible"
    },
    {
      icon: Clock,
      title: "Endless Brand Hunting",
      description: "Wasting countless hours searching for brand deals instead of creating content"
    },
    {
      icon: HelpCircle,
      title: "No Clear Direction",
      description: "Feeling lost without proper guidance on how to monetize your creative talent"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">The Creator Income Problem</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tired of the Content Creator
              <span className="block text-gradient mt-2">Income Rollercoaster?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You're talented and passionate, but your income shouldn't be a guessing game. 
              The traditional path to becoming a successful creator is filled with frustrating roadblocks.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Solution Teaser */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl" />
            <div className="relative glass-card p-8 md:p-12 rounded-3xl text-center border-2 border-primary/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                There's a <span className="text-gradient">Better Way</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                MediaLabs provides a proven system to transform your creative talent into 
                reliable, consistent monthly income through exclusive brand partnerships.
              </p>
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => window.open('https://whop.com/media-labs?a=muhammadabdurrahman6004', '_blank')}
                className="group"
              >
                Get Reliable Income Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};