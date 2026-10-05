---
version: alpha
name: SMC Green Precision
description: A bright, high-contrast B2B AI system with a minimal white canvas, vivid green accents, and restrained industrial typography.
colors:
  primary: "#009900"
  primary-60: "#00CC00"
  secondary: "#000000"
  tertiary: "#6F6F6F"
  neutral: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  muted-surface: "#F5F5F5"
  border: "#E8E8E8"
  success: "#00CC00"
  error: "#D92D20"
typography:
  headline-display:
    fontFamily: Aeonik
    fontSize: 90px
    fontWeight: 700
    lineHeight: 103.5px
    letterSpacing: 0px
  headline-lg:
    fontFamily: Aeonik
    fontSize: 65px
    fontWeight: 700
    lineHeight: 78px
    letterSpacing: 0px
  headline-md:
    fontFamily: Aeonik
    fontSize: 46px
    fontWeight: 700
    lineHeight: 55px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Aeonik
    fontSize: 33px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: 0px
  body-lg:
    fontFamily: Aeonik
    fontSize: 24px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: 0px
  body-md:
    fontFamily: Aeonik
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-sm:
    fontFamily: Aeonik
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  label-lg:
    fontFamily: Aeonik
    fontSize: 18px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  label-md:
    fontFamily: Aeonik
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
  label-sm:
    fontFamily: Aeonik
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.02em
  eyebrow:
    fontFamily: "Aeonik Mono"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.08em
  nav:
    fontFamily: Aeonik
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.04em
  button:
    fontFamily: Aeonik
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 10px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 6px
  sm: 14px
  md: 26px
  lg: 50px
  xl: 100px
  gutter: 20px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 15px 20px
    size: 14px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 15px 20px
    size: 14px
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0px
    size: 14px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 30px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 15px 20px
  chip:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 6px 12px
---

# SMC Green Precision

## Overview
SMC presents a clean, professional, and technically confident brand with a strong sustainability and AI-forward message. The visual tone is spacious and airy, relying on a white background, sharp black text, and a vivid green accent to signal energy, innovation, and efficiency. The interface feels corporate but not heavy; it uses generous whitespace, large editorial headlines, and restrained components to keep the experience focused.

