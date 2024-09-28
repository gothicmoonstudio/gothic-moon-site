import { useState } from 'react';
import { Plus, Minus } from 'react-feather';  // Importing Feather Icons

const Accordion = ({ textColor = '#141221', accordionData }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full h-auto bg-inherit flex flex-col justify-start items-start gap-4">
      {/* Accordions */}
      {accordionData.map((item, index) => (
        <div key={index} className="w-full py-6 border-b-[.5px] border-inherit">
          <div className="flex justify-between items-center w-full">
            {/* Accordion Title */}
            <button
              className="flex items-center font-display text-xl font-bold cursor-pointer focus:outline-none focus:ring focus:ring-opacity-50"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openAccordion === index}
              style={{ color: textColor }}  // Set text color dynamically
            >
              {item.title}
              <div className="ml-2">  {/* Add margin to space between text and icon */}
              {openAccordion === index ? (
                  <Minus color={textColor} size={24} />  
                ) : (
                  <Plus color={textColor} size={24} />  
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
            <div
              className="mt-4 font-display text-xl font-medium leading-9"
              style={{ color: textColor }} // Set content text color dynamically
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
