import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Heart, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '13+', label: 'Uzman Personel' },
  { icon: Award, value: '10+', label: 'Yıllık Deneyim' },
  { icon: Heart, value: '5000+', label: 'Mutlu Müşteri' },
  { icon: Globe, value: '4', label: 'Dil Desteği' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hakkimizda" className="section-padding bg-gradient-to-b from-white to-rose-50/50" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-gold mb-4 block">
              Hakkımızda
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Güzellik ve Bakımda
              <span className="text-gradient-rose block">Mükemmelliğin Adresi</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Velena Hair Beauty & Nail Salon olarak, Girne'nin kalbinde siz değerli misafirlerimize 
                en üst düzey güzellik ve bakım hizmetleri sunmaktan gurur duyuyoruz.
              </p>
              <p>
                13 kişilik profesyonel ekibimiz, Türkçe, İngilizce, Rusça ve Almanca dahil olmak üzere 
                birden fazla dilde hizmet vererek, her müşterimizin kendini evinde hissetmesini sağlıyor.
              </p>
              <p>
                Modern teknikler ve premium ürünlerle, saç bakımından gelin makyajına, manikürden 
                masaj terapiye kadar geniş bir yelpazede hizmet sunuyoruz.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-serif text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=533&fit=crop"
                    alt="Salon Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop"
                    alt="Nail Art"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop"
                    alt="Hair Styling"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=533&fit=crop"
                    alt="Makeup Service"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
