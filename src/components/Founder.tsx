import { Button } from "@/components/ui/button";
import { Linkedin, Award, Users, TrendingUp } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

export const Founder = () => {
  const achievements = [
    { icon: Award, label: "10+ Years Experience", value: "Industry Leader" },
    { icon: Users, label: "1000+ Creators Trained", value: "Proven Track Record" },
    { icon: TrendingUp, label: "$10M+ Creator Earnings", value: "Generated Revenue" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Founded by Industry Expert</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet the Visionary
              <span className="block text-gradient mt-2">Behind MediaLabs</span>
            </h2>
          </div>

          {/* Founder Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary blur-3xl opacity-20 animate-pulse" />
              <div className="relative glass-card p-4 rounded-3xl">
                <img
                  src={founderImage}
                  alt="Alex P Sedlak - Founder of MediaLabs UGC Agency"
                  className="w-full h-auto rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-8 left-8 right-8 glass-card p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                      AP
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">Alex P Sedlak</div>
                      <div className="text-sm text-muted-foreground">Founder & CEO, MediaLabs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  Building the Future of Creator Economy
                </h3>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    "I've witnessed firsthand how brands struggle to find skilled, reliable content creators. 
                    At the same time, talented creators struggle to find consistent, well-paying opportunities."
                  </p>
                  <p>
                    "That's why I founded MediaLabs—to bridge this gap and create a professional ecosystem 
                    where creators are trained to be the internet's absolute best, and brands get access to 
                    premium UGC talent they can trust."
                  </p>
                  <p>
                    "Our mission is simple: transform passionate creators into professional, highly-paid 
                    content entrepreneurs who build sustainable careers doing what they love."
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3 pt-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{achievement.label}</div>
                      <div className="text-sm text-muted-foreground">{achievement.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://www.linkedin.com/in/alexpaulredlak/', '_blank')}
                  className="group"
                >
                  <Linkedin className="mr-2 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => window.open('https://whop.com/media-labs?a=muhammadabdurrahman6004', '_blank')}
              className="group"
            >
              Learn From Alex Today
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