import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-zinc-900 text-white py-6">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      
      <div>
      <p className="text-sm">Connect With Me</p>
      <a href="mailto:hemankkumar24@gmail.com" className="hover:text-gray-400">hemankkumar24@gmail.com</a>
      <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
      
      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="https://github.com/hemankkumar24" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/hemankkumar24" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
