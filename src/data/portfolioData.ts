import {
  Publication,
  OngoingResearch,
  ResearchInterest,
  OrganizationExperience,
  Project,
  SkillCategory,
  EducationDetail
} from '../types';

export const PERSONAL_INFO = {
  name: "Mursyid Nur Fahmi",
  shortName: "Mursyid",
  nim: "2310432024",
  batch: "2023",
  title: "Mathematics Undergraduate Student & Young Researcher",
  institution: "Universitas Andalas",
  faculty: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
  department: "Departemen Matematika dan Sains Data",
  program: "S1 Matematika (Pure Mathematics)",
  status: "Undergraduate Student",
  location: "Padang, Sumatera Barat, Indonesia",
  tagline: "Exploring Mathematics. Creating Solutions. Making an Impact.",
  smallTagline: "MATHEMATICS STUDENT | RESEARCHER | PROBLEM SOLVER",
  bio: "A mathematics student with strong analytical thinking and problem-solving skills, as well as attention to detail. Has experience in organizations and event committees, and is able to work collaboratively, adapt to new environments, and is passionate about continuous learning and growth.",
  heroQuote: "I believe mathematics is more than numbers and equations. It is a language of logic, a tool for understanding complexity, and a foundation for solving real-world problems.",
  philosophy: "Trying new things",
  email: "mursyidnurfahmi@gmail.com",
  secondaryEmail: "2310432024_mursyid@student.unand.ac.id",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com/in/mursyid-nur-fahmi",
    scholar: "https://scholar.google.com/citations?user=mursyid-nur-fahmi",
    instagram: "https://instagram.com/diysrum_",
    doi: "https://doi.org/10.33086/atcsj.v8i2.8491"
  }
};

export const EDUCATION_DATA: EducationDetail = {
  institution: "Universitas Andalas",
  degree: "Bachelor of Science in Mathematics (S1 Matematika)",
  faculty: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
  department: "Departemen Matematika dan Sains Data",
  period: "2023 – Present",
  status: "Active Undergraduate Student",
  location: "Padang, Sumatera Barat, Indonesia",
  summary: "Focused on rigorous mathematical foundations, analytical reasoning, mathematical modeling, numerical methods, and operations research.",
  coursework: [
    "Kalkulus",
    "Analisis Data",
    "Pengantar Matematika",
    "Aljabar Linier Elementer",
    "Geometri Analitik",
    "Matematika Diskrit",
    "Algoritma dan Pemrograman",
    "Program Linier",
    "Pengantar Teori Bilangan",
    "Struktur Aljabar",
    "Analisis Riil",
    "Metode Numerik",
    "Persamaan Differensial",
    "Statistika Matematika",
    "Pengenalan Sains Data",
    "Fungsi Kompleks"
  ]
};

