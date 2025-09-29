// src/pages/Programs.tsx
import React, { FC } from "react";

// Import images
import bootcampImg from "../assets/bootcampImg.png";
import frontendImg from "../assets/frontendImg.png";
import backendImg from "../assets/backendImg.png";
import mobileImg from "../assets/mobileImg.png";
import corporateImg from "../assets/corporateImg.png";
import mentoringImg from "../assets/mentoringImg.png";

const Programs: FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Explore our training programs designed to take you from beginner to
          job-ready professional. Choose the path that fits your goals.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-24 py-16">
        {/* Full-Stack Bootcamp */}
        <section
          id="bootcamp"
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Full-Stack Bootcamp
            </h2>
            <p className="text-gray-600 mb-6">
              An immersive program covering frontend, backend, databases, and
              deployment. Perfect for those who want to become a complete
              software engineer.
            </p>
            <a
              href="/apply"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Apply Now
            </a>
          </div>
          <div>
            <img
              src={bootcampImg}
              alt="Full-Stack Bootcamp"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Frontend Development */}
        <section
          id="frontend"
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Frontend Development
            </h2>
            <p className="text-gray-600 mb-6">
              Master modern frontend technologies including HTML, CSS,
              JavaScript, React, and Tailwind CSS to build responsive,
              user-friendly applications.
            </p>
          </div>
          <div>
            <img
              src={frontendImg}
              alt="Frontend Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Backend Development */}
        <section
          id="backend"
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Backend Development
            </h2>
            <p className="text-gray-600 mb-6">
              Learn server-side programming, databases, and API design with
              Java, Spring Boot, Node.js, and more to power scalable
              applications.
            </p>
          </div>
          <div>
            <img
              src={backendImg}
              alt="Backend Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Mobile App Development */}
        <section
          id="mobile"
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Mobile App Development
            </h2>
            <p className="text-gray-600 mb-6">
              Build cross-platform mobile apps using React Native and Flutter to
              reach users on both iOS and Android.
            </p>
          </div>
          <div>
            <img
              src={mobileImg}
              alt="Mobile App Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Corporate Training */}
        <section
          id="corporate"
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Corporate Training
            </h2>
            <p className="text-gray-600 mb-6">
              Upskill your team with customized training sessions in modern
              software technologies and best practices.
            </p>
          </div>
          <div>
            <img
              src={corporateImg}
              alt="Corporate Training"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* One-on-One Mentoring */}
        <section
          id="mentoring"
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              One-on-One Mentoring
            </h2>
            <p className="text-gray-600 mb-6">
              Get personalized guidance from experienced mentors to accelerate
              your career in tech.
            </p>
          </div>
          <div>
            <img
              src={mentoringImg}
              alt="One-on-One Mentoring"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programs;
