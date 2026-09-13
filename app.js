const STORAGE_KEY = "rafi-fiverr-sprint-v1";

const SERVICES = [
  {
    id: "canva",
    label: "Canva social-media posts",
    why: "Fast to learn. Easy to show. Many restaurants and shops need this.",
  },
  {
    id: "thumbs",
    label: "YouTube thumbnails",
    why: "One clear picture per video. Good if you already notice what makes people click.",
  },
  {
    id: "video",
    label: "Short-form captions and editing",
    why: "Reels, Shorts, and TikTok. Learn hooks, cuts, and captions only.",
  },
  {
    id: "slides",
    label: "Presentation redesign",
    why: "Take messy slides and make them clear. One skill: layout and type.",
  },
  {
    id: "wordpress",
    label: "Basic WordPress landing pages",
    why: "One page, not a full website. Theme + builder + contact form.",
  },
  {
    id: "photos",
    label: "Background removal and product photos",
    why: "Simple, useful, and easy to repeat. Good for shops.",
  },
  {
    id: "translate",
    label: "Dari–English or Dari–German translation",
    why: "Only if your language quality is already strong. Do not guess.",
  },
];

const SKILL_STUDY = {
  canva: [
    "Alignment: everything sits on a quiet invisible grid",
    "Spacing: equal gaps, no crowded corners",
    "Typography: two fonts maximum, readable size",
    "Color contrast: text must be easy to read",
    "Visual hierarchy: the eye sees the most important thing first",
    "Image selection: sharp, relevant, not stretched",
    "Brand consistency: same colors, logo, and style in every post",
    "Correct export sizes for Instagram, Facebook, or the platform you chose",
  ],
  thumbs: [
    "One face or one object, large enough to read on a phone",
    "High contrast colors",
    "Three to five words maximum",
    "Emotion or curiosity in the picture",
    "YouTube-safe composition (important parts not cropped)",
    "Export a sharp JPG or PNG at the right size",
  ],
  video: [
    "Hooks in the first 1–2 seconds",
    "Cutting and pacing: remove every dead second",
    "Captions that are easy to read",
    "Audio levels that are not too quiet or too loud",
    "Simple transitions, not circus effects",
    "Vertical video size (9:16)",
    "Export quality that stays sharp",
  ],
  slides: [
    "One idea per slide",
    "Large type and strong contrast",
    "Consistent layout from slide to slide",
    "Simple charts, not decoration",
    "Readable on a projector and on a laptop",
    "Export PDF plus editable source if the package includes it",
  ],
  wordpress: [
    "Hosting and WordPress basics",
    "Themes and a page builder",
    "Responsive layout on phone and desktop",
    "Clear navigation",
    "A working contact form",
    "Basic SEO titles and headings",
    "Security updates and a backup",
  ],
  photos: [
    "Clean background removal (no jagged edges)",
    "Natural shadows so the product does not float",
    "Matched color and brightness across a set",
    "Correct crop and file size for shops",
    "Save a transparent PNG and a web JPG",
  ],
  translate: [
    "Meaning first, then natural sentences",
    "Correct register (formal / informal)",
    "Names, numbers, and dates checked twice",
    "Do not deliver raw machine translation",
    "Proofread on paper or out loud",
    "Ask the client about industry words you do not know",
  ],
};

const TEMPLATES = [
  {
    id: "first",
    title: "First response",
    text: "Hello, thank you for contacting me. I understand that you need five Instagram posts for your restaurant’s new menu. I can help with that. Do you already have brand colors, a logo, and the final menu text? Also, when do you need the designs?",
  },
  {
    id: "clarify",
    title: "Requirements clarification",
    text: "Thanks for the extra detail. To keep the work accurate, I still need: 1) logo file, 2) brand colors, 3) the final text, 4) size or platform, and 5) your deadline. As soon as I have these, I can start.",
  },
  {
    id: "custom",
    title: "Custom offer",
    text: "I can create [number] [deliverable] for [customer type] in [days] days. The price is $[price] and includes [revisions] revision(s). It does not include [exclusion]. If this matches what you need, I can send a custom offer.",
  },
  {
    id: "progress",
    title: "Progress update",
    text: "A short update: I have finished the first drafts and I am now checking text, sizes, and brand colors. I am on track to deliver by [date]. I will message you as soon as the files are ready.",
  },
  {
    id: "missing",
    title: "Missing information",
    text: "I am ready to continue, but I cannot finish without [missing item]. Please send it when you can. The delivery timer still runs, so the sooner I receive it, the safer your deadline is.",
  },
  {
    id: "extension",
    title: "Deadline-extension request",
    text: "I want to keep the quality high. Because [reason], I need until [new time] to deliver. I will still send a progress file today. Please confirm if this new time works for you.",
  },
  {
    id: "revision",
    title: "Revision response",
    text: "Thank you for the notes. I will update [exactly what will change] and keep [what stays the same]. This fits inside the agreed revision scope. I will send the new files by [time].",
  },
  {
    id: "delivery",
    title: "Final delivery",
    text: "Hello [name], your order is complete. I have included [deliverables]. I also checked [quality checks]. Please review the attached files and let me know if you need a revision within the agreed scope.",
  },
  {
    id: "follow",
    title: "Follow-up",
    text: "Hello [name], I hope the files are working well. If you need a small revision inside the package, tell me this week. If you later need more [posts / pages / videos], I can help with that too.",
  },
];

