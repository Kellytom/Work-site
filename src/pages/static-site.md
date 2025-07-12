---
title: "Static Site Markdown"
---

# Static Site Example (Markdown)

This page explains how to build and use a local static site with Astro.

## 1. Start the Dev Server

Run the following command to start the Astro development server:

```bash
npm run dev
```

## 2. Build the Static Site

To generate the static site output, run:

```bash
npm run build
```

This will create a `dist/` folder containing your static site.

## 3. Fix Asset Paths for Local Use

If you want to use the site locally (without a server), you may need to fix asset paths so they work when opening `index.html` directly. Run this command in your project root:

```bash
find dist -name "*.html" -exec sed -i 's|href="/assets/|href="assets/|g; s|src="/assets/|src="assets/|g' {} +
```

This changes all `/assets/` links to `assets/` for local file access.

## 4. Zip the Folder

To package your static site for download or transfer, zip the `dist/` folder:

```bash
zip -r static-site.zip dist
```

## 5. Download or Move the Folder

Transfer the `static-site.zip` file to your target machine or directory as needed.

## 6. Unzip and Open Locally

Unzip the folder:

```bash
unzip static-site.zip
```

Open `dist/index.html` (or any other HTML file) in your browser. All links and assets should work locally.

---

**Tips:**

- If you use custom folders for assets, adjust the `sed` command accordingly.
- For best results, use a local web server (like `npx serve dist`) for advanced features (routing, SPA, etc.), but for simple static sites, direct file opening works after path fixes.

---

See also: [Astro page](/static-site) and [MDX page](/static-site.mdx).
