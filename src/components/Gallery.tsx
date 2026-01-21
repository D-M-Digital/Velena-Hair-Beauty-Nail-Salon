import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import serviceNails from '@/assets/service-nails.jpg';
import serviceFacial from '@/assets/service-facial.jpg';
import serviceHair from '@/assets/service-hair.jpg';
import serviceBridal from '@/assets/service-bridal.jpg';
import heroSalon from '@/assets/hero-salon.jpg';

const galleryImages = [
  { src: heroSalon, alt: 'Velena Salon Interior', category: 'Salon' },
  { src: serviceNails, alt: 'Nail Art', category: 'Tırnak' },
  { src: serviceHair, alt: 'Hair Styling', category: 'Saç' },
  { src: serviceFacial, alt: 'Facial Treatment', category: 'Cilt' },
  { src: serviceBridal, alt: 'Bridal Makeup', category: 'Gelin' },
  { src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=400&fit=crop', alt: 'Makeup Session', category: 'Makyaj' },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop', alt: 'Salon View', category: 'Salon' },
  { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=400&fit=crop', alt: 'Hair Wash', category: 'Saç' },
];

const categories = ['Tümü', 'Salon', 'Saç', 'Tırnak', 'Makyaj', 'Gelin', 'Cilt'];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredImages = activeCategory === 'Tümü' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="galeri" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold mb-4 block">
            Galeri
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Salon
            <span className="text-gradient-rose"> Deneyimi</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Salonumuzdan ve çalışmalarımızdan kareler
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative group overflow-hidden rounded-2xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'aspect-square' : 'aspect-square'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium tracking-wider uppercase text-gold-light">
                  {image.category}
                </span>
                <h3 className="text-white font-medium mt-1">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
