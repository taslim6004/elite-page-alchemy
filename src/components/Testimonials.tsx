import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Eva Torrado",
      initials: "ET",
      role: "UGC Creator",
      quote: "I already made my investment back within just 1 month of posting consistently. The brand deals started flowing in immediately after joining MediaLabs.",
      rating: 5,
      earnings: "$3,200",
      timeframe: "First Month"
    },
    {
      name: "Maximus Ogden",
      initials: "MO",
      role: "Content Creator",
      quote: "Made $2K my first month - absolutely INSANE! The training quality and brand access exceeded all my expectations. This is a game-changer.",
      rating: 5,
      earnings: "$2,000",
      timeframe: "Month 1"
    },
    {
      name: "Nick Brown",
      initials: "NB",
      role: "Video Creator",
      quote: "Went from struggling with $400/month to consistently earning $8K+ in commission alone, not even counting my retainers. MediaLabs transformed my career.",
      rating: 5,
      earnings: "$8,000+",
      timeframe: "Monthly"
    },
    {
      name: "Rodrigo Pena",
      initials: "RP",
      role: "Social Media Creator",
      quote: "The community is phenomenal and packed with valuable resources. Everyone's genuinely helpful, and the coaches provide incredible actionable feedback.",
      rating: 5,
      earnings: "$5,600",
      timeframe: "Monthly Avg"
    }
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
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-accent">Creator Success Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Hear from Our
              <span className="block text-gradient mt-2">Top-Performing Creators</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real creators who transformed their passion into profitable careers with MediaLabs
            </p>
          </div>

          {/* Testimonials Grid with 3D Effects */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card-3d p-8 rounded-3xl hover:scale-105 hover:rotate-3d transition-all duration-500 group relative overflow-hidden transform-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon Background */}
                <Quote className="absolute -top-2 -right-2 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Earnings Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                    <span className="text-sm font-bold text-accent">{testimonial.earnings}</span>
                    <span className="text-sm text-muted-foreground">• {testimonial.timeframe}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="glass-card p-8 rounded-2xl mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Average Time to First Deal", value: "< 1 Week" },
                { label: "Average Monthly Income", value: "$8,200" },
                { label: "Creator Success Rate", value: "94%" },
                { label: "Avg. ROI Timeline", value: "30 Days" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => window.open('https://whop.com/media-labs?a=muhammadabdurrahman6004', '_blank')}
              className="group"
            >
              Join These Successful Creators
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