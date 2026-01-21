import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Instagram, 
  Facebook,
  MessageCircle
} from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adres',
    content: 'Girne, Kuzey Kıbrıs',
    link: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: '+90 533 840 14 08',
    link: 'tel:+905338401408',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    content: 'Pzt-Cmt: 09:00 - 19:00',
    subContent: 'Pazar: Kapalı',
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/velenasalon', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/velenasalon', label: 'Facebook' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mesajınız alındı! En kısa sürede sizinle iletişime geçeceğiz.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="iletisim" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-gold mb-4 block">
            İletişim
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Randevu Almak İçin
            <span className="text-gradient-rose block">Bize Ulaşın</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            WhatsApp, telefon veya formu doldurarak bizimle iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905338401408?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full mb-8"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp'tan Yazın
            </a>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card hover-lift"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                    {info.subContent && (
                      <p className="text-sm text-muted-foreground">{info.subContent}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52248.04368405795!2d33.28!3d35.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1767ca494d55%3A0x77dfc5e8c8d8e51a!2sKyrenia%2C%20Cyprus!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Velena Salon Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-bold mb-6">Randevu Formu</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Adınızı girin"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="+90 5XX XXX XX XX"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Hizmet Seçin
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Bir hizmet seçin</option>
                    <option value="yuz-bakimi">Yüz Bakımı</option>
                    <option value="manikur-pedikur">Manikür & Pedikür</option>
                    <option value="sac-bakimi">Saç Kesimi & Renklendirme</option>
                    <option value="masaj">Masaj Terapi</option>
                    <option value="gelin-makyaji">Gelin Makyajı & Saç</option>
                    <option value="kas-kirpik">Kaş & Kirpik Bakımı</option>
                    <option value="kalici-makyaj">Kalıcı Makyaj</option>
                    <option value="agda">Ağda Hizmetleri</option>
                    <option value="egitim">Velena Academy Eğitimi</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesajınız (İsteğe bağlı)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tercih ettiğiniz tarih ve saat veya özel isteklerinizi yazabilirsiniz..."
                  />
                </div>

                <button type="submit" className="btn-gold w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Randevu Talebi Gönder
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
