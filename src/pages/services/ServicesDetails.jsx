// pages/ServiceDetail.jsx

import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../../components/common/Hero';
import LetsTalk from '../../components/common/LetsTalk';

import serviceData from './serviceData';
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  BugAntIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowsPointingOutIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  HashtagIcon
} from '@heroicons/react/24/outline';

const iconMap = {
  MagnifyingGlassIcon,
  ChartBarIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  BugAntIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowsPointingOutIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  HashtagIcon
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
            {service.lifecycle.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <div key={index} className="group">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="flex-1 flex flex-col items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-2">
                        {IconComponent && <IconComponent className="h-6 w-6" />}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <LetsTalk />
    </>
  );
};

export default ServiceDetail;