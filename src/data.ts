import { PortfolioData } from './types';
import { generateTagsFromData } from './utils/tagGenerator';

// Portfolio data without manual tags
// const rawPortfolioData = {
//   personalInfo: {
//     name: "Rifqi",
//     title: "Full Stack AI Developer",
//     bio: "A generalist full stack AI developer passionate about building intelligent solutions that bridge the gap between complex AI technologies and user-friendly applications.",
//     location: "Jakarta, Indonesia",
//     email: "rifqi2320@gmail.com",
//     social: {
//       github: "https://github.com/rifqi2320",
//       linkedin: "https://linkedin.com/in/yourprofile",
//       twitter: "https://twitter.com/yourhandle",
//       website: "https://yourwebsite.com",
//       scholar: "https://scholar.google.com/citations?user=yourprofile"
//     },
//     avatar: "/api/placeholder/150/150"
//   },

//   experiences: [
//     {
//       id: "exp1",
//       title: "Senior AI Engineer",
//       company: "TechCorp AI",
//       location: "Jakarta, Indonesia",
//       startDate: "2023-01",
//       summary: "Leading AI product development and ML infrastructure",
//       description: "Led the development of enterprise AI solutions, focusing on natural language processing and computer vision applications. Built scalable ML pipelines serving millions of users daily. Mentored junior developers and established best practices for AI/ML development.",
//       tags: ["ai", "backend", "nlp", "cv", "devops"],
//       modes: ["fullstack", "research"] as PortfolioMode[],
//       media: [
//         {
//           type: "image" as const,
//           url: "/api/placeholder/600/400",
//           alt: "AI Dashboard Screenshot",
//           caption: "ML monitoring dashboard I built"
//         }
//       ],
//       achievements: [
//         "Improved model accuracy by 25% through advanced feature engineering",
//         "Reduced inference latency by 60% with optimized deployment strategies",
//         "Led team of 5 engineers in successful product launch"
//       ]
//     },
//     {
//       id: "exp2",
//       title: "Full Stack Developer",
//       company: "StartupXYZ",
//       location: "Remote",
//       startDate: "2022-03",
//       endDate: "2022-12",
//       summary: "Built end-to-end web applications with modern tech stack",
//       description: "Developed and maintained multiple web applications using React, Node.js, and cloud technologies. Collaborated closely with design and product teams to deliver user-centric solutions.",
//       tags: ["fullstack", "frontend", "backend"],
//       modes: ["fullstack"],
//       media: [
//         {
//           type: "image",
//           url: "/api/placeholder/600/400",
//           alt: "Web App Screenshot",
//           caption: "E-commerce platform I developed"
//         }
//       ],
//       achievements: [
//         "Delivered 3 major features ahead of schedule",
//         "Implemented CI/CD pipeline reducing deployment time by 80%"
//       ]
//     },
//     {
//       id: "exp3",
//       title: "Research Assistant",
//       company: "AI Research Lab",
//       location: "University",
//       startDate: "2021-09",
//       endDate: "2022-02",
//       summary: "Conducted research on novel deep learning architectures",
//       description: "Assisted in developing and evaluating new neural network architectures for computer vision tasks. Contributed to experimental design, data collection, and analysis of results for publication in top-tier conferences.",
//       tags: ["research", "deep-learning", "cv", "neural-networks", "experimental"],
//       modes: ["research"],
//       media: [
//         {
//           type: "image",
//           url: "/api/placeholder/600/400",
//           alt: "Research Lab Setup",
//           caption: "Experimental setup for model evaluation"
//         }
//       ],
//       achievements: [
//         "Co-authored 2 research papers",
//         "Developed novel evaluation metrics adopted by the research community",
//         "Presented findings at international conference"
//       ]
//     }
//   ],

