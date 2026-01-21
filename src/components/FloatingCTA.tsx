import { motion } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          aria-label="Yukarı Git"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Phone */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        href="tel:+905338401408"
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        aria-label="Ara"
      >
        <Phone className="w-5 h-5" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        href="https://wa.me/905338401408?text=Merhaba,%20randevu%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;
