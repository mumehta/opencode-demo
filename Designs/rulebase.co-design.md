---
version: alpha
name: Rulebase
description: A dark, editorial B2B system with bright utility accents and calm, product-led clarity.
colors:
  primary: "#F7F7F4"
  secondary: "#C8C4BE"
  tertiary: "#8C827A"
  neutral: "#1A1716"
  surface: "#221D1B"
  on-surface: "#F7F7F4"
  accent: "#CC3542"
  border: "#374151"
  muted: "#EDEAE5"
  success: "#2F7D57"
  error: "#CC3542"
typography:
  headline-display:
    fontFamily: "ABC Diatype"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: "72px"
    letterSpacing: "-1.38px"
  headline-lg:
    fontFamily: "ABC Diatype"
    fontSize: "43px"
    fontWeight: 400
    lineHeight: "60px"
    letterSpacing: "-1.2px"
  headline-md:
    fontFamily: "ABC Diatype"
    fontSize: "31px"
    fontWeight: 400
    lineHeight: "37px"
    letterSpacing: "-0.32px"
  headline-sm:
    fontFamily: "ABC Diatype"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "30px"
    letterSpacing: "-0.2px"
  body-lg:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
    letterSpacing: "-0.08px"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "-0.09px"
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0.02em"
  caption:
    fontFamily: "Inter"
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
  xs: 6px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 120px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "6px 14px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "6px 14px"
    height: "40px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  input:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
    height: "40px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
---

# Rulebase

## Overview
Rulebase feels confident, modern, and slightly editorial: a dark premium canvas balanced by clean white type and a restrained but vivid accent. The composition is spacious and deliberate, aimed at B2B decision-makers who want clarity, control, and proof of product value. Overall, the tone is professional and calm, with just enough sharp contrast to feel energetic and current.

