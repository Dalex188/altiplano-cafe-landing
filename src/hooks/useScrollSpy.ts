import { useEffect } from 'react';

export function useScrollSpy(): void {
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'quality', 'export', 'certifications', 'process', 'testimonials', 'contact-form'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (window.location.hash !== `#${id}` && id !== 'hero') {
            history.replaceState(null, '', `#${id}`);
          } else if (id === 'hero' && window.location.hash !== '') {
            history.replaceState(null, '', window.location.pathname);
          }
        }
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
