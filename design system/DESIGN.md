---
version: "alpha"
name: "Bradley's Mowing & Landscaping"
description: "A responsive, conversion-focused landscaping website based on the supplied desktop and mobile UI references and Bradley's official brand guidelines. The experience combines a dark green photographic hero, prominent free quote forms, image-led service cards, customer testimonials, benefit cards, a project gallery, and a contact-focused footer."
colors:
  primary: "#075B1D"
  secondary: "#24B80B"
  tertiary: "#6EDB5A"
  neutral: "#FFFFFF"
  background: "#FAFAF7"
  surface: "#FFFFFF"
  surface-muted: "#F3F6F0"
  text-primary: "#1F2937"
  text-secondary: "#6B7280"
  accent: "#6EDB5A"
  link: "#16A34A"
  border: "#D9E2D8"
  dark-surface: "#063D18"
  dark-surface-secondary: "#0B2D17"
  input-background: "#FAFAF7"
typography:
  display-lg:
    fontFamily: "Poppins"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.035em"
  display-md:
    fontFamily: "Poppins"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: "1.12"
    letterSpacing: "-0.025em"
  heading-lg:
    fontFamily: "Poppins"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.02em"
  heading-md:
    fontFamily: "Poppins"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "1.3"
    letterSpacing: "-0.015em"
  heading-sm:
    fontFamily: "Poppins"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "1.4"
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "-0.015em"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "-0.01em"
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "0"
  label-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "1.4"
    letterSpacing: "0.01em"
  caption:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "0.025em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "999px"
spacing:
  base: "4px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "80px"
  section-padding: "64px"
  section-padding-mobile: "40px"
  container-max: "1440px"
  content-max: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "#FFFFFF"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "1px solid {colors.secondary}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "2px solid {colors.primary}"
  button-dark:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    border: "1px solid {colors.primary}"
  input:
    backgroundColor: "{colors.input-background}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    border: "1px solid #B8C7BB"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.border}"
  service-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "24px"
  review-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.border}"
  link:
    textColor: "{colors.link}"
    typography: "{typography.label-md}"
---

## Overview

Bradley's Mowing & Landscaping needs a professional, trustworthy, photography-led website that makes its services easy to understand and makes requesting a free quote straightforward.

This design system combines three reference sources:

- **Original DESIGN.md:** Defines the document structure and design-system documentation strategy to preserve.
- **Desktop website UI PDF:** Defines the overall composition, hero, service presentation, testimonials, benefits, gallery, and contact experience.
- **Mobile website UI PDF:** Defines the mobile-specific content flow, compact navigation, stacked forms, service presentation, and vertically arranged project photographs.
- **Bradley's branding sheet:** Defines the authoritative brand colors, logo treatment, typography, button styles, and spacing principles.

The desktop and mobile references show a dark-green, image-led landscaping website with bright-green highlights and a strong emphasis on quote requests. Preserve that strategy while applying Bradley's own identity.

Do not copy the reference company's branding, logo, reviews, contact information, or business claims.

### Composition Cues

- **Layout:** Responsive grid with full-width sections.
- **Content width:** Full-bleed backgrounds with centered inner containers.
- **Framing:** Open composition with strong section separation.
- **Visual hierarchy:** Large headings, prominent photographs, clear calls to action.
- **Primary visual language:** Forest green, bright green, white, off-white, and authentic landscaping photography.
- **Surface style:** Clean cards, restrained borders, consistent rounded corners.
- **Conversion priority:** Request a free quote.
- **Desktop behavior:** Multi-column sections, side-by-side content, image grids.
- **Mobile behavior:** Compact navigation, vertically stacked content, full-width forms, large photographs.

Preserve the reference's content flow and overall visual language before adding decorative effects or new sections.

## Colors

The official Bradley's palette is the foundation of the entire interface.

### Official Brand Palette

| Role | Hex | Usage |
|---|---|---|
| Primary | `#075B1D` | Forest-green sections, dark backgrounds, brand emphasis |
| Secondary | `#24B80B` | Primary CTA buttons and active elements |
| Accent | `#6EDB5A` | Highlighted words, icons, decorative accents |
| Background | `#FAFAF7` | Main light background |
| Text | `#1F2937` | Headings and body text on light surfaces |
| Muted Gray | `#6B7280` | Supporting text and captions |
| Link | `#16A34A` | Inline links and interactive text |
| Neutral | `#FFFFFF` | Forms, cards, and contrasting content surfaces |

