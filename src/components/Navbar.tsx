import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#' },
    { 
      name: 'Programs', 
      href: '#',
      dropdown: [
        { name: 'Group Training', href: '#' },
        { name: '1-on-1 Coaching', href: '#' },
        { name: 'Custom Meal Plans', href: '#' },
      ]
    },
    { name: 'Results', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-2' 
        : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Empty div to maintain spacing */}
          <div className="w-10"></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <a 
                  href={link.href}
                  className="px-4 py-2 rounded-lg font-medium text-sm transition-colors text-gray-700 hover:text-orange-600 hover:bg-orange-50 flex items-center"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                  )}
                </a>
                
                {link.dropdown && (
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-2 z-50">
                    <div className="py-2">
                      {link.dropdown.map((item, i) => (
                        <a 
                          key={i}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="#" 
              className="px-5 py-2.5 rounded-lg font-medium text-sm transition-all bg-orange-600 text-white hover:bg-orange-700 shadow-md"
            >
              Start Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-900" />
            ) : (
              <Menu size={24} className="text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white">
          {navLinks.map((link, index) => (
            <div key={index} className="py-1">
              <a 
                href={link.href}
                className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              >
                {link.name}
              </a>
              
              {link.dropdown && (
                <div className="pl-8 mt-1 space-y-1">
                  {link.dropdown.map((item, i) => (
                    <a 
                      key={i}
                      href={item.href}
                      className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Mobile CTA */}
          <div className="pt-2">
            <a 
              href="#" 
              className="block w-full text-center px-4 py-3 rounded-lg font-medium transition-colors bg-orange-600 text-white hover:bg-orange-700"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;