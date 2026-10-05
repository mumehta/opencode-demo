---
version: alpha
name: Wealthsimple Dark Prestige
description: A refined dark financial system with editorial typography, bright contrast, and restrained premium accents.
colors:
  primary: "#fcfcfc"
  secondary: "#c9c6c4"
  tertiary: "#eee3b1"
  neutral: "#080f16"
  surface: "#0d1722"
  on-surface: "#fcfcfc"
  muted-surface: "#111c29"
  border: "#374151"
  text: "#fcfcfc"
  accent: "#eee3b1"
  error: "#d85c5c"
  inverse: "#1c1b1b"
typography:
  headline-display:
    fontFamily: "The Future"
    fontSize: "128px"
    fontWeight: 500
    lineHeight: "154px"
    letterSpacing: "0.32px"
  headline-lg:
    fontFamily: "Tiempos"
    fontSize: "80px"
    fontWeight: 400
    lineHeight: "138px"
    letterSpacing: "-1.28px"
  headline-md:
    fontFamily: "The Future"
    fontSize: "51px"
    fontWeight: 400
    lineHeight: "61px"
    letterSpacing: "0.09px"
  headline-sm:
    fontFamily: "The Future"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: "38px"
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Tiempos"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "30px"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "The Future"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "24px"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "The Future"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "The Future"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "24px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "The Future"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "The Future"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.04em"
  nav:
    fontFamily: "The Future"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  button:
    fontFamily: "The Future"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "24px"
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 6px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverse}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "20px 32px"
    height: "64px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "20px 32px"
    height: "64px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "20px 24px"
    height: "64px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    padding: "0px"
  pill:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
---

## Overview

Wealthsimple’s visual language feels premium, editorial, and intentionally restrained, with a strong dark-mode foundation and a bright metallic accent. The composition balances trust and excitement: finance-forward and professional, but not cold or corporate. It uses generous negative space, oversized typography, and a single heroic focal image to create a calm, high-status landing page experience.

## Colors

- **Primary (#fcfcfc):** Crisp white used for the main CTA, primary text on dark backgrounds, and high-contrast UI surfaces.
- **Secondary (#c9c6c4):** Soft neutral gray for subtle navigation or low-emphasis text; it keeps the interface quiet without losing legibility.
- **Tertiary (#eee3b1):** Warm champagne-gold accent used to suggest luxury, reward, and the coin-like illustration tone.
- **Neutral (#080f16):** Deep midnight navy-black that serves as the page background and anchors the entire system.
- **Surface (#0d1722):** Slightly lifted dark surface for panels, overlays, or cards that need to separate from the background without looking bright.
- **Muted-surface (#111c29):** A darker blue-gray layer for secondary containers or chips.
- **Border (#374151):** Subtle cool border color for outlined controls and cards.
- **Text (#fcfcfc):** Default readable text color on dark backgrounds; strong, clear, and minimally tinted.
- **Accent (#eee3b1):** Decorative highlight color that reinforces the premium Canadian-prize theme.
- **Error (#d85c5c):** Reserved for validation and destructive states; it should remain rare in this system.
- **Inverse (#1c1b1b):** Dark text used on light buttons to preserve a crisp, grounded feel.

## Typography

The typography system is split between a modern sans-serif and a classic serif, creating a polished editorial contrast. “The Future” carries navigation, labels, buttons, and most UI copy; it feels contemporary, geometric, and confident. “Tiempos” handles the larger narrative moments and body copy, adding sophistication and a magazine-like tone.

Headlines should be large and spacious, with the biggest display treatments using strong presence rather than heavy weight. The primary hero line is bold, expansive, and highly legible, while secondary headlines can switch into serif for a more literary, premium voice. Letter spacing is subtle; only the largest display treatment uses a slight positive tracking, and body serif text uses a slight negative adjustment for refinement.

Labels and nav items should stay clean and understated, with occasional all-caps behavior only if needed for utility patterns. Buttons and form labels should remain medium-weight and highly legible, avoiding decorative emphasis.

## Layout

The layout is spacious and fluid, with a strong desktop-first hero composition. A centered top navigation bar sits within a wide rounded container, while the hero content is left-aligned and balanced by a large illustrative object on the right. The page relies on generous open space rather than dense columns, which keeps the experience premium and easy to scan.

Use a vertical rhythm based on the spacing scale: 6px for tight adjustments, 16px for compact grouping, 32px for standard separation, 64px for section spacing, and 96px for major breaks. Section padding should feel expansive, especially in hero regions, and forms should keep enough breathing room to feel deliberate. Cards and inset modules should use modest internal padding rather than heavy framing.

## Elevation & Depth

The system is mostly flat and tonal, with depth created through contrast, layering, and illustration rather than strong shadows. Borders are subtle and cool-toned, used to define interactive controls and cards without visual noise. The hero artwork supplies most of the dimensionality, so the UI itself should remain clean and restrained.

Shadows are minimal to absent in the core interface. When depth is needed, prefer slightly lighter surfaces, thin borders, and clear separation between dark layers over pronounced drop shadows.

## Shapes

The shape language is soft and premium, with rounded pill controls and gentle corners on containers. Primary and secondary buttons use fully rounded ends, reinforcing a friendly but polished financial brand. Cards use a modest 8px radius, which keeps structural surfaces understated and rectangular enough to feel stable.

Overall, the system feels smooth rather than playful. Avoid sharp angles on interactive controls unless required for utility components.

## Components

Buttons should be large, rounded, and high-contrast. Use `button-primary` for the main call to action: white background, dark text, pill shape, and substantial horizontal padding. Use `button-secondary` for outlined or inverse actions on dark backgrounds: transparent fill, white border, white text, same pill geometry, and matching height. Use `button-tertiary` for understated text-only interactions; it should be minimal, quiet, and not compete with the primary action.

Buttons should generally be 64px tall with 20px vertical padding and 32px horizontal padding. Keep button typography medium-weight and consistent with the nav system. Hover states should preserve the same shape language while increasing contrast slightly, not by adding shadows.

Inputs should mirror the button height and pill radius, with transparent or dark-surface fills, light borders, and white text. Placeholder text should remain subtle but legible. The search and email-entry patterns in the screenshot suggest a calm, uncluttered input style with strong outline definition rather than filled fields.

Cards should use the `card` treatment: dark background, thin border, 8px radius, and modest padding. They should feel like quiet containers, not floating objects. Avoid large shadows or bright card fills.

Navigation links should be simple, medium-size, and text-forward, with no heavy decoration beyond the dropdown indicator. Keep top-level nav items aligned and evenly spaced, allowing the brand wordmark to dominate the left side of the bar.

Pills and chips should use a full radius and muted dark backgrounds. If used for tags or status indicators, keep them compact, readable, and low-noise so they support the hero rather than draw attention away from it.

## Do's and Don'ts

- Do keep the interface spacious and editorial, especially in hero sections.
- Do use high-contrast white-on-dark pairings for primary content and actions.
- Do preserve the dual-font contrast: The Future for UI, Tiempos for premium editorial copy.
- Do favor pill-shaped controls for key actions and forms.
- Do use borders and tonal shifts for depth instead of heavy shadows.
- Don't introduce bright, saturated colors that break the premium finance feel.
- Don't over-round cards or make every container pill-shaped.
- Don't use dense layouts, cramped spacing, or multi-column clutter that competes with the hero.