### Supporting Colors

These colors support the interface without replacing the official palette.

- **Dark Surface (`#063D18`):** Deep-green panels and footer backgrounds.
- **Dark Surface Secondary (`#0B2D17`):** Subtle dark-green background variation.
- **Muted Surface (`#F3F6F0`):** Alternating light sections and supporting cards.
- **Border (`#D9E2D8`):** Card borders and section separators.
- **Input Background (`#FAFAF7`):** Form controls on light surfaces.

### Color Strategy

- Use forest green to create the brand's strongest visual anchors.
- Use bright green for quote requests and primary conversion actions.
- Use light green sparingly for selected words, icons, and decorative motifs.
- Use off-white to soften the overall interface.
- Use white cards to separate content from off-white backgrounds.
- Use dark-green sections to reproduce the reference's visual rhythm.
- Use charcoal for readable text on light surfaces.
- Use white text over dark green.
- Use a suitable dark overlay when placing white text over photographs.

Do not introduce unrelated accent colors, excessive gradients, or a different brand palette.

### Contrast

- Check text and button contrast before implementation is considered complete.
- White text on bright green must meet the required contrast level. Use forest-green text on bright-green buttons if white text does not provide sufficient contrast.
- Do not use light-green body text on white for long passages.
- Keep all form labels readable.
- Do not communicate errors through color alone.

## Typography

Use Poppins for headings and Inter for body copy and interface text, following Bradley's branding sheet.

### Font Families

**Poppins**
- Hero headings.
- Section headings.
- Service titles.
- CTA headings.
- Featured content headings.

**Inter**
- Paragraphs.
- Navigation.
- Form labels and inputs.
- Button labels.
- Testimonials.
- Captions and supporting information.

### Typography Scale

| Style | Font | Size | Weight |
|---|---|---:|---:|
| Display Large | Poppins | 56px | 700 |
| Display Medium | Poppins | 40px | 700 |
| Heading Large | Poppins | 32px | 700 |
| Heading Medium | Poppins | 24px | 600 |
| Heading Small | Poppins | 18px | 600 |
| Body Large | Inter | 18px | 400 |
| Body Medium | Inter | 16px | 400 |
| Body Small | Inter | 14px | 400 |
| Label Medium | Inter | 14px | 600 |
| Caption | Inter | 12px | 500 |

These values are implementation tokens. Adjust them responsively while preserving the hierarchy shown in the references.

### Typography Rules

- Use bold, compact Poppins headings.
- Break the hero headline into intentional lines.
- Use light green for limited emphasis within headings.
- Keep body paragraphs concise and readable.
- Avoid overly wide text columns.
- Reduce display sizes on mobile without weakening the heading hierarchy.
- Use uppercase, letter-spaced text only for small labels where appropriate.
- Maintain a consistent heading hierarchy throughout the page.

## Layout

The website uses a full-width, section-based layout with centered content containers.

### Layout Principles

- **Layout type:** Responsive grid.
- **Outer container:** Maximum approximately 1440px.
- **Primary content width:** Maximum approximately 1200px.
- **Base spacing unit:** 4px.
- **Desktop section padding:** Approximately 64px vertically.
- **Mobile section padding:** Approximately 40px vertically.
- **Desktop grid:** Flexible multi-column layout.
- **Mobile grid:** Primarily single-column layout.
- **Image treatment:** Large, natural, consistent, and responsive.

### Spacing Scale

| Token | Value |
|---|---:|
| XS | 4px |
| SM | 8px |
| MD | 16px |
| LG | 24px |
| XL | 32px |
| 2XL | 48px |
| 3XL | 64px |
| 4XL | 80px |

Keep spacing consistent across sections, cards, forms, navigation, and image galleries.

### Responsive Breakpoints

- **Mobile:** Up to 767px.
- **Tablet:** 768px–1023px.
- **Desktop:** 1024px and above.
- **Wide desktop:** 1440px and above.

Adjust breakpoints when required by actual component behavior.

### Desktop Layout

- Keep navigation horizontal.
- Use a strong, dark-green hero with landscaping photography and a prominent quote CTA.
- Place the first quote form directly after the hero.
- Use split-image and text layouts for the business introduction and featured content.
- Present services in an image-led grid.
- Use a dedicated customer testimonials section.
- Use contrasting benefit cards within the Why Choose Us section.
- Present completed projects in a multi-column gallery.
- Finish with a contact and quote section, map where appropriate, and dark footer.

