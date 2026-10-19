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
      "Hi, I'm **Kevin Abate**. I'm an MSc student in Computer Science & Engineering at Politecnico di Milano, on the Data Science & Software Engineering track.",
      "I'm a graduate researcher at [NECSTLab](https://necst.it/), where I build multi-agent LLM systems for autonomous incident response in Kubernetes ([SRE-agent](https://github.com/martinimarcello00/SRE-agent)). I also work on a deep-learning anomaly detector for Prometheus metrics, which the agents access through a custom MCP tool ([k8s-observability-mcp](https://github.com/martinimarcello00/k8s-observability-mcp)).",
      "I enjoy digging into hard problems: reading papers, understanding the stack, and iterating until it works. Examples include the [RecSys Challenge 2025](https://github.com/Keevin16/RecSys_Challenge_2025), a full-stack [Flutter app](https://github.com/Keevin16/DivAid-DIMA) where I developed the backend, and a [deep-learning project](https://github.com/Keevin16/ANN2DL-Polimi) on time-series classification and WSI detection.",
      "I'm expecting to graduate in April 2027 and am open to internships and new-grad roles in MLOps, AIOps, SRE, and Software Engineering. Feel free to reach out."
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
        name: "Internet of Things - Course",
        url: "https://github.com/Lorenzo-Pigato/IOT_25",
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
        description: "A performance-graded C program, no external libraries, on the test set judged on time and memory: ~0.27s, ~16.8 MB peak."
      }
    ]
  },

  experience: {
    work: [
      { when: "Jun 2026 — present", where: "NECSTLab", url: "https://necst.it/", role: "Graduate Student Researcher — RCA for K8s clusters" },
      { when: "Sep 2025 — present", where: "Google Developer Group PoliMi", url: "https://gdg.community.dev/gdg-on-campus-polytechnic-university-of-milan/", role: "Lead — GDG AI Hackathon (10+ countries) · now co-leading a team building an AI assistant for PoliMi students" },
      { when: "Sep 2025 — Dec 2026", where: "Teaching Assistant @ Politecnico di Milano", role: "Informatica A (current); previously Informatica B, Algoritmi e Principi dell'Informatica" }
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
