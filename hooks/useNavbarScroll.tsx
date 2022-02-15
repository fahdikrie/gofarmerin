import { useEffect, useState } from 'react';

export const useNavbarScroll = () => {
  const [isNavbarTransparent, setNavbarTransparency] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const onScroll = () => {
        if (window.scrollY >= 60) {
          setNavbarTransparency(false);
        } else {
          setNavbarTransparency(true);
        }
      };

      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, [isNavbarTransparent]);

  return isNavbarTransparent;
};

export default useNavbarScroll;
