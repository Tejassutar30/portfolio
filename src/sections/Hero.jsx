import Button from "../components/Button";
import Container from "../components/Container";
import { profile } from "../data/profile";

const Hero = () => {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100vh-4rem)] items-center py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="max-w-4xl">
          {/* Eyebrow */}

          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            01 / Hello
          </p>

          {/* Name */}

          <h1 className="text-5xl font-semibold tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          {/* Professional title */}

          <p className="mt-5 max-w-3xl text-2xl font-medium tracking-tight text-[var(--color-text-muted)] sm:text-3xl lg:text-4xl">
            {profile.title}
          </p>

          {/* Summary */}

          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
            {profile.summary}
          </p>

          {/* Actions */}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              View Projects
              <span aria-hidden="true">→</span>
            </Button>

            <Button
              href={profile.resume}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>

          {/* Social links */}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-text-muted)]">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)]"
            >
              GitHub ↗
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)]"
            >
              LinkedIn ↗
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)]"
            >
              Email ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;