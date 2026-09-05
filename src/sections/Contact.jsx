import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { profile } from "../data/profile";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-[var(--color-border)] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            number="07"
            eyebrow="Contact"
            title="Let's build something useful"
            description="I'm open to software development opportunities, internships, and conversations about interesting projects."
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${profile.email}`}>
              Get in touch
              <span aria-hidden="true">→</span>
            </Button>

            <Button
              href={profile.resume}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--color-text-muted)]">
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
              {profile.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;