import Container from "./Container";
import { profile } from "../data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              LinkedIn
            </a>

            <a
              href="#top"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;