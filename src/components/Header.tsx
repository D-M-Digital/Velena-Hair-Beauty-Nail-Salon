import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#yorumlar', label: 'Yorumlar' },
  { href: '#iletisim', label: 'İletişim' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Velena
            </h1>
            <span className="text-xs tracking-widest text-muted-foreground uppercase">
              Beauty & Nail Salon
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+905338401408" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+90 533 840 14 08</span>
            </a>
            <a href="#iletisim" className="btn-primary text-sm py-3 px-6">
              Randevu Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-border"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground py-2 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-border my-2" />
                <a
                  href="tel:+905338401408"
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Phone className="w-5 h-5" />
                  <span>+90 533 840 14 08</span>
                </a>
                <a
                  href="#iletisim"
                  className="btn-primary text-center mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Randevu Al
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
