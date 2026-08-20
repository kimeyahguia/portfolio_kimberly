/* =========================================================
   Kimberly G. Urge — Data, Design & Direction
   Project data, Journey data, rendering, carousels, modals,
   plus creative micro-interactions (tilt, road fill, cursor dot)
   ========================================================= */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isFinePointer = window.matchMedia("(pointer: fine)").matches;

// ---------- 1. PROJECT DATA ----------
const projects = [
  {
    id: "firesight",
    year: 2026,
    title: "FireSight",
    category: "GIS / DATA ANALYTICS / DECISION SUPPORT",
    role: "Project Lead / Business Analytics",
    description: "A GIS-based system that analyzes historical fire incident data to help identify areas with higher fire risk.",
    tools: "Python • MySQL • GIS • Power BI • JavaScript",
    problem: "How can historical fire incident data help identify areas with higher fire risk?",
    approach: "Collected and cleaned incident, location, and severity data, then analyzed frequency and spatial distribution to classify risk levels across barangays.",
    output: "A risk map and dashboard that supports decision-making for fire prevention and response planning.",
    learning: "[Add what you personally learned — analytical, technical, or team-related.]",
    image: "https://via.placeholder.com/900x600/DBD4CC/0F3B59?text=%5BFIRESIGHT+SCREENSHOT%5D"
  },
  {
    id: "project-2",
    year: 2025,
    title: "[Project Name]",
    category: "BUSINESS ANALYTICS / DASHBOARD",
    role: "[Your role]",
    description: "[Short description of the project.]",
    tools: "[Tools used]",
    problem: "[What problem did this address?]",
    approach: "[How did you approach it?]",
    output: "[What was produced?]",
    learning: "[What did you learn?]",
    image: "https://via.placeholder.com/900x600/DBD4CC/0F3B59?text=%5BPROJECT+SCREENSHOT%5D"
  },
  {
    id: "project-3",
    year: 2025,
    title: "[Project Name]",
    category: "UI/UX / PROTOTYPE",
    role: "[Your role]",
    description: "[Short description of the project.]",
    tools: "[Tools used]",
    problem: "[What problem did this address?]",
    approach: "[How did you approach it?]",
    output: "[What was produced?]",
    learning: "[What did you learn?]",
    image: "https://via.placeholder.com/900x600/DBD4CC/0F3B59?text=%5BPROJECT+SCREENSHOT%5D"
  },
  {
    id: "project-4",
    year: 2024,
    title: "[Project Name]",
    category: "INFORMATION SYSTEMS",
    role: "[Your role]",
    description: "[Short description of the project.]",
    tools: "[Tools used]",
    problem: "[What problem did this address?]",
    approach: "[How did you approach it?]",
    output: "[What was produced?]",
    learning: "[What did you learn?]",
    image: "https://via.placeholder.com/900x600/DBD4CC/0F3B59?text=%5BPROJECT+SCREENSHOT%5D"
  },
  {
    id: "project-5",
    year: 2024,
    title: "[Project Name]",
    category: "WEB DEVELOPMENT",
    role: "[Your role]",
    description: "[Short description of the project.]",
    tools: "[Tools used]",
    problem: "[What problem did this address?]",
    approach: "[How did you approach it?]",
    output: "[What was produced?]",
    learning: "[What did you learn?]",
    image: "https://via.placeholder.com/900x600/DBD4CC/0F3B59?text=%5BPROJECT+SCREENSHOT%5D"
  },
  {
    id: "project-6",
    year: 2023,
    title: "[Project Name]",
    category: "RESEARCH / DOCUMENTATION",
    role: "[Your role]",
    description: "[Short description of the project.]",
    tools: "[Tools used]",
    problem: "[What problem did this address?]",
    approach: "[How did you approach it?]",
    output: "[What was produced?]",
    learning: "[What did you learn?]",
    image: "https://via.placeholder.com/900x600/DBD4CC/0F3B59?text=%5BPROJECT+SCREENSHOT%5D"
  }
];

projects.sort((a, b) => b.year - a.year);

const INITIAL_COUNT = 4;
const visibleProjects = projects.slice(0, INITIAL_COUNT);
const moreProjects = projects.slice(INITIAL_COUNT);

