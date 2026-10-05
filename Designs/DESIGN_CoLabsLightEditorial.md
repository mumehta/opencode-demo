---
version: alpha
name: CoLabs Light Editorial
description: A warm, spacious, image-led design system with bold black typography and rounded organic panels.
colors:
  primary: "#000000"
  secondary: "#66662A"
  tertiary: "#E5B97E"
  neutral: "#F9F8F6"
  surface: "#FFFFFF"
  on-surface: "#000000"
  accent: "#38C98A"
  border: "#E5E7EB"
  muted: "#C8B08A"
  error: "#D64C4C"
typography:
  headline-display:
    fontFamily: "Matter SQ"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: "66px"
    letterSpacing: "-3px"
  headline-lg:
    fontFamily: "Matter SQ"
    fontSize: "54px"
    fontWeight: 400
    lineHeight: "59.4px"
    letterSpacing: "-2.7px"
  headline-md:
    fontFamily: "Matter SQ"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "52.8px"
    letterSpacing: "-2.4px"
  headline-sm:
    fontFamily: "Matter SQ"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: "39.6px"
    letterSpacing: "-1.8px"
  body-lg:
    fontFamily: "Matter SQ"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "30px"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Matter SQ"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Matter SQ"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Matter SQ"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "30px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Matter SQ"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Matter SQ"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0.02em"
  nav-md:
    fontFamily: "Matter SQ"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  metric-lg:
    fontFamily: "Matter SQ"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "72px"
    letterSpacing: "-3px"
rounded:
  none: 0px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  xs: 10px
  sm: 20px
  md: 40px
  lg: 70px
  xl: 102px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "20px 30px"
    height: "60px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "20px 30px"
    height: "60px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "16px"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xl}"
    padding: "24px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "16px"
  chip:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
---

# CoLabs Light Editorial

## Overview
CoLabs feels warm, optimistic, and highly visual, with a strong editorial presence balanced by a friendly startup energy. The layout is spacious and asymmetrical, using large imagery and rounded panels to create a sense of experimentation without losing clarity. It reads as professional and innovation-led, but with a playful, human tone rather than a rigid corporate one.

## Colors
- **Primary (#000000):** The main ink color for headlines, navigation, icons, and key interactive text. It provides the sharp contrast that anchors the otherwise soft, warm interface.
- **Secondary (#66662A):** An earthy olive accent that can be used for supporting UI moments, quieter emphasis, or brand-adjacent detail work.
- **Tertiary (#E5B97E):** A honeyed tan used for warm supporting surfaces and softer contextual panels. It feels aligned with the site’s sunlit, organic imagery.
- **Neutral (#F9F8F6):** The default background and panel tone. It is a creamy off-white that keeps the interface bright without feeling stark.
- **Surface (#FFFFFF):** Used for the cleanest cards and floating elements, especially where content must sit clearly above imagery.
- **On-surface (#000000):** The standard text color on light surfaces; the system relies heavily on pure black for crisp readability.
- **Accent (#38C98A):** A vivid green used for standout informational or promotional modules. It adds energy and modernity against the softer base palette.
- **Border (#E5E7EB):** A subtle cool border tone for cards and dividers when a hairline separation is needed.
- **Muted (#C8B08A):** A desaturated warm neutral useful for low-emphasis fills, supporting tones, or subtle interface layers.
- **Error (#D64C4C):** Reserved for destructive or invalid states; it should remain rare and clearly signposted.

## Typography
The system is set in Matter SQ, a modern grotesk with a soft, contemporary feel that suits the brand’s polished but approachable tone. Headlines are light in weight at 400, with very tight negative letter-spacing to create a confident, highly editorial presence. Body text remains similarly light and clean, keeping the interface airy rather than dense.

Headings progress from 60px down to 36px, with consistent line-height ratios that preserve a calm rhythm across large statements. Body copy is 20px/30px for prominent reading moments, while smaller supporting text can drop to 16px or 14px for utility and navigation. Labels and navigation should remain sentence case rather than all-caps; the visible UI does not rely on uppercase tracking conventions.

## Layout
The page uses a fluid, collage-like composition rather than a strict centered container system. Large hero imagery spans most of the viewport, while a right-hand rail stacks smaller content cards to create a magazine-like rhythm. Spacing is generous and intentionally irregular, but it still follows a clear scale: 10px, 20px, 40px, 70px, and 102px.

Use large outer margins and soft internal padding to preserve the lightness of the design. Cards and panels should breathe, with 16px to 24px internal padding for content containers and larger values for hero surfaces. Rounded full-width pills and oversized image blocks are core to the layout language.

## Elevation & Depth
Depth is handled primarily through contrast, layering, and shape rather than heavy shadow. Most surfaces appear flat or minimally elevated, which keeps the interface modern and editorial. When elevation is needed, it should be subtle and used sparingly; borders and tonal separation are preferred over dramatic drop shadows.

Floating controls such as small circular buttons can sit above imagery as high-contrast black or white discs. Content hierarchy is mainly achieved by size, placement, and the tension between large imagery and soft neutral surfaces.

## Shapes
The shape language is soft and rounded, with pill buttons and generously curved panels. Full-radius elements are common, especially for navigation pills, CTA buttons, and avatar-like circular widgets. Larger cards and image containers use pronounced rounding rather than sharp corners, giving the system an organic, approachable feel.

The overall geometry should feel smooth and friendly, not bubbly or childish. Keep rectangles softened with `rounded.md`, `rounded.lg`, or `rounded.xl`, and use `rounded.full` for buttons and compact interactive elements.

## Components
Buttons are rounded, high-contrast, and comfortably sized. Use `button-primary` for the strongest action: black background, white text, 20px/30px padding, and a 60px height. Use `button-secondary` for less prominent actions on light backgrounds; it should keep the same silhouette but invert the surface relationship. Use `button-link` only for low-emphasis navigation or inline actions, with no border or background. Hover states should preserve the same tonal simplicity, relying on slight contrast changes rather than motion-heavy effects.

Cards should feel clean and content-forward, using `card` or `panel` styles depending on emphasis. Cards typically use the neutral background with a subtle border and small corner radius, while larger feature panels can be more rounded and more spacious. Avoid heavy shadows; the architecture of the layout does the work.

Inputs should follow the pill-shaped language of the buttons, with a white or neutral fill, black text, and clear focus visibility. Keep borders understated and avoid dense field chrome. Any form controls should feel as polished as the navigation bar: minimal, calm, and easy to scan.

Chips and small badges should be compact, rounded, and color-forward. Use the accent or tertiary palette for highlights, but preserve black text where contrast allows. Icon buttons should be circular, simple, and generally monochrome, matching the search and arrow controls visible in the interface.

Navigation should be horizontal, lightly spaced, and embedded in a soft pill container when grouped. Use a quiet visual hierarchy: brand mark first, links next, then compact utility icons. Keep interactive areas generous enough for touch while maintaining the refined editorial structure.

## Do's and Don'ts
- Do keep typography large, light, and tightly tracked for headlines.
- Do use warm neutrals and black as the primary contrast system.
- Do preserve generous whitespace and asymmetrical composition.
- Do round buttons and key containers aggressively for a soft, modern feel.
- Don't introduce heavy shadows or glossy effects.
- Don't use sharp rectangular corners for primary interactive elements.
- Don't crowd cards with too much content or reduce padding below the established scale.
- Don't rely on uppercase UI labels unless a specific utility pattern requires it.