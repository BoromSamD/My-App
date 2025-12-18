const skillCategories = [
  {
    title: 'Programmation & Bases de données',
    skills: ['MongoDB', 'Express.js', 'Node.js', 'React.js', 'SQL', 'Python']
  },
  {
    title: 'Visualisation de données',
    skills: ['Power BI', 'SQL Server']
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'GitHub/GitLab', 'Jenkins', 'Kubernetes', 'Ansible', 'Terraform']
  },
  {
    title: 'Administration système',
    skills: ['Linux', 'Windows']
  },
  {
    title: 'Supervision réseau',
    skills: ['Zabbix', 'Nagios', 'Prometheus']
  },
  {
    title: 'Virtualisation & Stockage',
    skills: ['Proxmox', 'ESXi', 'TrueNAS']
  },
  {
    title: 'Plateforme Cloud',
    skills: ['AWS']
  },
  {
    title: 'Outils bureautiques & CRM',
    skills: ['Microsoft Office', 'CRM']
  }
];

const qualities = [
  'Créativité',
  'Bon relationnel',
  'Orientation résultats',
  'Capacité d\'adaptation',
  'Esprit d\'équipe',
  'Proactive'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Compétences
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">
          Technologies et outils que je maîtrise
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Qualités Professionnelles
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {qualities.map((quality, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center hover:from-green-100 hover:to-green-200 transition-colors"
              >
                <p className="text-green-700 font-medium">{quality}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
