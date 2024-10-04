import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ label, href, isCurrentPage }) => {
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
    <a
      href={href}
      className={`relative h-[54px] px-6 rounded-full flex justify-center items-center gap-[10px] overflow-hidden transition-colors duration-200 ease-in-out w-fit group ${
        isCurrentPage ? 'bg-[#f4f3ff] text-[#141221] nav-item-active' : 'bg-[#141221] text-[#fcfbff]'
      } nav-item`}
    >
      <span className="absolute inset-0 bg-[#f4f3ff] rounded-full transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-10"></span>

      <div
        className={`relative z-20 text-lg transition-colors duration-300 ease-in-out ${
          isCurrentPage ? 'text-[#141221]' : 'text-[#fcfbff] group-hover:text-[#141221]'
        } nav-text`} 
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {loading ? 'Loading...' : label} {/* Show loading text while fetching */}
      </div>
    </a>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isCurrentPage: PropTypes.bool.isRequired,
};

export default NavItem;