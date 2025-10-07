import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contactus: React.FC = () => {
  return (
    <section className="bg-pink-600 text-white py-12 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Ready to Start Your Journey?
      </h2>
      <p className="text-sm md:text-base mb-8">
        Book your free consultation today and take the first step towards parenthood
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-8">
        {/* Call Us */}
        <div className="flex flex-col items-center">
          <div className="bg-white text-pink-600 p-4 rounded-full mb-3 shadow-md">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-semibold">Call Us</h3>
          <a
            href="tel:+91-9911631639"
            className="text-white hover:underline text-sm"
          >
            +91 9911631639
          </a>
        </div>

        {/* Email Us */}
        <div className="flex flex-col items-center">
          <div className="bg-white text-pink-600 p-4 rounded-full mb-3 shadow-md">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-semibold">Email Us</h3>
          <a
            href="mailto:drpayalbajaj@gmail.com"
            className="text-white hover:underline text-sm break-all"
          >
            drpayalbajaj@gmail.com
          </a>
        </div>

        {/* Visit Us */}
        <div className="flex flex-col items-center">
          <div className="bg-white text-pink-600 p-4 rounded-full mb-3 shadow-md">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-semibold">Visit Us</h3>
          <a 
            href="https://maps.app.goo.gl/CpyuLtaTjwjXsv1FA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline text-sm"
          >
            Nandi IVF, Ashok Vihar, Delhi
          </a>
        </div>
      </div>

      <a
        href=""
        className="inline-block bg-white text-pink-600 font-medium py-3 px-6 rounded-md shadow-md hover:bg-pink-50 transition"
      >
        Book Free Consultation
      </a>
    </section>
  );
};

export default Contactus;