### Mobile Layout

The mobile reference is authoritative for mobile composition.

- Use a compact header with logo and menu toggle.
- Stack the hero content vertically.
- Keep the primary CTA visible and easy to tap.
- Place the quote form immediately after the hero.
- Stack the business introduction image and text.
- Use vertically arranged service cards where necessary.
- Stack testimonial and benefit cards.
- Display featured content in a vertical flow.
- Use large project photographs with consistent spacing.
- Place the final quote form and contact information before the footer.
- Avoid horizontal overflow and cramped multi-column layouts.

Do not simply shrink the desktop layout. Recompose the content for the mobile viewport while preserving the same identity and section sequence.

## Website Structure

Follow the supplied desktop and mobile PDFs for the main page structure.

The page should follow this sequence:

1. Header and navigation.
2. Hero section.
3. First free quote form.
4. Business introduction.
5. Services.
6. Customer testimonials.
7. Why Choose Us.
8. Featured landscaping content.
9. Recent projects gallery.
10. Final quote and contact section.
11. Footer.

Keep this sequence consistent unless an actual content or technical requirement justifies a change.

### 1. Header and Navigation

Create a compact header with:

- Official Bradley's Mowing & Landscaping logo.
- Navigation links to relevant page sections.
- A visible quote CTA.
- A mobile menu toggle.

Design rules:

- Use the actual logo asset.
- Preserve logo proportions and approved variants.
- Use clear spacing and accessible controls.
- Keep navigation visually subordinate to the hero.
- Use a compact mobile header.
- Do not invent phone numbers or contact details.
- Use consistent hover and keyboard-focus states.

### 2. Hero Section

The desktop reference uses a dark, image-led hero with a prominent heading, landscaping photography, trust indicators, and a quote CTA.

The mobile reference uses a compact, vertically arranged hero with the heading and CTA clearly visible.

**Suggested headline:**

"A Cleaner, Greener Property Starts Here"

**Structure:**

- Optional small introductory label.
- Main heading.
- Short supporting paragraph.
- Primary quote CTA.
- Optional secondary CTA.
- Verified trust indicators, where available.
- Landscaping photograph.

Design rules:

- Use forest green as the dominant background or image-overlay color.
- Use white for the main heading.
- Highlight selected words with light green.
- Use Poppins for the heading and Inter for supporting text.
- Keep the CTA prominent.
- Use genuine business photography when available.
- Avoid busy images behind text.
- Keep the composition balanced on desktop and mobile.
- Do not invent customer numbers, credentials, ratings, or guarantees.

### 3. First Free Quote Form

The reference places a dedicated quote form immediately after the hero.

This is a critical conversion component.

**Potential fields:**

- Name.
- Service desired.
- Email.
- Phone.
- Property address.
- Short project description.

Only include the fields required by the real business workflow.

Design rules:

- Use a white or light form surface.
- Use green headings and a clear primary submit button.
- Stack form fields vertically on mobile.
- Use visible labels.
- Use full-width mobile controls.
- Keep field spacing consistent.
- Provide validation and error messages.
- Show a success state only after a successful submission.
- Keep the form short enough to complete comfortably.

Primary CTA: **Get Free Quote**

Use consistent CTA wording across the website.

### 4. Business Introduction

Follow the reference's image-and-text composition.

**Structure:**

- Landscaping photograph.
- Section heading.
- Business introduction.
- Supporting description.
- Optional quote CTA.

Design rules:

- Use a two-column layout on desktop when appropriate.
- Stack the photograph and text on mobile.
- Use off-white or white surfaces.
- Keep the heading clear and the paragraphs concise.
- Use genuine photographs.
- Avoid excessive decoration.

Use only verified company information. Do not invent the business history, years of experience, or qualifications.

### 5. Services Section

The reference presents landscaping services using large image cards and clear titles.

Use the same visual strategy for Bradley's confirmed services.

Potential categories include:

- Lawn Mowing.
- Landscape Maintenance.
- Weed Control.
- Edging.
- Fertilization.
- Aeration.
- Seasonal Cleanup.
- Brush Clearing.
- Grading and Drainage.
- Property Cleanup.

These are candidate categories, not claims that every service is offered. Display only confirmed services.

**Service card structure:**

- Service photograph or approved icon.
- Service title.
- Short description where useful.
- Optional link to additional information.

