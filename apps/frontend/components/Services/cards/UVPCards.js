const UVPCard = ({ title1, title2, description, imageSrc, bgColor, textColor }) => {
  return (
    <div
      className="w-[19.124rem] md:w-[23.5rem] lg:w-[23.5rem] h-[26.563rem] md:h-[32.7rem] lg:h-[32.7rem] min-w-[19.125rem] min-h-[26.563rem] rounded-[20px] p-6 flex flex-col justify-between items-center shadow-lg"
      style={{ background: bgColor, color: textColor }} // Use 'background' instead of 'backgroundColor' for gradients
    >
      {imageSrc && (
        <div className="w-full h-1/2 overflow-hidden rounded-[15px] mb-4">
          <img src={imageSrc} alt={title1} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Wrapped Titles in a Container with Reduced Spacing */}
      <div className="text-center mb-2 space-y-0.5">
        <h2 className="text-2xl font-medium font-header mb-0 mt-0">{title1}</h2>
        <h3 className="text-2xl font-medium font-serif mb-0 mt-0">{title2}</h3>
      </div>

      {/* Description */}
      <p className="text-base text-center mt-4">{description}</p>
    </div>
  );
};

export default UVPCard;