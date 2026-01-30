import React, { useState } from 'react';

const TimelineProgression = () => {
  const etapas = [
    { sem: '1º', foco: 'P.O & UI', color: 'bg-purple-400' },
    { sem: '2º', foco: 'Fullstack', color: 'bg-purple-500' },
    { sem: '3º', foco: 'Java/Back', color: 'bg-indigo-500' },
    { sem: '4º', foco: 'DevOps', color: 'bg-indigo-600' },
    { sem: '5º', foco: 'IA/Mobile', color: 'bg-purple-700' },
    { sem: '6º', foco: 'Arquitetura', color: 'bg-purple-900' },
  ];

  return (
    <div className="hidden md:block mb-16 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
      <h3 className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">
        Linha do Tempo: Evolução de Responsabilidades
      </h3>
      <div className="relative flex justify-between">
        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-100 -z-0"></div>
        {etapas.map((etapa, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center w-24"
          >
            <div
              className={`w-10 h-10 ${etapa.color} rounded-full border-4 border-white shadow-md flex items-center justify-center text-white text-[10px] font-bold`}
            >
              {etapa.sem}
            </div>
            <div className="mt-3 text-center">
              <h4 className="font-bold text-gray-800 text-xs">{etapa.foco}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projetos = () => {
  const [activeTab, setActiveTab] = useState('api');
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (project) => {
    setActiveProject(activeProject === project ? null : project);
  };

  const projetosAPI = [
    {
      id: 'api1',
      title: 'Data-SARS - Monitoramento de COVID longa',
      category: 'API 1º Semestre',
      githubLink: 'https://github.com/b4hia/DATA-SARS',
      stats: {
        role: 'Product Owner & Dev',
        team: 'Equipe Skyfall',
        partner: 'Rede Vanguarda',
      },
      description: (
        <>
          <p className="mb-4 text-gray-700">
            Plataforma de análise de dados para jornalistas. Foco em
            autenticidade e interface minimalista para combater Fake News.
          </p>
          <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-4 text-sm text-purple-800 italic">
            <strong>Contribuição:</strong> "Atuei como P.O. e dev. Superei
            falhas iniciais de comunicação e lógica com apoio da equipe."
          </div>
        </>
      ),
      technologies: [
        'Python',
        'Flask',
        'JavaScript',
        'Pandas',
        'Docker',
        'Figma',
      ],
    },
    {
      id: 'api2',
      title: 'CallGenie - Help-Desk Inteligente',
      category: 'API 2º Semestre',
      githubLink: 'https://github.com/b4hia/Call-Genie',
      stats: {
        role: 'Product Owner & Dev',
        team: 'Equipe Skyfall',
        partner: 'Fatec',
      },
      description: (
        <>
          <p className="mb-4 text-gray-700">
            Sistema de chamados focado em otimizar a triagem de problemas de TI.
          </p>
          <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-4 text-sm text-purple-800 italic">
            <strong>Evolução:</strong> "Melhorei como P.O. e dominei a
            integração front-end e consumo de APIs."
          </div>
        </>
      ),
      technologies: ['React', 'MySQL', 'Express', 'Sequelize', 'Figma'],
    },
    {
      id: 'api3',
      title: 'Assetbox - Gestão de Ativos',
      category: 'API 3º Semestre',
      githubLink: 'https://github.com/b4hia/AssetBox',
      stats: {
        role: 'Fullstack Developer',
        team: 'Equipe Skyfall',
        partner: 'Youtan',
      },
      description: (
        <>
          <p className="mb-4 text-gray-700">
            Controle empresarial focado em segurança de dados e persistência
            robusta com Java.
          </p>
          <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-4 text-sm text-purple-800 italic">
            <strong>Desafio Java:</strong> "Aprendizado intenso de Spring Boot
            sob pressão para entregar endpoints complexos."
          </div>
        </>
      ),
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Zube'],
    },
    {
      id: 'api4',
      title: 'Tupã - Monitoramento Meteorológico',
      category: 'API 4º Semestre',
      githubLink: 'https://github.com/b4hia/Tupan',
      stats: {
        role: 'Dev & DevOps',
        team: 'Equipe Skyfall',
        partner: 'Tecsus',
      },
      description: (
        <>
          <p className="mb-4 text-gray-700">
            Hardware Arduino + Dashboard em tempo real. Adaptação rápida a uma
            equipe reduzida.
          </p>
          <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-4 text-sm text-purple-800 italic">
            <strong>Resiliência:</strong> "Assumi DevOps (CI/CD) e Front
            simultaneamente. Ponto de maior crescimento técnico."
          </div>
        </>
      ),
      technologies: [
        'Next.js',
        'PostgreSQL',
        'TypeScript',
        'Docker',
        'Redis',
        'Django',
      ],
    },
    {
      id: 'api5',
      title: 'NeuraHive - Orquestração de IA',
      category: 'API 5º Semestre',
      githubLink: 'https://github.com/b4hia/Neurahive',
      stats: {
        role: 'Backend Architect',
        team: 'Syntax Squad',
        partner: 'Fatec',
      },
      description: (
        <>
          <p className="mb-4 text-gray-700">
            Arquitetura de microsserviços para gerenciar agentes inteligentes
            especializados.
          </p>
          <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-4 text-sm text-purple-800 italic">
            <strong>Inovação:</strong> "Desenvolvi processamento assíncrono
            entre Python e React Native para IA."
          </div>
        </>
      ),
      technologies: [
        'Python',
        'TypeScript',
        'React Native',
        'AI Agents',
        'Microservices',
      ],
    },
    {
      id: 'api6',
      title: 'Synapse - Ecossistema de Dados',
      category: 'API 6º Semestre',
      githubLink: 'https://github.com/b4hia/Synapse',
      stats: {
        role: 'Senior Backend Dev',
        team: 'Syntax Squad',
        partner: 'Fatec',
      },
      description: (
        <>
          <p className="mb-4 text-gray-700">
            Projeto final focado em escalabilidade e Clean Code conectando dados
            a insights via IA.
          </p>
          <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-4 text-sm text-purple-800 italic">
            <strong>Clean Code:</strong> "Foco total na modularidade e qualidade
            sob prazos curtos."
          </div>
        </>
      ),
      technologies: [
        'Python',
        'SCSS',
        'Backend Architecture',
        'Modular Design',
      ],
    },
  ];

  const projetosAcad = [
    {
      id: 'acad1',
      title: 'PetLovers',
      category: 'Técnicas de Programação',
      githubLink: 'https://github.com/b4hia/PetLovers-PL', // Exemplo
      stats: {
        role: 'Fullstack Dev',
        team: 'Dupla (W. Faria)',
        partner: 'Projeto Acadêmico',
      },
      description: (
        <>
          <p className="mb-4 text-gray-700">
            Sistema completo para gestão de pet shops, focando em atendimentos e
            processos dinâmicos.
          </p>
          <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-4 text-sm text-purple-800 italic">
            <strong>Dificuldade:</strong> "Conciliar o tempo com o API e seguir
            rigorosamente os padrões de código exigidos."
          </div>
        </>
      ),
      technologies: [
        'React',
        'TypeScript',
        'Express',
        'Bootstrap',
        'JavaScript',
      ],
    },
    {
      id: 'acad2',
      title: 'Atlantis',
      category: 'Técnicas de Programação 2',
      githubLink: 'https://github.com/b4hia/Atlantis', // Exemplo
      stats: {
        role: 'Solo Developer',
        team: 'Individual',
        partner: 'Projeto Acadêmico',
      },
      description: (
        <>
          <p className="mb-4 text-gray-700">
            Gerenciamento de parques aquáticos. Um sistema robusto desenvolvido
            de forma totalmente autônoma.
          </p>
          <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-4 text-sm text-purple-800 italic">
            <strong>Autonomia:</strong> "Exigiu alto nível de compromisso por
            ser solo, além de gerenciar o tempo entre API e matérias."
          </div>
        </>
      ),
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 'acad3',
      title: 'Food-Tracker',
      category: 'Dev. Móvel II',
      githubLink: 'https://github.com/b4hia/Food-Tracker', // Exemplo
      stats: {
        role: 'Mobile & Backend',
        team: 'Grupo Acadêmico',
        partner: 'Prof. Carlos Feixas',
      },
      description: (
        <>
          <p className="mb-4 text-gray-700">
            App mobile para controle de estoque de alimentos com sincronização
            em tempo real.
          </p>
          <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500 mb-4 text-sm text-purple-800 italic">
            <strong>Mobile Challenge:</strong> "Aprender Flutter do zero e
            garantir a comunicação fluida com o backend Python."
          </div>
        </>
      ),
      technologies: ['Python', 'Flutter', 'API Rest', 'Mobile Development'],
    },
  ];

  const currentProjects = activeTab === 'api' ? projetosAPI : projetosAcad;

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
          Portfólio de Projetos
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Exploração técnica e evolução prática em cenários reais e acadêmicos.
        </p>

        <TimelineProgression />

        <div className="bg-gray-100 p-1.5 rounded-2xl shadow-inner inline-flex mb-12">
          <button
            onClick={() => {
              setActiveTab('api');
              setActiveProject(null);
            }}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'api' ? 'bg-white text-purple-600 shadow-md' : 'text-gray-500 hover:text-purple-400'}`}
          >
            Projetos API (Fatec)
          </button>
          <button
            onClick={() => {
              setActiveTab('acad');
              setActiveProject(null);
            }}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'acad' ? 'bg-white text-purple-600 shadow-md' : 'text-gray-500 hover:text-purple-400'}`}
          >
            Acadêmicos
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-white border-2 rounded-3xl overflow-hidden transition-all duration-300 ${activeProject === project.id ? 'border-purple-500 shadow-2xl scale-[1.01]' : 'border-gray-100 hover:border-purple-200'}`}
          >
            <div className="p-6 md:p-10">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex-1">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 inline-block">
                    {project.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-lg text-gray-500 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-700">{project.description}</div>

                  {activeProject === project.id && (
                    <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fadeIn">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                          Papel
                        </span>
                        <span className="text-sm font-semibold text-gray-700">
                          {project.stats.role}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                          Time
                        </span>
                        <span className="text-sm font-semibold text-gray-700">
                          {project.stats.team}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                          Contexto
                        </span>
                        <span className="text-sm font-semibold text-gray-700">
                          {project.stats.partner}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 lg:w-44">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-md active:scale-95"
                  >
                    {activeProject === project.id ? 'Ver menos' : 'Detalhes'}
                  </button>
                  {/* BOTÃO DO GITHUB ATUALIZADO */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 border-2 border-purple-100 text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all text-center flex items-center justify-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
