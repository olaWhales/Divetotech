import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Survey = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user; // get data from Register

  const [step, setStep] = useState(1);
  const [surveyData, setSurveyData] = useState({
    experience: "",
    familiarAreas: [] as string[],
    skillLevel: "",
    languages: [] as string[],
    careerPath: "",
  });

  const handleCheckboxChange = (name: string, value: string) => {
    setSurveyData((prev) => {
      const updated = prev[name as keyof typeof prev] as string[];
      return {
        ...prev,
        [name]: updated.includes(value)
          ? updated.filter((v) => v !== value)
          : [...updated, value],
      };
    });
  };

  const handleSubmitSurvey = () => {
    console.log("Survey submitted for:", user);
    console.log("Survey data:", surveyData);
    alert("✅ Onboarding survey completed!");
    navigate("/"); // route to homepage/dashboard later
  };

  return (
    <>
      <Navbar />
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-hero p-6 overflow-hidden pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-90"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl ring-1 ring-gray-900/10 p-8 sm:p-12">
          <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-['Clash Display']">
            Tell Us More About You
          </h2>

          {/* Step 1 - Background */}
          {step === 1 && (
            <div>
              <p className="mb-4 text-lg font-semibold text-gray-700">
                1️⃣ Background / Experience
              </p>

              <label className="block mb-2 font-medium">
                Do you have any prior experience in technology?
              </label>
              {/* <select
                value={surveyData.experience}
                onChange={(e) =>
                  setSurveyData({ ...surveyData, experience: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-xl mb-4"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select> */}
              <label
                htmlFor="experience"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Experience
              </label>
              <select
                id="experience"
                value={surveyData.experience}
                onChange={(e) =>
                  setSurveyData({ ...surveyData, experience: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-xl mb-4"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <div className="mb-4">
                <p className="font-medium mb-2">
                  If yes, which areas are you familiar with?
                </p>
                {[
                  "Programming",
                  "Design (UI/UX, Graphics)",
                  "Data",
                  "Cloud / DevOps",
                  "Cybersecurity",
                  "Product / Project Management",
                ].map((area) => (
                  <label key={area} className="block">
                    <input
                      type="checkbox"
                      checked={surveyData.familiarAreas.includes(area)}
                      onChange={() =>
                        handleCheckboxChange("familiarAreas", area)
                      }
                      className="mr-2"
                    />
                    {area}
                  </label>
                ))}
              </div>

              <label className="block mb-2 font-medium">
                What is your current skill level in tech?
              </label>
              <label
                htmlFor="skillLevel"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Skill Level
              </label>
              <select
                id="skillLevel"
                value={surveyData.skillLevel}
                onChange={(e) =>
                  setSurveyData({ ...surveyData, skillLevel: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-xl"
              >
                <option value="">Select</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          )}

          {/* Step 2 - Programming Languages */}
          {step === 2 && (
            <div>
              <p className="mb-4 text-lg font-semibold text-gray-700">
                2️⃣ Programming Languages & Tools
              </p>
              {["Python", "Java", "JavaScript", "C#", "PHP", "Go", "Rust"].map(
                (lang) => (
                  <label key={lang} className="block">
                    <input
                      type="checkbox"
                      checked={surveyData.languages.includes(lang)}
                      onChange={() => handleCheckboxChange("languages", lang)}
                      className="mr-2"
                    />
                    {lang}
                  </label>
                )
              )}
            </div>
          )}

          {/* Step 3 - Career Path */}
          {step === 3 && (
            <div>
              <p className="mb-4 text-lg font-semibold text-gray-700">
                3️⃣ Career Path
              </p>
              {[
                "Software Engineering",
                "Data Science / AI / ML",
                "Web Development",
                "Mobile App Development",
                "Cloud / DevOps Engineering",
                "Cybersecurity",
                "Product / Project Management",
              ].map((path) => (
                <label key={path} className="block">
                  <input
                    type="radio"
                    name="careerPath"
                    checked={surveyData.careerPath === path}
                    onChange={() =>
                      setSurveyData({ ...surveyData, careerPath: path })
                    }
                    className="mr-2"
                  />
                  {path}
                </label>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 rounded-xl border border-gray-400 text-gray-600 hover:bg-gray-100"
              >
                Back
              </button>
            )}
            {step < 3 && (
              <button
                onClick={() => setStep(step + 1)}
                className="ml-auto px-6 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                onClick={handleSubmitSurvey}
                className="ml-auto px-6 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Survey;
