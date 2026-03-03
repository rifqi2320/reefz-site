import { PortfolioData } from './types';
import { generateTagsFromData } from './utils/tagGenerator';

const staticAsset = (path: string): string => {
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return encodeURI(`${baseUrl}${normalizedPath}`);
};

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
    name: "Rifqi Naufal Abdjul",
    title: "AI Platform Engineer & Researcher",
    bio: "Specializing in Agentic AI and Scalable Systems. I bridge the gap between complex reasoning models and high-performance production infrastructure.",
    location: "Jakarta, Indonesia",
    email: "rifqi.abdjul23@gmail.com",
    social: {
      github: "https://github.com/rifqi2320",
      linkedin: "https://www.linkedin.com/in/rifqina",
      twitter: "https://x.com/rifqinau",
      website: "me.reefz.cc",
      scholar: "https://scholar.google.com/citations?user=gXXxvVYAAAAJ&hl=en",
      cv: staticAsset("/CV_Rifqi (AI_ML_Eng) 13_02_2026.pdf")
    },
    avatar: staticAsset("/fotoiqi.jpg"),
    gallery: [
      {
        id: "gallery1",
        url: staticAsset("/tegal-iqi.jpg"),
        caption: "Warehouse Deployment at Tegal",
        alt: "Rifqi and team at Tegal warehouse"
      },
      {
        id: "gallery2",
        url: staticAsset("/symposium-jaist-iqi.jpg"),
        caption: "Presenting at Sakura Science Symposium, Ishikawa, Japan",
        alt: "Rifqi presenting at Symposium"
      },
      {
        id: "gallery3",
        url: staticAsset("/dcamiqi.jpg"),
        caption: "Mining site survey (D'cam Project)",
        alt: "Rifqi at mining site with D'cam project survey"
      }
    ]
  },

  experiences: [
    {
      id: "exp_shopee",
      title: "AI Platform Engineer",
      company: "Shopee",
      location: "Jakarta, Indonesia (Hybrid)",
      startDate: "2024-12",
      endDate: "Present",
      summary: "Optimizing global AI infrastructure and internal tooling for Shopee International",
      description: "Responsible for the stability and performance of the AI platform serving internal users across Shopee International. Focused on high-availability infrastructure, query optimization, and rapid feature delivery.",
      tags: ["Full-Time", "Infrastructure", "System Design", "DevOps"],
      modes: ["fullstack"],
      achievements: [
        "Migrated ALBs to on-premise private cloud, resolving bandwidth contention and stabilizing cluster uptime",
        "Optimized complex SQL/Elasticsearch queries, reducing data retrieval latency by 40%",
        "Maintained weekly feature release cadence for high-velocity internal data science teams"
      ]
    },
    {
      id: "exp_charcentric",
      title: "Full-Stack Engineer (AI)",
      company: "CharCentric",
      location: "Remote",
      startDate: "2024-02",
      endDate: "2025-11",
      summary: "Core engineer for a greenfield Agentic Workflow platform",
      description: "Co-architected a scalable data workflow platform that generalizes client business processes. Transitioned from pure engineering to applied research, focusing on reliability in autonomous agents.",
      tags: ["Full-Time", "Agentic AI", "Rust", "GraphRAG", "Next.js"],
      modes: ["fullstack", "research"],
      achievements: [
        "Co-built a greenfield platform automating the pipeline from raw ingestion to Agentic Workflow chatbots",
        "Architected a custom GraphRAG PoC to validate multi-hop reasoning capabilities for complex client queries",
        "Designed a memory-safe Attribute-Based Access Control (ABAC) system in Rust, reducing auth latency by 40%",
        "Refactored legacy dashboards to Next.js, eliminating performance bottlenecks and enhancing UX"
      ]
    },
    {
      id: "exp_jaist",
      title: "Student Research Intern",
      company: "JAIST",
      location: "Ishikawa, Japan & Remote",
      startDate: "2024-01",
      endDate: "2024-02",
      summary: "Privacy-preserving speech research under Sakura Science Program",
      description: "Collaborated with the content-based speech privacy group on de-identification systems for low-resource languages.",
      tags: ["Intern", "Research", "Speech Processing"],
      modes: ["research"],
      achievements: [
        "Published paper at SEALP 2025 (COLING workshop) on weakly-supervised de-identification"
      ]
    },
    {
      id: "exp_paragon",
      title: "Backend Engineer Intern",
      company: "Paragon Technology & Innovation",
      location: "Jakarta, Indonesia",
      startDate: "2022-06",
      endDate: "2023-12",
      summary: "Backend services for B2B Marketplace and Warehouse Management",
      description: "Built reliable backend services for critical logistics operations. Handled on-site deployments and ensured system reliability for warehouse management systems.",
      tags: ["Intern", "Backend", "Logistics"],
      modes: ["fullstack"],
      achievements: [
        "Delivered WMS backend services adopted by >5 major warehouses",
        "Reduced deployment errors by enforcing strict API specifications and typed documentation"
      ]
    }
  ],

  projects: [
    {
      id: "proj_copbench",
      title: "CoPBench (Thesis)",
      summary: "Benchmark for Chain-of-Thought Reasoning in Physics",
      description: "Developed a novel benchmark to evaluate Scientific and Multimodal reasoning in Vision Language Models (VLMs). Demonstrated that concept-aware context significantly improves reasoning accuracy compared to standard zero-shot prompting.",
      tags: ["Research", "LLM", "Reasoning", "Multimodal"],
      modes: ["research"],
      startDate: "2024-09",
      media: [],
      links: {},
      featured: true
    },
    {
      id: "proj_pln_data_sync",
      title: "PLN Data Sync",
      summary: "Real-time ETL pipeline for SCADA analytics",
      description: "Built a high-performance data ingestion pipeline for SCADA analytics using Prefect orchestration and Polars. Handles real-time telemetry data processing for energy infrastructure.",
      tags: ["Data Engineering", "ETL", "Real-time"],
      modes: ["fullstack"],
      startDate: "2025-03",
      media: [],
      links: {},
      featured: true
    },
    {
      id: "proj_rag_km",
      title: "RAG Kurikulum Merdeka",
      summary: "Agentic chatbot for Indonesia's education policy",
      description: "FastAPI + LangChain + pgvector stack answering policy questions. Implements semantic search and basic tool-use to retrieve specific regulations.",
      tags: ["Agentic AI", "RAG", "Chatbot"],
      modes: ["fullstack", "research"],
      startDate: "2025-03",
      media: [],
      links: {
        github: "https://github.com/rifqi2320/rag-kurikulum"
      },
      featured: false
    },
    {
      id: "proj_dcam",
      title: "D'Cam - InCam",
      summary: "Edge-based fatigue detection system",
      description: "Computer-vision model for microsleep and rule-violation detection using MediaPipe and YOLOv8. Optimized for Jetson Nano edge deployment.",
      tags: ["Computer Vision", "Edge AI", "IoT"],
      modes: ["research", "fullstack"],
      startDate: "2023-12",
      media: [],
      links: {},
      featured: false
    },
    {
      id: "proj_twitch_recsys",
      title: "Twitch RecSys",
      summary: "Graph-based recommendation system analysis",
      description: "Evaluated four recommendation models on 124M interactions. The collaborative filtering model achieved 78.79% accuracy, demonstrating superior performance in user similarity-based recommendations.",
      tags: ["Research", "RecSys", "Data Mining"],
      modes: ["research"],
      startDate: "2023-09",
      endDate: "2023-12",
      media: [],
      links: {},
      featured: true
    },
    {
      id: "proj_portfolio_site",
      title: "Personal Portfolio",
      summary: "Dual-mode portfolio (Research vs Engineering)",
      description: "Modern portfolio built with React 18 and TypeScript. Features a toggleable context switch between 'Researcher' and 'Engineer' personas.",
      tags: ["Frontend", "UX Design"],
      modes: ["fullstack"],
      startDate: "2025-01",
      media: [],
      links: {
        demo: "https://me.reefz.cc",
        github: "https://github.com/rifqi2320/reefz-site"
      },
      featured: false
    }
  ],

  publications: [
    {
      id: "pub_copbench",
      title: "Concepts-of-Physics Benchmark (CoPBench) for Chain-of-Thought Reasoning",
      authors: ["Rifqi Naufal Abdjul"],
      venue: "Submitted to ARR (July 2025)",
      year: "2025",
      type: "conference",
      abstract: "We introduce CoPBench, a specialized benchmark for evaluating Scientific and Multimodal reasoning in Vision Language Models (VLMs). By enforcing concept-aware context retrieval, we demonstrate significant improvements in Chain-of-Thought reasoning capabilities compared to generic baselines.",
      tags: ["reasoning", "multimodal", "llm", "physics"],
      links: {},
      status: "submitted",
      featured: true
    },
    {
      id: "pub_speech_deid",
      title: "Indonesian Speech Content De-Identification in Low-Resource Transcripts",
      authors: [
        "Rifqi Naufal Abdjul", "Dessi Puji Lestari", "Ayu Purwarianti",
        "Candy Olivia Mawalim", "Sakriani Sakti", "Masashi Unoki"
      ],
      venue: "SEALP 2025 @ COLING",
      year: "2025",
      type: "workshop",
      abstract: "Proposed a weakly supervised learning framework for privacy preservation in low-resource languages. Achieved a 29% increase in F1 score by leveraging entity embeddings and data augmentation on minimally labeled speech transcripts.",
      tags: ["speech", "privacy", "weak-supervision"],
      links: {
        paper: "https://aclanthology.org/2025.sealp-1.6/",
        pdf: "https://aclanthology.org/2025.sealp-1.6.pdf"
      },
      status: "published",
      featured: true
    }
  ],

  awards: [
    {
      id: "award_gemastik",
      title: "1st Place - Pra-Gemastik Data Mining",
      organization: "Gemastik",
      year: "2023",
      description: "Technical paper on forecasting air pollution using open-government data.",
      type: "competition"
    },
    {
      id: "award_icho",
      title: "Bronze Medal - International Chemistry Olympiad",
      organization: "IChO",
      year: "2020",
      description: "International competition held remotely (Host: Turkey).",
      type: "competition"
    },
    {
      id: "award_osn",
      title: "Bronze Medal - National Science Olympiad",
      organization: "Ministry of Education Indonesia",
      year: "2019",
      description: "National level chemistry olympiad.",
      type: "competition"
    }
  ],

  education: [
    {
      id: "edu_msc_itb",
      degree: "M.Sc. in Artificial Intelligence",
      field: "Informatics",
      school: "Institut Teknologi Bandung",
      location: "Bandung, Indonesia",
      startDate: "2024-09",
      endDate: "2025-09",
      gpa: "3.82/4.0",
      honors: ["Ganesha Talent Assistantship 100 Scholarship"],
      description: "Focusing on Multimodal Reasoning and Agentic Systems.",
      thesis: {
        title: "Concepts-of-Physics Benchmark (CoPBench)",
        advisor: "Genta Indra Winata, Ayu Purwarianti",
        description: "Investigating Chain-of-Thought reasoning enhancements in VLMs via concept retrieval."
      }
    },
    {
      id: "edu_bsc_itb",
      degree: "B.Sc. in Informatics",
      school: "Institut Teknologi Bandung",
      field: "Informatics",
      location: "Bandung, Indonesia",
      startDate: "2020-08",
      endDate: "2024-07",
      gpa: "3.88/4.0",
      honors: ["Cum Laude", "Beasiswa Unggulan Scholarship"],
      description: "Specialization in Machine Learning and Distributed Systems.",
      thesis: {
        title: "Indonesian Speech Content De-Identification",
        advisor: "Dessi Puji Lestari",
        description: "Developed a privacy pipeline using ASR and NER for low-resource languages."
      }
    }
  ],

  modes: {
    fullstack: {
      title: "AI Platform Engineer",
      bio: "I am a Platform Engineer obsessed with the 'System' side of AI. Currently at Shopee, I optimize the infrastructure that powers global-scale AI services. Previously at CharCentric, I built greenfield Agentic Platforms from scratch. I combine Rust-based security, high-performance SQL/Vector search, and modern frontend architecture to ship AI products that are not just smart, but reliable and fast.",
      relevantTags: ["System Design", "Infrastructure", "Agentic AI"],
      cv: staticAsset("/CV_Rifqi (AI_ML_Eng) 13_02_2026.pdf")
    },
    research: {
      title: "Agentic AI Researcher",
      bio: "I aspire to build the next generation of Reliable Autonomous Agents. My research investigates how to make LLMs better at planning and reasoning (Chain-of-Thought), and how to ground them in reality using tools and external knowledge (RAG). My background in shipping production AI systems gives me a unique perspective on the fragility of current agents and the engineering rigor required to fix them.",
      relevantTags: ["Agents", "Reasoning", "Robustness"],
      cv: staticAsset("/CV_Rifqi (AI_ML_Research) 13_02_2026.pdf")
    }
  }
};
// Generate tags automatically and export the complete portfolio data
export const portfolioData = {
  ...rawPortfolioData,
  tags: generateTagsFromData(rawPortfolioData)
} as unknown as PortfolioData;
