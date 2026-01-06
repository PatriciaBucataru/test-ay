import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <nav className="bg-[#6b7c5e] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/images/logo pn.png"
              alt="House of Aya"
              className="w-10 h-10"
            />
            <span className="font-display text-xl">HOUSE OF AYA</span>
          </Link>
          <Link to="/" className="font-body text-sm tracking-wider hover:text-[#f4d03f] transition-colors">
            ← Înapoi acasă
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/images/logo pn.png"
              alt="AYA"
              className="w-12 h-12 animate-breathe drop-shadow-lg"
            />
            <h1 className="font-display text-4xl lg:text-5xl text-[#6b7c5e]">
              Contact
            </h1>
          </div>
          <p className="font-body text-lg text-[#6b7c5e]/80 max-w-2xl mx-auto">
            Vino să ne cunoști în spațiul nostru dedicat transformării și echilibrului interior.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="/images/logo pn.png"
                  alt="Location"
                  className="w-8 h-8 mt-1"
                />
                <div>
                  <h3 className="font-display text-2xl text-[#6b7c5e] mb-2">Adresă</h3>
                  <p className="font-body text-[#6b7c5e]/80 leading-relaxed">
                    Strada Madrigalului, Nr. 58<br />
                    Sector 1, București<br />
                    România
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="/images/logo pn.png"
                  alt="Hours"
                  className="w-8 h-8 mt-1"
                />
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">Program</h3>
                  <div className="space-y-3 font-body text-[#6b7c5e]/80">
                    <div className="flex justify-between items-center">
                      <span>Luni - Vineri</span>
                      <span className="font-semibold text-[#6b7c5e]">07:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sâmbătă</span>
                      <span className="font-semibold text-[#6b7c5e]">08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Duminică</span>
                      <span className="font-semibold text-[#6b7c5e]">09:00 - 18:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="/images/logo pn.png"
                  alt="Contact"
                  className="w-8 h-8 mt-1"
                />
                <div>
                  <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">Contactează-ne</h3>
                  <div className="space-y-3 font-body text-[#6b7c5e]/80">
                    <div>
                      <p className="text-sm uppercase tracking-wider mb-1 text-[#6b7c5e]/60">Email</p>
                      <a href="mailto:hello@houseofaya.ro" className="text-[#6b7c5e] hover:text-[#f4d03f] transition-colors">
                        hello@houseofaya.ro
                      </a>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider mb-1 text-[#6b7c5e]/60">Telefon</p>
                      <a href="tel:+40123456789" className="text-[#6b7c5e] hover:text-[#f4d03f] transition-colors">
                        +40 123 456 789
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <img
                  src="/images/logo pn.png"
                  alt="Social"
                  className="w-8 h-8 mt-1"
                />
                <div>
                  <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">Rețele sociale</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full border-2 border-[#6b7c5e] flex items-center justify-center hover:bg-[#6b7c5e] hover:text-white transition-all text-[#6b7c5e]"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full border-2 border-[#6b7c5e] flex items-center justify-center hover:bg-[#6b7c5e] hover:text-white transition-all text-[#6b7c5e]"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="w-full h-[500px] lg:h-[700px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.8364087505856!2d26.0956!3d44.4758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4f1b0e0001%3A0x1!2sStrada%20Madrigalului%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="House of Aya Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
