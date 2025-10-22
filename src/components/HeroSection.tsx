import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollIndicator } from './ScrollIndicator';
import heroBg from '@/assets/hero-bg.jpg';
import heroBgLight from '@/assets/hero-bg-light.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${theme === 'light' ? heroBgLight : heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90 backdrop-blur-sm" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight animate-fade-in-up opacity-0 [animation-delay:0.2s]">
            <span className="text-gradient-primary">{t('hero.title')}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up opacity-0 animation-delay-300">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-400">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow"
              aria-label={t('hero.cta.resume')}
            >
              <a href="/Curriculo-GVilela.pdf" download="Curriculo-GVilela.pdf">
                <Download className="mr-2 h-5 w-5" />
                {t('hero.cta.resume')}
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover-lift border-foreground/20 hover:bg-foreground/5 hover:text-blue-600"
              aria-label={t('hero.cta.github')}
            >
              <a href="https://github.com/gabrielvilela12" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                {t('hero.cta.github')}
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover-lift border-foreground/20 hover:bg-foreground/5 hover:text-blue-600"
              aria-label={t('hero.cta.linkedin')}
            >
              <a href="https://www.linkedin.com/in/gabriel-vilela-6a02a72b7" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                {t('hero.cta.linkedin')}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};
