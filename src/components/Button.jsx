const Button = ({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-background)";

  const variants = {
    primary:
      "bg-(--color-accent) text-white hover:bg-(--color-accent-hover)",

    secondary:
      "border border-(--color-border) bg-(--color-surface) text-(--color-text) hover:border-(--color-accent) hover:text-(--color-accent)",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;