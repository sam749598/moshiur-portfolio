import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Social media data
  const socialMedia = [
    { icon: <FaFacebook />, name: 'Facebook', url: '#' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#' },
    { icon: <FaInstagram />, name: 'Instagram', url: '#' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#' }
  ];

  // Scrolling speed for social media icons
  const scrollSpeed = 30; // in seconds

  return (
    <section id="contact" className='bg-gray-900 text-white py-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.h2 
          className='text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          className='flex flex-col lg:flex-row gap-12'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Column - Contact Info */}
          <motion.div 
            className='lg:w-1/3'
            variants={leftVariants}
          >
            <div className='bg-gray-800 rounded-xl p-8 shadow-lg h-full'>
              <h3 className='text-2xl font-bold text-amber-400 mb-6'>Contact Information</h3>
              
              <div className='space-y-6 mb-8'>
                <div className='flex items-start'>
                  <div className='bg-amber-400 text-gray-900 p-3 rounded-full mr-4'>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white'>Email</h4>
                    <p className='text-gray-400'>moshiur.rahman@example.com</p>
                  </div>
                </div>
                
                <div className='flex items-start'>
                  <div className='bg-amber-400 text-gray-900 p-3 rounded-full mr-4'>
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white'>Phone</h4>
                    <p className='text-gray-400'>+880 1234 567890</p>
                  </div>
                </div>
                
                <div className='flex items-start'>
                  <div className='bg-amber-400 text-gray-900 p-3 rounded-full mr-4'>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white'>Location</h4>
                    <p className='text-gray-400'>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              
              <div className='mt-8'>
                <h4 className='text-lg font-semibold text-white mb-4'>Connect With Me</h4>
                <div className='flex space-x-4'>
                  {socialMedia.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-gray-700 hover:bg-amber-400 text-amber-400 hover:text-gray-900 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300'
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div 
            className='lg:w-2/3'
            variants={rightVariants}
          >
            <div className='bg-gray-800 rounded-xl p-8 shadow-lg h-full'>
              <h3 className='text-2xl font-bold text-amber-400 mb-6'>Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
                    <input 
                      type='text' 
                      id='name' 
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-gray-300 mb-2'>Your Email</label>
                    <input 
                      type='email' 
                      id='email' 
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400'
                      required
                    />
                  </div>
                </div>
                
                <div className='mt-6'>
                  <label htmlFor='subject' className='block text-gray-300 mb-2'>Subject</label>
                  <input 
                    type='text' 
                    id='subject' 
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400'
                    required
                  />
                </div>
                
                <div className='mt-6'>
                  <label htmlFor='message' className='block text-gray-300 mb-2'>Message</label>
                  <textarea 
                    id='message' 
                    name='message'
                    rows='5'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400'
                    required
                  ></textarea>
                </div>
                
                <div className='mt-8'>
                  <button 
                    type='submit'
                    className='w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center'
                  >
                    <FaPaperPlane className='mr-2' /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
        
    
      </div>
    </section>
  );
};

export default Contact;