// ---------- 2. JOURNEY DATA (3 categories) ----------
const journeyData = {
  certifications: [
    {
      title: "[Certification Name]",
      organization: "[Issuing Organization]",
      year: "2026",
      category: "CERTIFICATION",
      image: "https://via.placeholder.com/800x1000/DBD4CC/0F3B59?text=%5BCERTIFICATE%5D",
      description: "[Short description of the certification and why it matters.]"
    },
    {
      title: "[Achievement / Award]",
      organization: "[Organization / Competition]",
      year: "2025",
      category: "ACHIEVEMENT",
      image: "https://via.placeholder.com/800x1000/DBD4CC/0F3B59?text=%5BACHIEVEMENT%5D",
      description: "[Short description of the achievement.]"
    },
    {
      title: "[Seminar / Training]",
      organization: "[Organization]",
      year: "2025",
      category: "TRAINING",
      image: "https://via.placeholder.com/800x1000/DBD4CC/0F3B59?text=%5BTRAINING%5D",
      description: "[Short description of the seminar or training.]"
    }
  ],

  leadership: [
    {
      role: "[Leadership Role]",
      organization: "[Organization / Project]",
      year: "2026",
      image: "https://via.placeholder.com/800x1000/DBD4CC/0F3B59?text=%5BLEADERSHIP%5D",
      description: "[Short description of the role and what it involved.]",
      contributions: ["[Contribution 1]", "[Contribution 2]", "[Contribution 3]"]
    },
    {
      role: "[Leadership Role]",
      organization: "[Organization / Project]",
      year: "2025",
      image: "https://via.placeholder.com/800x1000/DBD4CC/0F3B59?text=%5BLEADERSHIP%5D",
      description: "[Short description of the role and what it involved.]",
      contributions: ["[Contribution 1]", "[Contribution 2]"]
    }
  ],

  worksEducation: [
    {
      title: "FireSight",
      type: "Capstone Project",
      year: "2026",
      role: "Project Lead / Business Analytics",
      image: "https://via.placeholder.com/900x1100/DBD4CC/0F3B59?text=%5BFIRESIGHT%5D",
      description: "A GIS-based fire incident reporting and risk analytics system built to support fire prevention decision-making.",
      focus: ["GIS", "Data Analytics", "Risk Prediction", "Data Visualization"],
      projectId: "firesight"
    },
    {
      title: "BSIT — Business Analytics",
      type: "Education",
      year: "2022 – 2026",
      role: "[Your University]",
      image: "https://via.placeholder.com/900x1100/DBD4CC/0F3B59?text=%5BEDUCATION%5D",
      description: "[Add relevant coursework, focus areas, or academic milestones.]",
      focus: ["Business Analytics", "Information Systems"],
      projectId: null
    },
    {
      title: "[Project / Research Title]",
      type: "Academic Project",
      year: "2025",
      role: "[Your role]",
      image: "https://via.placeholder.com/900x1100/DBD4CC/0F3B59?text=%5BPROJECT%5D",
      description: "[Short description of the project or research.]",
      focus: ["[Focus 1]", "[Focus 2]"],
      projectId: null
    }
  ]
};

// ---------- 3. TILT HELPER (project cards + journey cards) ----------
function applyTilt(el) {
  if (reduceMotion || !isFinePointer) return;
  const maxTilt = 6;

  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) translateY(-4px)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
  });
}

// ---------- 4. RENDER PROJECT GRID ----------
const projectGrid = document.getElementById("projectGrid");

function renderProjectCard(project) {
  const card = document.createElement("button");
  card.className = "project-card reveal";
  card.type = "button";
  card.setAttribute("aria-haspopup", "dialog");
  card.innerHTML = `
    <span class="project-image">
      <img src="${project.image}" alt="${project.title} screenshot">
    </span>
    <span class="project-info">
      <span class="mono-label">${project.year}</span>
      <h3>${project.title}</h3>
      <span class="project-cat">${project.category}</span>
      <span class="project-desc">${project.description}</span>
      <span class="project-role mono-label">${project.role}</span>
    </span>
  `;
  card.addEventListener("click", () => openModal(project.id));
  applyTilt(card.querySelector(".project-image"));
  return card;
}

