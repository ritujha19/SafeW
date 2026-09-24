import { Text, type TextProps } from "react-native";

// Colour comes from a `tone` prop instead of className so a default colour can
// never fight with one you pass in (Tailwind class order doesn't decide winners).
const tones = {
  ink: "text-midnight",
  muted: "text-muted",
  white: "text-white",
  soft: "text-white/75",
  dusk: "text-dusk-700",
  beacon: "text-beacon-dark",
  haven: "text-haven-dark",
  marigold: "text-marigold-dark",
} as const;
export type Tone = keyof typeof tones;

type BaseProps = TextProps & { tone?: Tone; className?: string };

const displaySizes = {
  xl: "text-[36px] leading-[42px]",
  lg: "text-[28px] leading-[34px]",
  md: "text-[21px] leading-[27px]",
} as const;

/** Bricolage Grotesque: headlines and big moments. */
export function Display({
  tone = "ink",
  size = "lg",
  className = "",
  ...rest
}: BaseProps & { size?: keyof typeof displaySizes }) {
  return (
    <Text
      {...rest}
      accessibilityRole="header"
      className={`font-display ${displaySizes[size]} ${tones[tone]} ${className}`}
    />
  );
}

const headingSizes = {
  sm: "text-[15px] leading-[21px]",
  md: "text-[17px] leading-[23px]",
  lg: "text-[20px] leading-[26px]",
} as const;

/** Figtree bold: card titles and section headings. */
export function Heading({
  tone = "ink",
  size = "md",
  className = "",
  ...rest
}: BaseProps & { size?: keyof typeof headingSizes }) {
  return (
    <Text
      {...rest}
      className={`font-bodyBold ${headingSizes[size]} ${tones[tone]} ${className}`}
    />
  );
}

const bodySizes = {
  sm: "text-[14px] leading-[21px]",
  md: "text-[16px] leading-[24px]",
} as const;
const bodyWeights = {
  regular: "font-body",
  medium: "font-bodyMedium",
  bold: "font-bodyBold",
} as const;

export function Body({
  tone = "muted",
  size = "md",
  weight = "regular",
  className = "",
  ...rest
}: BaseProps & {
  size?: keyof typeof bodySizes;
  weight?: keyof typeof bodyWeights;
}) {
  return (
    <Text
      {...rest}
      className={`${bodyWeights[weight]} ${bodySizes[size]} ${tones[tone]} ${className}`}
    />
  );
}

/** Small sentence-case label (no tracked caps). */
export function Label({ tone = "muted", className = "", ...rest }: BaseProps) {
  return (
    <Text
      {...rest}
      className={`font-bodyMedium text-[13px] leading-[18px] ${tones[tone]} ${className}`}
    />
  );
}
