/* =========================================================
   Kimberly G. Urge — Data, Design & Direction
   Project data, rendering, carousel, and modal logic
   ========================================================= */

// ---------- 1. PROJECT DATA ----------
// Edit this array to add / update projects. Sorted newest → oldest automatically.
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
    image: "https://via.placeholder.com/900x600/D8D3C8/0D1B2A?text=%5BFIRESIGHT+SCREENSHOT%5D"
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
    image: "https://via.placeholder.com/900x600/D8D3C8/0D1B2A?text=%5BPROJECT+SCREENSHOT%5D"
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
    image: "https://via.placeholder.com/900x600/D8D3C8/0D1B2A?text=%5BPROJECT+SCREENSHOT%5D"
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
    image: "https://via.placeholder.com/900x600/D8D3C8/0D1B2A?text=%5BPROJECT+SCREENSHOT%5D"
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
    image: "https://via.placeholder.com/900x600/D8D3C8/0D1B2A?text=%5BPROJECT+SCREENSHOT%5D"
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
    image: "https://via.placeholder.com/900x600/D8D3C8/0D1B2A?text=%5BPROJECT+SCREENSHOT%5D"
  }
];

// Newest first
projects.sort((a, b) => b.year - a.year);

const INITIAL_COUNT = 4;
const visibleProjects = projects.slice(0, INITIAL_COUNT);
const moreProjects = projects.slice(INITIAL_COUNT);

// ---------- 2. JOURNEY DATA ----------
// Edit this array with your real milestones. Sorted newest → oldest automatically.
const journey = [
  { year: 2026, type: "CERTIFICATION", title: "[Certification Name]", detail: "[Issuing Organization]" },
  { year: 2026, type: "ACHIEVEMENT", title: "[Achievement]", detail: "[Details]" },
  { year: 2025, type: "LEADERSHIP", title: "[Organization / Role]", detail: "[Details]" },
  { year: 2025, type: "PROJECT", title: "FireSight", detail: "Capstone project — GIS-based fire risk analytics" },
  { year: 2024, type: "CERTIFICATION", title: "[Certification Name]", detail: "[Issuing Organization]" },
  { year: 2023, type: "EDUCATION", title: "BSIT — Business Analytics", detail: "[Your University]" }
];
journey.sort((a, b) => b.year - a.year);

// ---------- 3. RENDER PROJECT GRID ----------
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
  return card;
}

visibleProjects.forEach((p) => projectGrid.appendChild(renderProjectCard(p)));

// Hide "See more" button if there's nothing extra to show
const seeMoreBtn = document.getElementById("seeMoreBtn");
if (moreProjects.length === 0) {
  seeMoreBtn.style.display = "none";
}

// ---------- 4. RENDER JOURNEY TIMELINE ----------
const timelineList = document.getElementById("timelineList");

journey.forEach((item) => {
  const li = document.createElement("li");
  li.className = "timeline-item reveal";
  li.innerHTML = `
    <span class="mono-label">${item.year}</span>
    <span class="mono-label">${item.type}</span>
    <span>
      <h4>${item.title}</h4>
      <p class="role-desc">${item.detail}</p>
    </span>
  `;
  timelineList.appendChild(li);
});

// ---------- 5. PROJECT DETAIL MODAL ----------
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

// ---------- 6. PROJECT CAROUSEL (for "See more work") ----------
const carouselOverlay = document.getElementById("carouselOverlay");
const carouselClose = document.getElementById("carouselClose");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselDetailsBtn = document.getElementById("carouselDetailsBtn");

let carouselIndex = 0;

function renderCarouselSlide() {
  if (moreProjects.length === 0) return;
  const project = moreProjects[carouselIndex];

  document.getElementById("carouselImg").src = project.image;
  document.getElementById("carouselImg").alt = `${project.title} screenshot`;
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

// Close overlays with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCarousel();
  }
});

// ---------- 7. MOBILE NAV TOGGLE ----------
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

// ---------- 8. FOOTER YEAR ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- 9. SCROLL-REVEAL ----------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}