visibleProjects.forEach((p) => projectGrid.appendChild(renderProjectCard(p)));

const seeMoreBtn = document.getElementById("seeMoreBtn");
if (moreProjects.length === 0) {
  seeMoreBtn.style.display = "none";
}

// ---------- 5. RENDER JOURNEY GRID (3 category cards) ----------
const journeyGrid = document.getElementById("journeyGrid");

const journeyCardMeta = [
  {
    key: "certifications",
    index: "01",
    title: "CERTIFICATIONS<br>+ ACHIEVEMENTS",
    image: "https://via.placeholder.com/700x440/DBD4CC/0F3B59?text=%5BCERTIFICATIONS%5D"
  },
  {
    key: "leadership",
    index: "02",
    title: "LEADERSHIP",
    image: "https://via.placeholder.com/700x440/DBD4CC/0F3B59?text=%5BLEADERSHIP%5D"
  },
  {
    key: "worksEducation",
    index: "03",
    title: "WORKS<br>+ EDUCATION",
    image: "https://via.placeholder.com/700x440/DBD4CC/0F3B59?text=%5BWORKS%5D"
  }
];

function renderJourneyCard(meta) {
  const items = journeyData[meta.key];
  const preview = items[0];
  const previewLine = meta.key === "leadership" ? preview.role : (preview.title || "");

  const card = document.createElement("button");
  card.className = "journey-card reveal";
  card.type = "button";
  card.setAttribute("aria-haspopup", "dialog");
  card.innerHTML = `
    <span class="journey-card-index mono-label">${meta.index}</span>
    <h3 class="journey-card-title">${meta.title}</h3>
    <span class="journey-card-image">
      <img src="${meta.image}" alt="${meta.key} preview">
    </span>
    <span class="journey-card-preview">
      <span class="mono-label">${preview.year}</span>
      <span>${previewLine}</span>
    </span>
    <span class="text-btn">EXPLORE →</span>
  `;
  card.addEventListener("click", () => openJourneyModal(meta.key));
  applyTilt(card);
  return card;
}

journeyCardMeta.forEach((meta) => journeyGrid.appendChild(renderJourneyCard(meta)));

// ---------- 6. PROJECT DETAIL MODAL ----------
const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  document.getElementById("modalImg").src = project.image;
  document.getElementById("modalImg").alt = `${project.title} screenshot`;
  document.getElementById("modalMeta").textContent = `${project.year} / ${project.role}`;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalCat").textContent = project.category;
  document.getElementById("modalOverview").textContent = project.description;
  document.getElementById("modalRole").textContent = project.role;
  document.getElementById("modalProblem").textContent = project.problem;
  document.getElementById("modalApproach").textContent = project.approach;
  document.getElementById("modalTools").textContent = project.tools;
  document.getElementById("modalOutput").textContent = project.output;
  document.getElementById("modalLearning").textContent = project.learning;

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) closeModal();
});

// ---------- 7. PROJECT CAROUSEL (with crossfade slide) ----------
const carouselOverlay = document.getElementById("carouselOverlay");
const carouselClose = document.getElementById("carouselClose");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselDetailsBtn = document.getElementById("carouselDetailsBtn");
const carouselImgEl = document.getElementById("carouselImg");

let carouselIndex = 0;

function crossfadeImage(imgEl, newSrc, newAlt) {
  if (reduceMotion) {
    imgEl.src = newSrc;
    imgEl.alt = newAlt;
    return;
  }
  imgEl.classList.add("is-swapping");
  setTimeout(() => {
    imgEl.src = newSrc;
    imgEl.alt = newAlt;
    imgEl.classList.remove("is-swapping");
  }, 180);
}

function renderCarouselSlide() {
  if (moreProjects.length === 0) return;
  const project = moreProjects[carouselIndex];

  crossfadeImage(carouselImgEl, project.image, `${project.title} screenshot`);
  document.getElementById("carouselYear").textContent = project.year;
  document.getElementById("carouselTitle").textContent = project.title;
  document.getElementById("carouselCat").textContent = project.category;
  document.getElementById("carouselDesc").textContent = project.description;
  document.getElementById("carouselIndex").textContent =
    `${String(carouselIndex + 1).padStart(2, "0")} / ${String(moreProjects.length).padStart(2, "0")}`;
}

