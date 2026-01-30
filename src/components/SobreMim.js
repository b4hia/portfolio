import React from 'react';

const SobreMim = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6">
      {/* Seção Principal */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 mb-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">
            Um pouco sobre mim
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            Me chamo{' '}
            <span className="text-purple-600 font-semibold">
              Gabriel de Oliveira Silva Reis
            </span>
            , tenho 21 anos, sou graduando em Desenvolvimento de Software
            Multiplataforma pela FATEC de São José dos Campos. Tenho
            familiaridade com o método ágil Scrum, DevOps e desenvolvimento
            backend e frontend. Meu maior objetivo é me tornar um grande
            Desenvolvedor, quero que meu código mude a vida dos usuários sempre
            para melhor.
          </p>

          <p className="text-lg">
            Sou apaixonado por{' '}
            <span className="text-purple-600">tecnologia</span> desde criança, e
            essa paixão me levou a explorar o mundo da programação. Meu primeiro
            contato com programação foi em meu ensino médio integrado ao tecnico
            em automação industrial, as aulas práticas com arduino eram as
            minhas favoritas. Adoro desafios que me fazem pensar fora da caixa e
            encontrar soluções criativas para problemas complexos.
          </p>

          <p className="text-lg">
            No meu tempo livre sempre mantenho um equilibrio entre o estudo de
            novas tecnologias e o lazer com{' '}
            <span className="text-purple-600">jogos</span>,{' '}
            <span className="text-purple-600">filmes</span>,{' '}
            <span className="text-purple-600">séries</span> ou{' '}
            <span className="text-purple-600">músicas</span>. Amo ter contato
            com outras culturas, é onde eu posso explorar de forma mais
            divertida o mundo.
          </p>

          <div className="p-6 bg-gradient-to-r from-purple-50 to-white rounded-xl border-l-4 border-purple-600 mt-8">
            <p className="text-lg italic text-gray-800">
              O impossível não é um fato, impossível é uma opinião.
              <br />– Muhammad Ali
            </p>
          </div>
        </div>
      </section>

      {/* Seção Habilidades Técnicas */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-12">
        <div className="p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-8 border-b-2 border-gray-200 pb-4">
            O Que Eu Faço
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Desenvolvimento Front-end
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Construo interfaces modernas e responsivas com{' '}
                <span className="text-purple-600 font-medium">React</span>,{' '}
                <span className="text-purple-600 font-medium">
                  React Native
                </span>
                ,{' '}
                <span className="text-purple-600 font-medium">TypeScript</span>{' '}
                <span className="text-purple-600 font-medium">Vite</span> e{' '}
                <span className="text-purple-600 font-medium">
                  Tailwind CSS
                </span>
                . Gosto de criar experiências que sejam bonitas, intuitivas e
                funcionais.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Desenvolvimento Back-end
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Desenvolvo sistemas robustos utilizando{' '}
                <span className="text-purple-600 font-medium">Python</span> e{' '}
                <span className="text-purple-600 font-medium">TypeScript</span>.
                Tenho experiência na construção de{' '}
                <span className="text-purple-600 font-medium">APIs REST</span> e
                microsserviços com{' '}
                <span className="text-purple-600 font-medium">NestJS</span>,{' '}
                <span className="text-purple-600 font-medium">Express</span> e{' '}
                <span className="text-purple-600 font-medium">FastAPI</span>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Design de Interfaces
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Uso <span className="text-purple-600 font-medium">Figma</span>{' '}
                para prototipar e criar designs intuitivos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Resolução de Problemas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gosto de <span className="text-purple-600">desafios</span>! Seja
                debugando código ou otimizando processos, encaro problemas como
                oportunidades para aprender e crescer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Formação */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-8 border-b-2 border-gray-200 pb-4">
            Minha Jornada
          </h2>

          <div className="space-y-10">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-5 mt-1 flex-shrink-0">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Ensino Médio integrado ao Técnico em Automação industrial
                </h3>
                <p className="text-purple-600 font-semibold mb-1">
                  Prof. Ilza Nascimento Pintus - ETEC
                </p>
                <p className="text-gray-500 text-sm font-medium mb-3">
                  2020 - 2022
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-5 mt-1 flex-shrink-0">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Desenvolvimento de Software Multiplataforma
                </h3>
                <p className="text-purple-600 font-semibold mb-1">
                  Fatec Prof. Jessen Vidal - São José dos Campos
                </p>
                <p className="text-gray-500 text-sm font-medium mb-3">
                  2023 - Atualmente
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Onde estou aprofundando meus conhecimentos e colocando em
                  prática em projetos reais tudo que aprendo.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-5 mt-1 flex-shrink-0">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Agente cidadão - PAT SJC
                </h3>
                <p className="text-purple-600 font-semibold mb-1">
                  Prefeitura de São José dos Campos
                </p>
                <p className="text-gray-500 text-sm font-medium mb-3">2024</p>
                <p className="text-gray-600 leading-relaxed">
                  Trabalhei como agente cidadão, auxiliando na orientação e
                  suporte à população em diversos serviços oferecidos pelo
                  município. Em especial, graças ao meu conhecimento em
                  programação e meu interesse por tecnologia, pude contribuir
                  para a digitalização de processos internos, liderei a
                  implementação de uma pesquisa se satisfação digital, com
                  analise de dados em python. Resultando em uma coleta de dados
                  mais eficiente e em melhorias significativas no atendimento ao
                  público.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-5 mt-1 flex-shrink-0">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Suporte de TI
                </h3>
                <p className="text-purple-600 font-semibold mb-1">
                  KLG do BRASIL - São José dos Campos
                </p>
                <p className="text-gray-500 text-sm font-medium mb-3">2024</p>
                <p className="text-gray-600 leading-relaxed">
                  Trabalhei como estagiario de suporte de TI, onde fui
                  responsável por auxiliar na manutenção e suporte dos sistemas
                  internos da empresa, garantindo o bom funcionamento das
                  operações diárias. Durante esse período, tive a oportunidade
                  de aplicar meus conhecimentos em programação para automatizar
                  tarefas repetitivas, o que resultou em uma melhoria
                  significativa na eficiência dos processos de TI. Além disso,
                  desenvolvi sistemas internos que facilitaram a comunicação
                  entre os departamentos, e ajudei com o desenvolvimento de uma
                  aplicação web para gerenciamento de inventário, utilizando
                  React para o frontend e Java para o backend.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-5 mt-1 flex-shrink-0">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Estagiario de Desenvolvimento de Software
                </h3>
                <p className="text-purple-600 font-semibold mb-1">
                  TecSUS - São José dos Campos
                </p>
                <p className="text-gray-500 text-sm font-medium mb-3">
                  2025 - Atualmente
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Atuo como estagiario de desenvolvimento de software, onde sou
                  responsável por auxiliar na criação e manutenção de sistemas
                  para clientes diversos. Lido com tecnologias modernas como
                  React, Python, bancos de dados SQL e NoSQL, Serviços da AWS
                  (S3, SQS, etc...). Além disso participei do desenvolvimento de
                  uma aplicação MDM (Master Data Management) para uma grande
                  empresa do setor de energia. O sistema visa centralizar e
                  padronizar os dados dos clientes, permitindo à empresa a
                  gerenciar seus dados de forma eficiente e segura. Além disso,
                  fui encarregado como responsavel por todo o backend do sistema
                  para o portal de clientes da mesma empresa, minhas atividades
                  cotidianas envolvem a criação de novas funcionalidades,
                  manutenção do código, reuniões diárias com a equipe. Também
                  colaboro com a equipe na resolução de bugs, implementação de
                  novas funcionalidades e otimização de performance dos
                  sistemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMim;
