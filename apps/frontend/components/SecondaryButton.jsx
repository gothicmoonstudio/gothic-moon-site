import React, { useEffect, useState } from 'react';

const SecondaryButton = ({ label }) => {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const response = await fetch('/api/fonts'); // Adjust the path to your API route
        if (!response.ok) {
          throw new Error('Failed to fetch fonts');
        }
        const data = await response.json();
        setFonts(data.kit.items); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching fonts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFonts();
  }, []);

  useEffect(() => {
    if (!loading && fonts.length > 0) {
      const displayFont = fonts[0]?.css_stack || 'sans-serif';
      document.documentElement.style.setProperty('--font-display', displayFont);
    }
  }, [fonts, loading]);

  return (
    <div className="relative h-[54px] px-6 bg-white/15 rounded-full border border-[0.5px] border-[#f4f3ff] flex justify-center items-center overflow-hidden transition-all duration-300 ease-in-out hover:animate-halo">
      <div className="text-[#f4f3ff] text-lg font-medium relative z-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>
        {loading ? 'Loading...' : label} {/* Show loading text while fetching */}
      </div>
    </div>
  );
};

export default SecondaryButton;