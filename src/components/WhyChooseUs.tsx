import {
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Trophy,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-World Projects",
      description:
        "Build actual products that solve real problems, not just tutorial projects",
      highlight: "Portfolio Ready",
    },
    {
      icon: Star,
      title: "Industry Experts",
      description:
        "Learn from professionals currently working at top tech companies",
      highlight: "FAANG Experience",
    },
    {
      icon: Shield,
      title: "Job Guarantee",
      description:
        "95% of our graduates land tech jobs within 6 months of completion",
      highlight: "Success Proven",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Study at your own pace with both live sessions and recorded materials",
      highlight: "24/7 Access",
    },
    {
      icon: Trophy,
      title: "Community Support",
      description:
        "Join a vibrant community of learners and alumni who support each other",
      highlight: "Lifetime Access",
    },
    {
      icon: CheckCircle,
      title: "Cutting-Edge Tech",
      description:
        "Learn the latest technologies and frameworks used by top companies",
      highlight: "Always Updated",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted via-background to-muted/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why DiveToTech is{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Different
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At DiveToTech, we combine structured learning with real-world
            software building. Our students don't just learn theory — they ship
            projects and launch careers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 shadow-card hover:shadow-primary transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Stats */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Success Stories That Speak Volumes
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Our track record of transforming careers speaks for itself
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  95%
                </div>
                <div className="text-sm text-white/80">Job Placement Rate</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  $75k
                </div>
                <div className="text-sm text-white/80">
                  Average Starting Salary
                </div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  15+
                </div>
                <div className="text-sm text-white/80">
                  Successful Graduates
                </div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  6
                </div>
                <div className="text-sm text-white/80">
                  Months Average Job Hunt
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;