export const ACADEMIC_INTERESTS: string[] = [
  "Applied Mathematics",
  "Operations Research",
  "Mathematical Modeling",
  "Optimization",
  "Cryptography",
  "Computational Mathematics"
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    title: "Mathematical Modeling",
    description: "Formulating real-world dynamic processes—from human cognitive decay curves to geophysical flows—into coupled systems of differential equations.",
    iconName: "Binary",
    tags: ["Differential Equations", "Dynamical Systems", "Parameter Estimation"]
  },
  {
    title: "Optimization & Operations Research",
    description: "Developing linear, non-linear, and discrete optimization algorithms to maximize efficiency, resource allocation, and mitigation placement.",
    iconName: "TrendingUp",
    tags: ["Linear Programming", "Simplex Method", "Constrained Optimization"]
  },
  {
    title: "Applied Cryptography",
    description: "Investigating algebraic number theory, discrete logarithms, elliptic curve point arithmetic, and cryptographic vulnerability assessments.",
    iconName: "ShieldCheck",
    tags: ["Elliptic Curves", "Cipher Security", "Number Theory"]
  },
  {
    title: "Mathematical Simulation",
    description: "Implementing discrete-event and continuous numerical simulations to predict systemic behaviors under varying initial conditions.",
    iconName: "Cpu",
    tags: ["Numerical Analysis", "Euler & Runge-Kutta", "Python / MATLAB"]
  },
  {
    title: "Disaster & Flood Modeling",
    description: "Applying hydraulic shallow water equations (Saint-Venant equations) to simulate flash floods and optimize physical barrier locations.",
    iconName: "Waves",
    tags: ["Saint-Venant Equations", "Hydrology", "Mitigation Placement"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-ebbinghaus-2025",
    title: "Simulation and Optimization of Review Intervals Based on the Mathematical Model of the Ebbinghaus Forgetting Curve",
    authors: [
      "Radhiatul Husna",
      "Nabila Gusti Rohima",
      "Alwan Ronan",
      "Mursyid Nur Fahmi",
      "Amma Liesvarastranta Haz",
      "Evianita Dewi Fajrianti"
    ],
    mursyidAuthorIndex: 3,
    institutions: [
      "Universitas Andalas, Padang, Indonesia",
      "Politeknik Elektronika Negeri Surabaya (PENS), Surabaya, Indonesia"
    ],
    journal: "Applied Technology and Computing Science Journal (ATCSJ)",
    volume: "8",
    issue: "2",
    pages: "69–79",
    year: 2025,
    doi: "10.33086/atcsj.v8i2.8491",
    doiUrl: "https://doi.org/10.33086/atcsj.v8i2.8491",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=mursyid-nur-fahmi",
    abstract: "Human memory naturally decays exponentially over time if left unreinforced, a phenomenon formalized by Hermann Ebbinghaus. While spaced repetition has been widely adopted in modern pedagogy, traditional review intervals are frequently determined through arbitrary heuristics (e.g., 2–7–30 days) rather than rigorous mathematical foundations. In this study, we formulate an extended mathematical model of the forgetting curve using coupled differential equations governing memory decay and acquisition. Model parameters were empirically estimated with a learning rate α = 0.70 and a forgetting coefficient λ = 0.30. Numerical simulations compared three paradigms: no review, random review, and threshold-optimized review (retention threshold ≥ 80%). The results establish an optimal initial review interval at t ≈ 1.098 days (approximately 26 hours and 32 minutes), significantly reducing cumulative cognitive decay and solidifying long-term memory consolidation.",
    keywords: ["Ebbinghaus Forgetting Curve", "Mathematical Modeling", "Differential Equations", "Spaced Repetition", "Numerical Simulation", "Retention Optimization"],
    equations: [
      "\\frac{dR(t)}{dt} = -\\lambda R(t) + \\sum_{k=1}^{n} \\alpha_k \\cdot \\delta(t - t_k)",
      "R(t) = R_0 e^{-\\lambda t}",
      "t^* = -\\frac{1}{\\lambda} \\ln\\left(\\frac{R_{threshold}}{R_0}\\right) \\approx 1.098 \\text{ days}"
    ],
    keyFindings: [
      "Formulated mathematical differential model capturing spontaneous retention decay and episodic reinforcement impulses.",
      "Empirically validated model parameters with learning factor α = 0.70 and exponential forgetting coefficient λ = 0.30.",
      "Mathematically derived an optimal review threshold time of t ≈ 1.098 days (~26h 32m) to maintain retention strictly above 80%."
    ],
    pdfAvailable: true,
    citationBibtex: `@article{husna2025simulation,
  author  = {Husna, Radhiatul and Rohima, Nabila Gusti and Ronan, Alwan and Fahmi, Mursyid Nur and Haz, Amma Liesvarastranta and Fajrianti, Evianita Dewi},
  title   = {Simulation and Optimization of Review Intervals Based on the Mathematical Model of the Ebbinghaus Forgetting Curve},
  journal = {Applied Technology and Computing Science Journal},
  volume  = {8},
  number  = {2},
  pages   = {69--79},
  year    = {2025},
  doi     = {10.33086/atcsj.v8i2.8491}
}`,
    citationApa: `Husna, R., Rohima, N. G., Ronan, A., Fahmi, M. N., Haz, A. L., & Fajrianti, E. D. (2025). Simulation and Optimization of Review Intervals Based on the Mathematical Model of the Ebbinghaus Forgetting Curve. Applied Technology and Computing Science Journal, 8(2), 69–79. https://doi.org/10.33086/atcsj.v8i2.8491`,
    citationIeee: `R. Husna, N. G. Rohima, A. Ronan, M. N. Fahmi, A. L. Haz, and E. D. Fajrianti, "Simulation and Optimization of Review Intervals Based on the Mathematical Model of the Ebbinghaus Forgetting Curve," Applied Technology and Computing Science Journal, vol. 8, no. 2, pp. 69–79, 2025, doi: 10.33086/atcsj.v8i2.8491.`
  }
];

