# Assets Directory

This directory contains static assets for the application.

## Folder Structure

- `/public/images/` - General images, photos, illustrations
- `/public/logo/` - Logo files (SVG, PNG, etc.)
- `/public/icons/` - Icon files (favicon, app icons, etc.)

## Favicon

For Next.js App Router, place favicon files in:
- `/src/app/favicon.ico` - Main favicon
- `/src/app/icon.png` - App icon (PNG)
- `/src/app/icon.svg` - App icon (SVG)
- `/src/app/apple-icon.png` - Apple touch icon

## Usage

Reference assets in your components:
- Images: `/images/your-image.jpg`
- Logos: `/logo/your-logo.svg`
- Icons: `/icons/your-icon.png`

Example:
```tsx
<img src="/logo/logo.svg" alt="Logo" />
```

