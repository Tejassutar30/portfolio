const SectionHeading = ({
  number,
  eyebrow,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`mb-10 ${className}`}>
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-xs font-medium tracking-wider text-(--color-accent)">
          {number}
        </span>

        <span className="font-mono text-xs uppercase tracking-wider text-(--color-text-muted)">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-(--color-text) sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-(--color-text-muted) sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;