import React, { useEffect } from 'react';
import { gsap, Back } from 'gsap';

const GooeyPagination = () => {
  useEffect(() => {
    const dots = document.querySelectorAll('.dot');
    const select = document.querySelector('.select');
    let lastPos = select.getBoundingClientRect().left;

    dots.forEach((dot) => {
      dot.addEventListener('mouseenter', () => {
        const cur = dot;
        const dest = cur.getBoundingClientRect().left - dots[0].getBoundingClientRect().left;
        const t = 0.6;
        gsap.to(select, {
          x: dest,
          duration: t,
          ease: Back.easeOut
        });
      });
    });

    const updateScale = () => {
      const pos = select.getBoundingClientRect().left;
      const speed = Math.abs(pos - lastPos);
      const d = 44;
      const offset = -20;
      const hd = d / 2;
      let scale = (offset + pos) % d;

      if (scale > hd) {
        scale = hd - (scale - hd);
      }

      scale = 1 - ((scale / hd) * 0.35);
      gsap.to(select, {
        scaleY: scale,
        scaleX: 1 + (speed * 0.06),
        duration: 0.1,
      });

      lastPos = pos;
      requestAnimationFrame(updateScale);
    };

    requestAnimationFrame(updateScale);

    // Trigger initial hover effect
    dots[0].dispatchEvent(new Event('mouseenter'));
  }, []);

  return (
    <ul className="dots">
      <li className="select"></li>
      <li className="dot"></li>
      <li className="dot"></li>
      <li className="dot"></li>
      <li className="dot"></li>
      <li className="dot"></li>
    </ul>
  );
};

export default GooeyPagination;
