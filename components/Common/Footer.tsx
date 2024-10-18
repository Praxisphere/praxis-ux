import React from 'react';
import Link from 'next/link';
import SocialIcon from '@/components/SocialIcon';


const Footer: React.FC = () => {
  return (

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <p className="text-base font-heading font-bold mb-4"> Stay in loop! </p>
              <form className="space-y-2">
                <div className="flex">
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="flex-grow px-3 py-2 text-blue bg-white rounded-l-md focus:outline-none focus:ring-2 "/>
                  <button className="bg-accent hover:bg-tertiary text-white font-bold py-2 px-4
                      rounded-r-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-xs font-body mb-4"> Unsubscribe whenever you want, its absolutely free  </p>
            </div>
            <div>

            </div>
            <div>
              <p className="text-base font-heading font-bold mb-4">Resources</p>
              <ul className="font-body text-xs space-y-2">
                <li><Link href="/about" className="hover:text-primary transition duration-300 ease-in-out">About Us</Link></li>
                <li><Link href="/guides" className="hover:text-primary transition duration-300 ease-in-out">Offerings</Link>
                </li>
                <li><Link href="/case-studies" className="hover:text-gray-300 transition duration-300 ease-in-out">Anecdotes</Link></li>
                <li><Link href="/whitepapers"
                       className="hover:text-gray-300 transition duration-300 ease-in-out">White Paper</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-base font-heading font-bold mb-4">Contact Information</p>
              <div className="font-body space-y-2">
                <div className="text-xs flex items-center"><SocialIcon name="address" size={10} />
                  <span className="mx-2">SF 192/4, White Cottage, AWC, Ghaziabad, UP, India
                 201002</span></div>
                <div className="text-xs flex items-center"><SocialIcon name="phone" size={10}/>
                  <span className="mx-2"> (0120) 4352999</span></div>
                <div className="text-xs flex items-center"><SocialIcon name="mail" size={10}/>
                  <span className="mx-2"> info@praxisphere.io</span></div>
              </div>

            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-teal">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white mb-4 md:mb-0">&copy; 2024 Praxisphere. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                   className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  <SocialIcon name="facebook" size={15} />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                   className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  <SocialIcon name="twitter" size={15} />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                   className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  <SocialIcon name="linkedin" size={15} />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                   className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  <SocialIcon name="github" size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