//   projects: [
//     {
//       id: "proj1",
//       title: "AI-Powered Content Generator",
//       summary: "An intelligent content creation platform using GPT and custom models",
//       description: "Built a comprehensive content generation platform that leverages state-of-the-art language models to help content creators generate high-quality articles, social media posts, and marketing copy. The platform features custom fine-tuned models, real-time collaboration, and advanced content optimization tools.",
//       tags: ["ai", "nlp", "fullstack", "frontend"],
//       modes: ["fullstack"],
//       startDate: "2023-06",
//       media: [
//         {
//           type: "image",
//           url: "/api/placeholder/800/500",
//           alt: "Content Generator Interface",
//           caption: "Main dashboard showing content generation in action"
//         },
//         {
//           type: "video",
//           url: "/api/placeholder/video",
//           caption: "Demo of the content generation workflow"
//         }
//       ],
//       links: {
//         demo: "https://demo.example.com",
//         github: "https://github.com/username/ai-content-gen",
//         article: "https://blog.example.com/building-ai-content-generator"
//       },
//       featured: true
//     },
//     {
//       id: "proj2",
//       title: "Smart Analytics Dashboard",
//       summary: "Real-time analytics platform with predictive insights",
//       description: "Developed a comprehensive analytics dashboard that processes millions of data points in real-time, providing businesses with actionable insights through machine learning-powered predictions and automated reporting.",
//       tags: ["data", "ai", "backend", "frontend"],
//       modes: ["fullstack"],
//       startDate: "2023-03",
//       endDate: "2023-05",
//       media: [
//         {
//           type: "image",
//           url: "/api/placeholder/800/500",
//           alt: "Analytics Dashboard",
//           caption: "Main analytics view with predictive charts"
//         }
//       ],
//       links: {
//         github: "https://github.com/username/smart-analytics"
//       },
//       featured: true
//     },
//     {
//       id: "proj3",
//       title: "Mobile AI Assistant",
//       summary: "Cross-platform mobile app with voice and vision capabilities",
//       description: "Created a mobile AI assistant that combines speech recognition, natural language processing, and computer vision to help users with daily tasks. The app features offline capabilities and privacy-first design.",
//       tags: ["mobile", "ai", "nlp", "cv"],
//       modes: ["fullstack"],
//       startDate: "2022-09",
//       endDate: "2023-02",
//       media: [
//         {
//           type: "image",
//           url: "/api/placeholder/400/800",
//           alt: "Mobile App Screenshot",
//           caption: "Voice interface of the AI assistant"
//         }
//       ],
//       links: {
//         demo: "https://apps.example.com/ai-assistant"
//       }
//     },
//     {
//       id: "proj4",
//       title: "Neural Architecture Search Framework",
//       summary: "Automated framework for discovering optimal neural architectures",
//       description: "Developed a comprehensive framework for automated neural architecture search, incorporating novel search strategies and evaluation metrics. The framework significantly reduces the computational cost of finding optimal architectures while maintaining high performance.",
//       tags: ["research", "deep-learning", "neural-networks", "optimization", "experimental"],
//       modes: ["research"],
//       startDate: "2023-01",
//       endDate: "2023-08",
//       media: [
//         {
//           type: "image",
//           url: "/api/placeholder/800/500",
//           alt: "Architecture Search Results",
//           caption: "Visualization of discovered neural architectures"
//         }
//       ],
//       links: {
//         github: "https://github.com/username/nas-framework",
//         article: "https://blog.example.com/neural-architecture-search"
//       }
//     }
//   ],

