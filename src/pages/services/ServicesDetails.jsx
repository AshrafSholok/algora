// pages/ServiceDetail.jsx
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../../components/common/Hero';

const serviceData = {
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'We believe brand interaction is key to communication...',
    services: [
      { main: 'SEO Marketing', sub: 'Email Marketing' },
      { main: 'Facebook Marketing', sub: 'Data Scraping' },
      { main: 'Social Marketing', sub: 'Youtube Marketing' }
    ]
  },
  'web-development': {
    title: 'Web Design & Development',
    description: 'We believe brand interaction is key to communication...',
    services: [
      { main: 'Responsive Design', sub: 'UI/UX Design' },
      { main: 'Web App Development', sub: 'Laravel Development' },
      { main: 'React Development', sub: 'Angular Development' }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'We craft intuitive digital experiences that delight users...',
    services: [
      { main: 'User Research & Analysis', sub: 'Wireframing & Prototyping' },
      { main: 'Interaction Design', sub: 'Visual Interface Design' },
      { main: 'Usability Testing', sub: 'Design Systems' }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) return <div>Service not found</div>;

  return (
    <>
    <Hero title={service.title}/>
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
              src={`../../src/assets/svg/services/${serviceId}.png`} // Adjust path as needed
              alt={`${service.title} Illustration`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServiceDetail;