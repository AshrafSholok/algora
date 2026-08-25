// src/pages/services/serviceData.js

const serviceData = {
    'digital-marketing': {
        title: 'Digital Marketing',
        description: 'We believe brand interaction is key to communication...',
        services: [
            { main: 'SEO Marketing', sub: 'Email Marketing' },
            { main: 'Facebook Marketing', sub: 'Data Scraping' },
            { main: 'Social Marketing', sub: 'Youtube Marketing' }
        ],
        lifecycle: [
            {
                title: 'Market Research',
                description: 'We analyze your target audience and competitors to create effective strategies.',
                icon: "MagnifyingGlassIcon"
            },
            {
                title: 'Strategy Development',
                description: 'We craft tailored marketing plans based on your business goals.',
                icon: "ChartBarIcon"
            },
            {
                title: 'Campaign Execution',
                description: 'We implement multi-channel campaigns with precise targeting.',
                icon: "HashtagIcon"
            },
            {
                title: 'Performance Analysis',
                description: 'We monitor results and optimize campaigns for maximum ROI.',
                icon: "ChartBarIcon"
            },
            {
                title: 'Continuous Optimization',
                description: 'We refine strategies based on data and market trends.',
                icon: "RocketLaunchIcon"
            },
            {
                title: 'Reporting & Insights',
                description: 'We provide detailed reports and actionable insights to guide future efforts.',
                icon: "ShoppingCartIcon"
            }
        ],
        whyChooseUs: [
            {
                title: "Why choose us for Digital Marketing?",
                description:
                    "We go beyond simple ads—we create strategies that build your brand, attract customers, and turn clicks into long-term relationships.",
                features: [
                    "SEO optimization to rank higher on Google.",
                    "Targeted social media campaigns that reach the right audience.",
                    "Data-driven marketing with real performance tracking.",
                    "Content creation that builds authority and trust.",
                    "Email marketing and automation for consistent engagement.",
                ],
                result:
                    "Your business grows faster with more visibility, more leads, and more sales—without wasting money on ineffective ads.",
            },
        ],
    },
    'web-development': {
        title: 'Web Design & Development',
        description: 'We believe brand interaction is key to communication...',
        services: [
            { main: 'Responsive Design', sub: 'UI/UX Design' },
            { main: 'Web App Development', sub: 'Laravel Development' },
            { main: 'React Development', sub: 'Angular Development' }
        ],
        lifecycle: [
            {
                title: 'Requirements Gathering',
                description: 'We collect and analyze your business needs and technical requirements.',
                icon: "MagnifyingGlassIcon"
            },
            {
                title: 'Planning & Architecture',
                description: 'We design the system architecture and create development roadmaps.',
                icon: "ArrowsPointingOutIcon"
            },
            {
                title: 'Design & Development',
                description: 'We build your website with clean code and modern design principles.',
                icon: "CodeBracketIcon"
            },
            {
                title: 'Testing & Quality Assurance',
                description: 'We rigorously test all functionality across devices and browsers.',
                icon: "BugAntIcon"
            },
            {
                title: 'Deployment & Maintenance',
                description: 'We launch your site and provide ongoing support and updates.',
                icon: "ShieldCheckIcon"
            },
            {
                title: 'User Training & Support',
                description: 'We train your team and provide documentation for smooth operation.',
                icon: "UserGroupIcon"
            }
        ],
        whyChooseUs: [
            {
                title: "Why choose us to build your website?",
                description: "Because we don’t just build a website… we create a complete digital platform that reflects your brand’s power and builds trust with your customers from the very first click.",
                features: [
                    "Modern, responsive design for both mobile and desktop.",
                    "High loading speed to keep visitors from leaving.",
                    "Smooth navigation & user-friendly experience.",
                    "Integration with online payment & booking systems.",
                    "Continuous support & maintenance to keep your site running 24/7."
                ],
                result: "Your website becomes a professional face for your business and a sales representative working for you around the clock—without asking for a salary."
            }
        ],
    },
    'ui-ux-design': {
        title: 'UI/UX Design',
        description: 'We craft intuitive digital experiences that delight users...',
        services: [
            { main: 'User Research & Analysis', sub: 'Wireframing & Prototyping' },
            { main: 'Interaction Design', sub: 'Visual Interface Design' },
            { main: 'Usability Testing', sub: 'Design Systems' }
        ],
        lifecycle: [
            {
                title: 'User Research',
                description: 'We conduct interviews and analyze user behavior and needs.',
                icon: "UserGroupIcon"
            },
            {
                title: 'Information Architecture',
                description: 'We structure content and flows for optimal user journeys.',
                icon: "ArrowsPointingOutIcon"
            },
            {
                title: 'Wireframing & Prototyping',
                description: 'We create low and high-fidelity prototypes for testing.',
                icon: "PencilSquareIcon"
            },
            {
                title: 'Visual Design',
                description: 'We apply branding and create pixel-perfect interfaces.',
                icon: "PencilSquareIcon"
            },
            {
                title: 'Usability Testing',
                description: 'We validate designs with real users and iterate based on feedback.',
                icon: "BugAntIcon"
            },
        ],
        whyChooseUs: [
            {
                title: "Why choose us for UI/UX Design?",
                description:
                    "We craft experiences, not just interfaces. Our UI/UX design is built to delight users, maximize engagement, and keep your audience coming back.",
                features: [
                    "User-centric approach focused on real customer behavior.",
                    "Intuitive and visually appealing layouts.",
                    "Seamless navigation that reduces drop-offs.",
                    "Wireframes and prototypes tested before launch.",
                    "Design consistency across all devices and platforms.",
                ],
                result:
                    "Your product becomes more engaging, user-friendly, and professional—leading to higher customer satisfaction and conversions.",
            },
        ],
    },
    'mobile-app-development': {
        title: 'Mobile App Development',
        description: 'We create stunning mobile applications that provide seamless user experiences...',
        services: [
            { main: 'iOS App Development', sub: 'Android App Development' },
            { main: 'React Native Development', sub: 'Flutter Development' },
            { main: 'App UI/UX Design', sub: 'App Maintenance' }
        ],
        lifecycle: [
            {
                title: 'Concept Validation',
                description: 'We assess your app idea and market potential.',
                icon: "MagnifyingGlassIcon"
            },
            {
                title: 'Technical Planning',
                description: 'We choose the right stack and architecture for your needs.',
                icon: "ArrowsPointingOutIcon"
            },
            {
                title: 'UI/UX Design',
                description: 'We create intuitive interfaces and smooth user flows.',
                icon: "DevicePhoneMobileIcon"
            },
            {
                title: 'Development & Testing',
                description: 'We build and rigorously test your app across devices.',
                icon: "CodeBracketIcon"
            },
            {
                title: 'Launch & Updates',
                description: 'We deploy to stores and provide ongoing maintenance.',
                icon: "RocketLaunchIcon"
            },
            {
                title: 'User Feedback & Iteration',
                description: 'We gather user feedback and continuously improve the app.',
                icon: "ShieldCheckIcon"
            }
        ],
        whyChooseUs: [
            {
                title: "Why choose us for Mobile App Development?",
                description:
                    "We don’t just create apps, we build mobile solutions that scale with your business and deliver smooth performance for your users.",
                features: [
                    "Cross-platform apps (iOS & Android) with one codebase.",
                    "Fast and responsive apps optimized for performance.",
                    "Offline functionality for uninterrupted usage.",
                    "Integration with APIs, payment systems, and third-party tools.",
                    "Regular updates and support to ensure stability.",
                ],
                result:
                    "Your business is literally in your customer’s pocket—making it easier to reach, engage, and retain them anytime, anywhere.",
            },
        ],
    },
    'ai-automation': {
        title: 'AI & Automation',
        description: 'We leverage artificial intelligence and automation to transform your business operations and enhance decision-making capabilities...',
        services: [
            { main: 'Machine Learning Solutions', sub: 'Natural Language Processing' },
            { main: 'Process Automation', sub: 'Predictive Analytics' },
            { main: 'Computer Vision', sub: 'AI Integration' }
        ],
        lifecycle: [
            {
                title: 'Data Assessment',
                description: 'We analyze your data infrastructure and identify automation opportunities.',
                icon: "DocumentChartBarIcon"
            },
            {
                title: 'Solution Design',
                description: 'We architect AI solutions tailored to your business needs.',
                icon: "LightBulbIcon"
            },
            {
                title: 'Model Development',
                description: 'We build and train custom AI models for your specific use case.',
                icon: "CpuChipIcon"
            },
            {
                title: 'Integration & Testing',
                description: 'We integrate AI solutions with your existing systems and validate performance.',
                icon: "CircleStackIcon"
            },
            {
                title: 'Deployment & Monitoring',
                description: 'We deploy models to production and set up performance monitoring.',
                icon: "ServerIcon"
            },
            {
                title: 'Optimization & Scaling',
                description: 'We continuously improve model accuracy and scale with your needs.',
                icon: "ArrowTrendingUpIcon"
            }
        ],
        whyChooseUs: [
            {
                title: "Why choose us for AI & Automation?",
                description: 
                    "We transform complex AI technologies into practical business solutions that drive efficiency, reduce costs, and create competitive advantages.",
                features: [
                    "Custom AI solutions tailored to your industry and needs.",
                    "End-to-end automation of repetitive business processes.",
                    "Advanced analytics and predictive insights for better decisions.",
                    "Seamless integration with existing systems and workflows.",
                    "Ongoing support and model optimization for sustained performance."
                ],
                result: 
                    "Your business becomes more intelligent and efficient—automating routine tasks while gaining predictive insights that give you a competitive edge in your market."
            }
        ],
    }
};

export default serviceData;
