import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for each skill item
  const skillVariants = {
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

  // Animation variants for the circle
  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  // Animation variants for the line
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the text content
  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for individual words
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Function to split text into words for animation
  const renderAnimatedText = (text) => {
    return text.split(' ').map((word, index) => (
      <motion.span
        key={index}
        className="inline-block mr-1"
        variants={wordVariants}
        style={{
          display: 'inline-block',
          marginRight: '0.25rem'
        }}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <section id="skills" className='bg-gray-900 text-white py-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 '>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className='relative pl-12 md:pl-35'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical Line */}
          <motion.div
            className='absolute left-0 top-0 w-0.5 h-full bg-gray-600 origin-top ml-20'
            variants={lineVariants}
          />

          {/* Social Media Manager Skill */}
          <motion.div className='relative mb-16' variants={skillVariants}>
            <div className='flex items-start'>
              <motion.div
                className='w-6 h-6 rounded-full bg-amber-400 z-10'
                variants={circleVariants}
              />
              <motion.div className='ml-8' variants={textVariants}>
                <h3 className='text-2xl font-bold mb-2 text-amber-300'>
                  {renderAnimatedText("Social Media Manager")}
                </h3>
                <p className='text-gray-300 max-w-2xl'>
                  {renderAnimatedText("Expert in creating and implementing effective social media strategies across multiple platforms. Skilled in content creation, community management, and analytics to drive engagement and growth. Proven track record of increasing brand awareness and customer loyalty through targeted campaigns.")}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Trouble Shooting Skill */}
          <motion.div className='relative mb-16' variants={skillVariants}>
            <div className='flex items-start'>
              <motion.div
                className='w-6 h-6 rounded-full bg-amber-400 z-10'
                variants={circleVariants}
              />
              <motion.div className='ml-8' variants={textVariants}>
                <h3 className='text-2xl font-bold mb-2 text-amber-300'>
                  {renderAnimatedText("Trouble Shooting")}
                </h3>
                <p className='text-gray-300 max-w-2xl'>
                  {renderAnimatedText("Adept at identifying and resolving technical issues quickly and efficiently. Strong problem-solving skills with a focus on minimizing downtime and maximizing productivity. Experienced in diagnosing complex problems and implementing effective solutions under pressure.")}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Ads Skill */}
          <motion.div className='relative' variants={skillVariants}>
            <div className='flex items-start'>
              <motion.div
                className='w-6 h-6 rounded-full bg-amber-400 z-10'
                variants={circleVariants}
              />
              <motion.div className='ml-8' variants={textVariants}>
                <h3 className='text-2xl font-bold mb-2 text-amber-300'>
                  {renderAnimatedText("Social Ads")}
                </h3>
                <p className='text-gray-300 max-w-2xl'>
                  {renderAnimatedText("Proficient in creating and managing targeted advertising campaigns on social media platforms. Skilled in audience targeting, A/B testing, and budget optimization to maximize ROI. Experience with Facebook Ads, Instagram Ads, LinkedIn Ads, and other paid social strategies.")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;