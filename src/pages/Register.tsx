import { useState } from "react";
import { useNavigate } from "react-router-dom"; // add this
import Navbar from "../components/Navbar"; // adjust path if needed

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    surname: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });
  const navigate = useNavigate(); // hook for navigation

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/survey", { state: { user: formData } });

    // alert("✅ Registration successful (check console)");
  };

  return (
    <>
      <Navbar />
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-hero p-6 overflow-hidden pt-28">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-90"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 w-full max-w-2xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl ring-1 ring-gray-900/10 p-8 sm:p-12">
          <h2 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-['Clash Display']">
            Student Registration
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Join <span className="font-semibold text-primary">DiveToTech</span>{" "}
            and start building your future in tech
          </p>

          {/* Full form with payload */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                  required
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                  required
                  placeholder="Enter your surname"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-white p-4 rounded-xl font-bold shadow-lg hover:shadow-primary hover:scale-105 transition-transform duration-300"
            >
              Register Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
