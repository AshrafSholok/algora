// pages/ServiceDetail.jsx
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../../components/common/Hero';

// Import icons from Heroicons
import {
  MagnifyingGlassIcon, // Research/analysis
  ChartBarIcon,       // Strategy/planning
  PencilSquareIcon,   // Design
  CodeBracketIcon,    // Development
  BugAntIcon,         // Testing
  RocketLaunchIcon,   // Deployment
  ShieldCheckIcon,    // Maintenance
  UserGroupIcon,      // User research
  ArrowsPointingOutIcon, // Architecture
  DevicePhoneMobileIcon, // Mobile specific
  ShoppingCartIcon,   // E-commerce
  HashtagIcon         // Social media
} from '@heroicons/react/24/outline';

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
        icon: <MagnifyingGlassIcon className="h-6 w-6" />
      },
      {
        title: 'Strategy Development',
        description: 'We craft tailored marketing plans based on your business goals.',
        icon: <ChartBarIcon className="h-6 w-6" />
      },
      {
        title: 'Campaign Execution',
        description: 'We implement multi-channel campaigns with precise targeting.',
        icon: <HashtagIcon className="h-6 w-6" />
      },
      {
        title: 'Performance Analysis',
        description: 'We monitor results and optimize campaigns for maximum ROI.',
        icon: <ChartBarIcon className="h-6 w-6" />
      },
      {
        title: 'Continuous Optimization',
        description: 'We refine strategies based on data and market trends.',
        icon: <RocketLaunchIcon className="h-6 w-6" />
      },
      {
        title: 'Reporting & Insights',
        description: 'We provide detailed reports and actionable insights to guide future efforts.',
        icon: <ShoppingCartIcon className="h-6 w-6" />
      }
    ]
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
        icon: <MagnifyingGlassIcon className="h-6 w-6" />
      },
      {
        title: 'Planning & Architecture',
        description: 'We design the system architecture and create development roadmaps.',
        icon: <ArrowsPointingOutIcon className="h-6 w-6" />
      },
      {
        title: 'Design & Development',
        description: 'We build your website with clean code and modern design principles.',
        icon: <CodeBracketIcon className="h-6 w-6" />
      },
      {
        title: 'Testing & Quality Assurance',
        description: 'We rigorously test all functionality across devices and browsers.',
        icon: <BugAntIcon className="h-6 w-6" />
      },
      {
        title: 'Deployment & Maintenance',
        description: 'We launch your site and provide ongoing support and updates.',
        icon: <ShieldCheckIcon className="h-6 w-6" />
      },
      {
        title: 'User Training & Support',
        description: 'We train your team and provide documentation for smooth operation.',
        icon: <UserGroupIcon className="h-6 w-6" />
      }
    ]
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
        icon: <UserGroupIcon className="h-6 w-6" />
      },
      {
        title: 'Information Architecture',
        description: 'We structure content and flows for optimal user journeys.',
        icon: <ArrowsPointingOutIcon className="h-6 w-6" />
      },
      {
        title: 'Wireframing & Prototyping',
        description: 'We create low and high-fidelity prototypes for testing.',
        icon: <PencilSquareIcon className="h-6 w-6" />
      },
      {
        title: 'Visual Design',
        description: 'We apply branding and create pixel-perfect interfaces.',
        icon: <PencilSquareIcon className="h-6 w-6" />
      },
      {
        title: 'Usability Testing',
        description: 'We validate designs with real users and iterate based on feedback.',
        icon: <BugAntIcon className="h-6 w-6" />
      },
    ]
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
        icon: <MagnifyingGlassIcon className="h-6 w-6" />
      },
      {
        title: 'Technical Planning',
        description: 'We choose the right stack and architecture for your needs.',
        icon: <ArrowsPointingOutIcon className="h-6 w-6" />
      },
      {
        title: 'UI/UX Design',
        description: 'We create intuitive interfaces and smooth user flows.',
        icon: <DevicePhoneMobileIcon className="h-6 w-6" />
      },
      {
        title: 'Development & Testing',
        description: 'We build and rigorously test your app across devices.',
        icon: <CodeBracketIcon className="h-6 w-6" />
      },
      {
        title: 'Launch & Updates',
        description: 'We deploy to stores and provide ongoing maintenance.',
        icon: <RocketLaunchIcon className="h-6 w-6" />
      },
      {
        title: 'User Feedback & Iteration',
        description: 'We gather user feedback and continuously improve the app.',
        icon: <ShieldCheckIcon className="h-6 w-6" />
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <Hero title={service.title} />
      <section className="py-20 bg-white w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {service.services.map((item, index) => (
                  <Fragment key={index}>
                    <div className="flex items-start bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                      <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-semibold">{item.main}</span>
                    </div>
                    <div className="flex items-start bg-gray-100 rounded-xl px-4 py-3 transition-transform hover:translate-x-1 hover:shadow-2xl duration-[400ms]">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-semibold">{item.sub}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <img
                src={`../../src/assets/svg/services/${serviceId}.png`}
                alt={`${service.title} Illustration`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Lifecycle Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We Work</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {service.lifecycle.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="flex-1 flex flex-col items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-2">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;