//   publications: [
//     {
//       id: "pub1",
//       title: "Attention-Based Neural Architecture for Multi-Modal Content Generation",
//       authors: ["Rifqi", "Co-Author Name", "Senior Author"],
//       venue: "International Conference on Machine Learning (ICML)",
//       year: "2024",
//       type: "conference",
//       abstract: "We propose a novel attention-based neural architecture that can generate high-quality content across multiple modalities including text, images, and audio. Our approach achieves state-of-the-art results on several benchmark datasets while maintaining computational efficiency.",
//       tags: ["deep-learning", "nlp", "cv", "research", "neural-networks"],
//       links: {
//         paper: "https://arxiv.org/abs/2024.example",
//         arxiv: "https://arxiv.org/abs/2024.example",
//         code: "https://github.com/username/multimodal-gen",
//         slides: "https://example.com/slides.pdf"
//       },
//       citations: 15,
//       status: "published",
//       featured: true
//     },
//     {
//       id: "pub2",
//       title: "Efficient Training Strategies for Large Language Models in Resource-Constrained Environments",
//       authors: ["Rifqi", "Collaborator A", "Collaborator B"],
//       venue: "Neural Information Processing Systems (NeurIPS)",
//       year: "2023",
//       type: "conference",
//       abstract: "This paper introduces novel training strategies that enable effective fine-tuning of large language models in resource-constrained environments, reducing computational requirements by 40% while maintaining performance.",
//       tags: ["deep-learning", "nlp", "optimization", "research"],
//       links: {
//         paper: "https://proceedings.neurips.cc/paper/2023/example",
//         code: "https://github.com/username/efficient-llm",
//         poster: "https://example.com/poster.pdf"
//       },
//       citations: 32,
//       status: "published",
//       featured: true
//     },
//     {
//       id: "pub3",
//       title: "Federated Learning for Privacy-Preserving AI in Healthcare Applications",
//       authors: ["Rifqi", "Medical Research Team"],
//       venue: "Journal of Medical AI",
//       year: "2023",
//       type: "journal",
//       abstract: "We investigate federated learning approaches for training AI models on sensitive healthcare data while preserving patient privacy. Our framework demonstrates significant improvements in model performance while maintaining strict privacy guarantees.",
//       tags: ["machine-learning", "research", "theory", "optimization"],
//       links: {
//         paper: "https://journal.example.com/article/123",
//         code: "https://github.com/username/federated-health"
//       },
//       citations: 8,
//       status: "published"
//     },
//     {
//       id: "pub4",
//       title: "Real-time Object Detection in Edge Computing Environments",
//       authors: ["Rifqi", "Edge Computing Lab"],
//       venue: "arXiv preprint",
//       year: "2024",
//       type: "preprint",
//       abstract: "This work presents a lightweight object detection framework optimized for edge computing devices, achieving real-time performance on resource-constrained hardware.",
//       tags: ["cv", "deep-learning", "optimization", "experimental"],
//       links: {
//         arxiv: "https://arxiv.org/abs/2024.example2",
//         code: "https://github.com/username/edge-detection"
//       },
//       status: "under-review"
//     },
//     {
//       id: "pub5",
//       title: "Advanced Multimodal Learning for Next-Generation AI Systems",
//       authors: ["Rifqi", "Research Consortium"],
//       type: "conference",
//       tags: ["deep-learning", "nlp", "cv", "research", "multimodal"],
//       status: "in-preparation",
//       isPartial: true,
//       expectedDate: "2025",
//       partialNote: "Work in progress on novel multimodal architectures. Abstract and venue details will be available soon.",
//       featured: false
//     },
//     {
//       id: "pub6",
//       title: "Scalable AI Infrastructure for Enterprise Applications",
//       authors: ["Rifqi", "Industry Partners"],
//       type: "journal",
//       tags: ["ai", "backend", "optimization", "research"],
//       status: "upcoming",
//       isPartial: true,
//       expectedDate: "Late 2025",
//       partialNote: "Industry collaboration paper focusing on practical AI deployment strategies. Currently under development.",
//       links: {
//         code: "https://github.com/username/scalable-ai-infra"
//       }
//     }
//   ],

//   awards: [
//     {
//       id: "award1",
//       title: "Best Paper Award",
//       organization: "International Conference on Machine Learning (ICML)",
//       year: "2024",
//       description: "Recognized for outstanding contribution to multi-modal content generation research",
//       type: "award"
//     },
//     {
//       id: "award2",
//       title: "Outstanding Researcher Fellowship",
//       organization: "National Science Foundation",
//       year: "2023",
//       description: "Competitive fellowship for early-career researchers in AI and machine learning",
//       type: "fellowship"
//     },
//     {
//       id: "award3",
//       title: "Dean's List",
//       organization: "University Computer Science Department",
//       year: "2022",
//       description: "Academic excellence recognition for top 5% of graduating class",
//       type: "honor"
//     },
//     {
//       id: "award4",
//       title: "Innovation Grant",
//       organization: "Tech Innovation Foundation",
//       year: "2023",
//       description: "Funding support for developing privacy-preserving AI solutions in healthcare",
//       type: "grant"
//     }
//   ],