export const ONGOING_RESEARCH: OngoingResearch[] = [
  {
    id: "res-saint-venant",
    title: "Mathematical Modeling of Flash Flood Flow Using Saint-Venant Shallow Water Equations",
    category: "Fluid Dynamics & Partial Differential Equations",
    description: "Formulating one-dimensional and quasi-two-dimensional shallow water hyperbolic conservation laws to simulate unsteady open-channel flash flood wave propagation in steep topography.",
    methodology: "Finite volume method (FVM) with Roe Riemann solver discretizations; stability analysis via Courant-Friedrichs-Lewy (CFL) criteria.",
    keyConcepts: ["Saint-Venant Equations", "Hyperbolic Conservation Laws", "Finite Volume Method", "CFL Condition"],
    status: "In Progress",
    expectedOutcome: "Hydrodynamic wave crest prediction model applicable to river basins in West Sumatra."
  },
  {
    id: "res-disaster-optimization",
    title: "Optimization of Disaster Mitigation Structure Placement",
    category: "Operations Research & Spatial Optimization",
    description: "Developing mixed-integer programming (MIP) models to determine the optimal spatial coordinates and capacity constraints of retention basins, check dams, and flood barriers under budget limits.",
    methodology: "Branch-and-bound algorithmic formulation combined with multi-objective Pareto frontier exploration for cost vs. risk mitigation trade-offs.",
    keyConcepts: ["Mixed-Integer Programming (MIP)", "Pareto Optimization", "Spatial Decision Theory", "Cost-Benefit Function"],
    status: "Working Paper",
    expectedOutcome: "A decision-support optimization framework for regional disaster mitigation agencies."
  },
  {
    id: "res-ecc",
    title: "Mathematical Analysis and Implementation of Elliptic Curve Cryptography",
    category: "Algebraic Number Theory & Cryptography",
    description: "Analyzing the group law over finite fields $E(\\mathbb{F}_p)$, implementing scalar point multiplication via Montgomery ladders, and examining resistance to side-channel timing attacks.",
    methodology: "Weierstrass curve representations, projective coordinate transformations, and computational complexity bounds for the Elliptic Curve Discrete Logarithm Problem (ECDLP).",
    keyConcepts: ["Finite Field Arithmetic", "ECDLP", "Montgomery Ladder", "Projective Coordinates"],
    status: "Working Paper",
    expectedOutcome: "Benchmarked computational implementation demonstrating constant-time elliptic scalar multiplication."
  },
  {
    id: "res-vigenere",
    title: "Security Analysis of Vigenère Cipher Based on Key Period and Letter Frequency Analysis",
    category: "Classical Cryptanalysis & Applied Statistics",
    description: "Investigating automated statistical cryptanalysis routines combining Kasiski examination, Friedman test (Index of Coincidence), and mutual information chi-square divergence.",
    methodology: "Statistical frequency estimation, coincidence counting algorithms, and automated polyalphabetic key discovery scripts.",
    keyConcepts: ["Index of Coincidence (IoC)", "Kasiski Examination", "Chi-Square Goodness-of-Fit", "Entropy Analysis"],
    status: "Empirical Validation",
    expectedOutcome: "Empirical performance bounds of automated cryptanalysis under short and noisy ciphertext constraints."
  },
  {
    id: "res-lp-simplex",
    title: "Mathematical Optimization and Linear Programming Algorithms",
    category: "Pure & Applied Optimization",
    description: "Theoretical exploration of degeneracy, cycling prevention rules (Bland's rule), and duality gap convergence in the Two-Phase Simplex and Revised Simplex methods.",
    methodology: "Matrix factorizations (LU decomposition), sensitivity analysis, and dual simplex pivoting implementations.",
    keyConcepts: ["Two-Phase Simplex", "Bland's Anti-Cycling Rule", "Duality Theorem", "Shadow Pricing"],
    status: "In Progress",
    expectedOutcome: "Modular educational and analytical linear programming solver tailored for operational modeling."
  }
];

