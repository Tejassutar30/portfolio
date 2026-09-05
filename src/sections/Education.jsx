import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="border-t border-[var(--color-border)] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          number="06"
          eyebrow="Education"
          title="Education & learning"
          description="My academic background and the foundation behind my technical journey."
        />

        <div className="space-y-6">
          {education.map((item, index) => (
            <article
              key={`${item.institution}-${index}`}
              className="grid gap-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 lg:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">
                  {item.period}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)]">
                  {item.degree}
                </h3>

                <p className="mt-2 text-sm font-medium text-[var(--color-accent)]">
                  {item.institution}
                </p>

                {item.location && (
                  <p className="mt-1 font-mono text-xs text-[var(--color-text-muted)]">
                    {item.location}
                  </p>
                )}

                {item.description && (
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                )}

                {item.grade && (
                  <p className="mt-4 font-mono text-xs text-[var(--color-text-muted)]">
                    {item.grade}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;