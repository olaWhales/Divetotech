import { Target, Award, Users2, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="about-section py-20 px-6 bg-muted relative overflow-hidden">
      {/* Sparkles + bubbles + globe background handled by CSS */}
      <div className="absolute inset-0 about-bg">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">About DiveToTech</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Transforming Tech Dreams into{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Reality
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DiveToTech is a Ibadan based tech training and product development
              company. We equip learners with practical coding skills through
              immersive, project-based mentorship. Our graduates don’t just
              learn they build and ship real software. We also collaborate with
              startups and businesses to develop custom tech solutions that
              solve real-world problems. From MVPs to full-scale platforms, we
              bring engineering excellence to every build.
              {/* we empower aspiring developers with practical
              coding skills and hands-on experience. Our approach goes beyond
              theory — we mentor you through building real-world software
              projects, helping you ship polished products that showcase your
              talent and readiness for the tech industry. */}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                Practical Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn by doing with hands-on projects that mirror real industry
                challenges and requirements.
              </p>
            </div>

            <div className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                Expert Mentorship
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get guidance from industry professionals who've built and scaled
                successful software products.
              </p>
            </div>

            <div className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                Career Success
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Join our alumni working at top tech companies worldwide with
                proven job placement success.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 bg-card rounded-2xl p-8 shadow-card">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">
                  Students Trained
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">7+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
