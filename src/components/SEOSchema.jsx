import { useEffect } from 'react';

const SEOSchema = () => {
  useEffect(() => {
    // FAQ Schema for SEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Apa itu joki TOEFL dan apakah aman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Joki TOEFL adalah layanan bantuan profesional untuk mengerjakan tes TOEFL dengan garansi skor tinggi. Kami menggunakan tim berpengalaman dan metode yang aman dengan privasi terjamin 100%."
          }
        },
        {
          "@type": "Question", 
          "name": "Berapa biaya jasa sertif TOEFL dan IELTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Biaya jasa sertifikat TOEFL mulai dari Rp 400.000 untuk TOEFL berbasis ETS, sedangkan jasa sertifikat IELTS mulai dari Rp 3.999.999. Harga bervariasi tergantung jenis sertifikat dan target skor."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah sertifikat TOEFL dan IELTS yang dibuat resmi?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Ya, semua sertifikat yang kami buat adalah resmi dari lembaga terakreditasi seperti ETS untuk TOEFL dan British Council untuk IELTS. Sertifikat dapat diverifikasi keasliannya."
          }
        },
        {
          "@type": "Question",
          "name": "Berapa lama proses jasa joki TOEFL selesai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Proses joki TOEFL kami sangat cepat, bisa selesai dalam 1-3 hari kerja tergantung jenis tes. Untuk sertifikat terima jadi, prosesnya bahkan bisa sehari jadi."
          }
        },
        {
          "@type": "Question",
          "name": "Untuk keperluan apa saja jasa sertif TOEFL dan IELTS bisa digunakan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jasa sertifikat TOEFL dan IELTS kami bisa digunakan untuk syarat wisuda, sidang skripsi, daftar S2, beasiswa LPDP, CPNS, BUMN, working holiday visa, dan keperluan akademik/profesional lainnya."
          }
        }
      ]
    };

    // Article Schema for content authority
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Joki TOEFL & Jasa Sertifikat IELTS Terpercaya - Panduan Lengkap",
      "description": "Panduan lengkap tentang jasa joki TOEFL dan jasa sertifikat IELTS terpercaya untuk mahasiswa, beasiswa LPDP, CPNS, dan BUMN",
      "author": {
        "@type": "Organization",
        "name": "Toeflin.Kuy"
      },
      "publisher": {
        "@type": "Organization", 
        "name": "Toeflin.Kuy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://toeflin.kuy/logo.png"
        }
      },
      "datePublished": "2025-01-31",
      "dateModified": "2025-01-31",
      "articleSection": "Education",
      "keywords": [
        "joki toefl",
        "jasa sertif toefl", 
        "jasa sertif ielts",
        "jasa toefl terpercaya",
        "sertifikat toefl resmi",
        "sertifikat ielts resmi",
        "joki toefl itp",
        "toefl ets",
        "beasiswa lpdp",
        "cpns",
        "bumn"
      ]
    };

    // BreadcrumbList Schema for navigation
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://toeflin.kuy/"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Jasa Joki TOEFL",
          "item": "https://toeflin.kuy/#products"
        },
        {
          "@type": "ListItem",
          "position": 3, 
          "name": "Jasa Sertifikat IELTS",
          "item": "https://toeflin.kuy/#products"
        }
      ]
    };

    // Add schemas to head
    const addSchema = (schema, id) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(faqSchema, 'faq-schema');
    addSchema(articleSchema, 'article-schema');
    addSchema(breadcrumbSchema, 'breadcrumb-schema');

  }, []);

  return null;
};

export default SEOSchema;
