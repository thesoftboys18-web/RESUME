document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. Project Category Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedFilter = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (selectedFilter === "all" || category === selectedFilter) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });

  // 4. Automation Screenshot Slides (automation-1.jpg to automation-5.jpg)
  const automationSlides = [
    {
      src: "assets/automation-1.jpg",
      caption: "1 / 5 — Full Make.com Scenario Overview (Scenario ID: 6929867) showing intake chain and 6-path Router."
    },
    {
      src: "assets/automation-2.jpg",
      caption: "2 / 5 — Intake & AI Pipeline: WhatsApp Business Cloud → Make Data Store → Google Sheets → Array Aggregator → OpenAI → Parse JSON."
    },
    {
      src: "assets/automation-3.jpg",
      caption: "3 / 5 — Conditional Router branching into General Question, Product Inquiry, Incomplete Order, Existing Order, and Human Support."
    },
    {
      src: "assets/automation-4.jpg",
      caption: "4 / 5 — Approved Order Branch: Updates Make Data Store customer memory, searches/adds/updates Google Sheets rows, and sends confirmation."
    },
    {
      src: "assets/automation-5.jpg",
      caption: "5 / 5 — Lower Router Branches: Dedicated WhatsApp Business Cloud response modules for follow-up and human handoff paths."
    }
  ];

  // 5. Project Detail Modal Data & Logic
  const projectDetails = {
    "whatsapp-ai": {
      category: "AI Automation • Make.com Scenario ID 6929867",
      title: "WhatsApp AI Customer Service & Order Automation",
      hasGallery: true,
      html: `
        <p>
          Designed and configured an end-to-end customer service and order-management workflow in
          <strong>Make.com</strong> integrating <strong>WhatsApp Business Cloud</strong>, a <strong>Make Data Store</strong>,
          <strong>Google Sheets</strong>, <strong>OpenAI</strong>, and structured <strong>JSON parsing</strong>.
        </p>
        <h4>Workflow Architecture</h4>
        <ul>
          <li><strong>Webhook Ingestion:</strong> Listens for incoming WhatsApp Business Cloud message events.</li>
          <li><strong>Customer Context Retrieval:</strong> Queries a Make Data Store to fetch returning customer state and history.</li>
          <li><strong>Product Lookup &amp; Aggregation:</strong> Searches product rows in Google Sheets and combines matching records via an Array Aggregator.</li>
          <li><strong>Structured AI Classification:</strong> Passes customer + product context to OpenAI and parses the response with a JSON module.</li>
          <li><strong>Conditional Router (6 Paths):</strong> Routes messages into dedicated branches for <em>Approved Orders</em> (updating customer memory and Google Sheets order rows), <em>General Questions</em>, <em>Product Enquiries</em>, <em>Incomplete Orders</em>, <em>Existing Orders</em>, and <em>Human Support</em>.</li>
        </ul>
        <div class="scope-callout">
          <strong>Technical Scope Note:</strong> Configured and verified as a complete multi-branch Make.com scenario; live production deployment and production traffic metrics are not claimed.
        </div>
      `
    },
    "joshua-fellowship": {
      category: "Web Development • Live Deployment",
      title: "Joshua Fellowship Responsive Website",
      hasGallery: false,
      html: `
        <p>
          Designed, built, and deployed a responsive web platform for <strong>Joshua Fellowship</strong>
          (<a href="https://joshua-fellowship.vercel.app/" target="_blank" rel="noopener noreferrer" style="color:#38bdf8;text-decoration:underline;">joshua-fellowship.vercel.app</a>)
          presenting the community’s mission, ministries, events, messages, leadership, and digital catalogue.
        </p>
        <h4>Key Features Implemented</h4>
        <ul>
          <li><strong>Responsive Navigation &amp; Hero:</strong> Clean navigation across Home, About Us, Ministries, Events, Messages, Leaders, Shop, and Contact with a prominent <em>Join Fellowship</em> CTA.</li>
          <li><strong>Online Product Catalogue:</strong> Displays fellowship publications, apparel, and items with structured product cards.</li>
          <li><strong>Interactive Shopping Basket:</strong> Slide-over basket drawer calculating item selections and Naira (₦) totals.</li>
          <li><strong>Catalogue Item Management Form:</strong> Built-in interface for adding new items with title, category, price (₦), photograph upload, and description.</li>
        </ul>
        <div class="scope-callout">
          <strong>Technical Scope Note:</strong> Hosted live on Vercel. The online catalogue and shopping basket operate as a front-end demonstration and are intentionally not connected to a live payment gateway.
        </div>
      `
    },
    "softboys-web": {
      category: "Web Development • Local Development Environment",
      title: "SOFTBOYS.NG E-Commerce Storefront & Cart UI",
      hasGallery: false,
      html: `
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;padding:0.75rem;background:#0b0f17;border-radius:10px;border:1px solid rgba(255,255,255,0.1);">
          <img src="assets/softboy-logo.png" alt="SOFTBOYS.NG Logo" style="width:54px;height:54px;object-fit:contain;" />
          <div>
            <strong style="color:#f8fafc;display:block;">SOFTBOYS.NG Storefront Interface</strong>
            <span style="font-size:0.84rem;color:#94a3b8;">HTML5 • CSS3 • JavaScript • Node.js Backend Testing</span>
          </div>
        </div>
        <p>
          Built a responsive e-commerce storefront and shopping bag interface for <strong>SOFTBOYS.NG</strong> using
          <strong>HTML, CSS, JavaScript, and Node.js</strong>, alongside local backend testing.
        </p>
        <h4>Key Features Implemented</h4>
        <ul>
          <li><strong>Brand Storefront Header &amp; Hero:</strong> Promotional complimentary delivery banner (orders over ₦150,000, Lagos, Nigeria), top navigation (Shop, Our Story, Collections, Contact), search icon, and live cart badge counter.</li>
          <li><strong>Slide-Over Shopping Bag Drawer:</strong> Interactive cart UI showing selected apparel items (e.g., Softlife Jersey, SOFTBOYS Tee), quantity increment/decrement buttons, unit pricing, and dynamic subtotal calculation.</li>
          <li><strong>Checkout Flow Design:</strong> Styled checkout trigger identifying Paystack as the intended payment provider.</li>
        </ul>
        <div class="scope-callout">
          <strong>Technical Scope Note:</strong> Developed and tested in a local development environment (127.0.0.1:5500) with Node.js backend testing; live Paystack payment processing is not claimed.
        </div>
      `
    },
    "media-brand": {
      category: "Brand Operations & AI Media Production",
      title: "AI Storyboard Video Production & SOFTBOYS.NG Brand Operations",
      hasGallery: false,
      html: `
        <p>
          Combined creative AI media workflows with hands-on entrepreneurship and customer operations across two
          complementary initiatives:
        </p>
        <h4>1. AI Storyboard Video Production (YouTube)</h4>
        <ul>
          <li>Created and managed a dedicated YouTube channel publishing AI-assisted storyboard videos.</li>
          <li>Handled story ideation, scene-by-scene sequencing, prompt engineering for character consistency, and video assembly for digital publishing.</li>
        </ul>
        <h4>2. SOFTBOYS.NG Fashion Brand Operations (2022–2025)</h4>
        <ul>
          <li>Founded and operated an independent streetwear/fashion label in Nigeria under the SOFTBOYS.NG brand identity.</li>
          <li>Managed end-to-end branding, garment sourcing, social media marketing, direct customer enquiries, sales closing, and order fulfilment.</li>
        </ul>
      `
    }
  };

  const modal = document.getElementById("projectModal");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeModalBtn = document.getElementById("closeModalBtn");
  let lastFocusedTrigger = null;
  let currentSlideIndex = 0;

  function renderGalleryHtml() {
    const thumbsHtml = automationSlides
      .map(
        (slide, idx) => `
          <button type="button" class="gallery-thumb-btn ${idx === 0 ? "active" : ""}" data-gallery-idx="${idx}" aria-label="Show screenshot ${idx + 1}">
            <img src="${slide.src}" alt="Automation screenshot ${idx + 1}" />
          </button>
        `
      )
      .join("");

    return `
      <div class="gallery-viewer">
        <img id="galleryMainImg" src="${automationSlides[0].src}" alt="Make.com workflow screenshot" class="gallery-main-img" />
        <div class="gallery-caption-bar">
          <p id="galleryCaptionText" class="gallery-caption-text">${automationSlides[0].caption}</p>
          <div class="gallery-nav-btns">
            <button type="button" class="btn btn-outline btn-sm" id="prevSlideBtn">&larr; Prev</button>
            <button type="button" class="btn btn-outline btn-sm" id="nextSlideBtn">Next &rarr;</button>
          </div>
        </div>
        <div class="gallery-thumbs">
          ${thumbsHtml}
        </div>
      </div>
    `;
  }

  function updateGallerySlide(index) {
    currentSlideIndex = (index + automationSlides.length) % automationSlides.length;
    const mainImg = document.getElementById("galleryMainImg");
    const captionText = document.getElementById("galleryCaptionText");
    const thumbBtns = modalBody.querySelectorAll(".gallery-thumb-btn");

    if (mainImg && captionText) {
      mainImg.src = automationSlides[currentSlideIndex].src;
      captionText.textContent = automationSlides[currentSlideIndex].caption;
    }

    thumbBtns.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === currentSlideIndex);
    });
  }

  function bindGalleryControls() {
    const prevBtn = document.getElementById("prevSlideBtn");
    const nextBtn = document.getElementById("nextSlideBtn");
    const thumbBtns = modalBody.querySelectorAll(".gallery-thumb-btn");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => updateGallerySlide(currentSlideIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => updateGallerySlide(currentSlideIndex + 1));
    }
    thumbBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-gallery-idx"));
        updateGallerySlide(idx);
      });
    });
  }

  function openModal(projectKey, triggerEl, initialSlide = 0) {
    const data = projectDetails[projectKey];
    if (!data || !modal) return;

    lastFocusedTrigger = triggerEl;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;

    if (data.hasGallery) {
      modalBody.innerHTML = renderGalleryHtml() + data.html;
      bindGalleryControls();
      updateGallerySlide(initialSlide);
    } else {
      modalBody.innerHTML = data.html;
    }

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeModalBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedTrigger) {
      lastFocusedTrigger.focus();
    }
  }

  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectKey = btn.getAttribute("data-project");
      const slideParam = Number(btn.getAttribute("data-slide") || 0);
      openModal(projectKey, btn, slideParam);
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) {
      closeModal();
    }
  });

  // 6. Copy Email Button
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const copyFeedback = document.getElementById("copyFeedback");

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = "thesoftboys18@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
        copyFeedback.textContent = "Copied to clipboard!";
      } catch {
        copyFeedback.textContent = "Email: thesoftboys18@gmail.com";
      }
      setTimeout(() => {
        copyFeedback.textContent = "";
      }, 3000);
    });
  }

  // 7. Contact Form -> Pre-filled Mailto Launcher
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("senderName").value.trim();
      const email = document.getElementById("senderEmail").value.trim();
      const topic = document.getElementById("inquiryTopic").value;
      const message = document.getElementById("senderMessage").value.trim();

      if (!name || !email || !message) {
        formStatus.innerHTML =
          '<span style="color:#fcd34d;">Please fill in your name, email address, and message before sending.</span>';
        return;
      }

      const subject = encodeURIComponent(`[Portfolio Inquiry] ${topic} — ${name}`);
      const body = encodeURIComponent(
        `Hello Ekhator Destiny,\n\nName / Organization: ${name}\nReply Email: ${email}\nInquiry Type: ${topic}\n\nMessage:\n${message}\n`
      );

      window.location.href = `mailto:thesoftboys18@gmail.com?subject=${subject}&body=${body}`;
      formStatus.innerHTML =
        '<span style="color:#6ee7b7;">Opening your email app with your message addressed to thesoftboys18@gmail.com...</span>';
    });
  }
});