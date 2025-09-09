import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  // Animation variants for the container
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
  
  // Animation variants for testimonial cards
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, Fashion Forward",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Moshiur's social media strategies transformed our online presence completely. Our engagement rates increased by 150% and we gained over 50K new followers in just three months.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The Facebook ad campaigns Moshiur managed for our product launch exceeded all expectations. We achieved a 300% ROI and our conversion rates doubled.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, Foodie Blog",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Working with Moshiur on our Instagram growth strategy was a game-changer. He helped us grow from 10K to 100K followers in just six months with authentic engagement.",
      rating: 4
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO, SecureFinance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "When our systems crashed, Moshiur diagnosed and resolved the issues within hours, potentially saving us millions in lost revenue. His troubleshooting skills are exceptional.",
      rating: 5
    },
    {
      id: 5,
      name: "Jennifer Park",
      role: "Brand Manager, BeautyPlus",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Moshiur's comprehensive marketing strategy provided clear direction for our rebranding. His insights into our target audience were incredibly valuable.",
      rating: 4
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Owner, Local Eats",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The Google Ads campaign Moshiur created for our restaurant brought in more customers in one month than we typically see in a quarter. His expertise is unmatched.",
      rating: 5
    }
  ];
  
  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className='flex'>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-1.63-1.63L12 7.77l-5.73 5.73L3.64 7.61L2 9.24l5.46 4.73L5.82 21l1.63-7.03L12 17.27z" />
          </svg>
        ))}
      </div>
    );
  };
  
  // Scrolling speed - lower value = faster scrolling
  const scrollSpeed = 40; // in seconds
  
  // Calculate the total width of all testimonials for seamless scrolling
  // Each card is w-80 (320px) with space-x-8 (32px)
  const cardWidth = 320 + 32; // Card width + spacing
  const totalWidth = testimonials.length * cardWidth;
  
  return (
    <section id="testimonials" className='bg-gray-900 text-white py-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.h2 
          className='text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>
        <motion.div 
          className='relative overflow-hidden'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Marquee container */}
          <motion.div 
            className='flex space-x-8 py-4'
            animate={{
              x: [0, -totalWidth]
            }}
            transition={{
              x: {
                duration: scrollSpeed,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* First set of testimonials */}
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className='flex-shrink-0 w-80 bg-gray-800 rounded-xl p-6 shadow-lg'
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className='flex items-center mb-4'>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className='w-16 h-16 rounded-full object-cover border-2 border-amber-400'
                  />
                  <div className='ml-4'>
                    <h4 className='text-lg font-bold text-white'>{testimonial.name}</h4>
                    <p className='text-sm text-gray-400'>{testimonial.role}</p>
                  </div>
                </div>
                
                <div className='mb-4 text-amber-400'>
                  <FaQuoteLeft className='text-2xl' />
                </div>
                
                <p className='text-gray-300 mb-4 text-sm italic'>
                  "{testimonial.quote}"
                </p>
                
                <div className='mt-auto'>
                  {renderStars(testimonial.rating)}
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial) => (
              <motion.div 
                key={`duplicate-${testimonial.id}`}
                className='flex-shrink-0 w-80 bg-gray-800 rounded-xl p-6 shadow-lg'
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className='flex items-center mb-4'>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className='w-16 h-16 rounded-full object-cover border-2 border-amber-400'
                  />
                  <div className='ml-4'>
                    <h4 className='text-lg font-bold text-white'>{testimonial.name}</h4>
                    <p className='text-sm text-gray-400'>{testimonial.role}</p>
                  </div>
                </div>
                
                <div className='mb-4 text-amber-400'>
                  <FaQuoteLeft className='text-2xl' />
                </div>
                
                <p className='text-gray-300 mb-4 text-sm italic'>
                  "{testimonial.quote}"
                </p>
                
                <div className='mt-auto'>
                  {renderStars(testimonial.rating)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;