Design rules:

- Use a consistent card grid on desktop.
- Stack cards or use a compact grid on mobile.
- Keep images consistent in proportion.
- Use white, off-white, or approved dark-green surfaces.
- Use Poppins for titles and Inter for descriptions.
- Keep descriptions concise.
- Apply subtle hover feedback.
- Avoid inconsistent icon styles and excessive shadows.

### 6. Customer Testimonials

The reference includes a dedicated customer-review section.

**Structure:**

- Section heading.
- Optional introductory sentence.
- Review cards.
- Customer name and rating, where verified.

Design rules:

- Use consistent card spacing.
- Keep review text readable.
- Use genuine customer feedback.
- Use verified ratings only.
- Use a grid on desktop.
- Stack cards or use a controlled horizontal carousel on mobile when appropriate.
- Avoid invented avatars, reviews, and customer identities.

### 7. Why Choose Us

The reference uses a strong green section with contrasting benefit cards.

**Structure:**

- Section heading.
- Supporting statement.
- Three or four benefit cards.
- Simple icons.
- Optional quote CTA.

Potential benefits, subject to verification:

- Reliable Service.
- Professional Work.
- Attention to Detail.
- Customer-Focused Communication.

Design rules:

- Use forest green as the section anchor.
- Use contrasting light cards.
- Keep icons consistent.
- Keep each benefit concise.
- Use a multi-column grid on desktop.
- Stack benefit cards on mobile.
- Avoid unsupported claims about certifications, insurance, or professional affiliations.

### 8. Featured Landscaping Content

The reference includes another image-and-text section after the benefits area.

Use this section to highlight a key service, business capability, or genuine project.

**Structure:**

- Large photograph.
- Heading.
- Supporting text.
- Optional CTA.

Design rules:

- Use a balanced image-and-text layout on desktop.
- Stack content on mobile.
- Keep imagery authentic.
- Avoid repeating the exact same service-card content.
- Maintain consistent spacing and image treatment.

### 9. Recent Projects Gallery

The reference uses a prominent gallery of completed landscaping projects.

**Structure:**

- Section heading.
- Optional introductory copy.
- Responsive project photographs.
- Optional verified project descriptions.
- Optional link to a larger gallery.

Design rules:

- Use genuine project images.
- Use a multi-column gallery on desktop.
- Use large, vertically flowing photographs on mobile.
- Maintain consistent image spacing and corner radii.
- Preserve the main subject when cropping.
- Optimize image sizes and loading.
- Use meaningful alternative text.
- Do not present stock or generated imagery as actual completed company projects.

### 10. Final Quote and Contact Section

The reference places a final contact and quote experience near the bottom of the page.

**Structure:**

- Contact-focused heading.
- Supporting description.
- Contact information.
- Quote form or CTA.
- Optional map and service-area information.

Design rules:

- Use a dark-green section background where appropriate.
- Use white text and restrained light-green emphasis.
- Place the form on a contrasting surface.
- Stack the form vertically on mobile.
- Make the CTA clear.
- Include only verified contact information.
- Use a map only when the business location is verified and the map provides value.

### 11. Footer

Follow the reference's dark-green footer composition.

**Possible elements:**

- Official logo.
- Short business description.
- Contact details.
- Navigation links.
- Verified service areas.
- Social links.
- Copyright information.

Design rules:

- Use forest green or an approved dark-green surface.
- Use white for primary text.
- Use muted text for supporting information.
- Use green accents for links and icons.
- Keep the layout organized on desktop.
- Stack footer groups on mobile.
- Make phone, email, and social links functional when valid details are supplied.
- Do not invent contact details.

## Elevation & Depth

The design uses strong section contrast, authentic landscaping photography, and restrained surface treatments.

**Surface style:** Clean and structured.

### Cards

- Use white cards against off-white backgrounds.
- Use subtle green-gray borders.
- Apply an 8px radius to standard cards and controls.
- Use larger radii sparingly.
- Use soft shadows only when they improve separation.
- Keep card styles consistent across services, reviews, and forms.

### Shadow Tokens

- Subtle: `0 2px 8px rgba(31, 41, 55, 0.06)`
- Card: `0 6px 20px rgba(31, 41, 55, 0.08)`
- Floating: `0 12px 32px rgba(7, 91, 29, 0.12)`

These are implementation suggestions, not mandatory effects.

