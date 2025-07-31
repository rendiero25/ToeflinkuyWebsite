// Google Analytics 4 integration for SEO tracking (Optimized for performance)
import { useEffect } from 'react';

// Initialize GA4 with lazy loading
export const initGA4 = (measurementId) => {
  // Only load in production and when user interacts
  if (import.meta.env.DEV || !measurementId || measurementId === 'G-XXXXXXXXXX') {
    return;
  }

  // Lazy load gtag script after page load
  const loadGoogleAnalytics = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      content_group1: 'TOEFL Services',
      content_group2: 'Educational Services'
    });
  };

  // Load after page is fully loaded
  if (document.readyState === 'complete') {
    setTimeout(loadGoogleAnalytics, 1000);
  } else {
    window.addEventListener('load', () => {
      setTimeout(loadGoogleAnalytics, 1000);
    });
  }
};

// Track page views
export const trackPageView = (path, title) => {
  if (window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
      page_title: title
    });
  }
};

// Track custom events for SEO
export const trackEvent = (eventName, parameters = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track specific SEO events
export const trackSEOEvents = {
  // Contact form submission
  contactForm: (method = 'unknown') => {
    trackEvent('contact_form_submit', {
      event_category: 'engagement',
      event_label: method,
      value: 1
    });
  },

  // Product/service view
  productView: (productName) => {
    trackEvent('view_item', {
      event_category: 'ecommerce',
      event_label: productName,
      item_id: productName.toLowerCase().replace(/\s+/g, '_'),
      item_name: productName,
      item_category: 'TOEFL Services'
    });
  },

  // Consultation request
  consultationRequest: (serviceType = 'general') => {
    trackEvent('generate_lead', {
      event_category: 'lead_generation',
      event_label: serviceType,
      value: 1,
      currency: 'IDR'
    });
  },

  // WhatsApp click
  whatsappClick: (source = 'unknown') => {
    trackEvent('contact_whatsapp', {
      event_category: 'engagement',
      event_label: source,
      value: 1
    });
  },

  // Scroll depth
  scrollDepth: (percentage) => {
    trackEvent('scroll', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage
    });
  },

  // Time on page (for SEO engagement metrics)
  timeOnPage: (seconds) => {
    trackEvent('page_engagement', {
      event_category: 'engagement',
      event_label: 'time_on_page',
      value: seconds
    });
  }
};

// Enhanced ecommerce tracking for services
export const trackServiceInteraction = (action, serviceName, value = 0) => {
  trackEvent(action, {
    event_category: 'service_interaction',
    event_label: serviceName,
    value: value,
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
      item_name: serviceName,
      item_category: 'TOEFL Services',
      item_variant: 'Standard',
      price: value
    }]
  });
};

// React component for GA4 integration (Performance optimized)
const GoogleAnalytics = ({ measurementId = 'G-XXXXXXXXXX' }) => {
  useEffect(() => {
    // Only initialize in production
    if (import.meta.env.PROD && measurementId !== 'G-XXXXXXXXXX') {
      initGA4(measurementId);
    }

    // Reduced tracking to improve performance
    let maxScroll = 0;
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        // Only track at 25%, 50%, 75%, 100%
        if (scrollPercent > maxScroll && [25, 50, 75, 100].includes(scrollPercent)) {
          maxScroll = scrollPercent;
          if (window.gtag) {
            trackSEOEvents.scrollDepth(scrollPercent);
          }
        }
      }, 100);
    };

    // Track time on page (simplified)
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (window.gtag && timeSpent > 10) { // Only track if user stayed more than 10 seconds
        trackSEOEvents.timeOnPage(timeSpent);
      }
    };

    // Add event listeners only in production
    if (import.meta.env.PROD) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [measurementId]);

  return null;
};

// Custom hook for analytics
export const useAnalytics = () => {
  return {
    trackPageView,
    trackEvent,
    trackSEOEvents,
    trackServiceInteraction
  };
};

export default GoogleAnalytics;
