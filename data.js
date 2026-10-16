/* All site content lives here. Edit this file to update the site. */
window.DATA = {
  profile: {
    name: "Kevin Abate",
    email: "keevinabate@gmail.com",
    githubUrl: "https://github.com/Keevin16",
    linkedinUrl: "https://www.linkedin.com/in/kevin-abate-1875b9259/",
    resumeUrl: "assets/Kevin_Abate_Resume.pdf"
  },

  about: {
    portrait: "assets/photo.jpg?v=2",
    paragraphs: [
      "Hi, I'm **Kevin Abate**. I'm a MSc student in Computer Science & Engineering at Politecnico di Milano, on the Data Science & Software Engineering track.",
      "I'm a graduate researcher at [NECSTLab](https://necst.it/), building multi-agent LLM systems for autonomous incident response in Kubernetes ([SRE-agent](https://github.com/martinimarcello00/SRE-agent)), with a deep-learning anomaly detector on Prometheus metrics exposed to the agents through a custom MCP tool. I like problems that span the stack and challenge myself, examples of that is the [RecSys challenge](https://github.com/Keevin16/RecSys_Challenge_2025), a full-stack [Flutter app](https://github.com/Keevin16/DivAid-DIMA) where I developped the back end, a [deep-learning model](https://github.com/Keevin16/ANN2DL-Polimi) were we did classification on time series and detection on WSI.",
      "Expecting to graduate on Apr 2027, open to internships and new-grad roles in ML / MLOps / AIops / SE. Happy to chat."
    ]
  },

  projects: {
    items: [
      {
        year: 2026,
        name: "Autonomous Root Cause Analysis Agent",
        url: "https://github.com/martinimarcello00/SRE-agent",
        mcp: "https://github.com/martinimarcello00/k8s-observability-mcp",
        description: "A multi-agent LLM system (LangGraph + MCP) that detects and localize incidents in Kubernetes clusters. Ongoing research at NECSTLab, paired with a custom Kubernetes-observability MCP server."
      },
      {
        year: 2026,
        name: "DivAid — Expense-Splitting Mobile App",
        url: "https://github.com/Keevin16/DivAid-DIMA",
        description: "Full-stack Flutter app (Android / iOS / Web) for shared expenses: multi-currency balances, greedy debt minimisation, Stripe in-app wallet, LLaMA 4 Vision receipt OCR."
      },
      {
        year: 2026,
        name: "Laterizi D.S. — Company Website",
        url: "https://laterizids.it/",
        description: "Official commercial website and product catalog developed for a building materials and masonry supplier: custom database for product and inventory management, responsive design, performance optimization, and structured SEO metadata."
      },
      {
        year: 2025,
        name: "Deep Learning — Medical Imaging & Time Series",
        url: "https://github.com/Keevin16/ANN2DL-Polimi",
        description: "Two Kaggle competitions among ~200 teams. Top 5% on breast-cancer WSI sub-typing with pathology foundation models (UNI, Virchow2); top 20% on pain-level classification with a 1D-CNN + LSTM + self-attention hybrid."
      },
      {
        year: 2025,
        name: "Recommender System — Hybrid Stacking",
        url: "https://github.com/Keevin16/RecSys_Challenge_2025",
        description: "7th of 70+ teams on the PoliMi RecSys 2025 Challenge (27k users, 7k items). Collaborative-filtering candidate generation re-ranked by XGBoost, tuned with Optuna on MAP@10, hot paths in Cython."
      },
      {
        year: 2024,
        name: "Software Engineering II — Requirements & Design",
        url: "https://github.com/Keevin16/Software-Engineering-2",
        description: "A full RASD and Design Document: use cases, domain assumptions, formal specification in Alloy, architecture and runtime views."
      },
      {
        year: 2024,
        name: "Internet of Things — Course Challenges",
        url: "https://github.com/Keevin16/IOT25",
        description: "Embedded and networked-sensor assignments taken in place of the IoT theory exam."
      },
      {
        year: 2024,
        name: "Fixed-Point Exponential Filter",
        url: "https://github.com/Keevin16/Filtro-Esponenziale-Fixed-Point",
        description: "First-order exponential smoothing in fixed-point arithmetic, described and simulated in VHDL."
      },
      {
        year: 2023,
        name: "Codex Naturalis — Networked Board Game",
        url: "https://github.com/Keevin16/IS24-LB10",
        description: "Client–server Java implementation of the board game: one jar runs either side, CLI or JavaFX, MVC with a Visitor dispatch. 97% line coverage on the model."
      },
      {
        year: 2023,
        name: "Algorithms & Data Structures — Final Project",
        url: "https://github.com/Keevin16/PFAPI23",
        description: "A performance-graded C program, no external libraries, judged on time and memory: ~0.27s, ~16.8 MB peak."
      }
    ]
  },

  experience: {
    work: [
      { when: "Jun 2026 — present", where: "NECSTLab", url: "https://necst.it/", role: "Graduate Student Researcher — LLM agents for AIOps" },
      { when: "Sep 2025 — present", where: "Google Developer Group PoliMi", url: "https://gdgaihack.com/", role: "Lead — GDG AI Hackathon, 10+ countries" },
      { when: "Sep 2025 — Dec 2026", where: "Politecnico di Milano", role: "Teaching Assistant — Informatica A (current); previously Informatica B, Algoritmi e Principi dell'Informatica" }
    ],
    education: [
      { when: "Sep 2024 — Apr 2027", where: "Politecnico di Milano", role: "M.Sc. Computer Science & Engineering — Data Science & Software Engineering" },
      { when: "Sep 2021 — Jul 2024", where: "Politecnico di Milano", role: "B.Sc. Computer Science Engineering" }
    ],
    awards: [
      "Kaggle — Top 5% (F1 0.447), breast-cancer WSI sub-typing with pathology foundation models, ~200 teams.",
      "Kaggle — Top 20% (F1 0.92), multivariate time-series pain-level classification, ~200 teams.",
      "7th place / 70+ teams — Politecnico di Milano Recommender Systems 2025 Challenge.",
      "Languages: Italian (native), English (fluent, English-taught M.Sc.)."
    ]
  },

  skills: {
    groups: [
      { name: "Languages", items: "Python · Java · C / C++ · Dart · TypeScript · MATLAB · VHDL · SQL" },
      { name: "ML & Data", items: "PyTorch · TensorFlow / Keras · scikit-learn · Optuna · CatBoost · XGBoost · pandas · NumPy" },
      { name: "LLM & Agents", items: "LangChain · LangGraph · Model Context Protocol (MCP)" },
      { name: "Mobile & Full-stack", items: "Flutter · Firebase · Cloud Functions · Stripe API" },
      { name: "Infra & Tools", items: "Git · Docker · Kubernetes · Prometheus" },
      { name: "Databases", items: "MySQL · MongoDB · Neo4j · Redis" }
    ]
  }
};
