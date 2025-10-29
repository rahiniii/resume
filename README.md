## Resume Website

A simple, responsive, single‑page resume/portfolio site built with static HTML, CSS, and JavaScript. This repo contains assets, styles, and scripts for the personal site and a separate Projects page.

### About My Resume
This repository hosts my personal resume website. It highlights my background, experience, and projects in a clean, easy‑to‑navigate format.

- **Professional Summary**: I'm Rahini, a [Your Role — e.g., Software Engineer/Frontend Developer]. I focus on [key domains — e.g., web development, UI engineering, and performance]. I enjoy building usable, accessible interfaces and shipping reliable features.
- **Core Skills**: [Languages], [Frameworks], [Tools], [Databases], [Cloud/DevOps].
- **Experience Highlights**: [Role @ Company — Dates] — [1–2 impact bullets]. Repeat for notable roles.
- **Education**: [Degree], [Institution], [Year]. Add relevant certifications.
- **Notable Projects**: See `Projects.html` for a visual gallery. Each card links to screenshots or live demos where applicable.
- **Resume PDF**: Latest copy at `assets/rahini-resume.pdf` (linked from `index.html`).
- **Contact**: [Email] · [Phone] · [LinkedIn] · [GitHub].

Replace bracketed placeholders with your details and keep bullets concise and outcome‑oriented.

### Live Preview
- Open `index.html` directly in a browser, or serve the folder with a static server (recommended) to ensure all scripts work as expected.

### Features
- **Responsive layout** using custom CSS and Bootstrap
- **Project gallery** (`Projects.html`) with images and links
- **Pre-bundled assets** (fonts, icons, images, and JS plugins)
- **No build step** required (pure static files)

### Project Structure
```
assets/
  css/           # Main theme styles, color variants, vendor CSS
  css-1/         # Alternate style set
  fonts*/        # Icon fonts and font files
  img*/          # Images used across the site and projects
  js/            # Core scripts and vendor plugins
  js-1/          # Additional slider/mobile scripts
  rahini-resume.pdf  # Downloadable resume
index.html       # Main landing page
Projects.html    # Projects/portfolio page
favicon.ico      # Site favicon
```

### Getting Started
1. Clone or download this repository.
2. Serve the directory locally (recommended):
   - Python 3: `python3 -m http.server 8080`
   - Node: `npx serve .` or `npx http-server -p 8080`
3. Visit `http://localhost:8080` and open `index.html` or `Projects.html`.

You can also double‑click `index.html` to open it directly, but some plugins work best when served over HTTP.

### Editing Content
- Update personal info, sections, and links in `index.html`.
- Update projects, thumbnails, and links in `Projects.html` and `assets/img-1/projects/`.
- Replace images in `assets/img/` and `assets/img-1/` as needed (keep names/paths or update references accordingly).
- Colors and theme variants are under `assets/css/color/` and main styles in `assets/css/main.css`.

### Resume Content Overview
- **Name & Title**: In `index.html` header/hero section. Update your full name and professional title (e.g., "Frontend Developer" or "Software Engineer").
- **Profile Summary**: In `index.html`, summary/about section. Write 2–4 concise sentences about your experience and focus.
- **Skills**: Edit the skills list/badges in `index.html`. Group by categories (Languages, Frameworks, Tools) as needed.
- **Experience**: Update role, company, dates, and bullet points in the experience/timeline section of `index.html`.
- **Education & Certifications**: Edit the corresponding section in `index.html`.
- **Projects**: Add or update project cards in `Projects.html`. Thumbnails live under `assets/img-1/projects/`. Use descriptive alt text.
- **Resume PDF**: Replace `assets/rahini-resume.pdf` with your latest CV and ensure the download/view link in `index.html` points to it.

### Contact & Social
- **Email/Phone**: Update the contact section or header links in `index.html`. If a phone icon is used, the asset is under `assets/img/phone.svg` or `assets/img-1/phone.png`.
- **Social Profiles**: Update links and icons for LinkedIn, GitHub, etc., in `index.html`.
- **Favicon & Avatar**: Replace `favicon.ico` and avatar images (e.g., `assets/img/woman.png`, `assets/img/woman-avator.png`) with your own.

### Personalization Checklist
- [ ] Update name, title, and profile summary in `index.html`
- [ ] Replace `assets/rahini-resume.pdf` with the latest resume
- [ ] Refresh skills, experience, and education sections
- [ ] Update project entries and thumbnails in `Projects.html` and `assets/img-1/projects/`
- [ ] Replace profile/hero images in `assets/img/` and `assets/img-1/`
- [ ] Verify all contact and social links

### Deployment
- Any static hosting works: GitHub Pages, Netlify, Vercel, or your own server.
- For GitHub Pages:
  1. Push to a public repo.
  2. In repo settings → Pages, select branch `main` and root `/`.
  3. After publish, your site will be available at the provided URL.

### Notes on Assets
- Third‑party libraries included (Bootstrap, jQuery, Owl Carousel, Magnific Popup, etc.) are vendored in `assets/`. Keep licenses where applicable.
- Icon fonts are included under `assets/fonts` and `assets/fonts-1`.

### Customization Tips
- Swap the resume PDF at `assets/rahini-resume.pdf` and update links in `index.html`.
- Adjust animations/typing effects via scripts in `assets/js/` (e.g., `typed.js`).
- Remove unused color themes in `assets/css/color/` to reduce size.

### Contributing
This is a personal site. For suggestions or fixes, open an issue or PR.

### License
This project is provided as‑is for personal use. Third‑party assets retain their respective licenses.