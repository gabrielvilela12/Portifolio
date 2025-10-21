import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="space-y-4">
            <Button
              asChild
              variant="outline"
              className="w-full justify-start hover-lift"
              aria-label="GitHub Profile"
            >
              <a href="https://github.com/gabrielvilela12" target="_blank" rel="noopener noreferrer">
                <Github className="mr-3 h-5 w-5" />
                github.com/gabrielvilela12
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full justify-start hover-lift"
              aria-label="LinkedIn Profile"
            >
              <a href="https://www.linkedin.com/in/gabriel-vilela-6a02a72b7" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-3 h-5 w-5" />
                linkedin.com/in/gabriel-vilela-6a02a72b7
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full justify-start hover-lift"
              aria-label="Email Contact"
            >
              <a href="mailto:gabrielvilela.dev@gmail.com">
                <Mail className="mr-3 h-5 w-5" />
                gabrielvilela.dev@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
