---
version: alpha
name: Taylor Hare
description: An editorial, sunlit portfolio system with restrained contrast, generous scale, and a tactile organic feel.
colors:
  primary: "#132019"
  secondary: "#e4644b"
  tertiary: "#e5e7eb"
  neutral: "#f3eee8"
  surface: "#f3eee8"
  on-surface: "#132019"
  error: "#b42318"
typography:
  headline-display:
    fontFamily: "Isola Book"
    fontSize: "68px"
    fontWeight: 700
    lineHeight: "82px"
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "Isola Book"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: "67px"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Isola Book"
    fontSize: "47px"
    fontWeight: 400
    lineHeight: "67px"
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Isola Book"
    fontSize: "39px"
    fontWeight: 400
    lineHeight: "47px"
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Isola Book"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: "48px"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Isola Book"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "36px"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Isola Book"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Isola Book"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Isola Book"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Isola Book"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 10px
  sm: 46px
  md: 100px
  lg: 120px
  xl: 164px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
    height: "auto"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
## Overview
Taylor Hare feels like an artful editorial portfolio: calm, tactile, and quietly confident. The visual language leans warm and organic, with a light background, deep forest text, and a single coral accent that brings life without overwhelming the page. Spacing is generous and the tone is spacious rather than dense, giving imagery and typography room to breathe.

## Colors
- **Primary (#132019):** A deep forest-black used for body text, headings, button fills, and other core UI anchors. It provides the strongest contrast in the system and carries the brand’s grounded, natural personality.
- **Secondary (#e4644b):** A warm coral accent that feels sunlit and human. Use it sparingly for emphasis, hover states, active cues, or highlights that need emotional lift.
- **Tertiary (#e5e7eb):** A soft neutral border tone for subtle delineation. It supports cards and dividers without competing with the content.
- **Neutral / Surface (#f3eee8):** A warm off-white background that reads like paper or plaster. It sets the editorial, gallery-like mood and should remain the dominant canvas color.
- **On-surface (#132019):** The default text and icon color on light backgrounds. It maintains crisp readability while matching the brand’s dark organic tone.
- **Error (#b42318):** Reserved for destructive states and validation feedback. It should appear only when necessary so it does not disrupt the serene palette.

## Typography
The system is built on Isola Book, which gives the interface a refined, literary character. Headings use large sizes with tight-to-neutral tracking and strong vertical rhythm; the H1 and H2 weights are bold for impact, while H3 and H4 shift to regular weight for a softer, more editorial cadence. Body copy stays in the same family, preserving cohesion and making the entire experience feel like one designed voice rather than a mixed UI toolkit.

Labels and buttons remain simple and unforced, with no uppercase treatment or letter-spacing tricks visible in the source. The result is understated rather than corporate, and the typography should always feel like part of a narrative composition, not just an interface label.

## Layout
The layout rhythm is expansive and intentionally sparse. Use generous section separation with the provided spacing scale: small gaps around 10px for tight relationships, then large jumps at 46px, 100px, 120px, and 164px for page-level breathing room. This creates a gallery-like flow where each block feels intentionally placed.

Containers should favor a wide, fluid composition rather than a rigid dense grid, with content allowed to stretch and sit within large negative space. Cards and utility surfaces should keep internal padding modest at 16px, while larger page sections should rely on outer spacing rather than crowded interiors.

## Elevation & Depth
The UI is almost entirely flat. There are no meaningful shadows in the source, so hierarchy comes from contrast, scale, spacing, and the warm paper-like surface rather than depth effects. Borders are subtle and mostly functional, used to separate cards or interactive outlines without introducing visual heaviness.

When a surface needs emphasis, prefer tonal contrast and typography size changes over shadow-based elevation. This keeps the design aligned with the calm, sun-washed photography and avoids breaking the editorial mood.

## Shapes
The shape language is soft and practical, with a slight 4px corner radius on primary controls and an 8px radius on cards. Larger rounded values should be used only when a component intentionally needs a friendlier pill-like treatment. Overall, the system feels lightly finished rather than decorative, with edges that stay clean and understated.

## Components
Buttons are restrained and text-first. Use `button-primary` for the main action: dark fill, light text, 8px by 16px padding, 40px height, and 4px radius. `button-primary-hover` can shift to the coral accent for a warmer response state, while `button-secondary` stays transparent with a dark outline feel through text color rather than heavy styling. `button-link` should remain borderless and unpadded for inline actions.

Cards use the warm background surface with a subtle 1px border and 8px radius. Keep them light and unobtrusive so they frame content rather than compete with it. Internal padding should remain close to 16px unless the card is part of a larger editorial composition.

Inputs should follow the same quiet language as buttons and cards: light surface, dark text, small-radius corners, and comfortable 8px/12px internal padding. Avoid strong focus ornamentation; use clear contrast and a refined border or fill change instead.

Other UI should stay minimal. Links, chips, and small affordances should inherit the same clean typography and avoid heavy decoration. If lists, tags, or metadata appear, they should be spaced generously and aligned with the same calm editorial grid.

## Do's and Don'ts
- Do keep backgrounds warm, light, and paper-like using the neutral/surface color.
- Do use the dark primary color for most text and structural UI.
- Do let whitespace do the work; prefer large separations over dense clustering.
- Do preserve the large, literary typography scale for hierarchy.
- Do keep shadows absent or nearly absent; rely on borders and contrast instead.
- Don't introduce bright blues, gradients, or glossy effects that fight the organic tone.
- Don't over-round controls beyond the subtle 4px–8px language unless a component explicitly needs it.
- Don't crowd cards or sections with too many elements; the design should feel open and curated.
