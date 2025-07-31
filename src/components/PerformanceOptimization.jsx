import React, { useState, useRef, useEffect } from 'react';

// Lazy loading image component for better performance
const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/images/placeholder.jpg',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative ${className}`} {...props}>
      {!isInView ? (
        <div className="w-full h-full bg-gray-200 animate-pulse rounded" />
      ) : (
        <>
          {!isLoaded && (
            <img
              src={placeholder}
              alt={`${alt} placeholder`}
              className="w-full h-full object-cover rounded blur-sm"
            />
          )}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover rounded transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
            onLoad={handleLoad}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
};

// SEO optimized image component with proper alt text
const SEOImage = ({ 
  src, 
  alt, 
  title,
  keywords = [],
  className = '',
  ...props 
}) => {
  // Generate SEO-friendly alt text
  const seoAlt = keywords.length > 0 
    ? `${alt} - ${keywords.slice(0, 2).join(', ')}`
    : alt;

  return (
    <LazyImage
      src={src}
      alt={seoAlt}
      title={title || alt}
      className={className}
      {...props}
    />
  );
};

// Critical resource preloader (Optimized)
const PreloadCriticalResources = () => {
  useEffect(() => {
    // Only preload in production and after page load
    if (import.meta.env.DEV) return;

    const preloadAfterLoad = () => {
      // Preload only critical images that are above the fold
      const criticalImages = [
        '/src/assets/heroimage.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Delay preloading to not block initial render
    if (document.readyState === 'complete') {
      setTimeout(preloadAfterLoad, 500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(preloadAfterLoad, 500);
      });
    }
  }, []);

  return null;
};

// Performance monitoring component (Simplified)
const PerformanceMonitor = () => {
  useEffect(() => {
    // Only monitor in production
    if (import.meta.env.DEV) return;

    // Simplified monitoring with reduced overhead
    const monitorAfterLoad = () => {
      try {
        // Monitor Core Web Vitals with reduced frequency
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
              // Only send to analytics if it exists and performance is poor
              if (window.gtag && entry.startTime > 2500) {
                window.gtag('event', 'web_vitals', {
                  metric_name: 'LCP',
                  metric_value: entry.startTime,
                  metric_id: 'lcp'
                });
              }
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });

        return () => observer.disconnect();
      } catch {
        console.log('Performance monitoring not supported');
      }
    };

    // Delay monitoring to not affect initial load
    setTimeout(monitorAfterLoad, 2000);
  }, []);

  return null;
};

// Service Worker registration for caching
const ServiceWorkerSetup = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null;
};

export { 
  LazyImage, 
  SEOImage, 
  PreloadCriticalResources, 
  PerformanceMonitor,
  ServiceWorkerSetup 
};
