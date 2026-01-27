import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#E67E22] text-white">
      {/* TOP FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <img
              src="/assets/logo/cam-logo.png" 
              alt="Company Logo"
              className="h-16 mb-4 object-contain"
            />
            <p className="text-sm leading-6 text-white/90 max-w-xs">
              A diversified group of companies delivering excellence across
              plantations, manufacturing, education, hospitality, and consumer
              brands.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:underline">Our Brands</Link></li>
              <li><Link to="/csr" className="hover:underline">CSR</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* BRANDS */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Our Brands
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/tea" className="hover:underline">Chai Hai Tea</Link></li>
              <li><Link to="/plantation" className="hover:underline">Evergreen Plantation</Link></li>
              <li><Link to="/hardware" className="hover:underline">HiVis Hardware</Link></li>
              <li><Link to="/education" className="hover:underline">Evergreen Academy</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li>📍 Colombo, Sri Lanka</li>
              <li>📞 +94 11 234 5678</li>
              <li>✉️ info@yourgroup.com</li>
            </ul>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/30" />

      {/* BOTTOM BAR */}
      <div className="px-6 py-4 text-center text-xs text-white/90">
        © {new Date().getFullYear()} CMA Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
