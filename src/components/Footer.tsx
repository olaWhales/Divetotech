import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Code,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-card to-muted/50 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DiveToTech
              </span>
            </div>

            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Empowering the next generation of developers through hands-on
              learning, mentorship, and real-world project experience. Join our
              community and transform your career in tech.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-3 h-3 text-primary" />
                </div>
                <a
                  href="mailto:info@divetotech.com"
                  className="hover:text-primary transition-colors"
                >
                  divetotechng@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 text-primary" />
                </div>
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +234 810 279 000
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-primary" />
                </div>
                <span>Challenge, Ibadan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-card-foreground mb-6">Quick Links</h3>
            <div className="space-y-3">
              {/* Active Links */}
              <HashLink
                smooth
                to="/#about"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </HashLink>
              <HashLink
                smooth
                to="/#services"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Our Services
              </HashLink>
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>

              {/* Disabled Links */}
              <span className="block text-sm text-muted-foreground opacity-50 cursor-not-allowed">
                Courses
              </span>
              <span className="block text-sm text-muted-foreground opacity-50 cursor-not-allowed">
                Success Stories
              </span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-card-foreground mb-6">Programs</h3>
            <div className="space-y-3">
              {[
                "Full-Stack Bootcamp",
                "Frontend Development",
                "Backend Development",
                "Mobile App Development",
                "Corporate Training",
                "One-on-One Mentoring",
              ].map((label) => (
                <span
                  key={label}
                  className="block text-sm text-muted-foreground opacity-50 cursor-not-allowed"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-card-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-muted-foreground">
                Get the latest tech insights, course updates, and career tips
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-xl hover:shadow-primary transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} DiveToTech. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for developers everywhere</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {[
                {
                  icon: Facebook,
                  href: "https://facebook.com/divetotech",
                  label: "Facebook",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/divetotech",
                  label: "Twitter",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/divetotech/?viewAsMember=true",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/divetotechng",
                  label: "Instagram",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-muted hover:bg-primary/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-border"></div>

            {/* Disabled Footer Links */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="opacity-50 cursor-not-allowed">
                Privacy Policy
              </span>
              <span className="opacity-50 cursor-not-allowed">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
