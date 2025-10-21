import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectCard } from './ProjectCard';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

export const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      image: project1,
      titleKey: 'project1.title',
      descriptionKey: 'project1.description',
      tagsKey: 'project1.tags',
      githubUrl: 'https://github.com/gabrielvilela12/FinanceMe',
      demoUrl: 'https://finance-me-chi.vercel.app',
    },
    {
      image: project2,
      titleKey: 'project2.title',
      descriptionKey: 'project2.description',
      tagsKey: 'project2.tags',
      githubUrl: 'https://github.com/gabrielvilela12/Xadrez',
    },
    {
      image: project3,
      titleKey: 'project3.title',
      descriptionKey: 'project3.description',
      tagsKey: 'project3.tags',
      githubUrl: 'https://github.com/gabrielvilela12/FirstStep',
      demoUrl: 'https://firststep-challenge.vercel.app',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
