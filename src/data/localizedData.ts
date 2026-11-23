import { Language } from './translations';
import { 
  Publication, 
  OngoingResearch, 
  ResearchInterest, 
  OrganizationExperience, 
  Project, 
  SkillCategory, 
  EducationDetail 
} from '../types';

export const getLocalizedEducation = (lang: Language): EducationDetail => {
  if (lang === 'id') {
    return {
      institution: "Universitas Andalas",
      degree: "Sarjana Matematika (S1 Matematika)",
      faculty: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
      department: "Departemen Matematika dan Sains Data",
      period: "2023 – Sekarang",
      status: "Mahasiswa Aktif S1",
      location: "Padang, Sumatera Barat, Indonesia",
      summary: "Berfokus pada fondasi matematika murni, penalaran analitis mendalam, pemodelan matematis terapan, metode numerik, dan riset operasi.",
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
  }

  return {
    institution: "Universitas Andalas",
    degree: "Bachelor of Science in Mathematics (S1 Matematika)",
    faculty: "Faculty of Mathematics and Natural Sciences",
    department: "Department of Mathematics and Data Science",
    period: "2023 – Present",
    status: "Active Undergraduate Student",
    location: "Padang, West Sumatra, Indonesia",
    summary: "Focused on rigorous mathematical foundations, analytical reasoning, mathematical modeling, numerical methods, and operations research.",
    coursework: [
      "Calculus",
      "Data Analysis",
      "Introduction to Mathematics",
      "Elementary Linear Algebra",
      "Analytic Geometry",
      "Discrete Mathematics",
      "Algorithms and Programming",
      "Linear Programming",
      "Introduction to Number Theory",
      "Algebraic Structures",
      "Real Analysis",
      "Numerical Methods",
      "Differential Equations",
      "Mathematical Statistics",
      "Introduction to Data Science",
      "Complex Variables"
    ]
  };
};

export const getLocalizedAcademicInterests = (lang: Language) => {
  if (lang === 'id') {
    return {
      list: [
        "Matematika Terapan",
        "Riset Operasi",
        "Pemodelan Matematis",
        "Optimasi",
        "Kriptografi",
        "Matematika Komputasi"
      ],
      details: {
        "Matematika Terapan": "Berfokus pada pemanfaatan metode matematis untuk memformulasikan dan menyelesaikan tantangan nyata di bidang sains, komputasi, dan sistem sosial.",
        "Riset Operasi": "Menerapkan metodologi ilmiah dan matematis untuk pengambilan keputusan kompleks, optimasi deterministik, aliran jaringan, dan logistik.",
        "Pemodelan Matematis": "Mentranslasikan fenomena dinamis dunia nyata ke dalam sistem persamaan diferensial dan persamaan beda terkopel.",
        "Optimasi": "Menentukan nilai ekstrem (minimum/maksimum) di bawah batasan multivariabel melalui metode Simpleks, titik interior, dan algoritma gradien.",
        "Kriptografi": "Mengamankan pertukaran data menggunakan teori bilangan aljabar, masalah logaritma diskrit, aritmatika modular, dan kurva eliptik.",
        "Matematika Komputasi": "Mengembangkan implementasi algoritma numerik, aproksimasi komputasi, analisis stabilitas, dan kalkulasi presisi tinggi."
      } as Record<string, string>
    };
  }

  return {
    list: [
      "Applied Mathematics",
      "Operations Research",
      "Mathematical Modeling",
      "Optimization",
      "Cryptography",
      "Computational Mathematics"
    ],
    details: {
      "Applied Mathematics": "Focuses on employing mathematical methods to formulate and solve practical challenges across physical sciences, computing, and social systems.",
      "Operations Research": "Applies scientific and mathematical methodologies to complex decision-making, deterministic optimization, network flow, and logistics.",
      "Mathematical Modeling": "Translating dynamic physical and real-world phenomena into coupled sets of differential and difference equations.",
      "Optimization": "Determining extreme values (min/max) under single or multi-variable constraints via Simplex, interior point, and gradient algorithms.",
      "Cryptography": "Securing data exchange using algebraic number theory, discrete logarithm problems, modular arithmetic, and elliptic curves.",
      "Computational Mathematics": "Developing algorithmic implementations, numerical approximations, stability analysis, and floating-point computation."
    } as Record<string, string>
  };
};

export const getLocalizedPublications = (lang: Language): Publication[] => {
  if (lang === 'id') {
    return [
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
        abstract: "Memori manusia secara alami meluruh secara eksponensial seiring waktu jika tidak diperkuat kembali, sebuah fenomena yang diformulasikan oleh Hermann Ebbinghaus. Meskipun metode pengulangan berjeda (spaced repetition) telah banyak diadopsi dalam pedagogi modern, interval pengulangan tradisional sering kali ditentukan melalui heuristik sembarang (misalnya 2–7–30 hari) alih-alih landasan matematis yang ketat. Dalam penelitian ini, kami memformulasikan model matematika lanjutan dari kurva lupa menggunakan sistem persamaan diferensial terkopel yang mengatur peluruhan dan akuisisi memori. Parameter model diestimasi secara empiris dengan laju belajar α = 0,70 dan koefisien lupa λ = 0,30. Simulasi numerik membandingkan tiga paradigma: tanpa pengulangan, pengulangan acak, dan pengulangan teroptimasi ambang batas (ambang retensi ≥ 80%). Hasil penelitian menetapkan interval pengulangan awal yang optimal pada t ≈ 1,098 hari (sekitar 26 jam 32 menit), yang secara signifikan mengurangi penurunan kognitif kumulatif dan memperkuat konsolidasi memori jangka panjang.",
        keywords: ["Kurva Lupa Ebbinghaus", "Pemodelan Matematika", "Persamaan Diferensial", "Spaced Repetition", "Simulasi Numerik", "Optimasi Retensi"],
        equations: [
          "\\frac{dR(t)}{dt} = -\\lambda R(t) + \\sum_{k=1}^{n} \\alpha_k \\cdot \\delta(t - t_k)",
          "R(t) = R_0 e^{-\\lambda t}",
          "t^* = -\\frac{1}{\\lambda} \\ln\\left(\\frac{R_{threshold}}{R_0}\\right) \\approx 1.098 \\text{ hari}"
        ],
        keyFindings: [
          "Memformulasikan model persamaan diferensial matematis yang menangkap peluruhan retensi spontan dan impuls penguatan berkala.",
          "Memvalidasi parameter model secara empiris dengan faktor belajar α = 0,70 dan koefisien kelupaan eksponensial λ = 0,30.",
          "Menderivasi secara matematis ambang batas waktu pengulangan optimal t ≈ 1,098 hari (~26 jam 32 menit) untuk menjaga retensi tetap di atas 80%."
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
  }

  return [
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
};

export const getLocalizedOngoingResearch = (lang: Language): OngoingResearch[] => {
  if (lang === 'id') {
    return [
      {
        id: "res-saint-venant",
        title: "Pemodelan Matematis Aliran Banjir Bandang Menggunakan Persamaan Air Dangkal Saint-Venant",
        category: "Dinamika Fluida & Persamaan Diferensial Parsial",
        description: "Memformulasikan hukum kekekalan hiperbolik air dangkal satu dimensi dan kuasi-dua dimensi untuk mensimulasikan perambatan gelombang banjir bandang tak-tunak pada topografi bergradien curam.",
        methodology: "Metode volume hingga (FVM) dengan diskritisasi solver Riemann Roe; analisis stabilitas numerik menggunakan kriteria Courant-Friedrichs-Lewy (CFL).",
        keyConcepts: ["Persamaan Saint-Venant", "Hukum Kekekalan Hiperbolik", "Metode Volume Hingga", "Kondisi CFL"],
        status: "In Progress",
        expectedOutcome: "Model prediksi puncak gelombang hidrodinamik yang dapat diaplikasikan pada daerah aliran sungai di Sumatera Barat."
      },
      {
        id: "res-disaster-optimization",
        title: "Optimasi Penempatan Struktur Mitigasi Bencana",
        category: "Riset Operasi & Optimasi Spasial",
        description: "Mengembangkan model mixed-integer programming (MIP) untuk menentukan koordinat spasial optimal dan kapasitas kolam retensi, check dam, serta tanggul banjir di bawah batasan anggaran.",
        methodology: "Formulasi algoritmik branch-and-bound yang dikombinasikan dengan eksplorasi frontier Pareto multi-objektif untuk trade-off biaya vs mitigasi risiko.",
        keyConcepts: ["Mixed-Integer Programming (MIP)", "Optimasi Pareto", "Teori Keputusan Spasial", "Fungsi Biaya-Manfaat"],
        status: "Working Paper",
        expectedOutcome: "Kerangka kerja optimasi pendukung keputusan bagi badan penanggulangan bencana daerah."
      },
      {
        id: "res-ecc",
        title: "Analisis Matematis dan Implementasi Kriptografi Kurva Eliptik",
        category: "Teori Bilangan Aljabar & Kriptografi",
        description: "Menganalisis hukum grup pada medan hingga E(F_p), mengimplementasikan perkalian skalar titik melalui Montgomery ladder, dan menguji ketahanan terhadap serangan waktu (side-channel).",
        methodology: "Representasi kurva bentuk Weierstrass, transformasi koordinat proyektif, dan batas kompleksitas komputasi untuk Masalah Logaritma Diskrit Kurva Eliptik (ECDLP).",
        keyConcepts: ["Aritmatika Medan Hingga", "ECDLP", "Montgomery Ladder", "Koordinat Proyektif"],
        status: "Working Paper",
        expectedOutcome: "Implementasi komputasi teruji yang mendemonstrasikan perkalian skalar kurva eliptik berwaktu konstan (constant-time)."
      },
      {
        id: "res-vigenere",
        title: "Analisis Keamanan Sandi Vigenère Berdasarkan Periode Kunci dan Frekuensi Huruf",
        category: "Kriptanalisis Klasik & Statistika Terapan",
        description: "Menyelidiki rutinitas kriptanalisis statistik otomatis yang menggabungkan uji Kasiski, uji Friedman (Indeks Koinsidensi), dan divergensi chi-kuadrat.",
        methodology: "Estimasi frekuensi statistik, algoritma pencacahan koinsidensi, dan skrip penemuan kunci polialfabetik otomatis.",
        keyConcepts: ["Indeks Koinsidensi (IoC)", "Pemeriksaan Kasiski", "Uji Keselarasan Chi-Square", "Analisis Entropi"],
        status: "Empirical Validation",
        expectedOutcome: "Batas performa empiris kriptanalisis otomatis di bawah keterbatasan teks tersandi pendek dan berderau."
      },
      {
        id: "res-lp-simplex",
        title: "Optimasi Matematis dan Algoritma Program Linier",
        category: "Optimasi Murni & Terapan",
        description: "Eksplorasi teoretis degenerasi, aturan pencegahan perulangan siklis (aturan Bland), dan konvergensi celah dualitas pada metode Simpleks Dua Fasa dan Simpleks Terevisi.",
        methodology: "Faktorisasi matriks (dekomposisi LU), analisis sensitivitas, dan implementasi pivot simpleks dual.",
        keyConcepts: ["Simpleks Dua Fasa", "Aturan Anti-Siklus Bland", "Teorema Dualitas", "Harga Bayangan (Shadow Price)"],
        status: "In Progress",
        expectedOutcome: "Solver program linier edukatif dan analitis modular yang disesuaikan untuk pemodelan operasional."
      }
    ];
  }

  return [
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
      description: "Analyzing the group law over finite fields E(F_p), implementing scalar point multiplication via Montgomery ladders, and examining resistance to side-channel timing attacks.",
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
};

export const getLocalizedResearchInterests = (lang: Language): ResearchInterest[] => {
  if (lang === 'id') {
    return [
      {
        title: "Pemodelan Matematis",
        description: "Memformulasikan fenomena dinamis dunia nyata—dari kurva lupa kognitif hingga aliran geofisika—ke dalam sistem persamaan diferensial terkopel.",
        iconName: "Binary",
        tags: ["Persamaan Diferensial", "Sistem Dinamik", "Estimasi Parameter"]
      },
      {
        title: "Optimasi & Riset Operasi",
        description: "Mengembangkan algoritma optimasi linier, non-linier, dan diskrit untuk memaksimalkan efisiensi, alokasi sumber daya, serta mitigasi risiko.",
        iconName: "TrendingUp",
        tags: ["Program Linier", "Metode Simpleks", "Optimasi Berkendala"]
      },
      {
        title: "Kriptografi Terapan",
        description: "Mengkaji teori bilangan aljabar, masalah logaritma diskrit, aritmatika kurva eliptik, dan ketahanan sandi kriptografi.",
        iconName: "ShieldCheck",
        tags: ["Kurva Eliptik", "Keamanan Sandi", "Teori Bilangan"]
      },
      {
        title: "Simulasi Matematis",
        description: "Menerapkan simulasi numerik kontinu dan diskrit untuk memprediksi perilaku sistem kompleks di bawah berbagai kondisi awal.",
        iconName: "Cpu",
        tags: ["Analisis Numerik", "Metode Runge-Kutta", "Python / MATLAB"]
      },
      {
        title: "Pemodelan Banjir & Bencana",
        description: "Menerapkan persamaan air dangkal Saint-Venant untuk mensimulasikan gelombang banjir bandang dan mengoptimalkan lokasi penghalang fisik.",
        iconName: "Waves",
        tags: ["Persamaan Saint-Venant", "Hidrologi", "Penempatan Mitigasi"]
      }
    ];
  }

  return [
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
};

export const getLocalizedOrganizations = (lang: Language): OrganizationExperience[] => {
  if (lang === 'id') {
    return [
      {
        id: "org-himatika",
        organization: "Himpunan Mahasiswa Matematika dan Sains Data",
        shortName: "HIMATIKA FMIPA UNAND",
        role: "Koordinator Bidang Kerohanian",
        period: "2025",
        level: "Lembaga Mahasiswa Jurusan (Program Studi)",
        isVerified: true,
        description: "Memimpin bidang kerohanian dan pengembangan karakter di lingkungan himpunan mahasiswa Departemen Matematika dan Sains Data. Bertanggung jawab membina kepemimpinan beretika, kesejahteraan komunitas, dan keseimbangan akademik-spiritual.",
        highlights: [
          "Menginisiasi program bimbingan karakter dan penguatan nilai-nilai integritas bagi mahasiswa jurusan.",
          "Mengkoordinasikan inisiatif solidaritas antarmahasiswa untuk menumbuhkan kolaborasi dan empati.",
          "Mengelola anggaran divisi, agenda rapat kerja, serta penyusunan laporan pertanggungjawaban yang transparan."
        ],
        skills: ["Kepemimpinan Tim", "Manajemen Program", "Komunikasi Interpersonal", "Tata Kelola Organisasi"]
      },
      {
        id: "org-bem-fmipa",
        organization: "Badan Eksekutif Mahasiswa KM FMIPA Universitas Andalas",
        shortName: "BEM FMIPA UNAND",
        role: "Pengurus / Staf Departemen",
        period: "2024 – 2025",
        level: "Badan Eksekutif Mahasiswa Fakultas (BEM)",
        isVerified: true,
        description: "Berperan aktif dalam badan eksekutif mahasiswa Fakultas Matematika dan Ilmu Pengetahuan Alam, mendukung pemberdayaan mahasiswa tingkat fakultas, advokasi sains, dan kolaborasi antardepartemen.",
        highlights: [
          "Berkontribusi aktif menyelenggarakan program unggulan fakultas, seminar akademik, dan kompetisi sains.",
          "Menjadi penghubung komunikasi antarmahasiswa lintas lima jurusan sains dan pimpinan fakultas.",
          "Mendukung advokasi mahasiswa, pendataan, serta koordinasi logistik program kerja tingkat fakultas."
        ],
        skills: ["Manajemen Acara", "Perencanaan Strategis", "Kolaborasi Lintas Disiplin", "Advokasi Publik"]
      },
      {
        id: "org-fsi",
        organization: "Forum Studi Islam FMIPA Universitas Andalas",
        shortName: "FSI FMIPA",
        role: "Koordinator Departemen Perekonomian Mandiri (DEPKORI)",
        period: "2024 – 2025",
        level: "Lembaga Dakwah & Pengembangan Diri Fakultas",
        isVerified: true,
        description: "Memimpin inisiatif kemandirian dana, pengembangan kewirausahaan mahasiswa, serta pembinaan kepemimpinan moral di forum studi Islam fakultas.",
        highlights: [
          "Mengkoordinasikan inisiatif ekonomi mandiri dan penggalangan dana kreatif penunjang kegiatan sosial mahasiswa.",
          "Memfasilitasi lingkaran pembinaan karakter yang mengintegrasikan keunggulan akademik dengan kesadaran etika.",
          "Membimbing mahasiswa tahun pertama dalam beradaptasi dengan dunia perkuliahan dan menjaga prestasi belajar."
        ],
        skills: ["Bimbingan Mentoring", "Pengabdian Komunitas", "Kemandirian Ekonomi", "Public Speaking"]
      }
    ];
  }

  return [
    {
      id: "org-himatika",
      organization: "Himpunan Mahasiswa Matematika dan Sains Data",
      shortName: "HIMATIKA FMIPA UNAND",
      role: "Spiritual Division Coordinator",
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
      role: "Department Staff",
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
      role: "Coordinator of Independent Economic Department (DEPKORI)",
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
};

export const getLocalizedProjects = (lang: Language): Project[] => {
  if (lang === 'id') {
    return [
      {
        id: "proj-kkn-2026",
        title: "Kuliah Kerja Nyata (KKN) Reguler 2 Universitas Andalas 2026",
        category: "Community Development",
        year: "2026",
        shortDescription: "Program pengabdian masyarakat dan pemberdayaan nagari di Nagari Limo Koto, berfokus pada bimbingan belajar matematika dan literasi numerasi digital.",
        fullDescription: "Program Kuliah Kerja Nyata lapangan oleh Universitas Andalas yang dilaksanakan di Nagari Limo Koto, Kecamatan Koto VII, Kabupaten Sijunjung. Inisiatif difokuskan pada penguatan literasi dan numerasi anak-anak nagari melalui 'Bimbingan Belajar', pengenalan perangkat hitung komputasi, serta pendataan administrasi nagari.",
        role: "Anggota Tim Inti & Koordinator Program Pendidikan",
        location: "Nagari Limo Koto, Kec. Koto VII, Kab. Sijunjung, Sumatera Barat",
        contribution: [
          "Merancang dan mengajarkan modul pembelajaran matematika interaktif yang menyenangkan bagi siswa SD dan SMP.",
          "Menyelenggarakan klinik bimbingan belajar yang meningkatkan pemahaman dan kepercayaan diri lebih dari 50 siswa setempat.",
          "Membantu perangkat nagari dalam pengorganisasian data dan administrasi kependudukan.",
          "Berkolaborasi dengan tim mahasiswa multidisiplin untuk merealisasikan program pengabdian masyarakat."
        ],
        tools: ["Kerangka Pedagogi Interaktif", "Perangkat Spreadsheet", "Pengumpulan Data Lapangan", "Fasilitasi Komunitas"],
        verified: true
      },
      {
        id: "proj-ebbinghaus-model",
        title: "Pemodelan Matematika Pengulangan Berjeda (Optimasi Ebbinghaus)",
        category: "Academic & Research",
        year: "2025",
        shortDescription: "Formulasi persamaan diferensial dan optimasi numerik yang mensimulasikan peluruhan retensi memori dan impuls penguatan kognitif.",
        fullDescription: "Dikembangkan sebagai bagian dari riset ilmiah yang dipublikasikan di Applied Technology and Computing Science Journal (ATCSJ). Proyek ini menetapkan formulasi matematika peluruhan retensi kognitif dan menghasilkan perhitungan ambang batas algoritmik untuk jadwal pengulangan materi yang optimal.",
        role: "Rekan Peneliti & Analis Pemodelan Matematis",
        contribution: [
          "Memformulasikan persamaan diferensial untuk laju peluruhan λ dan impuls penguatan belajar α.",
          "Melakukan regresi parameter terhadap data empiris retensi belajar mahasiswa.",
          "Menghitung interval ambang batas pengulangan optimal t* ≈ 1,098 hari menggunakan metode numerik kontinu.",
          "Menulis naskah artikel ilmiah yang berhasil diterbitkan di jurnal terakreditasi nasional/internasional."
        ],
        tools: ["Python", "MATLAB", "Persamaan Diferensial", "Integrasi Numerik", "LaTeX"],
        verified: true,
        links: [
          { label: "Lihat Publikasi DOI", url: "https://doi.org/10.33086/atcsj.v8i2.8491" }
        ]
      },
      {
        id: "proj-simplex-optimizer",
        title: "Solver Program Linier & Metode Simpleks Dua Fasa",
        category: "Academic & Research",
        year: "2024",
        shortDescription: "Implementasi algoritmik metode Simpleks dengan pelacakan tableau langkah-demi-langkah, aturan anti-cycling Bland, dan ekstraksi variabel dual.",
        fullDescription: "Proyek komputasi matematika khusus yang dibangun untuk menyelesaikan masalah optimasi berkendala standar dan non-standar. Dilengkapi inspeksi tableau lengkap, analisis sensitivitas, eliminasi variabel artifisial, dan kalkulasi harga bayangan (shadow price).",
        role: "Pengembang Matematika Mandiri",
        contribution: [
          "Mengimplementasikan logika pivot algoritma Big-M dan Simpleks Dua Fasa.",
          "Mengintegrasikan aturan pemilihan Bland untuk menjamin konvergensi dan mencegah perulangan tak berujung (cycling).",
          "Membangun modul analisis sensitivitas komprehensif untuk rentang koefisien fungsi tujuan yang diizinkan."
        ],
        tools: ["Python", "NumPy", "Aljabar Matriks", "Optimasi Linier"],
        verified: true
      },
      {
        id: "proj-shallow-water-model",
        title: "Simulasi Banjir 1D Saint-Venant (Persamaan Air Dangkal)",
        category: "Academic & Research",
        year: "2024 – 2025",
        shortDescription: "Simulasi hidrodinamik numerik aliran banjir saluran terbuka menggunakan metode volume hingga dan fluks Riemann.",
        fullDescription: "Eksplorasi persamaan diferensial parsial hiperbolik yang memodelkan kekekalan massa dan momentum dalam aliran fluida tak-terkekang. Dirancang khusus untuk memodelkan banjir bandang pada topografi lereng curam khas DAS Sumatera Barat.",
        role: "Pemodel Utama",
        contribution: [
          "Mendiskritisasi persamaan PDE air dangkal 1D di atas grid spasial-temporal.",
          "Menerapkan kondisi stabilitas CFL untuk mempertahankan konvergensi perhitungan numerik.",
          "Memvisualisasikan progresi garis depan gelombang dan formasi lompatan hidrolik."
        ],
        tools: ["MATLAB", "Persamaan Diferensial Parsial", "Metode Volume Hingga"],
        verified: true
      },
      {
        id: "proj-crypto-suite",
        title: "Suite Eksplorasi Kriptografi Kurva Eliptik & Sandi Klasik",
        category: "Academic & Research",
        year: "2024",
        shortDescription: "Workbench komputasi untuk aritmatika kurva eliptik Weierstrass di atas medan prima dan kriptanalisis frekuensi sandi polialfabetik.",
        fullDescription: "Proyek kode interaktif yang mengkaji primitif kriptografi fundamental. Mengimplementasikan penambahan titik, penduaan titik, perkalian skalar melalui double-and-add dan Montgomery ladder, dipadukan dengan mesin kriptanalisis sandi Vigenère otomatis berbasis Indeks Koinsidensi (IoC).",
        role: "Perancang Algoritma & Peneliti",
        contribution: [
          "Memprogram operasi titik kurva eliptik afin dan proyektif pada medan prima besar.",
          "Membangun skrip otomatis uji Kasiski dan uji Friedman untuk deduksi panjang kunci sandi.",
          "Mengukur efisiensi eksekusi waktu untuk menganalisis kecepatan operasi aljabar skalar."
        ],
        tools: ["Python", "Teori Bilangan", "Geometri Aljabar Komputasional"],
        verified: true
      },
      {
        id: "proj-faculty-events",
        title: "Inisiatif Kegiatan Kemahasiswaan Sains & Matematika",
        category: "Organizational Activities",
        year: "2024 – 2025",
        shortDescription: "Mengorganisir dan menyukseskan kompetisi akademik tingkat fakultas, seminar ilmiah, dan pembekalan mahasiswa baru.",
        fullDescription: "Berkolaborasi di berbagai kepanitiaan di bawah naungan BEM FMIPA dan HIMATIKA untuk meningkatkan apresiasi matematika, diskusi akademik, dan kolaborasi sains antarmahasiswa.",
        role: "Penyelenggara Acara & Anggota Panitia",
        contribution: [
          "Membantu koordinasi logistik dan bank soal untuk kompetisi akademik mahasiswa.",
          "Mengelola publikasi dan pendaftaran peserta dari berbagai departemen di fakultas.",
          "Menjadi fasilitator kegiatan pengenalan jurusan bagi mahasiswa baru Matematika angkatan 2024."
        ],
        tools: ["Manajemen Proyek", "Hubungan Masyarakat", "Kepemimpinan Tim"],
        verified: true
      }
    ];
  }

  return [
    {
      id: "proj-kkn-2026",
      title: "Kuliah Kerja Nyata (KKN) Reguler 2 Universitas Andalas 2026",
      category: "Community Development",
      year: "2026",
      shortDescription: "Community service and regional empowerment program in Nagari Limo Koto, focusing on public educational tutoring and digital numeracy literacy.",
      fullDescription: "Field-based community service program by Universitas Andalas conducted in Nagari Limo Koto, Kecamatan Koto VII, Kabupaten Sijunjung. The initiative focused on bridging educational disparities by organizing community mathematics tutoring ('Bimbingan Belajar'), introducing digital calculation tools to local school pupils, and supporting village administrative data structuring.",
      role: "Core Team Member & Education Program Coordinator",
      location: "Nagari Limo Koto, Kec. Koto VII, Kab. Sijunjung, West Sumatra",
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
};

export const getLocalizedSkillCategories = (lang: Language): SkillCategory[] => {
  if (lang === 'id') {
    return [
      {
        title: "Keahlian Matematika",
        description: "Fondasi analitis yang ketat dan penalaran teoretis yang diaplikasikan pada pemecahan masalah dunia nyata.",
        skills: [
          { name: "Pemodelan Matematis", level: "Proficient", description: "Memformulasikan fenomena fisik & kognitif ke dalam persamaan diferensial" },
          { name: "Riset Operasi", level: "Proficient", description: "Optimasi berkendala, analisis keputusan & pemodelan jaringan" },
          { name: "Program Linier", level: "Proficient", description: "Algoritma simpleks, dualitas, sensitivitas & program integer" },
          { name: "Persamaan Diferensial", level: "Intermediate", description: "PDB, sistem persamaan, solver analitis & numerik" },
          { name: "Aljabar Linier", level: "Intermediate", description: "Ruang vektor, dekomposisi nilai eigen, faktorisasi matriks" },
          { name: "Kriptografi", level: "Intermediate", description: "Primitif teori bilangan, kurva eliptik, kriptanalisis sandi" },
          { name: "Analisis Matematika", level: "Intermediate", description: "Pembuktian epsilon-delta, konvergensi, ruang metrik, analisis riil" }
        ]
      },
      {
        title: "Keahlian Teknis",
        description: "Perangkat komputasi, bahasa pemrograman, dan perangkat lunak matematika dengan tingkat kemahiran riil.",
        skills: [
          { name: "LaTeX", level: "Proficient", description: "Pengetikan dokumen ilmiah, formula matematika kompleks & presentasi" },
          { name: "Microsoft Excel", level: "Proficient", description: "Pengolahan data lanjutan, formula pemodelan, add-in Solver & pivot table" },
          { name: "Python", level: "Intermediate", description: "NumPy, SciPy, Matplotlib untuk simulasi numerik & pemrosesan data" },
          { name: "MATLAB", level: "Intermediate", description: "Komputasi matriks, penyelesaian numerik ODE, simulasi & visualisasi grafik" },
          { name: "Maple", level: "Intermediate", description: "Sistem aljabar komputer, manipulasi simbolik & plot matematis" },
          { name: "Analisis Data", level: "Intermediate", description: "Inferensi statistik, pemodelan regresi & analisis data eksploratif" }
        ]
      },
      {
        title: "Keahlian Profesional",
        description: "Kekuatan kolaboratif, kognitif, dan komunikasi utama yang ditempa melalui riset dan kepemimpinan.",
        skills: [
          { name: "Berpikir Analitis", level: "Advanced", description: "Mendekonstruksi masalah kompleks menjadi bagian-bagian logis yang terukur" },
          { name: "Pemecahan Masalah", level: "Advanced", description: "Metodologi berbasis hipotesis yang sistematis untuk menemukan solusi optimal" },
          { name: "Kepemimpinan", level: "Proficient", description: "Membina divisi kemahasiswaan, menumbuhkan rasa kepemilikan, dan melayani" },
          { name: "Riset & Penulisan Ilmiah", level: "Proficient", description: "Kajian literatur, metodologi ketat, dan penulisan artikel jurnal akademik" },
          { name: "Kerja Sama & Kolaborasi", level: "Proficient", description: "Kolaborasi lintas disiplin yang efektif dengan sesama peneliti dan tim" },
          { name: "Komunikasi", level: "Proficient", description: "Mentranslasikan konsep matematika abstrak menjadi wawasan yang mudah dipahami" },
          { name: "Manajemen Waktu", level: "Proficient", description: "Menyeimbangkan perkuliahan intensif, publikasi riset, dan kepengurusan organisasi" }
        ]
      },
      {
        title: "Kemahiran Bahasa",
        description: "Kemahiran linguistik yang mendukung komunikasi ilmiah lokal maupun internasional.",
        skills: [
          { name: "Bahasa Indonesia", level: "Advanced", description: "Penutur Asli — penulisan akademik formal, public speaking & presentasi" },
          { name: "Bahasa Inggris", level: "Intermediate", description: "Tingkat Kerja — kajian literatur internasional, penulisan paper & pembacaan teknis" }
        ]
      }
    ];
  }

  return [
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
};
