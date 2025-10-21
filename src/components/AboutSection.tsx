import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, Database, Wrench } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.text')}
            </p>
            
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-semibold mb-4">{t('about.skills.title')}</h3>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover-lift transition-smooth shadow-elegant">
                <Code2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{t('about.skills.frontend')}</p>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover-lift transition-smooth shadow-elegant">
                <Database className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{t('about.skills.backend')}</p>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover-lift transition-smooth shadow-elegant">
                <Wrench className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{t('about.skills.tools')}</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-elevated hover-glow transition-smooth">
              <img
                src={profileImg}
                alt="John Doe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
