import Link from 'next/link';

const PrimaryButton = ({ label, href = '#' }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="group"> {/* This is now allowed */}
        <div className="h-[54px] px-6 bg-gradient-to-r from-[#E1303B] to-[#3B1AE5] rounded-full flex justify-center items-center gap-2.5 relative overflow-hidden transition-all duration-500 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B1AE5] to-[#E1303B] opacity-0 rounded-full transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
          <div className="text-[#f4f3ff] text-base font-medium relative z-10 font-header">
            {label}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PrimaryButton;