import { useState } from 'react';

function Faqs() {
  return (
    <div className="min-h-screen w-full bg-white">
      <section className="relative py-20">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="uppercase text-primary-500 font-semibold tracking-wider text-sm mb-2 inline-block">FAQ</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our platform.</p>
          </div>
          <div className="space-y-4">
            {[{
              q: 'What is Taiker and who is it for?',
              a: 'Taiker is a modern platform designed for businesses and developers to streamline their workflow and boost productivity.'
            }, {
              q: 'How secure is my data?',
              a: 'We use industry-leading security practices and encryption to keep your data safe and private.'
            }, {
              q: 'Can I try Taiker for free?',
              a: 'Yes! We offer a free trial so you can experience all features before committing.'
            }, {
              q: 'How do I contact support?',
              a: 'You can reach our 24/7 support team via email, chat, or phone.'
            }].map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
// FAQItem component with animation
function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={"rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-400 " + (open ? 'ring-2 ring-primary-500' : '')}>
            <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <span className="text-lg font-semibold text-gray-900">{question}</span>
                <svg className={"w-6 h-6 text-primary-500 transform transition-transform duration-300 " + (open ? 'rotate-180' : '')} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div
                className={"px-6 pb-5 text-gray-700 dark:text-gray-200 text-base transition-all duration-400 " + (open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0')}
                style={{ overflow: 'hidden' }}
            >
                <div className="pt-1 animate-fade-in">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default Faqs;