## Colors
- **Primary (#F7F7F4):** The main light text and button surface color, used for high-contrast readability against the dark background. It reads as soft off-white rather than pure white, which keeps the interface feeling refined.
- **Neutral (#1A1716):** The dominant background tone, a near-black charcoal-brown that gives the site its premium, low-glare foundation. Use it for page backgrounds and dark panels.
- **Surface (#221D1B):** A slightly lifted dark surface for layered cards or inset sections when you need subtle separation from the main background.
- **On-surface (#F7F7F4):** The default content color on dark surfaces, suitable for headings, body copy, and button text.
- **Secondary (#C8C4BE):** A muted warm gray for secondary labels, supporting copy, and inactive states. It softens hierarchy without adding visual noise.
- **Tertiary (#8C827A):** A deeper earthy gray for even less prominent metadata and subdued UI elements.
- **Accent (#CC3542):** A strong red used sparingly for emphasis, alerting, and brand energy. It should remain a highlight rather than a dominant fill color.
- **Border (#374151):** A cool, understated border tone for card outlines and structural dividers. It supports hierarchy without heavy shadow.
- **Muted (#EDEAE5):** A warm light neutral useful for light section backgrounds and pale UI containers.
- **Error (#CC3542):** Reuses the accent red for destructive actions and validation states to keep the system compact and consistent.
- **Success (#2F7D57):** A restrained green for positive states, confirmations, and success indicators.

## Typography
Rulebase uses two complementary families: **ABC Diatype** for large editorial headlines and **Inter** for interface content. Headings are light in weight at 400, which creates a sophisticated, less “salesy” feel while still remaining assertive at large sizes. Body text is clean, compact, and highly readable, with subtle negative letter spacing in the larger paragraphs to preserve the polished brand voice.

The type hierarchy should follow these roles:
- **headline-display / headline-lg / headline-md / headline-sm:** Use ABC Diatype for hero messaging, section leads, and prominent product statements. The large display sizes carry the brand’s editorial personality.
- **body-lg / body-md / body-sm:** Use Inter for all descriptive copy, explanation, and supporting UI text. Body-md matches the screenshot’s main paragraph rhythm.
- **label-lg / label-md / label-sm / caption:** Use Inter for navigation, buttons, chips, badges, and metadata. These styles should stay visually quiet and functional.
- Uppercase styling is not a core visual pattern in the screenshot; labels should generally remain sentence case for a calm, readable interface.
- Letter spacing is tight on headlines and neutral on UI labels. Avoid overly expanded tracking.

## Layout
The layout is a fixed, wide desktop composition with strong left-right contrast in the hero: text and navigation on the left, immersive image content on the right. Sections breathe generously, with large vertical gaps and clear content blocks separated by broad whitespace. The spacing rhythm follows a sparse-to-medium scale: 6px for fine adjustments, 16px for standard UI padding, 24px and 40px for section separation, and 120px for major page breathing room.

Use generous outer padding and centered content containers for lower-page sections. Cards and content tiles should stay compact and aligned to a clean grid, but the overall presentation should feel expansive rather than dense. Avoid tight multi-column packing unless the content absolutely requires it.

## Elevation & Depth
Depth is achieved mostly through contrast, layering, and borders rather than dramatic shadow. The hero image and UI cards sit on top of the dark foundation with crisp edges and minimal shadow treatment. Where depth is needed, use subtle borders (`#374151`) and tonal separation between `neutral`, `surface`, and `muted` backgrounds instead of heavy blur or drop shadows.

This system is intentionally restrained: it favors a flat, premium look with occasional lifted panels for chat cards, badges, and navigational pills. Keep shadows soft and minimal, and prefer structure over glow.

## Shapes
The shape language is modest and functional, with small radii on actionable elements and slightly larger radii on cards. Buttons and chips use `4px` corners for a precise, modern feel. Cards can move to `8px` or `12px` when they need a softer container presence, but the overall system should remain crisp rather than rounded.

Avoid pill-heavy treatment except for badges and status markers. The geometry should feel architectural, not playful.

## Components
Buttons are compact and practical:
- **Primary button (`button-primary`):** Light-filled, dark-text CTA with `4px` radius and 40px height. Use for the main conversion action, such as “Schedule a Demo” or “Get Started.”
- **Secondary button (`button-secondary`):** Transparent with light border/text for use on dark backgrounds. It should feel quieter than the primary action but still clearly interactive.
- **Tertiary button (`button-tertiary`):** Text-only, no border, no fill. Reserve for low-emphasis links, utility actions, and inline navigation.
- Button padding should remain tight: around `6px 14px`, with label-style typography and no heavy shadow.

Cards should feel like calm containers:
- Use `card` for chat windows, content modules, and supporting panels.
- Keep padding moderate and borders visible but subtle.
- Cards should not rely on shadow to separate from the background; use contrast and edge definition instead.

Inputs should match the same compact, minimal language:
- Use the `input` token for forms and search fields.
- Prefer light fills on dark pages or vice versa, but always keep the field shape modest with `4px` corners and a 40px control height.
- Focus states should be clear through border or color change rather than decorative effects.

Chips and badges are important for metadata:
- **Chip (`chip`):** Use for labels like “CX AI Agent” or compact status tags. Keep padding tight and the visual weight low.
- **Badge (`badge`):** Use for small highlight pills, counts, or labels such as case-study markers.
- Keep these elements lightweight and text-first.

Navigation and link treatment should stay minimal:
- Top navigation is simple text with even spacing and no ornamental styling.
- Inline links may use underline when they need to signal utility or secondary navigation.
- Keep icons small and functional, as seen in the play indicator and brand mark.

## Do's and Don'ts
- Do keep the interface spacious, with generous breathing room around hero content and section blocks.
- Do use ABC Diatype for large headlines and Inter for all utility text, labels, and buttons.
- Do rely on off-white text on dark backgrounds for the primary reading experience.
- Do use subtle borders and tonal changes to separate cards instead of heavy shadows.
- Don't introduce bright gradients, glassmorphism, or overly decorative effects.
- Don't over-round buttons or cards; keep corners modest and disciplined.
- Don't make accent red the dominant fill color; reserve it for emphasis and state cues.
- Don't crowd layouts with dense grids or tight spacing that undermine the premium editorial feel.