const EXAM_AREAS = [
  { id: "req", label: "Understanding the brief" },
  { id: "quality", label: "Technical quality" },
  { id: "talk", label: "Communication" },
  { id: "time", label: "Deadline management" },
  { id: "files", label: "File organization" },
  { id: "pro", label: "Professionalism" },
];

const DAYS = [
  {
    id: 1,
    title: "Choose the service and the customer",
    goal: "Decide exactly what you will sell.",
    picture: "assets/day-1-choose.webp",
    pictureAlt: "A person choosing one shop stall from several options",
    plain: "Do not sell everything. Pick one simple job you can finish well after a few days of practice.",
    sections: [
      {
        when: "Morning",
        title: "Understand Fiverr",
        note: "Learn how the shop works before you open yours.",
        items: [
          { id: "d1-find", text: "Learn how clients find Gigs and buy them" },
          { id: "d1-fee", text: "Learn that Fiverr keeps 20% of the order price" },
          { id: "d1-flow", text: "Learn orders, requirements, revisions, and delivery" },
          { id: "d1-reviews", text: "Learn why reviews and a fast reply rate matter" },
          { id: "d1-rules", text: "Read the basic platform rules" },
          { id: "d1-fake", text: "Understand why fake orders and fake reviews are forbidden" },
        ],
      },
      {
        when: "Afternoon",
        title: "Select one service",
        note: "Choose something you can perform after several days of intensive practice.",
        extra: "picker",
        items: [
          { id: "d1-pick", text: "Choose one service from the list below" },
          { id: "d1-avoid", text: "Confirm you are not selling a full app, an advanced AI agent, or a complete marketing strategy" },
          { id: "d1-sentence", text: "Complete the offer sentence: I will provide [deliverable] to [customer] within [time]" },
          { id: "d1-research", text: "Research 20 competitors (title, price, reviews, packages, delivery, thumbnail, portfolio, praise, weakness, your difference)" },
        ],
      },
      {
        when: "End of day",
        title: "You are done when you have",
        extra: "deliverable",
        items: [
          { id: "d1-out-service", text: "One selected service" },
          { id: "d1-out-customer", text: "One target customer" },
          { id: "d1-out-keyword", text: "One main keyword" },
          { id: "d1-out-table", text: "Competitor-analysis table (use the notebook below)" },
          { id: "d1-out-offer", text: "One-sentence offer" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Learn the essential skill",
    goal: "Understand the complete production process.",
    picture: "assets/day-2-practice.webp",
    pictureAlt: "A learner recreating a tutorial design beside a laptop",
    plain: "Do not collect 20 courses. Follow this clock. Learn only what the selected service needs.",
    sections: [
      {
        when: "All day",
        title: "Learning structure",
        note: "Stay with this order. It is how a skill actually sticks.",
        items: [
          { id: "d2-90", text: "90 minutes: one focused beginner tutorial" },
          { id: "d2-60a", text: "60 minutes: recreate the tutorial result" },
          { id: "d2-30a", text: "30 minutes: study professional examples" },
          { id: "d2-90b", text: "90 minutes: recreate two professional examples" },
          { id: "d2-60b", text: "60 minutes: produce one original version" },
          { id: "d2-30b", text: "30 minutes: review and correct mistakes" },
        ],
      },
      {
        when: "Same day",
        title: "Learn only what the job needs",
        extra: "study",
        items: [
          { id: "d2-soft", text: "Main software" },
          { id: "d2-files", text: "File sizes and formats" },
          { id: "d2-principles", text: "Basic design or technical principles" },
          { id: "d2-inputs", text: "What the client must send you" },
          { id: "d2-export", text: "Export and delivery" },
          { id: "d2-qc", text: "Quality control" },
          { id: "d2-mistakes", text: "Common mistakes" },
        ],
      },
      {
        when: "End of day",
        title: "You are done when you have",
        extra: "deliverable",
        items: [
          { id: "d2-out-3", text: "Three recreated examples" },
          { id: "d2-out-1", text: "One original example" },
          { id: "d2-out-check", text: "A personal production checklist" },
          { id: "d2-out-gaps", text: "A list of problems that need more practice" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Create three portfolio projects",
    goal: "Produce convincing evidence of ability.",
    picture: "assets/day-3-portfolio.webp",
    pictureAlt: "Three different framed restaurant posters on a workshop wall",
    plain: "Make three related but different samples. Improve the best three. Do not make ten weak ones.",
    sections: [
      {
        when: "Example",
        title: "If you design restaurant posts, make",
        note: "Change the example to match your service.",
        items: [
          { id: "d3-p1", text: "Project 1 — e.g. Italian restaurant promotion" },
          { id: "d3-p2", text: "Project 2 — e.g. Afghan restaurant menu announcement" },
          { id: "d3-p3", text: "Project 3 — e.g. café weekend campaign" },
        ],
      },
      {
        when: "Each project",
        title: "Write a tiny case story",
        note: "Buyers trust process, not only pretty pictures.",
        items: [
          { id: "d3-story", text: "Short client scenario, problem, and design objective for each project" },
          { id: "d3-final", text: "Final work + tools used + why you made those choices" },
          { id: "d3-label", text: "Label fictional work honestly: “Concept project created to demonstrate my design process.”" },
        ],
      },
      {
        when: "Quality gate",
        title: "Accept a sample only if every answer is yes",
        items: [
          { id: "d3-q1", text: "Does it look or work professionally?" },
          { id: "d3-q2", text: "Is all text correct?" },
          { id: "d3-q3", text: "Is it consistent?" },
          { id: "d3-q4", text: "Does it match the customer?" },
          { id: "d3-q5", text: "Is the file the right size?" },
          { id: "d3-q6", text: "Is it better than an average beginner result?" },
          { id: "d3-q7", text: "Would a real business use it?" },
        ],
      },
      {
        when: "End of day",
        title: "You are done when you have",
        extra: "deliverable",
        items: [
          { id: "d3-out-3", text: "Three completed portfolio projects" },
          { id: "d3-out-gallery", text: "Six to nine gallery-quality images" },
          { id: "d3-out-source", text: "Organized source files" },
          { id: "d3-out-check", text: "Final quality checklist" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Build the offer and Fiverr profile",
    goal: "Turn the skill into something clients can purchase easily.",
    picture: "assets/day-4-offer.webp",
    pictureAlt: "Three price tags and a shop counter",
    plain: "A buyer should understand the price, the files, and the time in under one minute.",
    sections: [
      {
        when: "Packages",
        title: "Create three packages",
        extra: "packages",
        items: [
          { id: "d4-basic", text: "Basic: small, fast, still useful" },
          { id: "d4-standard", text: "Standard: the package you hope most people buy" },
          { id: "d4-premium", text: "Premium: more volume, templates, or extra care" },
          { id: "d4-scope", text: "Write what is included and what is excluded" },
          { id: "d4-need", text: "Write the files and facts the buyer must send" },
          { id: "d4-time", text: "Set delivery time and revision limits (never “unlimited”)" },
          { id: "d4-source", text: "Decide if source files are included or extra" },
          { id: "d4-extras", text: "List extra services and extra costs" },
        ],
      },
      {
        when: "Money",
        title: "Calculate pricing",
        extra: "price",
        items: [
          { id: "d4-fee", text: "Remember: net Fiverr earnings = order price × 0.80" },
          { id: "d4-cover", text: "Price must cover production, messages, revisions, Fiverr’s fee, software, taxes, and profit" },
        ],
      },
      {
        when: "Profile",
        title: "Complete the Fiverr profile",
        note: "Bio formula: I help [customer] with [result]. I specialize in [service and tools]. My process includes [quality steps]. Clients receive [deliverables and benefit].",
        items: [
          { id: "d4-photo", text: "Professional profile photograph" },
          { id: "d4-headline", text: "Specific headline" },
          { id: "d4-bio", text: "Short professional biography using the formula" },
          { id: "d4-skills", text: "Real skills, languages, education, and experience" },
          { id: "d4-port", text: "Upload the three portfolio projects" },
          { id: "d4-id", text: "Identity verification where Fiverr asks for it" },
        ],
      },
      {
        when: "End of day",
        title: "You are done when you have",
        extra: "deliverable",
        items: [
          { id: "d4-out-pack", text: "Three packages" },
          { id: "d4-out-price", text: "Final prices" },
          { id: "d4-out-scope", text: "Clear scope" },
          { id: "d4-out-profile", text: "Completed profile" },
          { id: "d4-out-form", text: "Requirements questionnaire" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Create and optimize the Gig",
    goal: "Publish a credible, relevant, and attractive Gig.",
    picture: "assets/day-5-gig.webp",
    pictureAlt: "A shop window with one strong picture and two smaller supporting pictures",
    plain: "Title formula: I will [specific result] for [specific customer]. Example: I will design branded Instagram posts for your restaurant.",
    sections: [
      {
        when: "Writing",
        title: "Write the Gig",
        items: [
          { id: "d5-title", text: "Write the title with the formula above" },
          { id: "d5-d1", text: "Description 1: target customer and problem" },
          { id: "d5-d2", text: "Description 2: expected result" },
          { id: "d5-d3", text: "Description 3: exact deliverables" },
          { id: "d5-d4", text: "Description 4: why you are suitable" },
          { id: "d5-d5", text: "Description 5: work process" },
          { id: "d5-d6", text: "Description 6: required client inputs" },
          { id: "d5-d7", text: "Description 7: exclusions" },
          { id: "d5-d8", text: "Description 8: which package to choose" },
          { id: "d5-d9", text: "Description 9: invite the buyer to message before ordering" },
        ],
      },
      {
        when: "Search",
        title: "Add the keyword in natural places",
        note: "Do not stuff unrelated keywords.",
        items: [
          { id: "d5-kw-title", text: "Gig title" },
          { id: "d5-kw-cat", text: "Correct category" },
          { id: "d5-kw-meta", text: "Metadata and search tags" },
          { id: "d5-kw-first", text: "First paragraph of the description" },
          { id: "d5-kw-pack", text: "Package descriptions" },
          { id: "d5-kw-faq", text: "FAQs" },
          { id: "d5-kw-gal", text: "Portfolio / gallery descriptions" },
        ],
      },
      {
        when: "Gallery",
        title: "Create the pictures",
        note: "Main thumbnail: one visual outcome, 3–5 readable words, high contrast, little clutter, no fake badges.",
        items: [
          { id: "d5-thumb", text: "One strong main thumbnail" },
          { id: "d5-two", text: "Two supporting portfolio images" },
          { id: "d5-video", text: "One short video if you can make it" },
        ],
      },
      {
        when: "FAQs",
        title: "Answer these buyer questions",
        items: [
          { id: "d5-faq1", text: "What do you need from the client?" },
          { id: "d5-faq2", text: "Which files are delivered?" },
          { id: "d5-faq3", text: "Are source files included?" },
          { id: "d5-faq4", text: "How do revisions work?" },
          { id: "d5-faq5", text: "What is not included?" },
          { id: "d5-faq6", text: "Can you match an existing brand?" },
          { id: "d5-faq7", text: "Can the client request custom quantities?" },
          { id: "d5-faq8", text: "Should the client contact you before ordering?" },
        ],
      },
      {
        when: "End of day",
        title: "You are done when you have",
        extra: "deliverable",
        items: [
          { id: "d5-out-gig", text: "Completed Gig (you may publish it today)" },
          { id: "d5-out-opt", text: "Optimized title and tags" },
          { id: "d5-out-desc", text: "Description + FAQs + three packages + gallery + requirements form" },
          { id: "d5-out-train", text: "Keep training on days 6 and 7 even if the Gig is live" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Sales and order simulation",
    goal: "Handle clients without needing someone to sit next to you.",
    picture: "assets/day-6-clients.webp",
    pictureAlt: "Two people talking, with one clear message and one messy message",
    plain: "Practise with a friend, a mentor, or even yourself in two browser windows. Personalize every template before you send it.",
    sections: [
      {
        when: "Templates",
        title: "Create eight reusable messages",
        extra: "templates",
        items: [
          { id: "d6-t1", text: "First response" },
          { id: "d6-t2", text: "Requirements clarification" },
          { id: "d6-t3", text: "Custom offer" },
          { id: "d6-t4", text: "Progress update" },
          { id: "d6-t5", text: "Missing information" },
          { id: "d6-t6", text: "Deadline-extension request" },
          { id: "d6-t7", text: "Revision response" },
          { id: "d6-t8", text: "Final delivery + follow-up" },
        ],
      },
      {
        when: "Practice",
        title: "Run three simulated orders",
        items: [
          { id: "d6-s1", text: "Simulation 1 — Normal buyer: clear needs, fair deadline, one revision" },
          { id: "d6-s2", text: "Simulation 2 — Unclear buyer: missing files and vague wishes. You must ask questions." },
          { id: "d6-s3", text: "Simulation 3 — Difficult scope: low budget, impossible deadline, extra requests. Negotiate or politely refuse." },
        ],
      },
      {
        when: "Show that you can",
        title: "In every simulation, do these",
        items: [
          { id: "d6-g1", text: "Gather requirements" },
          { id: "d6-g2", text: "Confirm scope" },
          { id: "d6-g3", text: "Explain the price" },
          { id: "d6-g4", text: "Create a custom offer" },
          { id: "d6-g5", text: "Send a progress message" },
          { id: "d6-g6", text: "Check quality" },
          { id: "d6-g7", text: "Handle a revision" },
          { id: "d6-g8", text: "Deliver the final files" },
        ],
      },
      {
        when: "End of day",
        title: "You are done when you have",
        extra: "deliverable",
        items: [
          { id: "d6-out-t", text: "Eight reusable message templates" },
          { id: "d6-out-s", text: "Three completed simulations" },
          { id: "d6-out-c", text: "Custom-offer template" },
          { id: "d6-out-d", text: "Delivery checklist" },
          { id: "d6-out-p", text: "Problem-buyer checklist" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Final test, publishing, and promotion",
    goal: "Become operationally ready.",
    picture: "assets/day-7-launch.webp",
    pictureAlt: "A workshop door opening with an OPEN ribbon, laptop, and completed checklist",
    plain: "Morning = exam. Afternoon = go live only if the work is good enough.",
    sections: [
      {
        when: "Morning",
        title: "Final practical examination",
        note: "Give yourself a new project with no instructions. Work alone.",
        extra: "exam",
        items: [
          { id: "d7-e1", text: "Understand the brief" },
          { id: "d7-e2", text: "Ask the necessary questions" },
          { id: "d7-e3", text: "Estimate the time" },
          { id: "d7-e4", text: "Confirm the scope" },
          { id: "d7-e5", text: "Complete the work" },
          { id: "d7-e6", text: "Do quality assurance" },
          { id: "d7-e7", text: "Organize the files" },
          { id: "d7-e8", text: "Write a professional delivery message" },
        ],
      },
      {
        when: "Afternoon",
        title: "Publish and promote — only if quality scored 4 or more",
        items: [
          { id: "d7-desk", text: "Check the Gig on desktop and mobile" },
          { id: "d7-spell", text: "Correct spelling and formatting" },
          { id: "d7-thumb", text: "Test whether the thumbnail is readable" },
          { id: "d7-pack", text: "Confirm package details" },
          { id: "d7-bell", text: "Turn on Fiverr notifications and install the mobile app" },
          { id: "d7-quick", text: "Keep quick responses ready" },
          { id: "d7-share", text: "Share the Gig with relevant personal or professional contacts — no spam" },
          { id: "d7-social", text: "Post portfolio examples on LinkedIn or another fitting place" },
          { id: "d7-fake", text: "Do not buy fake traffic, orders, or reviews" },
        ],
      },
      {
        when: "End of day",
        title: "You are done when you have",
        extra: "deliverable",
        items: [
          { id: "d7-out-gig", text: "One published Gig" },
          { id: "d7-out-3", text: "Three portfolio projects" },
          { id: "d7-out-pack", text: "Three clear packages" },
          { id: "d7-out-pro", text: "Professional profile" },
          { id: "d7-out-msg", text: "Communication templates" },
          { id: "d7-out-del", text: "Tested delivery process" },
          { id: "d7-out-sheet", text: "Weekly analytics sheet" },
          { id: "d7-out-30", text: "30-day improvement plan" },
        ],
      },
    ],
  },
];

function emptyState() {
  return {
    name: "Rafi",
    lang: "en",
    startDate: "",
    service: "",
    checks: {},
    offer: { deliverable: "", customer: "", period: "" },
    price: "50",
    competitors: Array.from({ length: 5 }, () => ({
      title: "",
      price: "",
      reviews: "",
      weak: "",
      difference: "",
    })),
    scores: {},
    openDays: { 1: true },
  };
}

function detectLang() {
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "prs" || param === "dari" || param === "fa") return "prs";
  if (param === "en") return "en";
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("fa") || nav.startsWith("prs") || nav.startsWith("ps")) return "prs";
  return "en";
}

function t(key) {
  const pack = I18N[state.lang] || I18N.en;
  return pack[key] ?? I18N.en[key] ?? key;
}

function itemText(item) {
  if (state.lang === "prs" && ITEM_PRS[item.id]) return ITEM_PRS[item.id];
  return item.text;
}

function serviceCopy(service) {
  if (state.lang === "prs" && SERVICES_PRS[service.id]) {
    return { ...service, ...SERVICES_PRS[service.id] };
  }
  return service;
}

function studyLines(serviceId) {
  if (state.lang === "prs" && STUDY_PRS[serviceId]) return STUDY_PRS[serviceId];
  return SKILL_STUDY[serviceId];
}

function localizedDay(day) {
  if (state.lang !== "prs" || !DAY_PRS[day.id]) return day;
  const extra = DAY_PRS[day.id];
  return {
    ...day,
    title: extra.title,
    goal: extra.goal,
    plain: extra.plain,
    pictureAlt: extra.pictureAlt || day.pictureAlt,
    sections: day.sections.map((section, index) => ({
      ...section,
      ...(extra.sections[index] || {}),
    })),
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const base = emptyState();
    if (!raw) {
      base.lang = detectLang();
      return base;
    }
    const merged = { ...base, ...JSON.parse(raw) };
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "prs" || param === "dari" || param === "fa") merged.lang = "prs";
    if (param === "en") merged.lang = "en";
    return merged;
  } catch {
    const base = emptyState();
    base.lang = detectLang();
    return base;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function allItemIds() {
  return DAYS.flatMap((day) => day.sections.flatMap((section) => section.items.map((item) => item.id)));
}

let state = loadState();

function dayProgress(day) {
  const ids = day.sections.flatMap((section) => section.items.map((item) => item.id));
  const done = ids.filter((id) => state.checks[id]).length;
  return { done, total: ids.length, complete: done === ids.length && ids.length > 0 };
}

function currentDayNumber() {
  if (!state.startDate) return 0;
  const start = new Date(`${state.startDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / 86400000) + 1;
  if (diff < 1 || diff > 7) return 0;
  return diff;
}

function renderWeekMap() {
  const root = document.getElementById("week");
  const labels = t("weekLabels");
  const today = currentDayNumber();
  root.innerHTML = DAYS.map((day) => {
    const progress = dayProgress(day);
    const classes = [
      progress.complete ? "done" : "",
      today === day.id ? "today" : "",
    ]
      .filter(Boolean)
      .join(" ");
    return `<a class="${classes}" href="#day-${day.id}">
      <b>${t("dayStamp")(day.id)}</b>
      <span>${labels[day.id - 1]}</span>
      <span>${progress.done}/${progress.total}</span>
    </a>`;
  }).join("");
}

function renderTask(item) {
  const checked = Boolean(state.checks[item.id]);
  return `<label class="task${checked ? " done" : ""}">
    <input type="checkbox" data-check="${item.id}" ${checked ? "checked" : ""}>
    <span>${itemText(item)}</span>
  </label>`;
}

function renderPicker() {
  return `<div class="choices" role="list">
    ${SERVICES.map((service) => {
      const copy = serviceCopy(service);
      return `<button type="button" class="choice${state.service === service.id ? " selected" : ""}" data-service="${service.id}" aria-pressed="${state.service === service.id}">
      <b>${copy.label}</b>
      <span>${copy.why}</span>
    </button>`;
    }).join("")}
  </div>
  <div class="warn">${t("avoid")}</div>`;
}

function renderStudy() {
  const extra = studyLines(state.service);
  if (!extra) {
    return `<p class="plain">${t("studyWait")}</p>`;
  }
  const service = serviceCopy(SERVICES.find((item) => item.id === state.service));
  return `<div class="plain"><strong>${escapeHtml(t("studyBecause")(service.label))}</strong>
    <ul>${extra.map((line) => `<li>${line}</li>`).join("")}</ul>
  </div>`;
}

function renderFormula() {
  const { deliverable, customer, period } = state.offer;
  const sentence = t("offerSentence")(deliverable, customer, period);
  return `<div class="formula">
    <strong>${t("formulaTitle")}</strong>
    <div class="row">
      <label>${t("deliverable")}<input data-offer="deliverable" value="${escapeHtml(deliverable)}" placeholder="${escapeHtml(t("phDeliverable"))}"></label>
      <label>${t("customer")}<input data-offer="customer" value="${escapeHtml(customer)}" placeholder="${escapeHtml(t("phCustomer"))}"></label>
      <label>${t("period")}<input data-offer="period" value="${escapeHtml(period)}" placeholder="${escapeHtml(t("phPeriod"))}"></label>
    </div>
    <p class="preview">${escapeHtml(sentence)}</p>
  </div>`;
}

function renderCompetitors() {
  const rows = state.competitors
    .map((row, index) => `<tr>
      <td>${index + 1}</td>
      <td><input data-comp="${index}" data-field="title" value="${escapeHtml(row.title)}" placeholder="${escapeHtml(t("phTitle"))}"></td>
      <td><input data-comp="${index}" data-field="price" value="${escapeHtml(row.price)}" placeholder="$"></td>
      <td><input data-comp="${index}" data-field="reviews" value="${escapeHtml(row.reviews)}" placeholder="12 / 5.0"></td>
      <td><input data-comp="${index}" data-field="weak" value="${escapeHtml(row.weak)}" placeholder="${escapeHtml(t("phWeak"))}"></td>
      <td><input data-comp="${index}" data-field="difference" value="${escapeHtml(row.difference)}" placeholder="${escapeHtml(t("phDiff"))}"></td>
    </tr>`)
    .join("");
  return `<div class="widget">
    <p>${t("competitorNote")}</p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>${t("thNum")}</th><th>${t("thTitle")}</th><th>${t("thPrice")}</th><th>${t("thReviews")}</th><th>${t("thWeak")}</th><th>${t("thDiff")}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="actions">
      <button class="ghost" type="button" data-add-competitor>${t("addCompetitor")}</button>
    </div>
  </div>`;
}

function renderPackages() {
  return `<div class="table-wrap">
    <table>
      <thead><tr><th>${t("packHead")}</th><th>${t("packDeliverable")}</th><th>${t("packDelivery")}</th><th>${t("packRevisions")}</th></tr></thead>
      <tbody>
        <tr><td>${t("packBasic")}</td><td>${t("packBasicWhat")}</td><td>${t("packDays")(3)}</td><td>1</td></tr>
        <tr><td>${t("packStandard")}</td><td>${t("packStdWhat")}</td><td>${t("packDays")(4)}</td><td>2</td></tr>
        <tr><td>${t("packPremium")}</td><td>${t("packPremWhat")}</td><td>${t("packDays")(6)}</td><td>3</td></tr>
      </tbody>
    </table>
  </div>
  <p class="plain">${t("packHint")}</p>`;
}

function renderPrice() {
  const price = Number(state.price) || 0;
  const keep = Math.round(price * 80) / 100;
  const fee = Math.round((price - keep) * 100) / 100;
  return `<div class="widget">
    <label>${t("orderPrice")}
      <input data-price type="number" min="0" step="1" value="${escapeHtml(state.price)}">
    </label>
    <div class="price-out">
      <div><span>${t("fiverrKeeps")}</span><b>$${fee.toFixed(2)}</b></div>
      <div><span>${t("youKeep")}</span><b>$${keep.toFixed(2)}</b></div>
    </div>
    <p>${t("leftover")}</p>
  </div>`;
}

function renderTemplates() {
  return `<p class="plain">${t("templateNote")}</p>
  <div class="copy-list">
    ${TEMPLATES.map((item) => `<article class="copy-card">
      <header>
        <strong>${state.lang === "prs" ? TEMPLATES_PRS_META[item.id] : item.title}</strong>
        <button type="button" data-copy="${escapeHtml(item.text)}">${t("copy")}</button>
      </header>
      <p lang="en" dir="ltr">${escapeHtml(item.text)}</p>
    </article>`).join("")}
  </div>`;
}

function renderExam() {
  const labels = t("exam");
  const rows = EXAM_AREAS.map((area) => {
    const value = Number(state.scores[area.id] || 0);
    const pass = value >= 4;
    const fail = value > 0 && value < 4;
    return `<label class="score${pass ? " pass" : ""}${fail ? " fail" : ""}">
      <span>${labels[area.id]} ${t("passMark")}</span>
      <input data-score="${area.id}" type="number" min="1" max="5" value="${value || ""}" placeholder="1–5">
      <output>${value ? `${value}/5` : "—"}</output>
    </label>`;
  }).join("");
  const quality = Number(state.scores.quality || 0);
  const blocked = quality > 0 && quality < 4;
  return `<div class="widget">
    <p>${t("examIntro")}</p>
    <div class="scores">${rows}</div>
    <p class="warn" id="exam-gate"${blocked ? "" : " hidden"}>${t("examGate")}</p>
  </div>`;
}

function extraHtml(kind) {
  switch (kind) {
    case "picker":
      return `${renderPicker()}${renderFormula()}${renderCompetitors()}`;
    case "study":
      return renderStudy();
    case "packages":
      return renderPackages();
    case "price":
      return renderPrice();
    case "templates":
      return renderTemplates();
    case "exam":
      return renderExam();
    default:
      return "";
  }
}

function renderDay(rawDay) {
  const day = localizedDay(rawDay);
  const progress = dayProgress(rawDay);
  const open = Boolean(state.openDays[rawDay.id]);
  const today = currentDayNumber() === rawDay.id;
  return `<article class="day${open ? " open" : ""}" id="day-${rawDay.id}">
    <button class="day-summary" type="button" data-toggle="${rawDay.id}" aria-expanded="${open}">
      <div class="day-art">
        <img src="${day.picture}" width="280" height="280" alt="${escapeHtml(day.pictureAlt)}">
      </div>
      <div>
        <span class="stamp">${t("dayStamp")(rawDay.id)}</span>
        <h2>${day.title}</h2>
        <p><strong>${t("goalWord")}</strong> ${day.goal}${today ? ` · ${t("todayWork")}` : ""}</p>
        <p data-day-progress="${rawDay.id}">${t("boxes")(progress.done, progress.total, progress.complete)}</p>
      </div>
      <span class="chevron" aria-hidden="true"></span>
    </button>
    <div class="day-body">
      <p class="plain">${day.plain}</p>
      ${day.sections
        .map((section) => `<section class="block">
          <p class="when">${section.when}</p>
          <h3>${section.title}</h3>
          ${section.note ? `<p>${section.note}</p>` : ""}
          <div class="${section.extra === "deliverable" ? "deliverables" : ""}">
            ${section.items.map(renderTask).join("")}
          </div>
          ${section.extra && section.extra !== "deliverable" ? extraHtml(section.extra) : ""}
        </section>`)
        .join("")}
    </div>
  </article>`;
}

function updateProgress() {
  const ids = allItemIds();
  const done = ids.filter((id) => state.checks[id]).length;
  document.getElementById("progress-text").textContent = `${done} / ${ids.length} ${t("tasks")}`;
  document.getElementById("progress-bar").style.width = `${ids.length ? (done / ids.length) * 100 : 0}%`;
  const name = state.name.trim() || "Rafi";
  document.getElementById("learner-label").textContent = `${name} · ${t("sprintSub")}`;
}

function applyStaticLang() {
  const rtl = state.lang === "prs";
  document.documentElement.lang = rtl ? "fa-AF" : "en";
  document.documentElement.dir = rtl ? "rtl" : "ltr";
  document.title = t("docTitle");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t("docDesc"));
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.getAttribute("data-lang") === state.lang;
    button.setAttribute("aria-pressed", String(active));
    button.classList.toggle("active", active);
  });
}

function setLang(lang) {
  state.lang = lang === "prs" ? "prs" : "en";
  const url = new URL(window.location.href);
  url.searchParams.set("lang", state.lang);
  window.history.replaceState({}, "", url);
  saveState();
  render();
}

function render() {
  const scrollY = window.scrollY;
  applyStaticLang();
  document.getElementById("learner-name").value = state.name;
  document.getElementById("start-date").value = state.startDate;
  renderWeekMap();
  document.getElementById("days").innerHTML = DAYS.map(renderDay).join("");
  updateProgress();
  window.scrollTo(0, scrollY);
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const button = document.activeElement;
    if (button && button.tagName === "BUTTON") {
      const original = t("copy");
      button.textContent = t("copied");
      setTimeout(() => {
        button.textContent = original;
      }, 1200);
    }
  });
}

document.querySelector(".lang-switch").addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (!button) return;
  setLang(button.getAttribute("data-lang"));
});

document.getElementById("learner-name").addEventListener("input", (event) => {
  state.name = event.target.value;
  saveState();
  updateProgress();
});

document.getElementById("start-date").addEventListener("change", (event) => {
  state.startDate = event.target.value;
  const today = currentDayNumber();
  if (today) state.openDays[today] = true;
  saveState();
  render();
});

document.getElementById("days").addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle]");
  if (toggle) {
    const id = toggle.getAttribute("data-toggle");
    state.openDays[id] = !state.openDays[id];
    saveState();
    render();
    return;
  }

  const service = event.target.closest("[data-service]");
  if (service) {
    state.service = service.getAttribute("data-service");
    saveState();
    render();
    return;
  }

  const add = event.target.closest("[data-add-competitor]");
  if (add) {
    state.competitors.push({ title: "", price: "", reviews: "", weak: "", difference: "" });
    saveState();
    render();
    return;
  }

  const copy = event.target.closest("[data-copy]");
  if (copy) {
    copyText(copy.getAttribute("data-copy"));
  }
});

document.getElementById("days").addEventListener("change", (event) => {
  const check = event.target.closest("[data-check]");
  if (!check) return;
  state.checks[check.getAttribute("data-check")] = check.checked;
  saveState();
  check.closest(".task").classList.toggle("done", check.checked);
  updateProgress();
  renderWeekMap();
  const article = check.closest(".day");
  if (!article) return;
  const dayId = Number(article.id.replace("day-", ""));
  const day = DAYS.find((item) => item.id === dayId);
  const progress = dayProgress(day);
  const label = article.querySelector("[data-day-progress]");
  if (label) {
    label.textContent = t("boxes")(progress.done, progress.total, progress.complete);
  }
});

document.getElementById("days").addEventListener("input", (event) => {
  const offer = event.target.closest("[data-offer]");
  if (offer) {
    state.offer[offer.getAttribute("data-offer")] = offer.value;
    saveState();
    const preview = document.querySelector(".preview");
    if (preview) {
      preview.textContent = t("offerSentence")(
        state.offer.deliverable,
        state.offer.customer,
        state.offer.period
      );
    }
    return;
  }

  const price = event.target.closest("[data-price]");
  if (price) {
    state.price = price.value;
    saveState();
    const amount = Number(state.price) || 0;
    const keep = Math.round(amount * 80) / 100;
    const fee = Math.round((amount - keep) * 100) / 100;
    const boxes = document.querySelectorAll(".price-out b");
    if (boxes[0]) boxes[0].textContent = `$${fee.toFixed(2)}`;
    if (boxes[1]) boxes[1].textContent = `$${keep.toFixed(2)}`;
    return;
  }

  const score = event.target.closest("[data-score]");
  if (score) {
    const id = score.getAttribute("data-score");
    state.scores[id] = score.value;
    saveState();
    const value = Number(score.value || 0);
    const row = score.closest(".score");
    row.classList.toggle("pass", value >= 4);
    row.classList.toggle("fail", value > 0 && value < 4);
    const output = row.querySelector("output");
    if (output) output.textContent = value ? `${value}/5` : "—";
    const gate = document.getElementById("exam-gate");
    if (gate) {
      const quality = Number(state.scores.quality || 0);
      gate.hidden = !(quality > 0 && quality < 4);
    }
    return;
  }

  const comp = event.target.closest("[data-comp]");
  if (comp) {
    const index = Number(comp.getAttribute("data-comp"));
    state.competitors[index][comp.getAttribute("data-field")] = comp.value;
    saveState();
  }
});

document.getElementById("expand-all").addEventListener("click", () => {
  DAYS.forEach((day) => {
    state.openDays[day.id] = true;
  });
  saveState();
  render();
});

document.getElementById("reset-progress").addEventListener("click", () => {
  const ok = window.confirm(t("resetConfirm"));
  if (!ok) return;
  const name = state.name;
  const startDate = state.startDate;
  const lang = state.lang;
  state = emptyState();
  state.name = name;
  state.startDate = startDate;
  state.lang = lang;
  saveState();
  render();
});

render();
