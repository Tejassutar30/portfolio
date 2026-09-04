import { useState } from "react";
import { profile } from "../data/profile";
import Container from "../components/Container";
import Button from "../components/Button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur">
      <Container>
        <nav
          className="flex min-h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Name */}

          <a
            href="#top"
            onClick={closeMenu}
            className="font-mono text-sm font-semibold tracking-tight text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)]"
          >
            {profile.name}
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:text-[var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}

            <Button
              href={profile.resume}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden"
          >
            <span className="font-mono text-lg">
              {isOpen ? "×" : "☰"}
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}

        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[var(--color-border)] py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-sm text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)] focus-visible:text-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              ))}

              <Button
                href={profile.resume}
                variant="secondary"
                className="mt-3 w-full"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;