import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import SkillBadge from "../components/SkillBadge";
import { skills } from "../data/skills";

const skillCategories = [
  {
    key: "core",
    label: "Core Technologies",
  },
  {
    key: "webTechnologies",
    label: "Web Technologies",
  },
  {
    key: "databases",
    label: "Databases",
  },
  {
    key: "tools",
    label: "Tools & Software",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-t border-(--color-border) py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          number="03"
          eyebrow="Skills"
          title="Technologies I work with"
          description="A selection of technologies and tools I use while learning and building projects."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="rounded-lg border border-(--color-border) bg-(--color-surface) p-6"
            >
              <h3 className="text-base font-semibold text-(--color-text)"> 
                {category.label}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;