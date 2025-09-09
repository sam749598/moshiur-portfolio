import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt} from 'react-icons/fa';

const Projects = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for project tags
  const tagVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: "Social Media Campaign",
      description: "Developed and executed a comprehensive social media campaign for a fashion brand, resulting in a 150% increase in engagement.",
      image: "https://images.unsplash.com/photo-1611926653458-1542a3849d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Facebook", "Instagram", "Content Strategy"],
      liveLink: "#"
    },
    {
      id: 2,
      title: "Facebook Ads Optimization",
      description: "Optimized Facebook ad campaigns for an e-commerce store, reducing cost per acquisition by 35% while increasing conversion rate.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Facebook Ads", "A/B Testing", "ROI Optimization"],
      liveLink: "#"
    },
    {
      id: 3,
      title: "Brand Marketing Strategy",
      description: "Created a comprehensive marketing strategy for a tech startup, including brand positioning and target audience analysis.",
      image: "https://images.unsplash.com/photo-1557682257-2f9c37a3a66f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Strategy", "Branding", "Market Research"],
      liveLink: "#"
    },
    {
      id: 4,
      title: "System Troubleshooting",
      description: "Diagnosed and resolved critical system issues for a financial institution, preventing potential data loss and improving performance.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a5a6b57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Problem Solving", "System Optimization"],
      liveLink: "#"
    },
    {
      id: 5,
      title: "Instagram Growth Strategy",
      description: "Implemented a growth strategy for a food blogger, increasing followers from 10K to 100K in 6 months through optimization.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Instagram", "Growth Hacking", "Content Creation"],
      liveLink: "#"
    },
    {
      id: 6,
      title: "Google Ads Campaign",
      description: "Managed Google Ads campaigns for a local business, achieving a 300% return on ad spend and increasing qualified leads by 75%.",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Google Ads", "PPC", "Keyword Research"],
      liveLink: "#"
    }
  ];

  // Project Card Component
  const ProjectCard = ({ project }) => (
    <motion.div 
      className='bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col'
      variants={cardVariants}
      whileHover="hover"
    >
      {/* Image with overlay effect */}
      <div className='relative h-48 overflow-hidden flex-shrink-0 group'>
        <img 
          src={project.image} 
          alt={project.title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>
      
      <div className='p-6 flex-grow flex flex-col'>
        <h4 className='text-xl font-bold mb-2 text-white'>{project.title}</h4>
        <p className='text-gray-300 mb-4 flex-grow text-sm leading-relaxed'>{project.description}</p>
        
        {/* Tags */}
        <div className='flex flex-wrap gap-2 mb-6'>
          {project.tags.map((tag, index) => (
            <motion.span 
              key={index}
              className='bg-amber-900 text-amber-200 text-xs px-3 py-1 rounded-full'
              variants={tagVariants}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        {/* Links */}
        <div className='flex justify-between mt-auto'>
          <a 
            href={project.liveLink}
            className='flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm'
          >
            <FaExternalLinkAlt className='mr-2' /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );

  // Split projects into two rows
  const firstRowProjects = projects.slice(0, 3);
  const secondRowProjects = projects.slice(3, 6);

  return (
    <section id="projects" className='bg-gray-900 text-white py-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.h2 
          className='text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div 
          className='space-y-12'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* First Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {firstRowProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Second Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {secondRowProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;