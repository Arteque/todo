'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const NavigationLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Loading-State beim Route-Change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-blue-200 dark:bg-blue-800">
        <div className="h-full bg-blue-600 dark:bg-blue-400 animate-pulse transition-all duration-300 ease-out" 
             style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default NavigationLoader;
