---
version: alpha
name: Xiloteca Trevigiana
description: A warm, editorial wood-toned system with crisp blue accents and minimal framing.
colors:
  primary: "#1032cf"
  secondary: "#141414"
  tertiary: "#f8f5f1"
  neutral: "#ede5db"
  surface: "#ffffff"
  on-surface: "#141414"
  border: "#00000012"
  muted-border: "#e5e7eb"
  error: "#c81e1e"
typography:
  headline-display:
    fontFamily: "Uncut Sans"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.32px"
  headline-lg:
    fontFamily: "Uncut Sans"
    fontSize: "27px"
    fontWeight: 400
    lineHeight: 1.19
    letterSpacing: "-0.64px"
  headline-md:
    fontFamily: "Uncut Sans"
    fontSize: "23px"
    fontWeight: 400
    lineHeight: 1.39
    letterSpacing: "-0.32px"
  headline-sm:
    fontFamily: "Uncut Sans"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.21
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Uncut Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: "0px"
  body-md:
    fontFamily: "Uncut Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.57
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Uncut Sans"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.54
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Uncut Sans"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0px"
  label-md:
    fontFamily: "Uncut Sans"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Uncut Sans"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 2px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 120px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 11px
    height: 47px
  button-primary-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 11px
    height: 47px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 11px
    height: 47px
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 0px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 11px
    height: 47px

## Overview
Xiloteca Trevigiana feels calm, artisanal, and grounded in material texture, with a distinctly editorial tone rather than a tech-forward one. The visual language balances a warm natural backdrop with a sharp blue accent, creating a sense of quiet professionalism and cultural authenticity. Spacing is generous and restrained, letting the content and imagery breathe while keeping interactive elements crisp and utilitarian.

## Colors
- **Primary (#1032CF):** A vivid electric blue used for the strongest calls to action, active controls, and key links. It provides a modern counterpoint to the warm wood and neutral base.
- **Secondary (#141414):** A near-black text color used for body copy, headings, icons, and core UI labels. It keeps contrast high without feeling harsh.
- **Tertiary (#F8F5F1):** A soft off-white used as the main button fill and light UI treatment. It reads as warm paper and avoids the sterility of pure white.
- **Neutral (#EDE5DB):** A warm beige surface tone that supports cards and panels while echoing the site’s natural wood imagery.
- **Surface (#FFFFFF):** Clean white reserved for container surfaces and overlays where the UI needs maximum separation from the background.
- **Border (#00000012):** A subtle translucent border color that keeps delineation present but understated.
- **Muted Border (#E5E7EB):** A faint divider tone for cards and low-emphasis framing.
- **Error (#C81E1E):** A reserved alert color for validation and destructive states; it should remain infrequent to preserve the site’s calm tone.

## Typography
The system uses Uncut Sans for almost all interface and editorial text, giving the site a contemporary but slightly humanist feel. Headings are compact with negative letter-spacing and mostly regular weights, which creates a refined, magazine-like hierarchy without excessive drama. Body text is comfortable and readable at 16px with generous line height, while labels and buttons rely on medium weight for clarity. Uppercase styling is not a core typographic rule here; emphasis comes more from weight, scale, and spacing than from case changes. A mono voice appears in the source for some secondary controls, but the primary system should stay anchored in Uncut Sans.

## Layout & Spacing
The layout is spacious and image-led, with large full-bleed visual areas and minimal framing. Content blocks appear to sit within broad margins rather than a tight grid, so the system should favor wide gutters, simple stacking, and strong horizontal breathing room. The spacing rhythm is modest and disciplined: 2px for micro-adjustments, 12px and 16px for interior UI spacing, 24px for section separation, and 120px for large page-level breathing space. Cards and panels should use comfortable internal padding rather than dense compartmentalization.

## Elevation & Depth
The interface is mostly flat. Depth is created through contrast, white and warm-neutral surfaces, and the occasional soft shadow rather than layered elevation systems. The screenshot suggests one pronounced shadow language in the site imagery area, but UI components themselves remain largely shadow-free and depend on borders, fills, and strong placement for hierarchy. Overlays and banners should feel lightweight and avoid heavy floating effects.

## Shapes
The shape language is restrained and architectural. Most interactive elements are square or nearly square, with the system favoring `rounded.none` and only a small `rounded.md` for softer containers like cards. This produces a crisp, modern contrast against the organic background textures. If a radius is used, it should feel incidental rather than decorative.

## Components
Buttons are straightforward and utilitarian. `button-primary` uses the warm off-white fill, medium-weight text, no visible rounding, and a fixed 47px height for dependable tap targets. `button-primary-hover` can lift emphasis with the primary blue or a brighter surface interaction, but should remain visually simple. `button-secondary` is a transparent or lightly outlined action with the same height and padding, intended for lower-priority choices. `button-link` should stay text-like, underlined, and minimally padded for inline actions such as “Mostra dettagli.”

Cards should use `card` with the neutral beige background, subtle border, and `rounded.md` corners. Keep card shadows off; separation should come from spacing, surface contrast, and borders. Inputs should follow the same square, low-profile logic as buttons: clear borders, 47px height, modest padding, and strong text contrast.

Navigation and utility controls should be compact and visually quiet. Icon buttons, toggles, and cookie controls should rely on the primary blue for active states and dark neutrals for inactive states. Any disclosure affordances, chips, or helper links should remain lightweight and not introduce new chromatic accents beyond the established palette.

## Do's and Don'ts
- Do keep the UI warm and tactile through beige and off-white surfaces.
- Do use the primary blue sparingly to signal action and activation.
- Do preserve the square, restrained button geometry.
- Do favor clear typographic hierarchy over decorative treatments.
- Do rely on borders and spacing instead of shadows for component separation.
- Don't introduce rounded pill buttons or overly soft corners.
- Don't use more than one strong accent color at a time.
- Don't crowd content; preserve the spacious editorial feel.