function openCarousel() {
  if (moreProjects.length === 0) return;
  carouselIndex = 0;
  renderCarouselSlide();
  carouselOverlay.classList.add("is-open");
  carouselOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCarousel() {
  carouselOverlay.classList.remove("is-open");
  carouselOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

seeMoreBtn.addEventListener("click", openCarousel);
carouselClose.addEventListener("click", closeCarousel);
carouselOverlay.addEventListener("click", (e) => {
  if (e.target === carouselOverlay) closeCarousel();
});

carouselPrev.addEventListener("click", () => {
  carouselIndex = (carouselIndex - 1 + moreProjects.length) % moreProjects.length;
  renderCarouselSlide();
});
carouselNext.addEventListener("click", () => {
  carouselIndex = (carouselIndex + 1) % moreProjects.length;
  renderCarouselSlide();
});
carouselDetailsBtn.addEventListener("click", () => {
  const project = moreProjects[carouselIndex];
  closeCarousel();
  openModal(project.id);
});

// ---------- 8. JOURNEY MODAL — landscape spread + per-category carousel ----------
const journeyModal = document.getElementById("journeyModal");
const journeyModalClose = document.getElementById("journeyModalClose");
const journeyViewProject = document.getElementById("journeyViewProject");
const journeyModalImgEl = document.getElementById("journeyModalImg");

const journeyCategoryLabels = {
  certifications: "01 / CERTIFICATIONS + ACHIEVEMENTS",
  leadership: "02 / LEADERSHIP",
  worksEducation: "03 / WORKS + EDUCATION"
};

let journeyActiveCategory = null;
let journeyActiveIndex = 0;

function renderJourneySlide() {
  const items = journeyData[journeyActiveCategory];
  const item = items[journeyActiveIndex];
  const total = items.length;
  const indexText = `${String(journeyActiveIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  document.getElementById("journeyModalCategory").textContent = journeyCategoryLabels[journeyActiveCategory];
  crossfadeImage(journeyModalImgEl, item.image, item.title || item.role || "");
  document.getElementById("journeyIndexMobile").textContent = indexText;
  document.getElementById("journeyIndexDesktop").textContent = indexText;
  document.getElementById("journeyModalYear").textContent = item.year;
  document.getElementById("journeyModalDesc").textContent = item.description;

  const orgField = document.getElementById("journeyFieldOrg");
  const orgLabel = document.getElementById("journeyFieldOrgLabel");
  const orgValue = document.getElementById("journeyModalOrg");
  const listField = document.getElementById("journeyFieldList");
  const listLabel = document.getElementById("journeyFieldListLabel");
  const listEl = document.getElementById("journeyModalList");

  if (journeyActiveCategory === "certifications") {
    document.getElementById("journeyModalTitle").textContent = item.title;
    document.getElementById("journeyModalSubtitle").textContent = item.category;
    orgField.style.display = "block";
    orgLabel.textContent = "ISSUED BY";
    orgValue.textContent = item.organization;
    listField.style.display = "none";
    journeyViewProject.style.display = "none";

  } else if (journeyActiveCategory === "leadership") {
    document.getElementById("journeyModalTitle").textContent = item.role;
    document.getElementById("journeyModalSubtitle").textContent = item.organization;
    orgField.style.display = "none";
    listField.style.display = "block";
    listLabel.textContent = "KEY CONTRIBUTIONS";
    listEl.innerHTML = item.contributions.map((c) => `<li>${c}</li>`).join("");
    journeyViewProject.style.display = "none";

  } else if (journeyActiveCategory === "worksEducation") {
    document.getElementById("journeyModalTitle").textContent = item.title;
    document.getElementById("journeyModalSubtitle").textContent = item.type;
    orgField.style.display = "block";
    orgLabel.textContent = "ROLE";
    orgValue.textContent = item.role;
    listField.style.display = "block";
    listLabel.textContent = "FOCUS";
    listEl.innerHTML = item.focus.map((f) => `<li>${f}</li>`).join("");

    if (item.projectId) {
      journeyViewProject.style.display = "inline-block";
      journeyViewProject.onclick = (e) => {
        e.preventDefault();
        closeJourneyModal();
        openModal(item.projectId);
      };
    } else {
      journeyViewProject.style.display = "none";
    }
  }
}

function openJourneyModal(category) {
  journeyActiveCategory = category;
  journeyActiveIndex = 0;
  renderJourneySlide();
  journeyModal.classList.add("is-open");
  journeyModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeJourneyModal() {
  journeyModal.classList.remove("is-open");
  journeyModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function journeyPrev() {
  const total = journeyData[journeyActiveCategory].length;
  journeyActiveIndex = (journeyActiveIndex - 1 + total) % total;
  renderJourneySlide();
}
function journeyNext() {
  const total = journeyData[journeyActiveCategory].length;
  journeyActiveIndex = (journeyActiveIndex + 1) % total;
  renderJourneySlide();
}

journeyModalClose.addEventListener("click", closeJourneyModal);
journeyModal.addEventListener("click", (e) => {
  if (e.target === journeyModal) closeJourneyModal();
});

document.getElementById("journeyPrevMobile").addEventListener("click", journeyPrev);
document.getElementById("journeyNextMobile").addEventListener("click", journeyNext);
document.getElementById("journeyPrevDesktop").addEventListener("click", journeyPrev);
document.getElementById("journeyNextDesktop").addEventListener("click", journeyNext);

// Touch swipe support for the journey modal image area
const journeyMedia = document.querySelector(".journey-modal-media");
let journeyTouchStartX = 0;

journeyMedia.addEventListener("touchstart", (e) => {
  journeyTouchStartX = e.changedTouches[0].screenX;
}, { passive: true });

journeyMedia.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const diff = touchEndX - journeyTouchStartX;
  if (Math.abs(diff) > 40) {
    if (diff > 0) journeyPrev();
    else journeyNext();
  }
}, { passive: true });

// ---------- 9. GLOBAL ESCAPE / ARROW KEYS FOR OVERLAYS ----------
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCarousel();
    closeJourneyModal();
  }
  if (journeyModal.classList.contains("is-open")) {
    if (e.key === "ArrowLeft") journeyPrev();
    if (e.key === "ArrowRight") journeyNext();
  }
  if (carouselOverlay.classList.contains("is-open")) {
    if (e.key === "ArrowLeft") carouselPrev.click();
    if (e.key === "ArrowRight") carouselNext.click();
  }
});

// ---------- 10. MOBILE NAV TOGGLE ----------
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- 11. FOOTER YEAR ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- 12. SCROLL-REVEAL (also triggers road fill) ----------
const revealEls = document.querySelectorAll(".reveal");
const roadTrack = document.getElementById("roadTrack");

if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);

        // Trigger the accent line fill + dots shortly after the road reveals
        if (entry.target === roadTrack) {
          setTimeout(() => roadTrack.classList.add("is-filled"), 500);
        }
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
  if (roadTrack) roadTrack.classList.add("is-filled");
}

// ---------- 13. CURSOR-FOLLOW ACCENT DOT (hero only, desktop) ----------
const heroSection = document.getElementById("hero");
const cursorDot = document.getElementById("heroCursorDot");

if (!reduceMotion && isFinePointer && heroSection && cursorDot) {
  let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;
  let ticking = false;

  heroSection.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.classList.add("is-active");
    if (!ticking) {
      requestAnimationFrame(animateDot);
      ticking = true;
    }
  });

  heroSection.addEventListener("mouseleave", () => {
    cursorDot.classList.remove("is-active");
  });

  function animateDot() {
    dotX += (mouseX - dotX) * 0.18;
    dotY += (mouseY - dotY) * 0.18;
    cursorDot.style.left = `${dotX}px`;
    cursorDot.style.top = `${dotY}px`;

    if (Math.abs(mouseX - dotX) > 0.5 || Math.abs(mouseY - dotY) > 0.5) {
      requestAnimationFrame(animateDot);
    } else {
      ticking = false;
    }
  }
} else if (cursorDot) {
  cursorDot.style.display = "none";
}