import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Abdoulaye Diop',
    role: 'Chef de Projet, Sonatel',
    content: 'Mamadou a fait preuve d\'une grande compétence technique lors de son stage chez nous. Son travail sur le back-office de Wesalo a été exemplaire. Il est autonome, rigoureux et propose toujours des solutions innovantes.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    name: 'Fatou Sall',
    role: 'Responsable Formation, Gomycode',
    content: 'En tant qu\'instructeur, Mamadou excelle dans la transmission de connaissances. Il sait rendre les concepts complexes accessibles et motive ses apprenants à se dépasser. Un véritable atout pour notre équipe pédagogique.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    name: 'Moussa Kane',
    role: 'Directeur Technique, StartUp Tech',
    content: 'J\'ai fait appel à Mamadou pour le développement de notre plateforme de candidature. Résultat impeccable, respect des délais et communication fluide. Je recommande vivement ses services.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Témoignages
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">
          Ce que disent mes clients et collaborateurs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>

                <Quote className="w-8 h-8 text-blue-200" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
