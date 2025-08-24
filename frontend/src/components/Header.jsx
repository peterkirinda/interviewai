import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Companies', href: '#companies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header className={`header-nav ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="font-mono font-bold text-lg text-text-primary">
            HackerBucket
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="body-medium hover:text-text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex nav-actions">
          <Button className="btn-secondary">Sign In</Button>
          <Button className="btn-primary">Start Free Trial</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden btn-nav"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-overlay backdrop-blur-md border-t border-border-light">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block body-medium hover:text-text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button className="btn-secondary">Sign In</Button>
              <Button className="btn-primary">Start Free Trial</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;