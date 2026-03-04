import FooterImage from "../assets/images/footer_banner.png";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#F4F6F9] pt-20">

        <div className="max-w-7xl mx-auto px-6 md:px-20 text-gray-700">

          {/* TOP GRID */}
          <div className="grid md:grid-cols-4 gap-16">

            {/* Logo */}
            <div>
              <h2 className="text-3xl font-semibold text-[#0E3A53] mb-6">
                Zophrix
              </h2>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li>About us</li>
                <li>Careers</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact us</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+91 7558197366</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>sales@zophrix.in</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@zophrix.in</span>
                </div>
              </div>
            </div>

            {/* ADDRESS FULL WIDTH */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Address</h4>

              <p className="leading-relaxed text-gray-600 max-w-4xl">
                Zophrix Pvt Ltd. <br />4th-Floor, Tower B, Featherlite, <br />
                Sy. No 203/10B, <br />
                Pallavaram , Chennai -  600119
              </p>
            </div>



          </div>



        </div>

        {/* IMAGE BELOW FOOTER */}
        <img
          src={FooterImage}
          alt="Product Preview"
          className="w-full block mt-8"
        />

      </footer>



    </>
  );
};

export default Footer;
