import { Heart, Instagram, Facebook, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-4">Velena</h2>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Girne'nin en prestijli güzellik salonu olarak, 13 kişilik profesyonel ekibimizle 
              size en iyi bakım deneyimini sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/velenasalon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/velenasalon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="tel:+905338401408"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Telefon"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {[
                { label: 'Hakkımızda', href: '#hakkimizda' },
                { label: 'Hizmetler', href: '#hizmetler' },
                { label: 'Galeri', href: '#galeri' },
                { label: 'Yorumlar', href: '#yorumlar' },
                { label: 'İletişim', href: '#iletisim' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {[
                'Saç Bakımı',
                'Manikür & Pedikür',
                'Yüz Bakımı',
                'Masaj Terapi',
                'Gelin Makyajı',
                'Velena Academy',
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Velena Hair Beauty & Nail Salon. Tüm hakları saklıdır.
            </p>
            <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Girne
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
