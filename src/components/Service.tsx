import { Code, Laptop, Users, BookOpen, Briefcase, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Tech Training",
      description:
        "Hands-on coding sessions to help you grow as a developer with modern frameworks and best practices.",
      features: [
        "React & TypeScript",
        "Full-Stack Development",
        "Database Design",
        "API Development",
      ],
      color: "primary",
    },
    {
      icon: Laptop,
      title: "Software Development",
      description:
        "We build custom apps and solutions for businesses using cutting-edge technologies and methodologies.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "Cloud Solutions",
        "DevOps & Deployment",
      ],
      color: "secondary",
    },
    {
      icon: Users,
      title: "Mentorship",
      description:
        "One-on-one guidance to take your career to the next level with personalized learning paths.",
      features: [
        "Career Guidance",
        "Code Reviews",
        "Interview Prep",
        "Portfolio Building",
      ],
      color: "accent",
    },
    {
      icon: BookOpen,
      title: "Bootcamp Program",
      description:
        "Intensive 12-week program covering full-stack development from basics to advanced concepts.",
      features: [
        "12 Weeks Intensive",
        "Live Projects",
        "Job Assistance",
        "Certificate",
      ],
      color: "primary",
    },
    {
      icon: Briefcase,
      title: "Corporate Training",
      description:
        "Upskill your team with customized training programs tailored to your business needs.",
      features: [
        "Custom Curriculum",
        "Team Workshops",
        "Progress Tracking",
        "Ongoing Support",
      ],
      color: "secondary",
    },
    {
      icon: Zap,
      title: "Hackathons & Events",
      description:
        "Join our regular coding events, hackathons, and tech meetups to network and learn.",
      features: [
        "Monthly Events",
        "Networking",
        "Prizes & Awards",
        "Skill Competitions",
      ],
      color: "accent",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background relative">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive Tech{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From learning to building, we provide end-to-end solutions for your
            technology journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const gradientClass =
              service.color === "primary"
                ? "bg-gradient-primary"
                : service.color === "secondary"
                ? "bg-gradient-to-br from-secondary to-primary"
                : "bg-gradient-accent";

            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-primary border border-border/50 hover:border-primary/20 transition-all duration-500 hover:-translate-y-3"
              >
                <div
                  className={`w-16 h-16 ${gradientClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          service.color === "primary"
                            ? "bg-primary"
                            : service.color === "secondary"
                            ? "bg-secondary"
                            : "bg-accent"
                        }`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <button
                    className={`text-sm font-medium ${
                      service.color === "primary"
                        ? "text-primary hover:text-primary/80"
                        : service.color === "secondary"
                        ? "text-secondary hover:text-secondary/80"
                        : "text-accent hover:text-accent/80"
                    } transition-colors flex items-center gap-1 group/btn`}
                  >
                    Learn More
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-primary text-white rounded-2xl p-6 shadow-primary">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-90">Practical</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">∞</div>
              <div className="text-sm opacity-90">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;