export const ORGANIZATIONS: OrganizationExperience[] = [
  {
    id: "org-himatika",
    organization: "Himpunan Mahasiswa Matematika dan Sains Data",
    shortName: "HIMATIKA FMIPA UNAND",
    role: "Koordinator Bidang Kerohanian",
    period: "2025",
    level: "Departmental Student Body (Program Studi)",
    isVerified: true,
    description: "Leading the spiritual and character development division within the Mathematics & Data Science Department student association. Responsible for fostering ethical leadership, community well-being, and academic-spiritual balance among students.",
    highlights: [
      "Spearheaded values-driven mentorship programs and character development sessions for departmental students.",
      "Coordinated cross-departmental solidarity initiatives, fostering strong peer collaboration and empathy.",
      "Managed division budgets, meeting agendas, and transparent accountability reporting."
    ],
    skills: ["Team Leadership", "Program Management", "Interpersonal Communication", "Organizational Governance"]
  },
  {
    id: "org-bem-fmipa",
    organization: "Badan Eksekutif Mahasiswa KM FMIPA Universitas Andalas",
    shortName: "BEM FMIPA UNAND",
    role: "Pengurus / Staf Departemen",
    period: "2024 – 2025",
    level: "Faculty Student Executive Board (Fakultas)",
    isVerified: true,
    description: "Served in the student executive body of the Faculty of Mathematics and Natural Sciences, supporting faculty-wide student empowerment, science advocacy, and collaborative inter-departmental initiatives.",
    highlights: [
      "Actively contributed to organizing flagship faculty events, academic seminars, and scientific competitions.",
      "Liaised between student representatives across five science departments and faculty leadership.",
      "Assisted in student advocacy, data collection, and logistical coordination for faculty-wide programs."
    ],
    skills: ["Event Organization", "Strategic Planning", "Cross-Functional Collaboration", "Public Advocacy"]
  },
  {
    id: "org-fsi",
    organization: "Forum Studi Islam FMIPA Universitas Andalas",
    shortName: "FSI FMIPA",
    role: "Koordinator Departemen Perekonomian Mandiri (DEPKORI)",
    period: "2024 – 2025",
    level: "Faculty Spiritual & Self-Development Organization",
    isVerified: true,
    description: "Engaging in continuous character education, peer mentorship, and ethical leadership development within the faculty's prominent Islamic study and character forum.",
    highlights: [
      "Facilitated study circles focusing on integrating academic excellence with moral responsibility.",
      "Participated in philanthropic social outreach and community support drives.",
      "Mentored junior undergraduates in adjusting to university life and academic balance."
    ],
    skills: ["Mentorship", "Community Engagement", "Empathy & Ethics", "Public Speaking"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-kkn-2026",
    title: "Kuliah Kerja Nyata (KKN) Reguler 2 Universitas Andalas 2026",
    category: "Community Development",
    year: "2026",
    shortDescription: "Community service and regional empowerment program in Nagari Limo Koto, focusing on public educational tutoring and digital numeracy literacy.",
    fullDescription: "Field-based community service program by Universitas Andalas conducted in Nagari Limo Koto, Kecamatan Koto VII, Kabupaten Sijunjung. The initiative focused on bridging educational disparities by organizing community mathematics tutoring ('Bimbingan Belajar'), introducing digital calculation tools to local school pupils, and supporting village administrative data structuring.",
    role: "Core Team Member & Education Program Coordinator",
    location: "Nagari Limo Koto, Kec. Koto VII, Kab. Sijunjung, Sumatera Barat",
    contribution: [
      "Designed and taught interactive, fear-free mathematics learning modules for elementary and junior high school students in Nagari Limo Koto.",
      "Organized study clinics ('Bimbingan belajar') that improved problem-solving confidence among over 50 local pupils.",
      "Assisted local nagari officials with data organization and administrative documentation.",
      "Collaborated with an interdisciplinary team of students from diverse faculties to execute community development projects."
    ],
    tools: ["Interactive Pedagogical Frameworks", "Spreadsheet Tools", "Field Data Collection", "Community Facilitation"],
    verified: true
  },
  {
    id: "proj-ebbinghaus-model",
    title: "Mathematical Modeling of Spaced Repetition (Ebbinghaus Optimization)",
    category: "Academic & Research",
    year: "2025",
    shortDescription: "Differential equation formulation and numerical optimization simulating human memory retention decay and episodic cognitive reinforcement.",
    fullDescription: "Developed as part of peer-reviewed research published in the Applied Technology and Computing Science Journal. The project establishes a mathematical formulation of cognitive retention decay and provides an algorithmic threshold calculation for spaced repetition schedules.",
    role: "Co-Researcher & Mathematical Modeling Analyst",
    contribution: [
      "Formulated mathematical differential equations modeling decay rate λ and reinforcement impulses α.",
      "Performed parameter regression against empirical student recall data.",
      "Computed the optimal review threshold interval t* ≈ 1.098 days using continuous numerical solvers.",
      "Co-authored peer-reviewed research manuscript indexed in reputable academic databases."
    ],
    tools: ["Python", "MATLAB", "Differential Equations", "Numerical Integration", "LaTeX"],
    verified: true,
    links: [
      { label: "View DOI Publication", url: "https://doi.org/10.33086/atcsj.v8i2.8491" }
    ]
  },
  {
    id: "proj-simplex-optimizer",
    title: "Linear Programming & Two-Phase Simplex Method Solver",
    category: "Academic & Research",
    year: "2024",
    shortDescription: "Algorithmic implementation of the Simplex method featuring tableau tracking, Bland's anti-cycling rule, and dual variable extraction.",
    fullDescription: "A specialized mathematical computing project developed to solve standard and non-standard constrained optimization problems. Features complete step-by-step tableau inspection, sensitivity analysis, artificial variable elimination, and shadow pricing calculation.",
    role: "Independent Mathematical Developer",
    contribution: [
      "Implemented pivoting logic for Big-M and Two-Phase Simplex algorithms.",
      "Incorporated Bland's selection rule to guarantee convergence and prevent degenerate cycling.",
      "Structured comprehensive sensitivity analysis modules computing allowable ranges for objective coefficients."
    ],
    tools: ["Python", "NumPy", "Matrix Algebra", "Linear Optimization"],
    verified: true
  },
  {
    id: "proj-shallow-water-model",
    title: "1D Saint-Venant Shallow Water Flood Simulation",
    category: "Academic & Research",
    year: "2024 – 2025",
    shortDescription: "Numerical hydrodynamic simulation of open-channel flood flows using finite volume methods and Riemann flux approximations.",
    fullDescription: "Exploration of hyperbolic partial differential equations modeling conservation of mass and momentum in unconfined fluid flow. Built to model steep topography flash floods typical of West Sumatra river catchments.",
    role: "Lead Modeler",
    contribution: [
      "Discretized 1D shallow water PDE equations over spatial-temporal grids.",
      "Enforced CFL stability conditions to maintain numerical convergence.",
      "Visualized wave front progression and hydraulic jump formations."
    ],
    tools: ["MATLAB", "Partial Differential Equations", "Finite Volume Method"],
    verified: true
  },
  {
    id: "proj-crypto-suite",
    title: "Elliptic Curve & Classical Cryptography Exploration Suite",
    category: "Academic & Research",
    year: "2024",
    shortDescription: "Comprehensive computational workbench for Weierstrass elliptic curve arithmetic over prime fields and polyalphabetic frequency cryptanalysis.",
    fullDescription: "Interactive codebase exploring fundamental cryptographic primitives. Implements point addition, point doubling, scalar multiplication via double-and-add and Montgomery ladder, paired with an automated Vigenère cryptanalytic engine utilizing Index of Coincidence (IoC).",
    role: "Algorithm Designer & Researcher",
    contribution: [
      "Coded affine and projective elliptic curve point operations over large prime fields.",
      "Engineered automated Kasiski examination and Friedman test scripts for polyalphabetic key length deduction.",
      "Benchmarked execution timing to observe algebraic scalar multiplication efficiency."
    ],
    tools: ["Python", "Number Theory", "Algebraic Geometry Primitives"],
    verified: true
  },
  {
    id: "proj-faculty-events",
    title: "Science & Mathematics Faculty Student Initiatives",
    category: "Organizational Activities",
    year: "2024 – 2025",
    shortDescription: "Organizing and executing faculty-level academic competitions, scientific seminars, and student orientation programs.",
    fullDescription: "Collaborated across multiple organizing committees under BEM FMIPA and HIMATIKA to promote mathematics appreciation, academic discussions, and inter-student scientific collaboration.",
    role: "Event Organizer & Committee Member",
    contribution: [
      "Assisted in competition logistics and problem set coordination for student academic challenges.",
      "Managed public announcements and student engagement drives across faculties.",
      "Co-facilitated leadership orientation workshops for incoming 2024 mathematics freshmen."
    ],
    tools: ["Project Coordination", "Public Relations", "Team Leadership"],
    verified: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mathematical Skills",
    description: "Rigorous analytical foundations and theoretical reasoning applied to real-world problems.",
    skills: [
      { name: "Mathematical Modeling", level: "Proficient", description: "Formulating physical & cognitive phenomena into differential equations" },
      { name: "Operations Research", level: "Proficient", description: "Constrained optimization, decision analysis & network models" },
      { name: "Linear Programming", level: "Proficient", description: "Simplex algorithms, duality, sensitivity & integer programming" },
      { name: "Differential Equations", level: "Intermediate", description: "ODEs, systems of equations, analytical & numerical solvers" },
      { name: "Linear Algebra", level: "Intermediate", description: "Vector spaces, eigen decomposition, matrix factorizations" },
      { name: "Cryptography", level: "Intermediate", description: "Number theoretic primitives, elliptic curves, cipher cryptanalysis" },
      { name: "Mathematical Analysis", level: "Intermediate", description: "Epsilon-delta proofs, convergence, metric spaces, real analysis" }
    ]
  },
  {
    title: "Technical Skills",
    description: "Computational tools, programming languages, and mathematical software with honest proficiency levels.",
    skills: [
      { name: "LaTeX", level: "Proficient", description: "Typesetting academic papers, complex mathematical formulas & presentations" },
      { name: "Microsoft Excel", level: "Proficient", description: "Advanced data manipulation, modeling formulas, Solver add-in & pivot tables" },
      { name: "Python", level: "Intermediate", description: "NumPy, SciPy, Matplotlib for numerical simulation & data processing" },
      { name: "MATLAB", level: "Intermediate", description: "Matrix computing, numerical ODE solving, simulation & plotting" },
      { name: "Maple", level: "Intermediate", description: "Computer algebra systems, symbolic manipulation & mathematical plots" },
      { name: "Data Analysis", level: "Intermediate", description: "Statistical inference, regression modeling & exploratory data analysis" }
    ]
  },
  {
    title: "Professional Skills",
    description: "Core collaborative, cognitive, and communicative strengths developed through research and leadership.",
    skills: [
      { name: "Analytical Thinking", level: "Advanced", description: "Deconstructing complex ambiguous problems into tractable logical parts" },
      { name: "Problem Solving", level: "Advanced", description: "Systematic, hypothesis-driven methodology to find optimal solutions" },
      { name: "Leadership", level: "Proficient", description: "Guiding student divisions, fostering ownership, and serving peers" },
      { name: "Research & Academic Writing", level: "Proficient", description: "Literature review, rigorous methodology, academic journal authoring" },
      { name: "Teamwork & Collaboration", level: "Proficient", description: "Effective cross-disciplinary collaboration with fellow researchers" },
      { name: "Communication", level: "Proficient", description: "Translating abstract mathematical concepts into clear human insights" },
      { name: "Time Management", level: "Proficient", description: "Balancing intensive coursework, research publication & student leadership" }
    ]
  },
  {
    title: "Languages",
    description: "Linguistic proficiencies enabling local engagement and global scientific communication.",
    skills: [
      { name: "Indonesian", level: "Advanced", description: "Native language — formal academic writing, public speaking & presentations" },
      { name: "English", level: "Intermediate", description: "Working proficiency — academic literature review, paper writing & technical reading" }
    ]
  }
];

export const MATH_SYMBOLS = [
  "\\sum_{i=1}^n x_i",
  "\\int_0^\\infty e^{-x^2} dx",
  "\\nabla \\times \\mathbf{F}",
  "e^{i\\pi} + 1 = 0",
  "\\frac{\\partial u}{\\partial t} + u\\frac{\\partial u}{\\partial x} = 0",
  "\\min \\; c^T x \\quad \\text{s.t.} \\; Ax \\le b",
  "y^2 = x^3 + ax + b",
  "R(t) = R_0 e^{-\\lambda t}",
  "\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n",
  "\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}"
];
