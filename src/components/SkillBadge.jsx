const SkillBadge = ({ name }) => {
  return (
    <span className="inline-flex items-center rounded-md border border-(--color-border) bg-(--color-surface) px-3 py-2 font-mono text-xs text-(--color-text-muted) transition-colors duration-200 hover:border-(--color-accent) hover:text-(--color-accent)">
      {name}
    </span>
  );
};

export default SkillBadge;