## Colors
- **Primary (#009900):** The signature vivid green used for key headlines, emphasis, and action moments. It carries the brand’s “energy-efficient” and future-facing identity.
- **Primary-60 (#00CC00):** A brighter green highlight used for lighter emphasis, interactive accents, and secondary green treatments where a slightly more electric tone is needed.
- **Secondary (#000000):** Deep black used for core text, strong UI labels, and border treatments. It gives the system its crisp industrial contrast.
- **Tertiary (#6F6F6F):** A neutral gray used for secondary navigation and supporting text, softening the overall hierarchy without weakening clarity.
- **Neutral (#FFFFFF):** Pure white is the dominant canvas color, creating the airy, high-clarity feel that defines the page.
- **Surface (#FFFFFF):** Card and content surfaces generally remain white, so content appears embedded in the page rather than layered with heavy fills.
- **On-surface (#000000):** Default readable text color on white surfaces; it reinforces the minimal, high-contrast look.
- **Muted-surface (#F5F5F5):** A very light gray for subtle panels, chips, or quiet UI groupings when separation is needed without visual weight.
- **Border (#E8E8E8):** Soft border tone for understated dividers and input outlines, maintaining structure while preserving spaciousness.
- **Success (#00CC00):** A positive signal color aligned with the main accent; useful for confirmation states and success messaging.
- **Error (#D92D20):** Reserved for alert states, validation failures, and destructive feedback. It should be used sparingly so the green brand accent remains dominant.

## Typography
Aeonik is the defining typeface: geometric, modern, and highly legible. Headlines are bold and large, with the biggest display style reserved for hero messaging and the next tiers stepping down cleanly for section introductions. Body text remains simple and readable, using regular weights at comfortable line heights to support a professional B2B narrative.

- `headline-display`, `headline-lg`, and `headline-md` are the editorial hierarchy anchors. They should feel confident, spacious, and minimal, with no extra letterspacing.
- `headline-sm` is the strongest subheading style, used for feature blocks and card titles.
- `body-lg` and `body-md` support marketing copy and explanatory content. The tone should remain direct and uncluttered.
- `body-sm`, `label-md`, and `label-sm` are used for UI controls, metadata, and compact text.
- `eyebrow` uses Aeonik Mono and wider letter-spacing to create a restrained technical label style when needed.
- Navigation uses small, uppercase-feeling spacing through subtle letter-spacing rather than heavy weight or decoration.
- Buttons and interactive labels should stay semibold and compact, matching the interface’s disciplined, no-frills tone.

## Layout
The layout is highly spacious and centered, with large hero sections and clear vertical rhythm. Content uses a wide, fluid desktop grid that leaves substantial breathing room around the main message, while cards and service blocks sit in smaller modular groups below. Spacing steps feel deliberate and consistent: small increments for compact UI, then larger jumps for major section breaks and hero separation.

The spacing scale should follow the observed rhythm of 6px, 14px, 26px, 50px, and 100px, with 20px gutter spacing for local content alignment. Section padding should be generous, especially around hero areas and card grids, so the page retains its open, high-end presentation. Cards should have substantial internal padding, while surrounding whitespace does the heavy lifting for hierarchy.

## Elevation & Depth
The system is mostly flat and bright, with hierarchy created through contrast, scale, and whitespace rather than layered shadows. When depth is used, it is soft and subtle: cards may have a light shadow to separate them from the white background, but the effect should never feel heavy or material. Borders are minimal, and tonal separation should stay understated.

Because the brand leans clean and airy, avoid deep shadows, glows, or dense stacked surfaces. Use shadow only to suggest hover, elevation, or content grouping, not as a primary visual language.

## Shapes
The shape language is modestly rounded and practical. Corners are small and consistent, with `rounded.sm` for buttons and inputs, `rounded.md` for cards, and `rounded.full` for pills or chips. The result feels modern and precise rather than soft or playful.

Overall, the interface should read as crisp and engineered. Avoid exaggerated curves, organic blobs, or highly expressive shapes unless they are part of a decorative brand asset rather than an interface component.

## Components
Buttons should remain compact, rectangular, and high-contrast.
- `button-primary` uses the green brand fill with dark text, small radius, and tight 15px 20px padding. It is the main conversion action and should feel decisive.
- `button-secondary` is an outlined or transparent variant with black text and border. Use it for lower-priority actions beside the primary button.
- `button-link` is a minimal text-only treatment with no border or fill. Use it for inline actions and navigation-style controls.
- Button labels should use the `button` typography token and maintain a consistent minimum size so they feel stable and easy to scan.

Cards should feel clean and lightly elevated.
- `card` uses a white surface, `rounded.md`, generous 30px padding, and a soft shadow when separation is needed.
- Card content should stay text-forward, with the image or icon as a supporting element rather than the whole feature.

Inputs should be understated and functional.
- `input` should mirror the card and surface palette, use `rounded.sm`, and keep the border treatment quiet.
- Focus states should rely on color clarity and border contrast rather than dramatic glow effects.

Chips and small tags should be pill-like and subtle.
- `chip` uses `rounded.full` with muted surface fill and compact padding.
- Chip text should remain concise and semibold, useful for filters, categories, or status labels.

Navigation and utility elements should feel lightweight.
- Menu items are plain text with subtle letter-spacing and no heavy decoration.
- Utility links, such as login or secondary navigation, should avoid strong fills unless they indicate a clear call to action.

Icons and decorative graphics should remain thin, simple, and mostly outline-based. If an illustration or motion flourish is used, it should reinforce the green energy motif without overpowering the content.

## Do's and Don'ts
- Do keep the page mostly white and let green function as a focused accent.
- Do use large Aeonik headlines with generous breathing room.
- Do keep buttons small, rectangular, and sharply legible.
- Do use subtle shadows only when separation is necessary.
- Don't introduce dark backgrounds or heavy gradients.
- Don't over-round components or make the UI feel playful.
- Don't crowd sections; preserve the spacious, editorial rhythm.
- Don't use multiple competing accent colors when the green system already defines hierarchy.