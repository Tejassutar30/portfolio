import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

const About = () => {
  return (
    <section
      id="about"
      className="border-t border-(--color-border) py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          number="02"
          eyebrow="About"
          title="A little about me"
          description="A quick overview of who I am, how I approach software development, and what I am looking to build next."
        />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="space-y-5">
            <p className="text-base leading-8 text-(--color-text-muted) sm:text-lg">
              {profile.about}
            </p>

            <p className="text-base leading-8 text-(--color-text-muted) sm:text-lg">
              I enjoy turning ideas and problems into practical software
              solutions. I focus on writing code that is understandable,
              maintainable, and useful rather than adding unnecessary
              complexity.
            </p>
          </div>

          <div className="rounded-lg border border-(--color-border) bg-(--color-surface) p-6">
            <p className="mb-5 font-mono text-xs font-medium uppercase tracking-wider text-(--color-accent)">
              Current focus
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3 text-sm leading-6 text-(--color-text-muted)">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                Building practical web applications
              </li>

              <li className="flex gap-3 text-sm leading-6 text-(--color-text-muted)">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                Strengthening software engineering fundamentals
              </li>

              <li className="flex gap-3 text-sm leading-6 text-(--color-text-muted)">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                Learning through real-world projects
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;