// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   // Animation variants for the container
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2
//       }
//     }
//   };

//   // Animation variants for the heading
//   const headingVariants = {
//     hidden: { 
//       opacity: 0,
//       y: -50,
//       scale: 0.9
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Animation variants for the text container
//   const textContainerVariants = {
//     hidden: { 
//       opacity: 0,
//       y: 50
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         delay: 0.4,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Animation variants for individual words
//   const wordVariants = {
//     hidden: { 
//       opacity: 0,
//       y: 20,
//       rotateX: 90
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Split text into words for animation
//   const aboutText = "I am Moshiur Rahman, a passionate Social Media Manager & Trouble Shooter. I help brands and businesses grow by creating effective digital strategies, managing online communities, and delivering engaging content that connects with audiences. My strength lies in analyzing challenges, solving problems quickly, and turning obstacles into opportunities for growth. With creativity, consistency, and a solution-driven approach, I aim to build strong online identities and ensure smooth digital communication that drives real results.";

//   const words = aboutText.split(' ');

//   return (
//     <section id="about" className='bg-gray-900 text-white py-20 overflow-hidden'>
//       <motion.div 
//         className='max-w-7xl mx-auto p-4'
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ 
//           once: true, 
//           amount: 0.3,
//           margin: "-100px 0px -100px 0px"
//         }}
//       >
//         <motion.h1 
//           className='text-3xl md:text-4xl font-bold text-center mb-8 text-amber-400'
//           variants={headingVariants}
//         >
//           Let's Introduce
//         </motion.h1>
        
//         <motion.div 
//           className='text-center max-w-3xl mx-auto'
//           variants={textContainerVariants}
//         >
//           <p className='text-lg text-gray-300 leading-relaxed'>
//             {words.map((word, index) => (
//               <motion.span
//                 key={index}
//                 className="inline-block mr-1"
//                 variants={wordVariants}
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 style={{
//                   display: 'inline-block',
//                   marginRight: '0.25rem'
//                 }}
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { 
      opacity: 0,
      y: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the text container
  const textContainerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
        staggerChildren: 0.05
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

  // Split text into words for animation
  const aboutText = "I am Moshiur Rahman, a passionate Social Media Manager & Trouble Shooter. I help brands and businesses grow by creating effective digital strategies, managing online communities, and delivering engaging content that connects with audiences. My strength lies in analyzing challenges, solving problems quickly, and turning obstacles into opportunities for growth. With creativity, consistency, and a solution-driven approach, I aim to build strong online identities and ensure smooth digital communication that drives real results.";
  const words = aboutText.split(' ');

  return (
    <section id="about" className='bg-gray-900 text-white py-20 overflow-hidden'>
      <motion.div 
        className='max-w-7xl mx-auto p-4'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className='text-3xl md:text-4xl font-bold text-center mb-8 text-amber-400'
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: false, // This ensures animation triggers on every scroll
            amount: 0.3
          }}
        >
          Let's Introduce
        </motion.h1>
        
        <motion.div 
          className='text-center max-w-3xl mx-auto'
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: false, // This ensures animation triggers on every scroll
            amount: 0.3
          }}
        >
          <p className='text-lg text-gray-300 leading-relaxed'>
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                variants={wordVariants}
                whileInView="visible"
                viewport={{ 
                  once: false, // This ensures animation triggers on every scroll
                  amount: 0.1
                }}
                style={{
                  display: 'inline-block',
                  marginRight: '0.25rem'
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;



