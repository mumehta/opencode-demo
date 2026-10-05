---
version: alpha
name: Dribbble Modern
description: A clean, creator-first marketplace system with bold typography, soft white surfaces, and a vivid pink-orange accent.
colors:
  primary: "#0D0C22"
  secondary: "#6E6D7A"
  tertiary: "#EA4C89"
  neutral: "#F3F3F4"
  surface: "#FFFFFF"
  on-surface: "#0D0C22"
  accent: "#FFAD48"
  border: "#E7E7E9"
  border-subtle: "#E5E7EB"
  success: "#48A868"
  error: "#D92D20"
typography:
  headline-display:
    fontFamily: "Mona Sans"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "Mona Sans"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Mona Sans"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.21
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Mona Sans"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Mona Sans"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0px"
  body-md:
    fontFamily: "Mona Sans"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Mona Sans"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Mona Sans"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0px"
  label-md:
    fontFamily: "Mona Sans"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Mona Sans"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 12px
  sm: 20px
  md: 34px
  lg: 60px
  xl: 128px
  gutter: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "0px 16px"
    height: "32px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "0px 16px"
    height: "32px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "#F5F5F7"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "0px 20px"
    height: "56px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "0px 16px"
    height: "32px"
---

# Dribbble Modern

## Overview

Dribbble’s visual language is polished, creator-friendly, and lightly playful, with a strong editorial core. The UI feels airy and spacious, designed for browsing inspiration, hiring talent, and scanning content quickly without visual clutter. It balances professional marketplace credibility with a vibrant, design-led personality through bold type and bright accent color.

## Colors

- **Primary (#0D0C22):** A deep indigo-black used for the strongest text, navigation, and primary CTA contrast. It gives the interface a premium, high-trust tone.
- **Secondary (#6E6D7A):** A muted lavender-gray for secondary labels, helper text, and inactive states. It softens the hierarchy without losing clarity.
- **Tertiary (#EA4C89):** The signature Dribbble pink used for emphasis, highlights, and energetic links or accents. It carries the brand’s most recognizable personality.
- **Accent (#FFAD48):** A warm orange-gold used in promotional and illustrative moments. It pairs with pink gradients and adds warmth to the otherwise cool base palette.
- **Surface (#FFFFFF):** The dominant page and card background, creating a bright gallery-like canvas for content.
- **Neutral (#F3F3F4):** A very light gray used for subtle fills, pill backgrounds, and soft section separation.
- **On-surface (#0D0C22):** The default text color on white and pale surfaces; identical to Primary for consistency.
- **Border (#E7E7E9):** A light border tone for pills, buttons, and outlines that need structure without heaviness.
- **Border-subtle (#E5E7EB):** A near-neutral divider tone for cards and low-emphasis containers.
- **Success (#48A868):** Reserved for positive states and confirmations.
- **Error (#D92D20):** Reserved for destructive actions and validation feedback.

## Typography

The system uses Mona Sans throughout, with a modern, compact sans-serif feel and a strong preference for weight over decoration. Headlines are semibold and large, with the main hero using the 52px display level to anchor the page. Body copy stays at 14px/500 for a crisp, readable marketplace UI, while labels and buttons rely on 12px semibold or bold text for clarity inside compact pills and controls.

Uppercase styling is used sparingly, mostly for small navigation toggles and category labels, where a concise label treatment helps scanning. Letter spacing remains neutral at 0px, reinforcing the clean, contemporary aesthetic rather than a techy or editorial-caps look.

## Layout

The page is built on a wide, fluid desktop layout with generous side margins and large vertical breathing room between major sections. Content clusters are arranged in a clear left-right hierarchy: text and primary actions on the left, visual examples on the right. Spacing follows a soft rhythm based on 12px, 20px, 34px, 60px, and 128px increments, which keeps the interface open while still feeling structured.

Pills, search, and chip groups use compact horizontal padding and consistent vertical alignment. Large sections favor broad whitespace over dense grid packing, and cards sit with subtle internal padding rather than heavy nested containers.

## Elevation & Depth

Depth is intentionally restrained. The interface relies more on tonal contrast, borders, and spacing than on shadows. When shadows appear, they are soft and minimal, helping floating pills or cards separate from the white background without creating a heavy layered look.

The strongest hierarchy comes from color contrast and compositional scale: dark text against white surfaces, pink emphasis for key words, and bright content thumbnails that carry their own visual energy. Borders are light and crisp, keeping the system airy and gallery-like.

## Shapes

The shape language is rounded and friendly, with a preference for full pills on navigation controls, chips, and buttons. Cards and containers use modest 8px radii, while major CTAs and search inputs lean into larger or fully rounded curves. Overall, the system feels approachable and modern rather than sharp or geometric.

## Components

Buttons are compact, pill-shaped, and text-forward. `button-primary` should be used for the main filled CTA style: dark background, white text, 32px height, and `rounded.full`. `button-secondary` matches the outlined or light pill treatment seen in navigation and secondary actions, using a white surface with a light border and dark text. `button-tertiary` is the quiet text-only variant for low-emphasis actions or links.

Cards should remain clean and minimally elevated, using `card` with a white background, subtle border, 16px padding, and `rounded.md`. They should not rely on shadow for structure; spacing and border are enough.

Inputs are wide, softly filled, and highly rounded. The `input` token reflects the search bar treatment: muted gray background, 56px height, ample horizontal padding, and rounded ends for a friendly, accessible search experience.

Chips and filters use the `chip` style: small pill shapes with light backgrounds or white surfaces, compact 32px height, and medium-weight label text. Active states can be indicated with stronger contrast or accent color, but the base chip should stay understated.

Navigation and utility controls should stay lightweight, with minimal borders and small label text. Promotional banners and alerts can use soft tinted backgrounds with strong text contrast and a single clear CTA.

## Do's and Don'ts

- Do keep text contrast strong, especially for primary navigation, headlines, and CTAs.
- Do use pill shapes for buttons, filters, and search affordances to match the brand’s friendly utility.
- Do reserve pink and orange accents for emphasis, calls to action, and highlighted content.
- Do preserve generous whitespace around hero content and content grids.
- Don't introduce heavy shadows or dark surfaces that break the airy marketplace feel.
- Don't use sharp corners on core controls unless a component is intentionally low-emphasis or utility-only.
- Don't overuse the accent colors in body text or long-form UI; they should remain punchy, not dominant.
- Don't compress the layout into dense columns; the design depends on spacious scanning and visual rest.