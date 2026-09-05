import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-t border-[var(--color-border)] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          number="04"
          eyebrow="Experience"
          title="Where I've worked"
          description="My professional experience, internships, and opportunities where I have applied my technical skills."
        />

        <div className="space-y-10">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}-${index}`}
              className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-12"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  {item.period}
                </p>
              </div>

              <div className="border-l border-[var(--color-border)] pl-6 sm:pl-8">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)]">
                  {item.role}
                </h3>

                <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                  {item.company}
                </p>

                {item.location && (
                  <p className="mt-1 font-mono text-xs text-[var(--color-text-muted)]">
                    {item.location}
                  </p>
                )}

                {item.description && (
                  <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                )}

                {item.responsibilities?.length > 0 && (
                  <ul className="mt-5 max-w-3xl space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-[var(--color-text-muted)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                        />

                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;