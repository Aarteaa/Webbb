import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="py-10">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center gap-6">

          {/* WhatsApp */}
          <a
            href="https://wa.me/9324882976"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <div className="rounded-full bg-[#EDEDED] p-4 shadow-sm transition-all duration-300 hover:bg-[#E2D6D8] hover:shadow-md">
              <FaWhatsapp className="text-2xl text-[#6B5E61] transition-colors duration-300 hover:text-accent" />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/aarti-navale-697b07292/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="rounded-full bg-[#EDEDED] p-4 shadow-sm transition-all duration-300 hover:bg-[#E2D6D8] hover:shadow-md">
              <FaLinkedin className="text-2xl text-[#6B5E61] transition-colors duration-300 hover:text-accent" />
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Aarteaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="rounded-full bg-[#EDEDED] p-4 shadow-sm transition-all duration-300 hover:bg-[#E2D6D8] hover:shadow-md">
              <FaGithub className="text-2xl text-[#6B5E61] transition-colors duration-300 hover:text-accent" />
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/Rteaaa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <div className="rounded-full bg-[#EDEDED] p-4 shadow-sm transition-all duration-300 hover:bg-[#E2D6D8] hover:shadow-md">
              <FaInstagram className="text-2xl text-[#6B5E61] transition-colors duration-300 hover:text-accent" />
            </div>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
