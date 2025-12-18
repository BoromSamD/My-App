import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master 2 en Systèmes, Réseaux et Cloud',
    school: 'Institut Africain de Management (IAM)',
    location: 'Dakar, Sénégal',
    period: '11/2025 – 07/2025'
  },
  {
    degree: 'Bootcamp en Analyse de données',
    school: 'Gomycode',
    location: 'Dakar, Sénégal',
    period: '05/2025 – 09/2025'
  },
  {
    degree: 'Master 1 en Virtualisation & Cloud Computing',
    school: 'Institut Supérieur d\'informatique (ISI)',
    location: 'Dakar, Sénégal',
    period: '11/2025 – 08/2025'
  },
  {
    degree: 'Séminaire en Gestion Relation Client',
    school: 'Business Communication Center (BCC)',
    location: 'Dakar, Sénégal',
    period: '07/2024 – 07/2024'
  },
  {
    degree: 'Bootcamp FullStack JavaScript',
    school: 'Gomycode',
    location: 'Dakar, Sénégal',
    period: '08/2023 – 01/2024'
  },
  {
    degree: 'Licence en Management Informatisé des Organisations',
    school: 'Université Iba Der Thiam',
    location: 'Thiès, Sénégal',
    period: '01/2020 – 07/2023'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Formation
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">
          Mon parcours académique
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 rounded-xl flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {edu.degree}
                  </h3>

                  <p className="text-blue-600 font-medium mb-3">
                    {edu.school}
                  </p>

                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
