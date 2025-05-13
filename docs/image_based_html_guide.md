## Image-Based HTML Generation Guide

### Purpose

Automatically generate semantically structured and accessible HTML markup based on an uploaded image, reflecting the project’s component and layout system.

### Workflow

1. Upload and process the image (frontend)
2. Analyze the image visually via backend logic or AI model (e.g., CLIP/BLIP)
3. Reference existing `components/`, `layout/`, and `globals.css` for design structure
4. Generate semantic HTML using Tailwind CSS and project-specific tokens with accessibility best practices

### Development Rules

- Use semantic HTML tags (`section`, `nav`, `main`, `article`, etc.)
- Prioritize Tailwind utility classes and custom variables defined in `globals.css`
- Reuse project-defined components where applicable (e.g., `<Col />`, `<Card />`)
- Incorporate accessibility features (`aria-*`, `role`, keyboard navigation)
- Map visual elements to the closest existing UI components and tokens
- Ensure generated markup reflects actual design tokens and structural conventions
- **When adding new pages, follow file path convention:** `src/app/(app)/kya/[page-name]/page.jsx`
- **Refer to:** `src/app/(app)/kya/greeting/page.jsx` as the base example for publishing new UI
- **For placeholder images, use any image from:** `public/images/temp/`
