import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setProgress(0);
        return;
      }

      const currentProgress = Math.min(
        Math.max(-rect.top / scrollableDistance, 0),
        1
      );

      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxTranslate = Math.max(projects.length - 1, 0) * 100;
  const translateX = progress * maxTranslate;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative border-t border-[var(--color-border)]"
      style={{
        minHeight: `${Math.max(projects.length, 1) * 100}vh`,
      }}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-20 sm:py-24">
        <Container className="w-full">
          <SectionHeading
            number="05"
            eyebrow="Projects"
            title="Things I've built"
            description="A selection of projects where I have applied software engineering concepts to solve practical problems."
          />

          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-300 ease-out will-change-transform"
              style={{
                transform: `translateX(-${translateX}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full shrink-0 lg:w-[85%]"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {projects.map((project, index) => {
                const isActive =
                  progress >= index / Math.max(projects.length - 1, 1);

                return (
                  <span
                    key={project.id}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-8 bg-[var(--color-accent)]"
                        : "w-2 bg-[var(--color-border)]"
                    }`}
                    aria-hidden="true"
                  />
                );
              })}
            </div>

            <span className="font-mono text-xs text-[var(--color-text-muted)]">
              {String(
                Math.min(
                  Math.floor(progress * projects.length) + 1,
                  projects.length
                )
              ).padStart(2, "0")}{" "}
              / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Projects;