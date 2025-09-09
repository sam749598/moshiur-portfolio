// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaFacebook, 
//   FaInstagram, 
//   FaTwitter, 
//   FaLinkedin, 
//   FaYoutube, 
//   FaTiktok,
//   FaPinterest,
//   FaSnapchat,
//   FaWhatsapp,
//   FaTelegram,
//   FaDiscord,
//   FaReddit,
//   FaGithub,
//   FaMedium,
//   FaQuora,
//   FaSkype,
//   FaWeixin,
//   FaWeibo,
//   FaVk,
//   FaOdnoklassniki
// } from 'react-icons/fa';

// const ToolsIUse = () => {
//   // List of social media tools with their icons and names
//   const socialTools = [
//     { icon: <FaFacebook className="text-4xl text-blue-600" />, name: "Facebook" },
//     { icon: <FaInstagram className="text-4xl text-pink-600" />, name: "Instagram" },
//     { icon: <FaTwitter className="text-4xl text-blue-400" />, name: "Twitter" },
//     { icon: <FaLinkedin className="text-4xl text-blue-700" />, name: "LinkedIn" },
//     { icon: <FaYoutube className="text-4xl text-red-600" />, name: "YouTube" },
//     { icon: <FaTiktok className="text-4xl text-black" />, name: "TikTok" },
//     { icon: <FaPinterest className="text-4xl text-red-600" />, name: "Pinterest" },
//     { icon: <FaSnapchat className="text-4xl text-yellow-400" />, name: "Snapchat" },
//     { icon: <FaWhatsapp className="text-4xl text-green-500" />, name: "WhatsApp" },
//     { icon: <FaTelegram className="text-4xl text-blue-500" />, name: "Telegram" },
//     { icon: <FaDiscord className="text-4xl text-indigo-600" />, name: "Discord" },
//     { icon: <FaReddit className="text-4xl text-orange-600" />, name: "Reddit" },
//     { icon: <FaGithub className="text-4xl text-gray-800" />, name: "GitHub" },
//     { icon: <FaMedium className="text-4xl text-gray-700" />, name: "Medium" },
//     { icon: <FaQuora className="text-4xl text-red-600" />, name: "Quora" },
//     { icon: <FaSkype className="text-4xl text-blue-500" />, name: "Skype" },
//     { icon: <FaWeixin className="text-4xl text-green-600" />, name: "WeChat" },
//     { icon: <FaWeibo className="text-4xl text-red-600" />, name: "Weibo" },
//     { icon: <FaVk className="text-4xl text-blue-600" />, name: "VK" },
//     { icon: <FaOdnoklassniki className="text-4xl text-orange-600" />, name: "Odnoklassniki" }
//   ];

//   return (
//     <section id="tools" className='bg-gray-900 text-white py-20 overflow-hidden'>
//       <div className='max-w-7xl mx-auto px-4'>
//         <motion.h2 
//           className='text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400'
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//         >
//           Tools I Use
//         </motion.h2>

//         <div className='relative overflow-hidden'>
//           {/* Marquee container */}
//           <motion.div 
//             className='flex space-x-12 py-4'
//             animate={{
//               x: [0, -10000]
//             }}
//             transition={{
//               x: {
//                 duration: 60,
//                 repeat: Infinity,
//                 ease: "linear"
//               }
//             }}
//           >
//             {/* First set of social tools */}
//             {socialTools.map((tool, index) => (
//               <div key={index} className='flex flex-col items-center justify-center min-w-[120px]'>
//                 <div className='mb-2'>
//                   {tool.icon}
//                 </div>
//                 <span className='text-sm text-gray-300 text-center'>{tool.name}</span>
//               </div>
//             ))}
            
//             {/* Duplicate set for seamless loop */}
//             {socialTools.map((tool, index) => (
//               <div key={`duplicate-${index}`} className='flex flex-col items-center justify-center min-w-[120px]'>
//                 <div className='mb-2'>
//                   {tool.icon}
//                 </div>
//                 <span className='text-sm text-gray-300 text-center'>{tool.name}</span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ToolsIUse;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaFacebook, 
//   FaInstagram, 
//   FaTwitter, 
//   FaLinkedin, 
//   FaYoutube, 
//   FaTiktok,
//   FaPinterest,
//   FaSnapchat,
//   FaWhatsapp,
//   FaTelegram,
//   FaDiscord,
//   FaReddit,
//   FaMedium,
//   FaQuora,
//   FaSkype,
//   FaWeixin,
//   FaWeibo,
//   FaVk,
//   FaOdnoklassniki
// } from 'react-icons/fa';

// const ToolsIUse = () => {
//   // List of social media tools with their icons and names
//   const socialTools = [
//     { icon: <FaFacebook className="text-4xl text-blue-600" />, name: "Facebook" },
//     { icon: <FaInstagram className="text-4xl text-pink-600" />, name: "Instagram" },
//     { icon: <FaTwitter className="text-4xl text-blue-400" />, name: "Twitter" },
//     { icon: <FaLinkedin className="text-4xl text-blue-700" />, name: "LinkedIn" },
//     { icon: <FaYoutube className="text-4xl text-red-600" />, name: "YouTube" },
//     { icon: <FaTiktok className="text-4xl text-shadow-gray-300" />, name: "TikTok" },
//     { icon: <FaPinterest className="text-4xl text-red-600" />, name: "Pinterest" },
//     { icon: <FaSnapchat className="text-4xl text-yellow-400" />, name: "Snapchat" },
//     { icon: <FaWhatsapp className="text-4xl text-green-500" />, name: "WhatsApp" },
//     { icon: <FaTelegram className="text-4xl text-blue-500" />, name: "Telegram" },
//     { icon: <FaDiscord className="text-4xl text-indigo-600" />, name: "Discord" },
//     { icon: <FaReddit className="text-4xl text-orange-600" />, name: "Reddit" },
//     { icon: <FaMedium className="text-4xl text-gray-700" />, name: "Medium" },
//     { icon: <FaQuora className="text-4xl text-red-600" />, name: "Quora" },
//     { icon: <FaSkype className="text-4xl text-blue-500" />, name: "Skype" },
//     { icon: <FaWeixin className="text-4xl text-green-600" />, name: "WeChat" },
//     { icon: <FaWeibo className="text-4xl text-red-600" />, name: "Weibo" },
//     { icon: <FaVk className="text-4xl text-blue-600" />, name: "VK" },
//     { icon: <FaOdnoklassniki className="text-4xl text-orange-600" />, name: "Odnoklassniki" }
//   ];

