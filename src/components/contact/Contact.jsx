import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_qh0dv5x',
        'template_4g70tug',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        'dj737N1Zv4dTUB2rQ'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send message:', error);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-8 lg:py-16 mx-auto max-w-screen-lg" data-aos="fade-up" data-aos-delay="400">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-white">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-4 text-white">
            <FaUser className="text-orange-400 text-2xl" />
            <span className="text-lg font-semibold">Mahesh Dinkar Pagrut</span>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <FaPhone className="text-orange-400 text-2xl" />
            <span className="text-lg font-semibold">8999288980</span>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <FaEnvelope className="text-orange-400 text-2xl" />
            <span className="text-lg font-semibold">maheshdpmayshu@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <FaMapMarkerAlt className="text-orange-400 text-2xl" />
            <span className="text-lg font-semibold">Akola, Maharashtra, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
             
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2.5 bg-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2.5 bg-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <textarea
                rows="2"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2.5 bg-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 "
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:ring-4 focus:ring-orange-300"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-lg font-semibold text-white">{status}</p>}
        </div>
      </div>
    </section>
  );
}
