import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      // Removemos 'flex' e adicionamos 'hidden xs:flex'
      className="absolute bottom-10 -translate-x-1/2 hidden xs:flex flex-col items-center gap-2 cursor-pointer animate-scroll-bounce"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={t("hero.scroll")}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <span className="text-sm text-muted-foreground tracking-wide uppercase opacity-80">
        {t("hero.scroll")}
      </span>
      <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex items-start justify-center p-2">
        <div className="w-1 h-2 bg-muted-foreground rounded-full animate-scroll-pulse" />
      </div>
      <ChevronDown className="w-6 h-6 text-muted-foreground opacity-60" />
    </div>
  );
};
