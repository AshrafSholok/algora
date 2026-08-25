export const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development in 2026",
        excerpt: "Discover the latest trends and technologies shaping the future of web development, from AI-driven tools to sustainable practices.",
        content: "The landscape of web development is constantly evolving, and 2026 promises to bring even more exciting changes. As we look ahead, several key trends are emerging that will shape how we build and interact with web applications.\n\nFirstly, AI-driven development tools are becoming increasingly sophisticated. These tools not only help in code completion but are now capable of generating entire components based on natural language descriptions. This shift is making development more accessible while allowing experienced developers to focus on more complex architectural decisions.\n\nServerless architecture continues to gain momentum, with more businesses recognizing its benefits in scalability and cost-effectiveness. The rise of edge computing is also transforming how we think about data processing and user experience, bringing computation closer to where it's needed.\n\nWebAssembly is another technology that's gaining significant traction. It's enabling high-performance applications that were previously only possible in native environments to run directly in the browser, opening new possibilities for web-based applications.\n\nWe're also seeing a strong emphasis on sustainability in web development. Developers are increasingly conscious of the environmental impact of their applications, leading to the adoption of green hosting solutions and optimization techniques that reduce energy consumption.",
        author: {
            name: "John Doe",
            avatar: "../../src/assets/images/team/member1.jpg",
            role: "Senior Developer"
        },
        category: "Web Development",
        tags: ["React", "NextJS", "Web3"],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        publishDate: "2025-10-01",
        readTime: "5 min read",
        featured: true
    },
    {
        id: 2,
        title: "Mastering UI/UX Design Principles",
        excerpt: "Learn the fundamental principles of creating user-friendly interfaces...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        author: {
            name: "Jane Smith",
            avatar: "../../src/assets/images/team/member2.jpg",
            role: "UI/UX Designer"
        },
        category: "Design",
        tags: ["UI/UX", "Design Principles", "User Experience"],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        publishDate: "2025-09-28",
        readTime: "4 min read",
        featured: true
    },
    {
        id: 3,
        title: "AI in Modern Business Applications",
        excerpt: "Explore how artificial intelligence is transforming business operations...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        author: {
            name: "Mike Johnson",
            avatar: "../../src/assets/images/team/member3.jpg",
            role: "AI Specialist"
        },
        category: "Artificial Intelligence",
        tags: ["AI", "Machine Learning", "Business"],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        publishDate: "2025-09-25",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 4,
        title: "Building Scalable Mobile Apps",
        excerpt: "Tips and best practices for developing mobile applications that scale...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        author: {
            name: "Emily Davis",
            avatar: "../../src/assets/images/team/member4.jpg",
            role: "Mobile Developer"
        },
        category: "Mobile Development",
        tags: ["React Native", "Flutter", "Mobile Apps"],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        publishDate: "2025-09-20",
        readTime: "5 min read",
        featured: false
    },
    // Add more blog posts here...
];

export const categories = [
    { id: 1, name: "Web Development", count: 12 },
    { id: 2, name: "Design", count: 8 },
    { id: 3, name: "Artificial Intelligence", count: 6 },
    { id: 4, name: "Mobile Development", count: 5 },
    { id: 5, name: "Cloud Computing", count: 4 },
    { id: 6, name: "DevOps", count: 3 }
];

export const tags = [
    "React",
    "NextJS",
    "Web3",
    "UI/UX",
    "Design",
    "AI",
    "Machine Learning",
    "Mobile",
    "Cloud",
    "DevOps",
    "AR",
    "VR"
];