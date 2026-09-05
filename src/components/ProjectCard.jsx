import Button from "./Button";

const ProjectCard = ({ project }) => {
  const visibleFeatures = project.features?.slice(0, 3) ?? [];

  return (
    <article className="group h-[min(70vh,560px)] overflow-y-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors duration-300 hover:border-[var(--color-accent)] sm:p-6 lg:p-7">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.featured && (
              <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-accent)]">
                Featured Project
              </p>
            )}

            <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)] sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <span className="shrink-0 font-mono text-xs text-[var(--color-text-muted)]">
            {project.id.replace("project-", "#")}
          </span>
        </div>

        {/* Summary */}
        <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--color-text-muted)] sm:text-base">
          {project.summary}
        </p>

        {/* Problem + Solution */}
        <div className="mt-5 grid gap-5 border-t border-[var(--color-border)] pt-5 lg:grid-cols-2">
          <div>
            <h4 className="font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-accent)]">
              Problem
            </h4>

            <p className="mt-2 text-xs leading-6 text-[var(--color-text-muted)] sm:text-sm">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-accent)]">
              Solution
            </h4>

            <p className="mt-2 text-xs leading-6 text-[var(--color-text-muted)] sm:text-sm">
              {project.description}
            </p>
          </div>
        </div>

        {/* Bottom area */}
        <div className="mt-auto border-t border-[var(--color-border)] pt-5">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-[var(--color-border)] px-2.5 py-1.5 font-mono text-[10px] text-[var(--color-text-muted)]"
              >
                {technology}
              </span>
            ))}
          </div>

          {visibleFeatures.length > 0 && (
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {visibleFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2 text-xs leading-5 text-[var(--color-text-muted)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs"
              >
                GitHub ↗
              </Button>
            )}

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                className="px-4 py-2 text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;