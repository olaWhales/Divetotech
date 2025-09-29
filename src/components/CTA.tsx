import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Star, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-hero text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping delay-500"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Floating elements */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Users className="w-4 h-4" />
            <span className="text-sm">Join 500+ Students</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-sm">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Rocket className="w-4 h-4" />
            <span className="text-sm">95% Success Rate</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to{" "}
          <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            Dive Into Tech?
          </span>
        </h2>

        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Start your tech journey today with DiveToTech and transform your
          career with industry-leading training and mentorship.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/register" className="group">
            <button className="flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-glow hover:shadow-primary hover:scale-105 transition-all duration-300">
              <Rocket className="w-5 h-5" />
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/234810279000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <span>📞</span>
            Schedule Free Consultation
          </a>
        </div>

        {/* Special Offer */}
        <div className="inline-flex items-center gap-3 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-2xl px-6 py-4">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">
             <strong>Limited Time:</strong> First 100 students get 50% off
            enrollment fee!
          </span>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Money-back guarantee
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            Industry certified curriculum
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Lifetime community access
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Job placement assistance
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
