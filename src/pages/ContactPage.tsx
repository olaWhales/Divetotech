import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gray-50 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-4">
            Have questions? Reach out to us at:
          </p>

          <a
            href="mailto:divetotechng@gmail.com?subject=DiveToTech%20Inquiry"
            className="text-primary text-xl font-semibold underline hover:text-primary/80"
          >
            divetotechng@gmail.com
          </a>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