### Photography

- Use large, clear landscape photographs.
- Preserve natural colors and lighting.
- Use overlays where required for text contrast.
- Avoid excessive blur, artificial glow, and oversaturated greens.
- Do not repeatedly reuse the same photograph across unrelated sections.

Do not introduce glassmorphism or gradient-border treatments as a default design feature.

## Components

### Buttons

**Primary**

- Background: `#24B80B`.
- Text: White when contrast is sufficient; otherwise use approved dark-green text.
- Font: Inter, 14px, weight 600.
- Radius: 8px.
- Padding: 12px 24px.
- Purpose: Quote requests and primary conversion actions.

**Secondary**

- Background: Transparent.
- Text: `#075B1D`.
- Border: 2px solid `#075B1D`.
- Radius: 8px.
- Padding: 12px 24px.
- Purpose: Supporting actions on light surfaces.

**Dark Variant**

- Background: `#075B1D`.
- Text: White.
- Border: 1px solid `#075B1D`.

### Button Behavior

- Use subtle color transitions.
- Darken the primary green on hover.
- Provide visible keyboard focus.
- Maintain consistent heights and padding.
- Avoid excessive motion.
- Use one consistent primary quote CTA label.

### Input Fields

- Background: `#FAFAF7`.
- Text: `#1F2937`.
- Border: `#B8C7BB`.
- Radius: 8px.
- Padding: 12px 16px.
- Font: Inter, 14px.

Provide visible labels, accessible focus states, and clear validation messages.

### Service Cards

- Consistent card padding.
- Consistent image proportions.
- Poppins titles.
- Inter descriptions.
- Approved green icons where appropriate.
- Subtle hover feedback.
- Responsive grid behavior.

### Review Cards

- Consistent surface treatment.
- Readable customer text.
- Verified review details.
- Responsive layout.
- No fabricated customer identities or ratings.

### Image Gallery

- Consistent spacing.
- Consistent image treatment.
- Responsive image sizing.
- Controlled cropping.
- Optimized image delivery.

### Brand Elements

Use the supplied branding sheet's visual elements:

- Official logo mark for branding and favicon.
- Grass or landscape icon motif for appropriate service icons.
- Approved divider or path motif for subtle decoration.
- Consistent icon style throughout the site.

Never distort the logo or create an unapproved logo variant.

## Photography & Image Direction

Photography is central to the supplied desktop and mobile references.

### Preferred Images

- Lawn mowing in progress.
- Residential lawn care.
- Landscaping and planting.
- Property maintenance.
- Seasonal cleanup.
- Brush clearing and grading, where applicable.
- Completed landscaping projects.
- Genuine company equipment and vehicles.

### Image Rules

- Prefer authentic, high-resolution photography.
- Maintain natural greens and realistic lighting.
- Use real business photographs when available.
- Avoid artificial HDR, excessive saturation, and unrealistic textures.
- Use responsive image sizes.
- Lazy-load images below the fold.
- Preserve image clarity while optimizing file sizes.
- Never present generated or stock imagery as a verified company project.

## Do's and Don'ts

### Do

- Follow the supplied desktop and mobile layouts.
- Preserve Bradley's official brand identity.
- Use the official green palette.
- Use Poppins for headings and Inter for body text.
- Keep the quote form prominent.
- Use authentic landscaping photography.
- Maintain a clear page hierarchy.
- Use consistent buttons, cards, and spacing.
- Make the mobile experience feel intentionally designed.
- Keep forms accessible and easy to complete.
- Use genuine testimonials and verified business details.
- Optimize image loading and responsiveness.

### Don't

- Do not copy the reference company's logo or branding.
- Do not replace Bradley's colors with the reference website's palette.
- Do not invent services, reviews, contact details, or credentials.
- Do not introduce unrelated accent colors.
- Do not overuse gradients, glassmorphism, or heavy shadows.
- Do not add unnecessary sections that disrupt the reference's content flow.
- Do not make mobile a compressed desktop layout.
- Do not use excessive 3D effects or distracting animation.
- Do not sacrifice usability for visual decoration.

## Motion

Motion should remain restrained and interface-focused.

**Motion level:** Minimal to moderate.

### Durations

- Fast interactions: 150ms.
- Standard transitions: 250ms.
- Section reveals: 400–600ms.

### Easing

- `ease`
- `cubic-bezier(0.22, 1, 0.36, 1)`

### Approved Motion

