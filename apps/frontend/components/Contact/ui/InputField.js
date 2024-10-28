import React, { useState } from 'react';

const InputField = ({ label, placeholder, isTextarea = false }) => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  // Constants for limits
  const maxWordCount = 300;
  const maxCharacterCount = 1800;

  // Function to count words and characters in the textarea input
  const handleTextChange = (e) => {
    const inputText = e.target.value;
    const wordArray = inputText.trim().split(/\s+/);
    const words = inputText.length > 0 ? wordArray.length : 0;

    setText(inputText);
    setWordCount(words);
    setCharacterCount(inputText.length);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Input Label */}
      <label className="text-[#141221] text-base font-normal font-header leading-[150%]">
        {label}
      </label>

      {/* Input Field or Textarea */}
      {!isTextarea ? (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-14 p-4 bg-[#f6f5ff] rounded-[10px] border-[.75px] border-[#afaacf] text-[#3f3a5b] text-base font-normal font-header leading-normal"
        />
      ) : (
        <div>
          <textarea
            placeholder={placeholder}
            className="w-full h-[200px] p-4 bg-[#f6f5ff] rounded-[10px] border-[.75px] border-[#afaacf] text-[#3f3a5b] text-base font-normal font-header leading-[150%] resize-none"
            maxLength={maxCharacterCount} // Maximum character limit set to 1800
            value={text}
            onChange={handleTextChange}
          />
          
          {/* Display the word and character count */}
          <div className="flex justify-end items-end text-[#726D96] text-sm font-header pt-2">
            
            {/* Character Count */}
            <div>
              {characterCount} / {maxCharacterCount} characters
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputField;