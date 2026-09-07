// This file renders the content from data.js onto the page.
// You shouldn't need to edit this file — edit data.js instead.

(function () {
  const data = typeof PORTFOLIO_DATA !== "undefined" ? PORTFOLIO_DATA : null;
  if (!data) {
    console.error("data.js failed to load or PORTFOLIO_DATA is missing.");
    return;
  }

  const $ = (sel) => document.querySelector(sel);

  function initials(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
  }

  function renderProfile() {
    const p = data.profile;

    document.title = `${p.name} — Portfolio`;
    $("#logo-name").textContent = initials(p.name);
    $("#hero-name").textContent = p.name;
    $("#hero-role").textContent = p.role;
    $("#hero-tagline").textContent = p.tagline;
    $("#footer-text").innerHTML = `&copy; <span id="footer-year"></span> ${p.name}. Built with plain HTML, CSS &amp; JS.`;
    $("#footer-year").textContent = new Date().getFullYear();

    if (p.avatar) {
      const img = $("#avatar-img");
      img.src = p.avatar;
      img.alt = p.name;
      img.hidden = false;
      img.onerror = () => {
        img.hidden = true;
        $("#avatar-initials").textContent = initials(p.name);
      };
    } else {
      $("#avatar-initials").textContent = initials(p.name);
    }

    $("#about-text").innerHTML = p.about
      .trim()
      .split(/\n\s*\n/)
      .map((para) => `<p>${para.trim()}</p>`)
      .join("");

    $("#meta-location").textContent = p.location || "—";
    $("#meta-email").textContent = p.email || "—";
    $("#meta-email").href = p.email ? `mailto:${p.email}` : "#";
    $("#contact-email-btn").href = p.email ? `mailto:${p.email}` : "#";

    if (p.resumeUrl) {
      $("#resume-link").href = p.resumeUrl;
    } else {
      $("#resume-wrap").style.display = "none";
    }

    const socialsWrap = $("#hero-socials");
    socialsWrap.innerHTML = (p.socials || [])
      .map(
        (s) =>
          `<a class="social-link" href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`
      )
      .join("");
  }

  function renderSkills() {
    const wrap = $("#skills-list");
    wrap.innerHTML = (data.skills || [])
      .map((s) => `<span class="skill-pill">${s}</span>`)
      .join("");
  }

  function mediaMarkup(project) {
    if (project.video) {
      return `
        <div class="project-media" data-media="video" data-src="${project.video}">
          <video src="${project.video}" muted playsinline></video>
          <span class="play-badge">▶ video</span>
        </div>`;
    }
    if (project.image) {
      return `
        <div class="project-media" data-media="image" data-src="${project.image}">
          <img src="${project.image}" alt="${project.title}" loading="lazy"
               onerror="this.parentElement.innerHTML='<span class=&quot;placeholder&quot;>No image yet</span>'; this.parentElement.removeAttribute('data-media');" />
        </div>`;
    }
    return `<div class="project-media"><span class="placeholder">No image yet</span></div>`;
  }

  function renderProjects() {
    const wrap = $("#projects-grid");
    wrap.innerHTML = (data.projects || [])
      .map((project) => {
        const tags = (project.tags || [])
          .map((t) => `<span class="tag">${t}</span>`)
          .join("");

        const links = [
          project.liveUrl
            ? `<a class="btn btn-primary" href="${project.liveUrl}" target="_blank" rel="noopener">Live Demo</a>`
            : "",
          project.codeUrl
            ? `<a class="btn btn-outline" href="${project.codeUrl}" target="_blank" rel="noopener">Code</a>`
            : "",
        ].join("");

        return `
          <article class="project-card ${project.featured ? "featured" : ""}">
            ${mediaMarkup(project)}
            <div class="project-body">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tags">${tags}</div>
              <div class="project-links">${links}</div>
            </div>
          </article>`;
      })
      .join("");

    // Lightbox on media click
    wrap.querySelectorAll(".project-media[data-media]").forEach((el) => {
      el.addEventListener("click", () => openLightbox(el.dataset.media, el.dataset.src));
    });
  }

  function openLightbox(type, src) {
    const content = $("#lightbox-content");
    content.innerHTML =
      type === "video"
        ? `<video src="${src}" controls autoplay></video>`
        : `<img src="${src}" alt="" />`;
    $("#lightbox").hidden = false;
  }

  function closeLightbox() {
    $("#lightbox").hidden = true;
    $("#lightbox-content").innerHTML = "";
  }

  function initLightbox() {
    $("#lightbox-close").addEventListener("click", closeLightbox);
    $("#lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  function initTheme() {
    const toggle = $("#theme-toggle");
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
      toggle.textContent = saved === "dark" ? "☀️" : "🌙";
    }
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      toggle.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }

  renderProfile();
  renderSkills();
  renderProjects();
  initLightbox();
  initTheme();
})();
