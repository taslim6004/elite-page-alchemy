import { Button } from "@/components/ui/button";
import { GraduationCap, Handshake, Users, TrendingUp, Video, DollarSign } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert-Led Coaching Program",
      description: "Learn from 7 experienced coaches who've generated $100,000+ GMV. Get personalized video feedback and master the art of creating high-converting UGC content that brands actually want.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Handshake,
      title: "Exclusive Brand Partnerships",
      description: "Gain near-immediate access to premium brand deals and retainer agreements after completing our entry assessment. Skip the endless pitching and start earning from day one.",
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Users,
      title: "Thriving Creator Community",
      description: "Join a supportive Discord community of ambitious creators. Attend weekly live coaching calls, share wins, get instant feedback, and grow together with like-minded professionals.",
      gradient: "from-primary-glow to-accent"
    },
    {
      icon: TrendingUp,
      title: "Premium Skill Development",
      description: "Access comprehensive online courses covering content strategy, video production, brand communication, and monetization tactics. Continuously level up your creator game.",
      gradient: "from-accent to-primary"
    }
  ];

  const benefits = [
    { icon: Video, text: "Professional UGC content training" },
    { icon: DollarSign, text: "Multiple revenue streams" },
    { icon: Users, text: "Network with top creators" },
    { icon: TrendingUp, text: "Proven growth frameworks" },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Complete Creator Toolkit</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything You Need to
              <span className="block text-gradient mt-2">Scale Your Content Career</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MediaLabs provides the complete ecosystem for content creators to build 
              sustainable, profitable careers creating UGC for leading brands.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-card p-8 rounded-3xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="glass-card p-8 md:p-12 rounded-3xl mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Plus, You'll <span className="text-gradient">Also Get</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://whop.com/media-labs?a=muhammadabdurrahman6004', '_blank')}
              className="group"
            >
              Access These Benefits Today
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};