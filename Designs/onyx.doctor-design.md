---
version: alpha
name: Onyx Doctor
description: A calm, minimal boutique medical identity with airy spacing, dark navy accents, and restrained editorial typography.
colors:
  primary: "#2C3552"
  secondary: "#6B756F"
  tertiary: "#E8EEF2"
  neutral: "#F7F4EF"
  surface: "#FFFFFF"
  on-surface: "#2C3552"
  muted-surface: "#E8EEF2"
  border: "#E5E7EB"
  error: "#B91C1C"
typography:
  headline-display:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: 0px
  headline-lg:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: 0px
  headline-md:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 29px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  title-lg:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 22px
    letterSpacing: 0px
  body-lg:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-md:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  label-lg:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  label-md:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  label-sm:
    fontFamily: Verdana, Geneva, Tahoma, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 14px
  lg: 18px
  xl: 23px
  xxl: 32px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
    height: 40px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
    height: 40px
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    padding: 0px
  card:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
    height: 40px
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
---

## Overview

This system feels calm, boutique, and medically trustworthy, with a refined editorial restraint rather than a clinical or tech-forward look. The composition is spacious and centered, suggesting a premium practice that values clarity, comfort, and approachability. Visual energy comes from the oversized wordmark and strong brand mark, while the rest of the interface stays quiet and minimal.

## Colors

- **Primary (#2C3552):** A deep navy-ink used for the logo, headline text, and other high-emphasis elements. It provides the strongest contrast while keeping the brand soft and professional rather than stark black.
- **Secondary (#6B756F):** A muted gray-green used for secondary text, subtle calls to action, and lower-emphasis interface elements. It reads as calm and mature, supporting the boutique healthcare tone.
- **Tertiary (#E8EEF2):** A very light cool gray-blue used as the main soft background tint and card fill. It gives the page an airy, clean atmosphere without becoming sterile.
- **Neutral (#F7F4EF):** A warm off-white neutral used for broader page surfaces and quiet areas that need less chromatic weight. It helps the design feel gentle and welcoming.
- **Surface (#FFFFFF):** Pure white reserved for elevated or interactive surfaces where contrast and legibility need to be strongest.
- **Border (#E5E7EB):** A faint structural border color used sparingly on cards and light containers to define edges without adding heaviness.
- **Error (#B91C1C):** A reserved alert color for validation, destructive actions, or clinical status messaging. It should appear infrequently to preserve the calm palette.

## Typography

Verdana, Geneva, Tahoma, sans-serif defines the system and gives it a familiar, highly legible, web-safe character. Headlines use bold weights and tight letter spacing for strong brand presence, while body text remains regular and unobtrusive. The visual source shows a notable use of uppercase styling and increased spacing in short phrases like “COME IN,” which should be treated as a decorative label style rather than a default for all copy.

- **headline-display / headline-lg:** Large, bold brand moments and hero headings. Use these for logo-scale statements, landing-page titles, and major section intros.
- **headline-md / headline-sm / title-lg:** Secondary hierarchy for section titles, card headings, and compact information blocks. These should stay crisp and confident, with no decorative flourishes.
- **body-lg / body-md / body-sm:** Standard reading text with neutral weight and comfortable line height. Keep paragraphs concise and airy.
- **label-lg / label-md / label-sm:** Utility text, phone numbers, button copy, and navigation labels. The smallest label style may use wider tracking for subtle editorial emphasis.

## Layout

The layout is fluid and spacious, with a strong sense of center alignment and generous negative space. Content should sit in a restrained max-width container, allowing the logo or primary hero to breathe in the middle of the canvas. Spacing follows a light rhythm based on 4px, 8px, 14px, 18px, and 23px increments, with larger jumps used to create the large visual pause seen in the hero composition.

Cards and panels should use modest internal padding, typically 16px, with slightly larger horizontal padding for interactive controls. Sections should prefer wide outer margins and avoid dense stacking. The overall feel should be open, quiet, and premium rather than grid-heavy.

## Elevation & Depth

Depth is minimal and understated. The design relies on color separation, whitespace, and thin borders instead of pronounced shadows or layered surfaces. If any shadow is used, it should be extremely soft and more atmospheric than dimensional; otherwise, flat surfaces with subtle borders are preferred.

## Shapes

The shape language is gently rounded and approachable. Interactive elements use small corner radii, especially 4px on buttons and 8px on cards, which keeps the UI clean and professional. Full pill rounding is appropriate for status chips, contact pills, and small utility badges, reinforcing the soft boutique feel.

## Components

**Buttons**
- Use `button-primary` for the strongest action. It should appear as a solid, calm secondary-toned button with light text, 8px vertical padding, 16px horizontal padding, and a 40px minimum height.
- Use `button-secondary` for less prominent actions. Keep it outlined or transparent with secondary text and a restrained border treatment.
- Use `button-link` for inline navigation or understated calls to action such as “Come in.” It should be text-only with no container chrome.
- Button states should stay subtle: a modest darkening on hover is enough; avoid glow, gradients, or heavy motion.

**Cards**
- `card` should feel like a light content panel rather than a lifted container. Use the muted-surface background, a faint border, 8px radii, and 16px padding.
- Cards should never dominate the page. They exist to organize information quietly, not to create deep hierarchy.

**Inputs**
- Inputs should use a white surface, 4px corners, and consistent 40px height for comfortable entry.
- Borders should remain light and readable; focus states should emphasize the primary navy without introducing loud shadows.
- Labels should use label-md or label-sm and remain plain, with no heavy uppercase requirement unless the context is purely decorative.

**Chips**
- Chips are best treated as pill-shaped utility labels with full rounding, compact padding, and muted text.
- Use them for tags, statuses, or simple filters only; keep them visually light.

**Brand/identity elements**
- The logo mark and wordmark should remain the most expressive element in the system.
- Use primary navy for the mark and secondary muted gray-green for supportive text, preserving the clean, calm contrast seen in the source.

## Do's and Don'ts

- Do keep large areas of negative space around the primary brand lockup and major calls to action.
- Do use deep navy only for the strongest emphasis, and reserve muted gray-green for secondary text and controls.
- Do keep borders thin and shadows minimal so the interface feels clean and boutique.
- Do preserve the restrained rounded-corner language: 4px on controls, 8px on cards, pill shapes only when intentionally soft.
- Don't introduce bright accent colors, gradients, or glossy effects that break the calm medical tone.
- Don't use heavy drop shadows or elevated layered cards as the primary hierarchy mechanism.
- Don't compress the layout into dense, dashboard-like grids; the system should stay open and breathable.
- Don't default all text to uppercase; reserve wide tracking and caps for short decorative labels only.