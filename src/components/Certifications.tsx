import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'CCNA : Introduction aux réseaux',
    issuer: 'Cisco Networking Academy',
    icon: '🌐'
  },
  {
    title: 'CCNA : Commutation, routage et bases du sans-fil',
    issuer: 'Cisco Networking Academy',
    icon: '🔌'
  },
  {
    title: 'Certificat de formation - Programme de formation / intégration des instructeurs',
    issuer: 'Gomycode',
    icon: '👨‍🏫'
  },
  {
    title: 'Certificat de réussite - Bootcamp Full-Stack JavaScript',
    issuer: 'Gomycode',
    icon: '💻'
  },
  {
    title: 'Certificat de réussite - Analyse de données (Microsoft Power BI)',
    issuer: 'Microsoft / Gomycode',
    icon: '📊'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Certifications
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">
          Certifications professionnelles obtenues
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">
                  {cert.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-sm text-blue-600 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <Award className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Formation Continue</h3>
          <p className="text-blue-100">
            Toujours en quête d'apprentissage et d'amélioration de mes compétences
          </p>
        </div>
      </div>
    </section>
  );
}
