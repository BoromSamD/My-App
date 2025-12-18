export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          À Propos
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Développeur web et ingénieur Cloud passionné, spécialisé dans la stack MERN (MongoDB, Express.js, React.js, Node.js) et la gestion de bases de données SQL.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Expérience dans le déploiement d'applications cloud sur AWS, ainsi que dans les pratiques DevOps (Docker, GitHub/GitLab, Jenkins, Kubernetes, Ansible, Terraform).
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Compétent en administration système (Linux, Windows), virtualisation (Proxmox, ESXi, TrueNAS) et supervision réseau (Zabbix, Nagios).
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Je m'intéresse particulièrement à la visualisation et à l'analyse de données à travers Power BI, afin de transformer les données en indicateurs clairs et exploitables.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 max-w-2xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">3+</p>
                <p className="text-gray-600">Années d'expérience</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">10+</p>
                <p className="text-gray-600">Projets réalisés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
