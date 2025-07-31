export const seoConfig = {
  defaultTitle: "Joki TOEFL & Jasa Sertifikat TOEFL IELTS Terpercaya | Toeflin.Kuy",
  titleTemplate: "%s | Toeflin.Kuy",
  defaultDescription: "Jasa joki TOEFL terpercaya dan jasa sertifikat TOEFL IELTS resmi. Garansi skor tinggi, proses cepat, aman 100%. Khusus mahasiswa, beasiswa LPDP, CPNS, BUMN.",
  siteUrl: "https://toeflin.kuy",
  
  // Primary keywords configuration
  primaryKeywords: [
    "joki toefl",
    "jasa sertif toefl", 
    "jasa sertif ielts"
  ],
  
  // Secondary keywords
  secondaryKeywords: [
    "joki toefl terpercaya",
    "jasa toefl murah",
    "jasa ielts terpercaya",
    "sertifikat toefl resmi",
    "joki toefl online",
    "jasa test toefl",
    "beli sertifikat toefl",
    "jasa toefl jakarta",
    "jasa ielts jakarta"
  ],
  
  // Long-tail keywords for specific pages
  longTailKeywords: [
    "joki toefl untuk beasiswa lpdp",
    "jasa sertifikat toefl untuk cpns",
    "joki toefl untuk s2",
    "jasa toefl ibt terpercaya",
    "jasa ielts academic terpercaya",
    "joki toefl prediction score tinggi",
    "jasa toefl home edition",
    "sertifikat toefl untuk visa"
  ],
  
  // Location-based keywords
  locationKeywords: [
    "jakarta", "bandung", "surabaya", "yogyakarta", 
    "semarang", "medan", "makassar", "palembang",
    "jabodetabek", "jawa barat", "jawa timur", "jawa tengah"
  ],
  
  // Use case keywords
  useCaseKeywords: [
    "beasiswa lpdp", "cpns", "bumn", "sidang skripsi",
    "kuliah s2", "working holiday visa", "visa student",
    "ptn", "pts", "universitas", "scholarship"
  ],
  
  // Competitor analysis
  targetCompetitors: [
    "toeflibt.org",
    "kampunginggris.id",
    "english-academy.com",
    "ef.co.id"
  ],
  
  // Content optimization rules
  contentRules: {
    keywordDensity: {
      primary: "1-2%",
      secondary: "0.5-1%",
      longTail: "0.3-0.8%"
    },
    titleLength: "50-60 characters",
    descriptionLength: "150-160 characters",
    h1Count: 1,
    h2Count: "3-6",
    h3Count: "unlimited"
  },
  
  // Schema markup types
  schemas: [
    "EducationalOrganization",
    "Service", 
    "LocalBusiness",
    "FAQPage",
    "Article",
    "BreadcrumbList",
    "Review",
    "Organization"
  ]
};

// SEO utility functions
export const generateKeywordText = (keywords, maxCount = 5) => {
  return keywords.slice(0, maxCount).join(", ");
};

export const optimizeTitle = (title, keywords) => {
  const primaryKeyword = keywords[0];
  if (!title.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    return `${primaryKeyword} | ${title}`;
  }
  return title;
};

export const generateMetaDescription = (service, location = "", useCase = "") => {
  const base = `Jasa ${service} terpercaya`;
  const locationText = location ? ` di ${location}` : "";
  const useCaseText = useCase ? ` untuk ${useCase}` : "";
  const guarantee = ". Garansi skor tinggi, proses cepat, aman 100%";
  
  return `${base}${locationText}${useCaseText}${guarantee}`;
};

export default seoConfig;
