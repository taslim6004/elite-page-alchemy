export const TrustBrands = () => {
  const brands = [
    { url: "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_724964f5-47b5-48c6-999b-660a5e27b66d.jpeg@avif?w=640&q=75", alt: "Brand Partner 1" },
    { url: "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_585f7755-a1e4-4efb-ab80-1f27aef695a0.jpeg@avif?w=640&q=75", alt: "Brand Partner 2" },
    { url: "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_01453c54-364c-4caa-987d-c8a5d299812f.jpeg@avif?w=640&q=75", alt: "Brand Partner 3" },
    { url: "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_d12f16ea-5516-4502-88ad-2a6b3436c1cb.jpeg@avif?w=640&q=75", alt: "Brand Partner 4" },
    { url: "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_77f13f90-7602-4507-9e08-67d311b049e9.jpeg@avif?w=640&q=75", alt: "Brand Partner 5" },
    { url: "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_cdf28a49-a344-48cc-bc06-cecc6632c081.jpeg@avif?w=640&q=75", alt: "Brand Partner 6" },
    { url: "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_a05cfe1f-9d8c-4b98-8a6e-fcb7eeaa2bda.jpeg@avif?w=640&q=75", alt: "Brand Partner 7" },
  ];

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Trusted by Creators & Brands Worldwide
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Work with <span className="text-gradient">Industry-Leading</span> Brands
          </p>
        </div>
        
        {/* Brand Logos Grid - Large Popup Animation */}
        <div className="relative overflow-hidden py-8">
          <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="relative group animate-popup-3d"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden glass-card-3d p-6 hover:scale-110 hover:rotate-3d transition-all duration-500 transform-3d">
                  <img
                    src={brand.url}
                    alt={brand.alt}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "1,000+", label: "Active Creators" },
            { number: "50+", label: "Brand Partners" },
            { number: "$8K+", label: "Avg. Monthly Income" },
            { number: "98%", label: "Creator Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};