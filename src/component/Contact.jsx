import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        {/* Section Header */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
  <h2 className="text-4xl md:text-5xl font-light tracking-tight text-purple-700">
    Let’s Connect
  </h2>

  {/* soft underline */}
  <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />

  {/* subtitle */}
  <p className="mt-6 text-lg text-neutral-600 max-w-xl mx-auto">
    Open to conversations around data, analytics, business problems,
    collaborations, and opportunities.
  </p>
</motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >

          {/* LEFT – Contact Info */}
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
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="mailto:artinavale05@gmail.com"
                className="text-2xl text-purple-500"
              >
                <FaEnvelope />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://linkedin.com"
                target="_blank"
                className="text-2xl text-purple-500"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://instagram.com"
                target="_blank"
                className="text-2xl text-purple-500"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>

          {/* RIGHT – Contact Form */}
          <form className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-sm space-y-6">

            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-purple-400 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-xl bg-purple-500 py-3 text-white font-medium"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
