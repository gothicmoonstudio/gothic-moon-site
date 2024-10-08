import React from 'react';

const InputField = ({ label, placeholder, isTextarea = false }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {/* Input Label */}
      <label className="text-[#141221] text-base font-medium font-['Greycliff CF'] leading-normal">
        {label}
      </label>
      
      {/* Input Field */}
      {!isTextarea ? (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-14 p-4 bg-[#f6f5ff] rounded-lg border border-[#afaacf] text-[#3f3a5b] text-base font-normal font-['Greycliff CF'] leading-normal"
        />
      ) : (
        <textarea
          placeholder={placeholder}
          className="w-full h-[200px] p-4 bg-[#f6f5ff] rounded-lg border border-[#afaacf] text-[#3f3a5b] text-base font-normal font-['Greycliff CF'] leading-normal resize-none"
        />
      )}
    </div>
  );
};

export default InputField;