import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact", // Hero Section
    "hero.title": "GVilela – Full Stack Developer",
    "hero.subtitle":
      "Building innovative solutions with clean code and modern design",
    "hero.cta.resume": "Download Resume",
    "hero.cta.github": "GitHub",
    "hero.cta.linkedin": "LinkedIn",
    "hero.scroll": "Scroll to explore", // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle":
      "A selection of my recent work showcasing technical expertise and creative problem-solving",
    "projects.viewCode": "View Code",
    "projects.liveDemo": "Live Demo",
    "project1.title": "FinanceMe",
    "project1.description":
      "An intuitive tool designed to help users control their personal finances effectively. It allows detailed tracking of income and expenses, balance visualization, goal and budget setting, and offers valuable insights into financial habits through charts and reports.",
    "project1.tags": "React, TypeScript, Vite, Financial Management",
    "project2.title": "Chess in C#",
    "project2.description":
      "A complete chess game implementation in C# with object-oriented programming principles. Features include piece movement validation, check detection, and game state management. Developed using several individual piece classes that inherit from a base class, ensuring clean and reusable code.", // <-- CORRIGIDO AQUI
    "project2.tags": "C#, OOP, Game Development",
    "project3.title": "FirstStep",
    "project3.description":
      "A project for VIVO to facilitate the onboarding journey of new employees. Features separate interfaces for onboardees and buddies, progress tracking, course management, and document center. Ensuring a smooth and efficient integration experience for new collaborators.", // <-- CORRIGIDO AQUI
    "project3.tags": "React, TypeScript, Onboarding, Dashboard", // About Section
    "about.title": "About Me",
    "about.text":
      "Full-stack developer passionate about technology, I have been in the programming world since 2022 creating projects and participating in events. Specializing in modern web technologies, clean architecture, and high-quality delivery. When I'm not programming, I'm thinking about new ideas that challenge me.",
    "about.skills.title": "Technical Skills",
    "about.skills.frontend":
      "Frontend: React, TypeScript, Next.js, Tailwind, BootStrap",
    "about.skills.backend": "Backend: Node.js, C#, PostgreSQL, Supabase",
    "about.skills.tools": "Tools: Git, Npm, Vite", // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Have a project in mind or want to collaborate? I'd love to hear from you!",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success":
      "Message sent successfully! I will get back to you soon.",
    "contact.form.error": "Failed to send message. Please try again.",
    "contact.social.title": "Connect with me", // Footer
    "footer.rights": "© 2024 GVilela. All rights reserved.",
    "footer.built": "Built with React & TypeScript",
  } /* Português */,

  pt: {
    // Navegação
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato", // Seção Hero
    "hero.title": "GVilela – Desenvolvedor Full Stack",
    "hero.subtitle":
      "Construindo soluções inovadoras com código limpo e design moderno",
    "hero.cta.resume": "Baixar Currículo",
    "hero.cta.github": "GitHub",
    "hero.cta.linkedin": "LinkedIn",
    "hero.scroll": "Role para explorar", // Seção de Projetos
    "projects.title": "Projetos em Destaque",
    "projects.subtitle":
      "Uma seleção dos meus trabalhos recentes demonstrando expertise técnica e resolução criativa de problemas",
    "projects.viewCode": "Ver Código",
    "projects.liveDemo": "Demo ao Vivo",
    "project1.title": "FinanceMe",
    "project1.description":
      "Uma ferramenta intuitiva projetada para ajudar usuários a controlar suas finanças pessoais de maneira eficaz. Permite o acompanhamento detalhado de receitas e despesas, visualização de saldos, definição de metas e orçamentos, e oferece insights valiosos sobre os hábitos financeiros através de gráficos e relatórios.",
    "project1.tags": "React, TypeScript, Vite, Gestão Financeira",
    "project2.title": "Xadrez em C#",
    "project2.description":
      "Uma implementação completa de jogo de xadrez em C# com princípios de programação orientada a objetos. Inclui validação de movimentos das peças, detecção de xeque e gerenciamento de estado do jogo. Desenvolvido através de diversas classes de peças individuais que herdam de uma classe base, garantindo código limpo e reutilizável.", // <-- CORRIGIDO O TYPO AQUI
    "project2.tags": "C#, POO, Desenvolvimento de Jogos",
    "project3.title": "FirstStep",
    "project3.description":
      "Um projeto para a VIVO para facilitar a trajetória de novos funcionários na empresa. Possui interfaces separadas para onboardees e buddies, acompanhamento de progresso, gerenciamento de cursos e central de documentos. Garantindo uma experiência de integração suave e eficiente para novos colaboradores.",
    "project3.tags": "React, TypeScript, Onboarding, Dashboard", // Seção Sobre
    "about.title": "Sobre Mim",
    "about.text":
      "Desenvolvedor full-stack apaixonado por tecnologia, estou no universo da programação desde 2022 criando projetos e participando de eventos. Especializado em tecnologias web modernas, arquitetura limpa e entrega de alta qualidade. Quando não estou programando estou pensando em novas ideias que me desafiem.",
    "about.skills.title": "Habilidades Técnicas",
    "about.skills.frontend":
      "Frontend: React, TypeScript, Next.js, Tailwind, BootStrap",
    "about.skills.backend": "Backend: Node.js, C#, PostgreSQL, Supabase",
    "about.skills.tools": "Ferramentas: Git, Npm, Vite", // Seção de Contato
    "contact.title": "Entre em Contato",
    "contact.subtitle":
      "Tem um projeto em mente ou quer colaborar? Adoraria ouvir de você!",
    "contact.form.name": "Nome",
    "contact.form.email": "E-mail",
    "contact.form.message": "Mensagem",
    "contact.form.submit": "Enviar Mensagem",
    "contact.form.sending": "Enviando...",
    "contact.form.success":
      "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    "contact.form.error":
      "Falha ao enviar mensagem. Por favor, tente novamente.",
    "contact.social.title": "Conecte-se comigo", // Rodapé
    "footer.rights": "© 2024 GVilela. Todos os direitos reservados.",
    "footer.built": "Construído com React & TypeScript",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("portfolio-language");
    return stored === "pt" || stored === "en" ? stored : "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}{" "}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};