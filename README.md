# My Engineering Portfolio

A simple, no-build-tools portfolio site. Plain HTML/CSS/JS — open `index.html`
in a browser and it just works.

## Editing content

**You only need to edit one file: [`data.js`](data.js).**

It contains:
- Your name, role, tagline, about text, location, email, resume link, social links
- Your skills list
- Your projects (title, description, image, video, tags, live/code links)

Everything on the page is generated from that file, so adding a new project
is just copying one block inside the `projects` array.

## Adding images & videos

1. Drop image files into `assets/projects/` (e.g. `assets/projects/myapp.png`)
2. Drop video files into `assets/videos/` (e.g. `assets/videos/myapp-demo.mp4`)
3. Reference them in `data.js` by their path, e.g.:
   ```js
   image: "assets/projects/myapp.png",
   video: "assets/videos/myapp-demo.mp4",
   ```
4. Clicking a project's image/video on the live site opens it full-size in a lightbox.

Put your profile photo at `assets/avatar.jpg` and your resume at
`assets/resume.pdf` (or update the paths in `data.js` to match whatever you name them).

If an image/video path is wrong or missing, the site just shows a "No image
yet" placeholder instead of breaking — so it's safe to leave fields empty
while you're still collecting screenshots.

## Previewing locally

Just double-click `index.html` to open it in your browser. Since everything
is plain files with no build step, there's nothing to install or compile.

(Optional, if you want auto-reload while editing: install the "Live Server"
extension in VS Code, right-click `index.html`, and choose "Open with Live Server".)

## Publishing with GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Push this folder's contents to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. Wait a minute, then your site will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

To update the live site later, just edit files locally, then:
```bash
git add .
git commit -m "Update projects"
git push
```
GitHub Pages redeploys automatically within a minute or two.

## Notes

- Large videos slow down page load — a few seconds of MP4, compressed, is
  usually enough for a demo clip. GitHub also has a 100MB per-file limit
  (and repos work best under ~1GB total), so keep media reasonably sized.
- The dark/light toggle in the top-right is saved per-visitor automatically.
- Want a custom domain later? GitHub Pages supports that too, under the same
  Settings → Pages screen.
