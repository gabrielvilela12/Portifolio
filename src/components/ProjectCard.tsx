import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  image: string;
  titleKey: string;
  descriptionKey: string;
  tagsKey: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const ProjectCard = ({ image, titleKey, descriptionKey, tagsKey, githubUrl, demoUrl }: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="group overflow-hidden hover-lift shadow-elegant transition-smooth opacity-0 animate-fade-in-up">
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{t(titleKey)}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-2">
          {t(descriptionKey)}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {t(tagsKey).split(', ').map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      {/* AQUI ESTÁ A MUDANÇA */}
      <CardFooter className="flex flex-col xl:flex-row gap-3 p-3">
        {githubUrl && (
          <Button
            asChild
            variant="outline"
            className="flex-1 md:px-4 md:py-1" // flex-1 agora funciona bem com flex-col e flex-row
            aria-label={`${t('projects.viewCode')} - ${t(titleKey)}`}
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t('projects.viewCode')}
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button
            asChild
            
            className="flex-1 bg-gradient-primary md:px-4 md:py-1" // flex-1 agora funciona bem com flex-col e flex-row
            aria-label={`${t('projects.liveDemo')} - ${t(titleKey)}`}
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {t('projects.liveDemo')}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};