//   education: [
//     {
//       id: "edu1",
//       degree: "Master of Science",
//       field: "Computer Science",
//       school: "University of Technology",
//       location: "Jakarta, Indonesia",
//       startDate: "2020-09",
//       endDate: "2022-07",
//       gpa: "3.9/4.0",
//       honors: ["Magna Cum Laude", "Outstanding Graduate Student Award"],
//       description: "Specialized in machine learning and artificial intelligence with focus on deep learning architectures and natural language processing.",
//       thesis: {
//         title: "Efficient Neural Architecture Search for Multi-Modal Applications",
//         advisor: "Dr. Jane Smith",
//         description: "Developed novel search strategies that reduce computational cost by 40% while maintaining high performance across multiple modalities."
//       }
//     },
//     {
//       id: "edu2",
//       degree: "Bachelor of Science",
//       field: "Computer Science",
//       school: "Institute of Technology",
//       location: "Jakarta, Indonesia",
//       startDate: "2016-09",
//       endDate: "2020-07",
//       gpa: "3.8/4.0",
//       honors: ["Summa Cum Laude", "Dean's List (6 semesters)"],
//       description: "Strong foundation in computer science fundamentals with emphasis on software engineering, algorithms, and data structures."
//     }
//   ],

//   modes: {
//     fullstack: {
//       title: "Full Stack AI Developer",
//       bio: "A generalist full stack AI developer passionate about building intelligent solutions that bridge the gap between complex AI technologies and user-friendly applications.",
//       relevantTags: ["fullstack", "frontend", "backend", "ai", "mobile", "devops", "web3", "data", "nlp", "cv", "deep-learning", "machine-learning", "neural-networks", "optimization", "theory", "experimental", "research", "publication"]
//     },
//     research: {
//       title: "ML Researcher & AI Scientist",
//       bio: "ML researcher focused on developing novel algorithms and architectures for next-generation AI systems, with expertise in deep learning, NLP, and computer vision.",
//       relevantTags: ["fullstack", "frontend", "backend", "ai", "mobile", "devops", "web3", "data", "nlp", "cv", "deep-learning", "machine-learning", "neural-networks", "optimization", "theory", "experimental", "research", "publication"]
//     }
//   }
// };

