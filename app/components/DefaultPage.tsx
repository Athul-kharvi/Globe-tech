import ContactForm from "./ContactForm";
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

const DefaultPage = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#EBFC41]">
          Contact Us
        </h2>

        <div className="flex flex-wrap gap-8">
          {/* Contact Form */}
          <div className="flex-[1.5] min-w-[350px] px-4">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <ContactForm />
          </div>

          {/* Address Section */}
          <div className="flex-1 min-w-[250px] px-4">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <p className="mb-2 text-gray-300">4th Phase, 438, 12th Cross Rd,</p>
            <p className="mb-2 text-gray-300">Ganapathy Nagar, Phase 3, Peenya,</p>
            <p className="mb-2 text-gray-300">Bangaluru, Karnataka 560058,</p>
            <p className="mb-2 text-gray-300">Phone: (+91) 9611960984</p>

            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#EBFC41] hover:text-white transition-colors duration-300"><Facebook /></a>
              <a href="#" className="text-[#EBFC41] hover:text-white transition-colors duration-300"><LinkedIn /></a>
              <a href="#" className="text-[#EBFC41] hover:text-white transition-colors duration-300"><Instagram /></a>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="flex-1 min-w-[400px] px-3 pr-7">
            <h3 className="text-2xl font-semibold mb-4">We Are Here</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2643347858834!2d77.5114785!3d13.018831699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cfcbd82969b%3A0xc425e271687e923a!2sGlobe%20Tech%20Fortune%20Industries%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1739000038091!5m2!1sen!2sin"
              width="100%"
              height="400"
              title="Google Map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full  h-72 rounded-xl border border-gray-300 transition-all duration-300 hover:border-[#EBFC41] hover:shadow-xl hover:scale-105"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultPage;
