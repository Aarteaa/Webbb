import { useRef } from "react";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const messageRef = useRef(null);

  const handleClick = () => {
    if (messageRef.current) {
      messageRef.current.style.display = "block";
    }
  };

  return (
    <section className="border-b border-neutral-900 py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-purple-700">
            Let’s Connect
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />

          <p className="mt-6 text-lg text-neutral-600 max-w-xl mx-auto">
            Open to conversations around data, analytics, business problems,
            collaborations, and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-lg text-neutral-600">
              I’d love to connect, collaborate, or discuss opportunities related
              to data, analytics, or business problem-solving.
            </p>

            <div className="space-y-3 text-neutral-700">
              <p>📞 +91 9324882076</p>
              <p>✉️ artinavale05@gmail.com</p>
            </div>

            <div className="flex gap-5 mt-4">
              <a href="mailto:artinavale05@gmail.com" className="text-2xl text-purple-500">
                <FaEnvelope />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-2xl text-purple-500">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-2xl text-purple-500">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* RIGHT – STATIC FAKE FORM */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-sm space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 resize-none"
            />

            <button
              type="button"
              onClick={handleClick}
              className="w-full rounded-xl bg-purple-500 py-3 text-white font-medium"
            >
              Send Message
            </button>

            <p
              ref={messageRef}
              style={{ display: "none" }}
              className="text-red-500 text-center text-sm"
            >
              Message failed to deliver. Please contact me directly via email.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
