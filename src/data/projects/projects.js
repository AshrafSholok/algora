export const PROJECTS = [
  {
    id: "proj-1",
    title: "AR Education Hub",
    description:
      "A web portal that showcases 6 classroom-ready AR applications with previews, instructions, and downloads.",
    category: "AR/VR",
    year: 2024,
    client: "EdTech Lab",
    cover:
      "https://media.licdn.com/dms/image/v2/D5612AQH5r9NT53sONA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1676216215893?e=2147483647&v=beta&t=Vwoqe9PKXuxvqUgSPkw5EhtH8yt8OxQsdrA78LI24PI",
    stack: ["React", "Three.js", "WebXR"],
    tags: ["Education", "AR", "Web"],
    links: { demo: "#", repo: "#", caseStudy: "#" },
    impact: [
      { metric: "Student engagement", value: "+42%" },
      { metric: "Avg. session", value: "6m 12s" },
      { metric: "User feedback", value: "4.7/5" },
      { metric: "Adoption rate", value: "75% of classes" }
    ],
  },
  {
    id: "proj-2",
    title: "E-Commerce Platform",
    description:
      "A scalable online store with real-time inventory management and secure payments.",
    category: "Web",
    year: 2023,
    client: "ShopEase",
    cover:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    stack: ["Next.js", "Stripe", "Tailwind"],
    tags: ["E-commerce", "Payments", "Web"],
    links: { demo: "#", repo: "#", caseStudy: "#" },
    impact: [
      { metric: "Sales increase", value: "+120%" },
      { metric: "Checkout speed", value: "2.3s avg." },
      { metric: "Customer satisfaction", value: "4.9/5" }
    ],
  },
  {
    id: "proj-3",
    title: "Mobile Banking App",
    description:
      "A secure and user-friendly mobile banking experience with biometric login and instant transfers.",
    category: "Mobile",
    year: 2024,
    client: "FinTrust Bank",
    cover:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1600&auto=format&fit=crop",
    stack: ["Flutter", "Firebase", "OAuth2"],
    tags: ["Finance", "Mobile", "Security"],
    links: { demo: "#", repo: "#", caseStudy: "#" },
    impact: [
      { metric: "User growth", value: "+85k users" },
      { metric: "Downtime", value: "<0.1%" },
      { metric: "Transactions", value: "500k+/month" },
      { metric: "App Store Rating", value: "4.8/5" },
    ],
  },
  {
    id: "proj-4",
    title: "AI-Powered LMS",
    description:
      "An intelligent learning management system with personalized course recommendations.",
    category: "Web",
    year: 2023,
    client: "SmartLearn",
    cover:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    stack: ["Django", "React", "PostgreSQL"],
    tags: ["AI", "Education", "Web"],
    links: { demo: "#", repo: "#", caseStudy: "#" },
    impact: [
      { metric: "Completion rates", value: "+35%" },
      { metric: "Active users", value: "12k+" },
    ],
  },
  {
    id: "proj-5",
    title: "Realtime Chat App",
    description:
      "A cross-platform mobile chat application with real-time messaging and media sharing.",
    category: "Mobile",
    year: 2025,
    client: "Internal Project",
    cover:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
    stack: ["React Native", "Firebase", "Expo"],
    tags: ["Chat", "Realtime"],
    links: { demo: "#", caseStudy: "#" },
    impact: [
      { metric: "Messages sent", value: "1M+" },
      { metric: "Active users", value: "5k+" },
      { metric: "Avg. session", value: "15m" },
      { metric: "User retention", value: "60% after 3 months" },
    ],
  },
  {
    id: "proj-6",
    title: "Kubernetes Rollouts",
    description:
      "DevOps pipelines with Docker, Helm and blue/green deployments for microservices.",
    category: "DevOps",
    year: 2025,
    client: "FinTech X",
    cover:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    stack: ["K8s", "Helm", "GitHub Actions"],
    tags: ["CI/CD", "Scaling", "SRE"],
    links: { demo: "#", caseStudy: "#" },
  },
  {
    id: "proj-7",
    title: "AI Recommender",
    description:
      "Product recommendations with embeddings and ranking, served through a REST API.",
    category: "AI/ML",
    year: 2024,
    client: "Retailer 24",
    cover:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop",
    stack: ["Python", "FastAPI", "Vector DB"],
    tags: ["AI", "NLP", "Ranking"],
    links: { demo: "#", caseStudy: "#" },
  },
  {
    id: "proj-8",
    title: "Admin Analytics",
    description:
      "Responsive admin dashboard with role-based access and charts.",
    category: "Web",
    year: 2023,
    client: "OpsSuite",
    cover:
      "https://images.ctfassets.net/l4e8sx17nqs1/4j7qR7zIekg7q1GwDJo0q2/000471ddf1c6e80d15937d6586fe7577/administration-manager-working.jpg",
    stack: ["Next.js", "Prisma", "Postgres"],
    tags: ["Dashboard", "RBAC"],
    links: { demo: "#", caseStudy: "#" },
    impact: [
      { metric: "Student engagement", value: "+42%" },
      { metric: "Avg. session", value: "6m 12s" },
    ],
  },
  {
    id: "proj-9",
    title: "E‑commerce Core",
    description:
      "Headless store with product variants, carts, and Stripe checkout.",
    category: "E-commerce",
    year: 2024,
    client: "Boutique Co.",
    cover:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600&auto=format&fit=crop",
    stack: ["Next.js", "Stripe", "tRPC"],
    tags: ["Payments", "Storefront"],
    links: { demo: "#", caseStudy: "#" },
  },
];


export default PROJECTS;