//   return (
//     <section id="tools" className='bg-gray-900 text-white py-20 overflow-hidden'>
//       <div className='max-w-7xl mx-auto px-4'>
//         <motion.h2 
//           className='text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400'
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           Tools I Use
//         </motion.h2>

//         <div className='relative overflow-hidden'>
//           {/* Marquee container */}
//           <motion.div 
//             className='flex space-x-12 py-4'
//             animate={{
//               x: ["0%", "-100%"]
//             }}
//             transition={{
//               x: {
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: "linear"
//               }
//             }}
//           >
//             {/* First set of social tools */}
//             {socialTools.map((tool, index) => (
//               <div key={index} className='flex flex-col items-center justify-center min-w-[120px]'>
//                 <div className='mb-2'>
//                   {tool.icon}
//                 </div>
//                 <span className='text-sm text-gray-300 text-center'>{tool.name}</span>
//               </div>
//             ))}
            
//             {/* Duplicate set for seamless loop */}
//             {socialTools.map((tool, index) => (
//               <div key={`duplicate-${index}`} className='flex flex-col items-center justify-center min-w-[120px]'>
//                 <div className='mb-2'>
//                   {tool.icon}
//                 </div>
//                 <span className='text-sm text-gray-300 text-center'>{tool.name}</span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ToolsIUse;


import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube, 
  FaTiktok,
  FaPinterest,
  FaSnapchat,
  FaWhatsapp,
  FaTelegram,
  FaDiscord,
  FaReddit,
  FaMedium,
  FaQuora,
  FaSkype,
  FaWeixin,
  FaWeibo,
  FaVk,
  FaOdnoklassniki
} from 'react-icons/fa';

const ToolsIUse = () => {
  // List of social media tools with their icons and names
  const socialTools = [
    { icon: <FaFacebook className="text-4xl text-blue-600" />, name: "Facebook" },
    { icon: <FaInstagram className="text-4xl text-pink-600" />, name: "Instagram" },
    { icon: <FaTwitter className="text-4xl text-blue-400" />, name: "Twitter" },
    { icon: <FaLinkedin className="text-4xl text-blue-700" />, name: "LinkedIn" },
    { icon: <FaYoutube className="text-4xl text-red-600" />, name: "YouTube" },
    { icon: <FaTiktok className="text-4xl text-black" />, name: "TikTok" },
    { icon: <FaPinterest className="text-4xl text-red-600" />, name: "Pinterest" },
    { icon: <FaSnapchat className="text-4xl text-yellow-400" />, name: "Snapchat" },
    { icon: <FaWhatsapp className="text-4xl text-green-500" />, name: "WhatsApp" },
    { icon: <FaTelegram className="text-4xl text-blue-500" />, name: "Telegram" },
    { icon: <FaDiscord className="text-4xl text-indigo-600" />, name: "Discord" },
    { icon: <FaReddit className="text-4xl text-orange-600" />, name: "Reddit" },
    { icon: <FaMedium className="text-4xl text-gray-700" />, name: "Medium" },
    { icon: <FaQuora className="text-4xl text-red-600" />, name: "Quora" },
    { icon: <FaSkype className="text-4xl text-blue-500" />, name: "Skype" },
    { icon: <FaWeixin className="text-4xl text-green-600" />, name: "WeChat" },
    { icon: <FaWeibo className="text-4xl text-red-600" />, name: "Weibo" },
    { icon: <FaVk className="text-4xl text-blue-600" />, name: "VK" },
    { icon: <FaOdnoklassniki className="text-4xl text-orange-600" />, name: "Odnoklassniki" }
  ];

  // Scrolling speed - lower value = faster scrolling
  const scrollSpeed = 20; // in seconds

  return (
    <section id="tools" className='bg-gray-900 text-white py-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.h2 
          className='text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Tools I Use
        </motion.h2>

        <div className='relative overflow-hidden'>
          {/* Marquee container */}
          <motion.div 
            className='flex space-x-12 py-4'
            animate={{
              x: ["0%", "-100%"]
            }}
            transition={{
              x: {
                duration: scrollSpeed,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* First set of social tools */}
            {socialTools.map((tool, index) => (
              <div key={index} className='flex flex-col items-center justify-center min-w-[120px]'>
                <div className='mb-2'>
                  {tool.icon}
                </div>
                <span className='text-sm text-gray-300 text-center'>{tool.name}</span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {socialTools.map((tool, index) => (
              <div key={`duplicate-${index}`} className='flex flex-col items-center justify-center min-w-[120px]'>
                <div className='mb-2'>
                  {tool.icon}
                </div>
                <span className='text-sm text-gray-300 text-center'>{tool.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolsIUse;