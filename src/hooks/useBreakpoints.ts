import { useState, useEffect } from 'react';

export enum Breakpoints {
  MOBILE = 768,
  DESKTOP = 1024,
}

interface IBreakponts {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const getBreakpoints = (width: number): IBreakponts => ({
  isMobile: width <= Breakpoints.MOBILE,
  isTablet: width > Breakpoints.MOBILE && width < Breakpoints.DESKTOP,
  isDesktop: width >= Breakpoints.DESKTOP,
});

export const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState(getBreakpoints(window.innerWidth));

  useEffect(() => {
    setBreakpoints(getBreakpoints(window.innerWidth));
    const handleResize = () => setBreakpoints(getBreakpoints(window.innerWidth));

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoints;
};
