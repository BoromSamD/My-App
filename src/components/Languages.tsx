import { Globe } from 'lucide-react';

const languages = [
  {
    name: 'Français',
    level: 'Langue maternelle',
    percentage: 100
  },
  {
    name: 'Anglais',
    level: 'Professionnel',
    percentage: 75
  }
];

export default function Languages() {
  return (
    <section id="languages" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Langues
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">
          Compétences linguistiques
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-blue-500 rounded-2xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="space-y-8">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-900">
                    {lang.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>

                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
