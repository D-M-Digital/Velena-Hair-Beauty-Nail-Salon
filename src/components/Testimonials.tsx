import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Düzenli Müşteri',
    content: 'Velena\'yı keşfettiğimden beri başka bir salona gitmedim. Ekip son derece profesyonel ve hijyen konusunda çok titizler. Saç bakımı ve manikür hizmetleri mükemmel!',
    rating: 5,
    image: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Elena Petrova',
    role: 'Gelin Müşterisi',
    content: 'Düğünüm için Velena\'yı tercih ettim ve harika bir karar oldu. Gelin makyajım ve saçım tam istediğim gibi oldu. Tüm gece boyunca makyajım bozulmadı!',
    rating: 5,
    image: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Mehmet Kaya',
    role: 'Akademi Öğrencisi',
    content: 'Velena Academy\'de nail art eğitimi aldım. Eğitmenler çok deneyimli ve sabırlı. Sertifikamı aldıktan sonra kendi işimi kurdum. Teşekkürler Velena!',
    rating: 5,
    image: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Sarah Thompson',
    role: 'Turist',
    content: 'I found Velena during my holiday in Kyrenia. The staff speaks excellent English and the service quality is comparable to top London salons. Highly recommended!',
    rating: 5,
    image: 'https://i.pravatar.cc/100?img=9',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="yorumlar" className="section-padding bg-gradient-to-b from-white to-rose-50/50" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold mb-4 block">
            Müşteri Yorumları
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Misafirlerimiz
            <span className="text-gradient-rose block">Ne Diyor?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Google ve sosyal medyadan gelen gerçek müşteri yorumları
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-8 relative hover-lift"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Siz de deneyiminizi paylaşmak ister misiniz?
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Star className="w-5 h-5" />
            Google'da Değerlendirin
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
