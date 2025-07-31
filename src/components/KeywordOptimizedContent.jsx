import React from 'react';
import { motion } from 'motion/react';

const KeywordOptimizedContent = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary Keywords Section */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Joki TOEFL & Jasa Sertifikat TOEFL IELTS Terpercaya
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Kami menyediakan <strong>jasa joki TOEFL</strong> dan <strong>jasa sertif TOEFL</strong> dengan 
            garansi skor tinggi. Dapatkan <strong>jasa sertif IELTS</strong> resmi untuk kebutuhan 
            beasiswa LPDP, CPNS, BUMN, dan kuliah S2 dengan proses yang cepat dan aman.
          </p>
        </motion.div>

        {/* Services Grid with Keywords */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div {...fadeInUp} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Joki TOEFL ITP & IBT
            </h3>
            <p className="text-gray-600">
              Layanan <strong>joki TOEFL</strong> untuk TOEFL ITP dan TOEFL IBT dengan 
              prediction score yang akurat. Khusus untuk mahasiswa yang membutuhkan 
              sertifikat TOEFL untuk syarat wisuda atau beasiswa.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Jasa Sertifikat TOEFL Resmi
            </h3>
            <p className="text-gray-600">
              <strong>Jasa sertif TOEFL</strong> dengan sertifikat resmi dari ETS. 
              Cocok untuk kebutuhan CPNS, BUMN, dan pendaftaran kuliah S2 
              di universitas dalam dan luar negeri.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Jasa Sertifikat IELTS Academic
            </h3>
            <p className="text-gray-600">
              <strong>Jasa sertif IELTS</strong> Academic dan General Training 
              untuk beasiswa LPDP, visa student, working holiday visa, 
              dan kebutuhan akademik lainnya.
            </p>
          </motion.div>
        </div>

        {/* Location-Based Keywords */}
        <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Jasa TOEFL & IELTS Terpercaya di Seluruh Indonesia
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              'Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta',
              'Semarang', 'Medan', 'Makassar', 'Palembang'
            ].map((city, index) => (
              <motion.div 
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-3 bg-blue-50 rounded-lg"
              >
                <span className="text-blue-600 font-medium">
                  Jasa TOEFL {city}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases with Long-tail Keywords */}
        <motion.div {...fadeInUp} className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Kebutuhan Khusus Sertifikat TOEFL & IELTS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Beasiswa LPDP', desc: 'Joki TOEFL untuk beasiswa LPDP dengan skor minimal 550' },
              { title: 'CPNS & BUMN', desc: 'Jasa sertif TOEFL untuk seleksi CPNS dan BUMN' },
              { title: 'Kuliah S2', desc: 'Sertifikat TOEFL/IELTS untuk pendaftaran kuliah S2' },
              { title: 'Visa & Immigration', desc: 'Jasa IELTS untuk working holiday visa dan student visa' }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeywordOptimizedContent;
