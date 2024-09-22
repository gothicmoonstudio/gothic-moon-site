import { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    const outerCursor = document.querySelector('.cursor--large');
    const innerCursor = document.querySelector('.cursor--small');
    const hoverElements = document.querySelectorAll('.custom-cursor-area');  // Target hover elements
    
    let outerCursorBox = outerCursor.getBoundingClientRect();
    let innerCursorBox = innerCursor.getBoundingClientRect();

    // Utility function to calculate distance between cursor and element
    const getDistance = (x1, y1, x2, y2) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Move outer cursor
      gsap.to(outerCursor, {
        x: mouseX - outerCursorBox.width / 2,
        y: mouseY - outerCursorBox.height / 2,
        ease: "power2.out",
        duration: 0.2,
      });

      // Move inner cursor
      gsap.to(innerCursor, {
        x: mouseX - innerCursorBox.width / 2,
        y: mouseY - innerCursorBox.height / 2,
        ease: "power3.out",
        duration: 0.1,
      });

      // Proximity snap logic for each hover element
      hoverElements.forEach((el) => {
        const elBox = el.getBoundingClientRect();
        const elCenterX = elBox.left + elBox.width / 2;
        const elCenterY = elBox.top + elBox.height / 2;
        const distance = getDistance(mouseX, mouseY, elCenterX, elCenterY);

        // Snap to the element when close enough
        if (distance < 30) {  // Snap when distance is less than 30
          gsap.to(outerCursor, {
            x: elCenterX - outerCursorBox.width / 2,  // Center outer cursor on the element
            y: elCenterY - outerCursorBox.height / 2,
            scale: 1.8,  // Slightly larger scale when snapping
            duration: 0.2,
            ease: "power2.out",
          });
        }
      });
    };

    // Hover enter and leave logic for scaling
    const handleMouseEnter = () => {
      gsap.to(outerCursor, {
        scale: 1.8,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(outerCursor, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Add event listeners for hover elements
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add mousemove listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      gsap.killTweensOf(outerCursor);
      gsap.killTweensOf(innerCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor cursor--large"></div>
      <div className="cursor cursor--small"></div>
    </>
  );
};

export default CustomCursor;
