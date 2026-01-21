import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  Shield, 
  Sparkles, 
  Clock, 
  GraduationCap, 
  CalendarCheck 
} from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: '13 Uzman Personel',
    description: 'Alanında deneyimli, sürekli kendini geliştiren profesyonel ekip.',
  },
  {
    icon: Shield,
    title: 'Hijyen Standartları',
    description: 'En yüksek hijyen standartlarına uygun, sterilize edilmiş ekipmanlar.',
  },
  {
    icon: Sparkles,
    title: 'Premium Ürünler',
    description: 'Dünyaca ünlü markaların kaliteli ve güvenilir ürünleri.',
  },
  {
    icon: Clock,
    title: 'Konforlu Ortam',
    description: 'Modern tasarım, rahatlatıcı atmosfer ve kişisel ilgi.',
  },
  {
    icon: GraduationCap,
    title: 'Velena Academy',
    description: 'Profesyonel güzellik eğitimleri ve sertifikalı programlar.',
  },
  {
    icon: CalendarCheck,
    title: 'Kolay Randevu',
    description: 'Online, telefonla veya WhatsApp üzerinden hızlı randevu imkanı.',
  },
];

const WhyVelena = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-b from-rose-50/50 to-white" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&h=700&fit=crop"
                alt="Velena Salon Experience"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 glass-card p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-rose-200"
                        style={{
                          backgroundImage: `url(https://i.pravatar.cc/40?img=${i + 10})`,
                          backgroundSize: 'cover',
                        }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold">5000+</div>
                    <div className="text-sm text-muted-foreground">Mutlu Müşteri</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-gold mb-4 block">
              Neden Velena?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Güzelliğiniz İçin
              <span className="text-gradient-rose block">En İyi Tercih</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Yüksek talep nedeniyle erken rezervasyon yapmanızı öneririz. 
              Size en iyi deneyimi sunmak için buradayız.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyVelena;
