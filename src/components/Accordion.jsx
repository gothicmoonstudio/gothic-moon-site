import { useState } from 'react';
import { Plus, Minus } from 'react-feather';  // Importing Feather Icons

const Accordions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full h-auto bg-[#e9cdff] flex flex-col justify-start items-start gap-4">
      {/* Accordions */}
      {accordionData.map((item, index) => (
        <div key={index} className="w-full py-6 border-b border-[#141221]">
          <div className="flex justify-between items-center w-full">
            {/* Accordion Title */}
            <button
              className="flex items-center font-display text-[#141221] text-xl font-bold cursor-pointer focus:outline-none focus:ring focus:ring-opacity-50"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openAccordion === index}
            >
              {item.title}
              <div className="ml-2">  {/* Add margin to space between text and icon */}
                {openAccordion === index ? (
                  <Minus color="#141221" />  
                ) : (
                  <Plus color="#141221" />  
                )}
              </div>
            </button>
          </div>
          {/* Accordion Content */}
          <div
            className={`transition-[height] ease-in-out duration-500 overflow-hidden ${
              openAccordion === index ? 'h-auto' : 'h-0'
            }`}
          >
            <div className="mt-4 font-display text-[#141221] text-xl font-medium leading-9">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Accordion Data
const accordionData = [
  {
    title: 'Discovery',
    content: 'We chart the landscape of your brand, understanding your goals and challenges.',
  },
  {
    title: 'Strategy',
    content: 'We develop strategies to align with your brand’s objectives and challenges.',
  },
  {
    title: 'Design',
    content: 'We craft user-centered designs that align with your brand identity.',
  },
  {
    title: 'Implementation',
    content: 'We implement the design solutions with precision and attention to detail.',
  },
  {
    title: 'Refinement',
    content: 'We refine the project to ensure everything is polished to perfection.',
  },
];

export default Accordions;
