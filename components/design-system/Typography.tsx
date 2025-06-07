import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  | "button";

type TypographyColor =
  | "primary"
  | "secondary"
  | "accent"
  | "white"
  | "gray-400";

interface TypographyProps {
  variant: TypographyVariant;
  color?: TypographyColor;
  children: ReactNode;
  className?: string;
  truncate?: boolean;
  clamp?: number;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "text-6xl font-bold tracking-tight",
  h2: "text-2xl font-medium",
  h3: "text-lg font-medium",
  h4: "text-base font-medium",
  h5: "text-sm font-medium",
  h6: "text-xs font-medium",
  body1: "text-base",
  body2: "text-sm",
  caption: "text-xs",
  button: "text-sm font-medium",
};

const colorStyles: Record<TypographyColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  white: "text-white",
  "gray-400": "text-gray-400",
};

const getElement = (variant: TypographyVariant) => {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "body1":
    case "body2":
      return "p";
    case "caption":
      return "span";
    case "button":
      return "span";
    default:
      return "p";
  }
};

export const Typography = ({
  variant,
  color = "primary",
  children,
  className = "",
  truncate = false,
  clamp,
}: TypographyProps) => {
  const Element = getElement(variant);
  const baseStyles = variantStyles[variant];
  const textColor = colorStyles[color];

  const classes = twMerge(
    baseStyles,
    textColor,
    truncate && "truncate",
    clamp && `line-clamp-${clamp}`,
    className
  );

  return <Element className={classes}>{children}</Element>;
};

// Usage examples:
/*
<Typography variant="h1">Large Heading</Typography>
<Typography variant="body1" color="secondary">Regular body text</Typography>
<Typography variant="caption" color="accent">Small caption text</Typography>
<Typography variant="button" color="white">Button text</Typography>
<Typography variant="body2" truncate>This text will be truncated if too long</Typography>
<Typography variant="body1" clamp={2}>This text will be clamped to 2 lines</Typography>
*/
