import { useEffect } from 'react';

export default function ScrollToHashOnLoad() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash; // like "#features"
      if (!hash) return;

      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return;

      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Run once on mount (handles loading page already with a hash)
    // Use a micro delay so DOM is rendered before trying to find the element.
    const t = setTimeout(scrollToHash, 0);

    // Run when hash changes (handles clicking <a href="#..."> links)
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      clearTimeout(t);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return null; // This component only performs the side-effect
}
