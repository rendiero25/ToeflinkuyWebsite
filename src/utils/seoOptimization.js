// Performance optimization utilities for SEO

// Image lazy loading
export const lazyLoadImage = (src, alt, className = '') => {
  return `<img loading="lazy" src="${src}" alt="${alt}" class="${className}" />`;
};

// Critical CSS inlining
export const criticalCSS = `
  /* Critical above-the-fold styles */
  .hero-section { display: flex; align-items: center; min-height: 100vh; }
  .nav-header { position: fixed; top: 0; width: 100%; z-index: 1000; }
  .primary-button { padding: 12px 24px; border-radius: 8px; font-weight: 600; }
  
  /* Font loading optimization */
  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: url('/fonts/inter.woff2') format('woff2');
  }
`;

// Preload critical resources
export const preloadResources = [
  { rel: 'preload', href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
  { rel: 'preload', href: '/images/heroimage.png', as: 'image' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
];

// Core Web Vitals optimization
export const optimizeWebVitals = {
  // Largest Contentful Paint (LCP)
  LCP: {
    target: '< 2.5s',
    strategies: [
      'Optimize hero image',
      'Preload critical resources',
      'Use efficient image formats',
      'Implement critical CSS'
    ]
  },
  
  // First Input Delay (FID)
  FID: {
    target: '< 100ms',
    strategies: [
      'Code splitting',
      'Lazy load non-critical components',
      'Optimize JavaScript execution',
      'Use web workers for heavy tasks'
    ]
  },
  
  // Cumulative Layout Shift (CLS)
  CLS: {
    target: '< 0.1',
    strategies: [
      'Set image dimensions',
      'Reserve space for ads/embeds',
      'Avoid inserting content above existing content',
      'Use transform animations instead of layout-changing properties'
    ]
  }
};

// SEO-friendly URL structure
export const generateSEOUrl = (title, keywords = []) => {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
    
  if (keywords.length > 0) {
    const keywordSlug = keywords[0]
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    return `/${keywordSlug}/${baseSlug}`;
  }
  
  return `/${baseSlug}`;
};

// Meta tags generator for dynamic content
export const generateMetaTags = (config) => {
  const {
    title,
    description,
    keywords = [],
    image = '/images/og-image.jpg',
    url = 'https://toeflin.kuy',
    type = 'website'
  } = config;
  
  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ]
  };
};

// Structured data generators
export const generateProductSchema = (product) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": product.title,
    "description": product.description,
    "provider": {
      "@type": "Organization",
      "name": "Toeflin.Kuy"
    },
    "areaServed": "Indonesia",
    "serviceType": "Educational Service",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "IDR"
    }
  };
};

export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Analytics and tracking optimization
export const trackingConfig = {
  // Google Analytics 4
  GA4: {
    measurementId: 'G-XXXXXXXXXX', // Replace with actual ID
    config: {
      page_title: document.title,
      page_location: window.location.href,
      content_group1: 'TOEFL Services',
      content_group2: 'Educational Services'
    }
  },
  
  // Google Search Console
  searchConsole: {
    siteVerification: 'XXXXXXXXXXXXXX' // Replace with actual verification code
  },
  
  // Custom events for SEO tracking
  events: {
    contactForm: 'contact_form_submit',
    productView: 'view_product',
    consultationRequest: 'consultation_request',
    downloadBrochure: 'download_brochure'
  }
};

export default {
  lazyLoadImage,
  criticalCSS,
  preloadResources,
  optimizeWebVitals,
  generateSEOUrl,
  generateMetaTags,
  generateProductSchema,
  generateFAQSchema,
  trackingConfig
};