const rawPortfolioData = {
  personalInfo: {
    name: "Rifqi Naufal Abdjul", // full legal name :contentReference[oaicite:19]{index=19}
    title: "Full-Stack AI Engineer", // job title on CV :contentReference[oaicite:20]{index=20}
    bio: "AI engineer and researcher building scalable, human-centric products that merge modern ML techniques with robust backend engineering.",
    location: "Jakarta, Indonesia", // inferred from header & projects – adjust if needed
    email: "rifqi.abdjul23@gmail.com", // :contentReference[oaicite:21]{index=21}
    social: {
      github: "https://github.com/rifqi2320", // :contentReference[oaicite:22]{index=22}
      linkedin: "https://www.linkedin.com/in/rifqina", // :contentReference[oaicite:23]{index=23}
      twitter: "https://x.com/rifqinau", // TODO: add Twitter handle if any
      website: "me.reefz.cc", // TODO: add personal website
      scholar: "https://scholar.google.com/citations?user=gXXxvVYAAAAJ&hl=en" // TODO: add Google Scholar profile
    },
    avatar: "/fotoiqi.jpg", // TODO: replace with real image
    gallery: [
      {
        id: "gallery1",
        url: "/tegal-iqi.jpg",
        caption: "Warehouse Deployment at Tegal",
        alt: "Rifqi and team at Tegal warehouse"
      },
      {
        id: "gallery2", 
        url: "/symposium-jaist-iqi.jpg",
        caption: "Presenting at Sakura Science Symposium, Ishikawa, Japan",
        alt: "Rifqi presenting at Symposium"
      },
      {
        id: "gallery3",
        url: "/dcamiqi.jpg",
        caption: "Mining site survey (D'cam Project)",
        alt: "Rifqi at mining site with D'cam project survey"
      }
    ]
  },

  experiences: [
    {
      id: "exp_charcentric",
      title: "Full-Stack Engineer (AI)",
      company: "CharCentric",
      location: "Remote / Jakarta", // TODO: confirm exact
      startDate: "2024-02",
      summary: "Designing AI products and ML infrastructure for enterprise clients",
      description:
        "A fullstack role focused on building AI products and with constant collaboration with clients. I wore multiple hats, from AI engineering, backend development, to frontend work. Managing client expectations and delivering high-quality solutions was key.",
      tags: ["Full-Time", "AI", "Backend", "Frontend", "Data Engineering"],
      modes: ["fullstack", "research"],
      achievements: [
        "Built multiple data pipelines and develop dashboards to serve client needs",
        "Rewrote legacy Create-React-App frontend to Next.js 14, improving performance and maintainability",
        "Led 2-person team shipping an in-house RAG chatbot", // :contentReference[oaicite:24]{index=24}
        "Implemented ABAC service that reduced auth latency by 40 %", // derived from CV bullet
      ]
    },
    {
      id: "exp_jaist",
      title: "Student Research Intern",
      company: "Japan Advanced Institute of Science and Technology (JAIST)",
      location: "Ishikawa, Japan & Remote",
      startDate: "2024-01",
      endDate: "2024-02",
      summary: "Speech-privacy research under the Sakura Science Program",
      description:
        "Collaborated with JAIST researchers on speech privacy. Was part of the Sakura Science Program, which promotes international collaboration in science and technology. Focused on developing de-identification systems for low-resource languages.",
      tags: ["Intern", "Research"],
      modes: ["research"],
      achievements: [
        "Published paper at SEALP 2025 (COLING workshop)" // :contentReference[oaicite:25]{index=25}
      ]
    },
    {
      id: "exp_paragon",
      title: "Backend Engineer Intern",
      company: "PT Paragon Technology & Innovation",
      location: "Jakarta, Indonesia",
      startDate: "2022-06",
      endDate: "2023-12",
      summary: "Built and maintained internal services for Beyondly & WMS",
      description:
      // intern, high contribution, contribute to a marketplace, and handling deployments on real warehouse systems
        "An intern position where I contributed to backend services for Beyondly, a B2B marketplace, and WMS, a warehouse management system. I was involved in building and maintaining internal services, handling deployments on-site, and ensuring system reliability.",
      tags: ["Backend", "Intern"],
      modes: ["fullstack"],
      achievements: [
        "Delivered WMS backend adopted by >5 warehouses", // CV bullets :contentReference[oaicite:26]{index=26}
        "Cut deployment bugs by enforcing typed docs and API specs"
      ]
    }
  ],

  projects: [
  {
    "id": "proj_dcam_incam",
    "title": "D’Cam - InCam",  // :contentReference[oaicite:20]{index=20}
    "summary": "Computer‑vision model for microsleep, fatigue, and rule‑violation detection",
    "description": "Built a microsleep/fatigue detector using MediaPipe Face Landmark and YOLOv8; deployed on Jetson Nano to stream real‑time alerts to a central service.",  // :contentReference[oaicite:21]{index=21}
    "tags": ["Computer Vision", "Edge Devices"],
    "modes": ["research"],
    "startDate": "2023-12",  // Dec 2023 :contentReference[oaicite:22]{index=22}
    "media": [],
    "links": {},
    "featured": true
  },
  {
    "id": "proj_cinlok",
    "title": "CinLok",  // :contentReference[oaicite:23]{index=23}
    "summary": "Progressive Web App dating platform for students",
    "description": "Full‑stack PWA with React (TypeScript) frontend, Express (TypeScript) backend, Firebase Chat, and Weaviate vector DB for profile mixing.",  // :contentReference[oaicite:24]{index=24}
    "tags": ["Web Development", "PoC"],
    "modes": ["fullstack"],
    "startDate": "2023-02",  // Feb 2023 :contentReference[oaicite:25]{index=25}
    "media": [],
    "links": {},
    "featured": true
  },
  {
    "id": "proj_binotify",
    "title": "Binotify",  // :contentReference[oaicite:26]{index=26}
    "summary": "Microservice‑based music recommendation app",
    "description": "Developed a two‑phase microservices architecture (Java JAX‑WS, React TS, Express TS, Apache‑PHP) to enable SOAP/REST communications for secure music streaming and local playback.",  // :contentReference[oaicite:27]{index=27}
    "tags": ["Web Development", "Microservices"],
    "modes": ["fullstack"],
    "startDate": "2022-07",  // July 2022 :contentReference[oaicite:28]{index=28}
    "media": [],
    "links": {},
    "featured": false
  },
  {
    "id": "proj_pln_data_sync",
    "title": "PLN Data Sync",  // :contentReference[oaicite:29]{index=29}
    "summary": "Real‑time ETL pipeline for SCADA analytics dashboards",
    "description": "Built a real‑time data ingestion pipeline for SCADA analytics using Prefect orchestration and Polars for high‑performance processing.",  // :contentReference[oaicite:30]{index=30}
    "tags": ["ETL", "Data Engineering"],
    "modes": ["fullstack"],
    "startDate": "2025-03",  // TODO: confirm exact kickoff date
    "media": [],
    "links": {},
    "featured": true
  },
    {
      id: "proj_rag_km",
      title: "RAG Kurikulum Merdeka",
      summary: "Retrieval-augmented chatbot for Indonesia’s new curriculum",
      description:
        "FastAPI + LangChain + pgvector stack that answers policy questions for teachers and administrators. Supports semantic search, multi-LLM backends and containerised deployment.",
      tags: ["Web Development", "AI", "Chatbot"],
      modes: ["fullstack"],
      startDate: "2025-03", // TODO: verify kickoff date
      media: [],
      links: {
        github: "https://github.com/rifqi2320/rag-kurikulum", // TODO: repo link
      },
      featured: true
    },
    {
      id: "proj_vlookup",
      title: "VLookup Web Application",
      summary: "Next.js tool that performs Google-Sheets VLOOKUPs via API",
      description:
        "Implements dynamic sheet metadata retrieval, key-based search and responsive Chakra UI front-end.",
      tags: ["Web Development"],
      modes: ["fullstack"],
      startDate: "2025-02",
      media: [],
      links: {
        github: "https://github.com/rifqi2320/vlookup",
      },
      featured: false
    },
    {
      id: "proj_nymph",
      title: "NIM Finder",
      summary: "Fast fuzzy-search engine for 400 k+ student records",
      description:
        "Next.js 14 + FuzzySort + React-Window virtualised list; backed by JSON database and Python data-mining pipeline.",
      tags: ["Web Development"],
      modes: ["fullstack"],
      startDate: "2024-10",
      media: [],
      links: {
        demo: "https://nymph-nim-finder.vercel.app/",
        github: "https://github.com/rifqi2320/nymph-nim-finder"
      }
    }
  ],

  publications: [
    {
      id: "pub_speech_deid",
      title: "Indonesian Speech Content De-Identification in Low-Resource Transcripts",
      authors: [
        "Rifqi Naufal Abdjul",
        "Dessi Puji Lestari",
        "Ayu Purwarianti",
        "Candy Olivia Mawalim",
        "Sakriani Sakti",
        "Masashi Unoki"
      ],
      venue: "2nd Workshop on South-East Asian Language Processing (SEALP 2025) @ COLING",
      year: "2025",
      type: "workshop",
      abstract: "Advancements in technology and the increased use of digital data threaten individual privacy, especially in speech containing Personally Identifiable Information (PII). Therefore, systems that can remove or process privacy-sensitive data in speech are needed, particularly for low-resource transcripts. These transcripts are minimally annotated or labeled automatically, which is less precise than human annotation. However, using them can simplify the development of de-identification systems in any language. In this study, we develop and evaluate an efficient speech de-identification system. We create an Indonesian speech dataset containing sensitive private information and design a system with three main components: speech recognition, information extraction, and masking. To enhance performance in low-resource settings, we incorporate transcription data in training, use data augmentation, and apply weakly supervised learning. Our results show that our techniques significantly improve privacy detection performance, with approximately 29% increase in F1 score, 20% in precision, and 30% in recall with minimally labeled data.",
      tags: ["speech", "privacy", "nlp", "deep-learning"],
      links: {
        paper: "https://aclanthology.org/2025.sealp-1.6/",
        pdf: "https://aclanthology.org/2025.sealp-1.6.pdf"
      },
      citations: 0, // TODO: update when indexed
      status: "published",
      featured: true
    }
  ],

  awards: [
    {
      id: "award_gemastik",
      title: "1st Place – Pra-Gemastik Data Mining",
      organization: "Gemastik",
      year: "2023",
      description:
        "Wrote a technical paper on forecasting Jakarta air-pollution using open-government data", // :contentReference[oaicite:27]{index=27}
      type: "competition"
    },
    // IChO 2020 bronze medal
    {
      id: "award_icho",
      title: "Bronze Medal – International Chemistry Olympiad 2020",
      organization: "International Chemistry Olympiad",
      year: "2020",
      // remote setting due to COVID-19, turkey as a host
      description: "Achieved bronze medal in International Chemistry Olympiad 2020, held remotely with Turkey as the host country.",
      type: "competition"
    },
    // OSN 2019 bronze medal
    {
      id: "award_osn",
      title: "Bronze Medal – National Science Olympiad 2019",
      organization: "Kementerian Pendidikan dan Kebudayaan Republik Indonesia",
      year: "2019",
      description: "Awarded bronze medal in the National Science Olympiad (OSN) for excellence in chemistry.",
      type: "competition"
    }
  ],

  education: [
    {
      id: "edu_msc_itb",
      degree: "Master of Science",
      field: "Informatics",
      school: "Institut Teknologi Bandung",
      location: "Bandung, Indonesia",
      startDate: "2024-09",
      endDate: "2025-09 (expected)",
      gpa: "3.82/4.0", // :contentReference[oaicite:29]{index=29}
      honors: ["Ganesha Talent Assistantship 100 Scholarship"],
      description: "Fast-track program specialising in Intelligent Systems & AI Engineering.",
      thesis: {
        title: "Concepts-of-Physics Benchmark for Chain-of-Thought Physics Reasoning", // TODO when finalised
        advisor: "Genta Indra Winata, Ayu Purwarianti",
        description: "CoPBench is a multimodal physics benchmark explicitly designed to evaluate models' conceptual understanding through a fine-grained, chain-of-thought framework."
      }
    },
    {
      id: "edu_bsc_itb",
      degree: "Bachelor of Science",
      field: "Informatics",
      school: "Institut Teknologi Bandung",
      location: "Bandung, Indonesia",
      startDate: "2020-08",
      endDate: "2024-07",
      gpa: "3.88/4.0", // :contentReference[oaicite:30]{index=30}
      honors: [
        "Cum Laude", 
        "Beasiswa Unggulan Scholarship",
      ],
      description: "Specialised courses: Machine Learning, Data Mining, Computer Vision, Natural Language Processing, and Distributed Applications",
      thesis: {
        title: "Indonesian Speech Content De-Identification in Low Resource Transcripts", // TODO when finalised
        advisor: "Dessi Puji Lestari, Ayu Purwarianti, Candy Olivia Mawalim, Sakriani Sakti, Masashi Unoki",
        description: "A pipeline for de-identifying sensitive information in Indonesian speech transcripts, leveraging ASR, NER and masking techniques."
      }
    }
  ],

  modes: {
    fullstack: {
      title: "Full-Stack AI Developer",
      bio: "I’m a mid‑junior full‑stack AI engineer based in Jakarta, driven by a passion for building scalable, high‑performance systems that solve real‑world problems. I enjoy tackling end‑to‑end challenges—designing reliable back‑end services, orchestrating data pipelines, and crafting intuitive user experiences. My core interests lie in system observability, performance optimization, and writing clean, maintainable code that thrives under production demands. I’m constantly refining development workflows and automation to boost reliability and efficiency.",
      relevantTags: [

      ]
    },
    research: {
      title: "Early-career AI ML Researcher",
      bio: "I’m an early‑career ML researcher and AI scientist with a keen interest in leading‑edge machine learning technologies, especially their engineering aspects. I’m passionate about making models more interpretable and building privacy‑aware solutions for sensitive data. Eager to dive into experiments, benchmarks, and tool development, I aim to contribute to transparent, reliable AI systems that users can trust and understand.",
      relevantTags: [

      ]
    }
  }
};


// Generate tags automatically and export the complete portfolio data
export const portfolioData = {
  ...rawPortfolioData,
  tags: generateTagsFromData(rawPortfolioData)
} as unknown as PortfolioData;