- Button color transitions.
- Subtle card hover feedback.
- Gentle image transitions.
- Short section reveals.
- Simple mobile menu transitions.
- Smooth scrolling where appropriate.

### Restrictions

- Do not animate every element.
- Do not delay access to important content.
- Do not use excessive parallax.
- Do not make the quote CTA difficult to access.
- Respect `prefers-reduced-motion`.
- Ensure the site remains usable when animations are disabled.

## WebGL

WebGL is not required.

The supplied references emphasize photography, green backgrounds, image cards, and conventional responsive layouts. Complex shader backgrounds or 3D scenes are not necessary to reproduce this design.

Prefer:

- CSS backgrounds.
- Real landscaping photography.
- Lightweight decorative brand motifs.
- Subtle CSS transitions.
- Simple, consistent icons.

Any optional advanced effects must not interfere with readability, performance, accessibility, or quote-form functionality.

## Responsive & Accessibility Requirements

### Responsive Requirements

- No horizontal overflow.
- Responsive heading sizes.
- Flexible content containers.
- Correct image cropping.
- Accessible mobile navigation.
- Full-width mobile form controls.
- Comfortable touch targets.
- Consistent section spacing.
- Responsive service cards and galleries.
- Correct logo proportions at every viewport size.

### Accessibility Requirements

- Use semantic HTML.
- Maintain logical heading levels.
- Provide meaningful image alternative text.
- Use accessible form labels and error messages.
- Support keyboard navigation.
- Maintain visible focus states.
- Check color contrast.
- Respect reduced-motion preferences.
- Ensure interactive controls have accessible names.

## Implementation & Quality Standards

Build reusable design tokens and components instead of separate, inconsistent page-specific styles.

### Design Tokens

Define the palette, typography, spacing, radii, shadows, and responsive rules centrally.

### Reusable Components

Create consistent components for:

- Header and navigation.
- Primary and secondary buttons.
- Quote forms.
- Form inputs.
- Service cards.
- Review cards.
- Benefit cards.
- Project gallery.
- Section headings.
- Contact information.
- Footer.

### Content Accuracy

- Use the official business logo.
- Verify business contact information.
- Confirm service offerings.
- Use genuine customer reviews.
- Use authentic project photography.
- Verify service areas.
- Do not invent certifications or insurance details.

### Performance

- Optimize images.
- Use responsive image sizes.
- Lazy-load below-the-fold photography.
- Avoid unnecessary dependencies.
- Prevent layout shifts.
- Keep font loading efficient.
- Ensure quote forms function correctly.
- Avoid heavy effects that delay page rendering.

### Final Quality Checklist

- [ ] Official Bradley's logo used correctly.
- [ ] Official brand colors applied consistently.
- [ ] Poppins and Inter used according to the typography system.
- [ ] Desktop hero follows the supplied composition.
- [ ] Quote form appears immediately after the hero.
- [ ] Business introduction uses the intended image-and-text layout.
- [ ] Services follow the reference's image-card strategy.
- [ ] Testimonials use genuine customer feedback.
- [ ] Why Choose Us follows the reference's contrasting card layout.
- [ ] Featured landscaping content is included.
- [ ] Recent projects use authentic photographs.
- [ ] Contact section and footer follow the dark-green direction.
- [ ] Mobile navigation is compact and usable.
- [ ] Mobile content follows the supplied mobile reference.
- [ ] Forms and buttons work on mobile.
- [ ] No horizontal overflow.
- [ ] Accessibility and contrast checked.
- [ ] Images optimized.
- [ ] No invented business claims or contact details.
- [ ] No unnecessary WebGL or distracting animation.

## Final Design Principle

The website must preserve the visual strategy of the supplied desktop and mobile references while using Bradley's official brand identity.

The branding sheet determines the colors, typography, logo, and brand elements. The desktop PDF determines the main composition and section presentation. The mobile PDF determines the mobile content flow and responsive behavior.

**Priority order:**

1. Preserve Bradley's official brand identity.
2. Follow the supplied desktop and mobile reference layouts.
3. Keep the quote request experience prominent and straightforward.
4. Present services, testimonials, and completed projects clearly.
5. Make the website responsive, accessible, and fast.
6. Use restrained visual effects that support the design rather than compete with it.

Do not redesign the website into an unrelated template. Match the reference's composition and conversion strategy while implementing it consistently as Bradley's Mowing & Landscaping.