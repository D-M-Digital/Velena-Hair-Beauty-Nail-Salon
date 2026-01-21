import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Velena Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-transparent to-white/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium tracking-widest uppercase text-gold">
              Girne'nin En Prestijli Güzellik Merkezi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Güzelliğinize
            <span className="block text-gradient-rose">Değer Katıyoruz</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            13 kişilik profesyonel ve çok dilli ekibimizle, saç bakımından gelin makyajına, 
            manikürden masaj terapiye kadar tüm güzellik ihtiyaçlarınızı karşılıyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#iletisim" className="btn-gold text-lg">
              Randevu Al
            </a>
            <a href="#hizmetler" className="btn-secondary text-lg">
              Hizmetlerimizi Keşfet
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#hakkimizda" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs tracking-widest uppercase">Keşfet</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
