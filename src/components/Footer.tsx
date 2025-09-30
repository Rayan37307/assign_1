const Footer = () => {
  return (
    <>
      {/* Top Footer */}
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-40 pt-20 mb-10 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
        
        {/* Logo + Social */}
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl md:text-[30px]">Business Logo</h2>
          <div className="flex gap-3 mt-5">
            <img src="/facebook.png" alt="facebook" className="w-5 h-5" />
            <img src="/linkedin.png" alt="linkedin" className="w-5 h-5" />
            <img src="/x.png" alt="x" className="w-5 h-5" />
            <img src="/instagram.png" alt="instagram" className="w-5 h-5" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-10 text-gray-700">
          <div className="flex flex-col gap-3 text-sm min-w-[120px]">
            <p className="font-semibold text-black">Our Services</p>
            <p>Plumbing</p>
            <p>Drainage</p>
            <p>Bathroom</p>
            <p>Commercial</p>
          </div>

          <div className="flex flex-col gap-3 text-sm min-w-[120px]">
            <p className="font-semibold text-black">Useful Links</p>
            <p>Contact us</p>
            <p>Updates</p>
            <p>About Us</p>
            <p>Rates</p>
          </div>

          <div className="flex flex-col gap-3 text-sm min-w-[120px]">
            <p className="font-semibold text-black">Others</p>
            <p>Customer Services</p>
            <p>Updates</p>
            <p>Locations</p>
            <p>Sitemap</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 text-sm min-w-[200px]">
          <p className="font-semibold text-black">Contact Info</p>

          <div className="flex items-center gap-2">
            <img src="/pin.png" alt="location" className="w-4 h-4" />
            <span>1 Sail Street, London, SE11 6NQ</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="/mail.png" alt="email" className="w-4 h-4" />
            <span>enquiries@PlumbingPros.com</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="/call.png" alt="phone" className="w-4 h-4" />
            <span>020 4527 6474</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-40 py-6 text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© Plumbing Pros. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </>
  );
};

export default Footer;
