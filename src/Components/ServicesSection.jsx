import React from 'react'

const ServicesSection = () => {
    return (
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-semibold text-center text-white">Our Services</h3>
          <div className="mt-10 grid md:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:translate-y-[-5px] hover:shadow-2xl transition duration-300">
              <h4 className="text-2xl font-semibold text-gray-300">Consulting</h4>
              <p className="mt-4 text-gray-400">
                We offer expert consulting services to help you grow your business, streamline operations, and reach your goals.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:translate-y-[-5px] hover:shadow-2xl transition duration-300">
              <h4 className="text-2xl font-semibold text-gray-300">Web Development</h4>
              <p className="mt-4 text-gray-400">
                Our web development team creates stunning, user-friendly websites designed to boost your online presence.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:translate-y-[-5px] hover:shadow-2xl transition duration-300">
              <h4 className="text-2xl font-semibold text-gray-300">Digital Marketing</h4>
              <p className="mt-4 text-gray-400">
                We provide digital marketing solutions that help you grow your audience, drive traffic, and increase conversions.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ServicesSection;
