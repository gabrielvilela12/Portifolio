import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-elegant'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold text-gradient-primary hover:opacity-80 transition-smooth"
            aria-label="Back to top"
          >
            GVilela
          </button>
          
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('projects')}
                className="transition-smooth"
              >
                {t('nav.projects')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="transition-smooth"
              >
                {t('nav.about')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="transition-smooth"
              >
                {t('nav.contact')}
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
