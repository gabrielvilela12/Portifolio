import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{t('footer.rights')}</p>
          <p className="flex items-center gap-2">
            {t('footer.built')}
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};
