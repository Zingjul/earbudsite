# Deployment Guide - Robo Sounds

This guide provides step-by-step instructions for deploying the **Robo Sounds** landing page to various platforms.

## Prerequisites
- A GitHub account with the repository pushed ([github.com/Zingjul/earbudsite](https://github.com/Zingjul/earbudsite)).
- Node.js installed locally (for testing builds).

---

## 1. Vercel (Recommended)
Vercel provides the most seamless experience for Vite-based React projects.

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New** > **Project**.
3. Import your `earbudsite` repository from GitHub.
4. Vercel will automatically detect **Vite** as the framework.
5. Click **Deploy**.
6. Each push to the `main` branch will automatically trigger a new deployment.

## 2. Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Click **Add new site** > **Import an existing project**.
3. Connect with GitHub and select `earbudsite`.
4. Ensure the build settings are:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

## 3. GitHub Pages (using Actions)
To deploy directly to your GitHub repo's "Pages" environment:

1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Create a file in your project at `.github/workflows/deploy.yml` with the Vite deployment template (standard template available in GitHub Actions gallery).
4. The site will deploy to `https://zingjul.github.io/earbudsite/`.

> [!IMPORTANT]
> Since this project uses a base path, ensure that if you deploy to GitHub Pages (which uses a sub-folder `earbudsite`), you update the `base` in `vite.config.js` to `'/earbudsite/'`. For Vercel/Netlify, no change is needed.

---

## Post-Deployment Checklist
- [ ] Verify that the Spline 3D viewer loads correctly.
- [ ] Check console for any 404s on images.
- [ ] Test on mobile devices for responsiveness.
- [ ] Verify SEO meta tags are appearing correctly (use [socialsharepreview.com](https://socialsharepreview.com)).
