/* =========================================================
   Kimberly G. Urge — Data, Design & Direction
   Project data, Journey data, rendering, carousels, modals
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
    description:
      "A GIS-based system that analyzes historical fire incident data to help identify areas with higher fire risk and support fire prevention and response planning.",
    tools: "Python • MySQL • GIS • Power BI • JavaScript",
    problem:
      "How can historical fire incident data help identify areas with higher fire risk?",
    approach:
      "Collected, cleaned, and analyzed historical fire incident data based on frequency, location, and severity. GIS-based visualization was then used to identify and classify fire risk across barangays.",
    output:
      "A GIS-based risk map and analytics dashboard designed to support fire prevention, incident monitoring, and response planning.",
    learning:
      "Learned how to combine business analytics, GIS, system development, and team coordination to build a solution for a real-world community problem.",
    image:
      "https://via.placeholder.com/900x600/DBD4CC/0F3B59?text=FIRESIGHT"
  },

  {
    id: "elementary-portal-cds",
    year: 2025,
    title: "Elementary Portal CDS",
    category: "WEB DEVELOPMENT / EDUCATION / DATA ANALYTICS",
    role: "Developer / Team Member / Business Analytics",
    description:
      "A web-based school information portal developed for Creative Dreams School that integrates student information and performance prediction using the Random Forest algorithm.",
    tools: "PHP • MySQL • HTML • CSS • JavaScript • Random Forest",
    problem:
      "How can a school information portal help manage student information while providing insights into student academic performance?",
    approach:
      "Developed a web-based platform that organizes school-related information and incorporates student performance data for analysis and prediction using a machine learning approach.",
    output:
      "A school information portal with student-related information management and a performance prediction feature using the Random Forest algorithm.",
    learning:
      "Learned how web development and basic machine learning can be combined to create an information system that provides useful academic insights.",
    image:
      "https://via.placeholder.com/900x600/DBD4CC/0F3B59?text=ELEMENTARY+PORTAL"
  },

  {
    id: "dampa-website",
    year: 2025,
    title: "Dampa Website",
    category: "WEB DEVELOPMENT / BOOKING SYSTEM",
    role: "Project Lead / Developer / Team Member",
    description:
      "A web-based booking and reservation system designed for Dampa sa Tabing Dagat Resort to help manage customer reservations and booking information.",
    tools: "PHP • MySQL • HTML • CSS • JavaScript",
    problem:
      "How can a resort improve the management of customer bookings and reservations through a centralized web-based system?",
    approach:
      "Designed and developed a web-based platform where customers can access resort information and submit booking or reservation requests through a centralized system.",
    output:
      "A resort website with an integrated booking and reservation system for managing customer requests and reservation information.",
    learning:
      "Learned how to design a practical information system around a real business workflow while improving skills in web development and database integration.",
    image:
      "https://via.placeholder.com/900x600/DBD4CC/0F3B59?text=DAMPA+WEBSITE"
  },

  {
    id: "teleclinicmed",
    year: 2025,
    title: "TeleClinicMed",
    category: "JAVA / CLINIC MANAGEMENT / INFORMATION SYSTEM",
    role: "Project Lead / Developer / Team Member",
    description:
      "A clinic management system designed to support appointments, prescriptions, medicine sales, and internal communication between patients, doctors, and clinic staff.",
    tools: "Java • MySQL",
    problem:
      "How can a digital clinic management system organize appointments, medical information, prescriptions, and medicine transactions?",
    approach:
      "Developed a centralized clinic management application that organizes different clinic processes and provides digital support for patient and staff interactions.",
    output:
      "A clinic management system supporting appointment scheduling, prescriptions, medicine sales, and internal clinic communication.",
    learning:
      "Learned how to structure a larger Java-based information system and translate real-world healthcare workflows into software features.",
    image: "assets/teleclinic1.png",
    images: [
      "assets/teleclinic1.png",
      "assets/teleclinic2.png",
      "assets/teleclinic3.png"
    ]
  },

  {
    id: "vroomski-rents",
    year: 2024,
    title: "Vroomski Rents",
    category: "JAVA / VEHICLE RENTAL / INFORMATION SYSTEM",
    role: "Developer / Team Member",
    description:
      "A vehicle rental system designed to transform the traditional vehicle rental process into a more organized and efficient digital experience.",
    tools: "Java • MySQL",
    problem:
      "How can a digital vehicle rental system make the rental process more organized, efficient, and convenient?",
    approach:
      "Developed a vehicle rental application that digitally manages vehicle-related rental processes and organizes information needed for transactions.",
    output:
      "A digital vehicle rental system designed to streamline vehicle rental management and provide a more efficient user experience.",
    learning:
      "Learned how to translate a traditional business process into a functional information system while strengthening Java development and system design skills.",
    image: "assets/vroomski1.png",
    images: [
      "assets/vroomski1.png",
      "assets/vroomski2.png",
      "assets/vroomski3.png"
    ]
  }
];

// Newest first
projects.sort((a, b) => b.year - a.year);

const INITIAL_COUNT = 4;
const visibleProjects = projects.slice(0, INITIAL_COUNT);
const moreProjects = projects.slice(INITIAL_COUNT);

// ---------- 2. JOURNEY DATA (3 categories) ----------
// Edit these arrays with your real milestones/credentials.
// Do NOT leave fake info live — replace every [placeholder] before publishing.
const journeyData = {
    certifications: [
    {
      title: "[Data Analytics Certification]",
      organization: "[Issuing Platform/Org]",
      year: "2025",
      category: "CERTIFICATION",
      image: "assets/dataanalytics.png",
      description: "[Short description — what this data analytics cert covered.]"
    },
    {
      title: "[SIKAP Talino Certificate]",
      organization: "[Issuing Org / Event]",
      year: "2025",
      category: "ACHIEVEMENT",
      image: "assets/sikaptalacert.png",
      description: "[Short description of the SIKAP Talino recognition/award.]"
    },
    {
      title: "Microsoft Office Specialist — Excel",
      organization: "Microsoft",
      year: "2025",
      category: "CERTIFICATION",
      image: "assets/microsoftspecialistexcel.png",
      description: "[Short description — e.g. certified proficiency in Excel for data analysis and reporting.]"
    },
    {
      title: "[Device Configuration Certificate]",
      organization: "[Issuing Org]",
      year: "2025",
      category: "TRAINING",
      image: "assets/deviceconfi.png",
      description: "[Short description of the device configuration training.]"
    }
  ],

  leadership: [
    {
      role: "[Leadership Role]",
      organization: "[Organization / Project]",
      year: "2026",
      image: "https://via.placeholder.com/800x1000/DBD4CC/0F3B59?text=%5BLEADERSHIP%5D",
      description: "[Short description of the role and what it involved.]",
      contributions: [
        "[Contribution 1]",
        "[Contribution 2]",
        "[Contribution 3]"
      ]
    },
    {
      role: "[Leadership Role]",
      organization: "[Organization / Project]",
      year: "2025",
      image: "https://via.placeholder.com/800x1000/DBD4CC/0F3B59?text=%5BLEADERSHIP%5D",
      description: "[Short description of the role and what it involved.]",
      contributions: [
        "[Contribution 1]",
        "[Contribution 2]"
      ]
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

// ---------- 4. RENDER JOURNEY GRID (3 category cards) ----------
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
  const previewLine = meta.key === "leadership"
    ? preview.role
    : (preview.title || "");

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
  return card;
}

journeyCardMeta.forEach((meta) => journeyGrid.appendChild(renderJourneyCard(meta)));

// ---------- 5. PROJECT DETAIL MODAL ----------
const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalImg = document.getElementById("modalImg");
const modalMediaNav = document.getElementById("modalMediaNav");
const modalImgIndexEl = document.getElementById("modalImgIndex");
const modalImgPrev = document.getElementById("modalImgPrev");
const modalImgNext = document.getElementById("modalImgNext");

let modalImages = [];
let modalImageIndex = 0;

function renderModalImage() {
  const total = modalImages.length;
  modalImg.src = modalImages[modalImageIndex];
  modalImgIndexEl.textContent = `${String(modalImageIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  // Hide prev/next/counter entirely when there's only one image
  modalMediaNav.classList.toggle("is-single", total <= 1);
}

function modalImagePrev() {
  modalImageIndex = (modalImageIndex - 1 + modalImages.length) % modalImages.length;
  renderModalImage();
}
function modalImageNext() {
  modalImageIndex = (modalImageIndex + 1) % modalImages.length;
  renderModalImage();
}

modalImgPrev.addEventListener("click", modalImagePrev);
modalImgNext.addEventListener("click", modalImageNext);

function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  // Use the project's full gallery if it has one, otherwise fall back to the single cover image
  modalImages = project.images && project.images.length ? project.images : [project.image];
  modalImageIndex = 0;
  modalImg.alt = `${project.title} screenshot`;
  renderModalImage();

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

// Touch swipe support for the project modal image area
let modalTouchStartX = 0;
document.querySelector(".modal-media").addEventListener("touchstart", (e) => {
  modalTouchStartX = e.changedTouches[0].screenX;
}, { passive: true });
document.querySelector(".modal-media").addEventListener("touchend", (e) => {
  const diff = e.changedTouches[0].screenX - modalTouchStartX;
  if (Math.abs(diff) > 40) {
    if (diff > 0) modalImagePrev();
    else modalImageNext();
  }
}, { passive: true });

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

// ---------- 7. JOURNEY MODAL — landscape spread + per-category carousel ----------
const journeyModal = document.getElementById("journeyModal");
const journeyModalClose = document.getElementById("journeyModalClose");
const journeyViewProject = document.getElementById("journeyViewProject");

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
  document.getElementById("journeyModalImg").src = item.image;
  document.getElementById("journeyModalImg").alt = item.title || item.role || "";
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

// ---------- 8. GLOBAL ESCAPE / ARROW KEYS FOR OVERLAYS ----------
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
  if (projectModal.classList.contains("is-open")) {
    if (e.key === "ArrowLeft") modalImagePrev();
    if (e.key === "ArrowRight") modalImageNext();
  }
});

// ---------- 9. MOBILE NAV TOGGLE ----------
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

// ---------- 10. FOOTER YEAR ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- 11. SCROLL-REVEAL ----------
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