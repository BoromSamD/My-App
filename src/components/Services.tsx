import { Code, Server, Workflow, Cloud, HardDrive, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Conception et développement Frontend',
    description: 'Création de superbes interfaces utilisateur interactives et réactives en utilisant des technologies modernes telles que React.js. Du design initial à l\'implémentation finale, je m\'assure que l\'expérience utilisateur est au centre de chaque projet.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Server,
    title: 'Développement Backend robuste',
    description: 'Création de serveurs backend robustes et évolutifs en utilisant Node.js et Express.js. Je développe des API RESTful efficaces pour alimenter vos applications, en assurant une gestion optimale des données et des performances.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Workflow,
    title: 'Création d\'API REST complètes',
    description: 'Développement complet d\'API RESTful, de la conception à la documentation, en passant par l\'implémentation et les tests. Je veille à ce que vos API fournissent des fonctionnalités complètes et sécurisées, répondant aux normes de l\'industrie.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'DevOps Engineer spécialisé dans l\'automatisation et l\'optimisation des infrastructures cloud. Expérience dans les pipelines CI/CD, Docker, Kubernetes, Terraform et services AWS pour des architectures scalables et sécurisées.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: HardDrive,
    title: 'Administration Système & Virtualisation',
    description: 'Administrateur Système spécialisé en virtualisation et gestion d\'infrastructures. Expérience avec Proxmox VE, sauvegardes et supervision avec Zabbix/Prometheus. Maîtrise des systèmes Linux/Windows pour garantir stabilité et haute disponibilité.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: BarChart3,
    title: 'Analyste junior en données',
    description: 'Maîtrisant Power BI et SQL Server pour l\'analyse, la préparation et la visualisation des données. Capable de concevoir des dashboards pertinents et de transformer des données brutes en indicateurs exploitables.',
    color: 'from-cyan-500 to-cyan-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Services
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Des solutions complètes pour tous vos besoins technologiques
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
