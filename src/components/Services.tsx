import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import serviceNails from '@/assets/service-nails.jpg';
import serviceFacial from '@/assets/service-facial.jpg';
import serviceHair from '@/assets/service-hair.jpg';
import serviceMassage from '@/assets/service-massage.jpg';
import serviceBridal from '@/assets/service-bridal.jpg';

const services = [
  {
    title: 'Yüz Bakımı',
    description: 'Profesyonel cilt analizi ve kişiye özel bakım uygulamaları ile cildinizi yenileyin.',
    image: serviceFacial,
    category: 'Cilt Bakımı',
  },
  {
    title: 'Manikür & Pedikür',
    description: 'Nail art, jel tırnak, protez tırnak ve profesyonel tırnak bakımı hizmetleri.',
    image: serviceNails,
    category: 'Tırnak Bakımı',
  },
  {
    title: 'Saç Kesimi & Renklendirme',
    description: 'Trend saç kesimleri, balayage, ombre ve profesyonel saç boyama teknikleri.',
    image: serviceHair,
    category: 'Saç Bakımı',
  },
  {
    title: 'Masaj Terapi',
    description: 'Aromaterapi, İsveç masajı ve stres giderici masaj seansları.',
    image: serviceMassage,
    category: 'Rahatlama',
  },
  {
    title: 'Gelin Makyajı & Saç',
    description: 'Özel gününüz için profesyonel gelin makyajı ve saç tasarımı.',
    image: serviceBridal,
    category: 'Özel Günler',
  },
  {
    title: 'Kaş & Kirpik Bakımı',
    description: 'Microblading, kirpik lifting, ipek kirpik ve kaş tasarımı.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop',
    category: 'Bakım',
  },
  {
    title: 'Kalıcı Makyaj',
    description: 'Kalıcı dudak renklendirme, eyeliner ve kaş kontürü uygulamaları.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop',
    category: 'Makyaj',
  },
  {
    title: 'Ağda Hizmetleri',
    description: 'Yüz ve vücut için profesyonel ağda uygulamaları.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
    category: 'Bakım',
  },
  {
    title: 'Velena Academy',
    description: 'Profesyonel güzellik eğitimleri ve sertifikalı kurslar.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    category: 'Eğitim',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hizmetler" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold mb-4 block">
            Hizmetlerimiz
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Profesyonel Bakım
            <span className="text-gradient-rose block">Hizmetleri</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Geniş hizmet yelpazemizle güzellik ve bakım ihtiyaçlarınızı 
            tek çatı altında karşılıyoruz.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="service-card group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium tracking-wider uppercase text-gold">
                  {service.category}
                </span>
                <h3 className="font-serif text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {service.description}
                </p>
                <a
                  href="#iletisim"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Randevu Al
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
