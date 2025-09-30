import { Play } from "lucide-react";
import { useState } from "react";

export const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Play className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">See MediaLabs in Action</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Watch How Our Creators
              <span className="block text-gradient mt-2">Transform Their Careers</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the proven system that helps creators earn thousands monthly through UGC
            </p>
          </div>

          {/* Video Container */}
          <div className="relative group">
            {/* 3D Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-glow transform-3d" />
            
            {/* Video Wrapper */}
            <div className="relative glass-card-3d rounded-3xl overflow-hidden shadow-2xl transform-3d hover:rotate-3d transition-all duration-500">
              <div className="aspect-video relative">
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center cursor-pointer z-10 group/play"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary blur-2xl opacity-50 animate-pulse" />
                      <div className="relative w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center group-hover/play:scale-110 transition-transform shadow-2xl">
                        <Play className="w-12 h-12 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
                
                <video
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  preload="metadata"
                  poster="https://assets.whop.com/uploads-optimized/2024-12-02/user_6083186_53bda3b9-e74b-4daa-8ecf-125d8094a677.mp4#t=0.1"
                  onClick={() => setIsPlaying(true)}
                >
                  <source 
                    src="https://assets.whop.com/uploads-optimized/2024-12-02/user_6083186_53bda3b9-e74b-4daa-8ecf-125d8094a677.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Stats Below Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { value: "1000+", label: "Active Creators" },
              { value: "$10M+", label: "Total Earnings Generated" },
              { value: "50+", label: "Brand Partners" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-card-3d p-6 rounded-2xl text-center transform-3d hover:rotate-3d transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
