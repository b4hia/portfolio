import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'aprender coisas novas',
    'criar soluções digitais',
    'resolver problemas reais',
    'colaborar em equipes',
    'desenvolver aplicações completas',
    'explorar novas tecnologias',
    'entregar código de qualidade',
    'transformar ideias em produtos',
    'gerar impacto com tecnologia',
    'evoluir tecnicamente todos os dias',
    'desafiar limites e pensar fora da caixa',
    'ajudar pessoas através da tecnologia',
    'inovar e experimentar',
  ];
  const fundamentos = [
    {
      categoria: 'Algoritmos e Estruturas de Dados',
      habilidades: [
        'Algoritmos de ordenação e busca',
        'Listas, pilhas, filas e árvores',
        'Grafos e algoritmos de percurso',
        'Complexidade algorítmica (Big O)',
      ],
    },
    {
      categoria: 'Bancos de Dados',
      habilidades: [
        'Modelagem de dados',
        'SQL avançado',
        'Normalização',
        'Transações',
      ],
    },
    {
      categoria: 'Arquitetura de Software',
      habilidades: [
        'Padrões de projeto',
        'MVC e Clean Architecture',
        'Microserviços',
        'API REST e GraphQL',
      ],
    },
    {
      categoria: 'DevOps e Infraestrutura',
      habilidades: [
        'Containerização (Docker)',
        'CI/CD',
        'Versionamento (Git)',
        'Cloud (AWS, Azure)',
      ],
    },
  ];

  const habilidadesComportamentais = [
    {
      habilidade: 'Liderança',
      descricao: 'Experiência como Product Owner coordenando equipes.',
      nivel: 'Avançado',
    },
    {
      habilidade: 'Comunicação',
      descricao: 'Clareza com equipes técnicas e stakeholders.',
      nivel: 'Avançado',
    },
    {
      habilidade: 'Trabalho em Equipe',
      descricao: 'Colaboração em ambientes multidisciplinares.',
      nivel: 'Avançado',
    },
    {
      habilidade: 'Resolução de Problemas',
      descricao: 'Análise crítica e soluções criativas.',
      nivel: 'Avançado',
    },
    {
      habilidade: 'Adaptabilidade',
      descricao: 'Flexibilidade para novas tecnologias.',
      nivel: 'Avançado',
    },
    {
      habilidade: 'Gestão de Tempo',
      descricao: 'Priorização de múltiplos projetos.',
      nivel: 'Intermediário',
    },
  ];

  const techStack = [
    { name: 'Python', icon: 'python-original' },
    { name: 'NestJS', icon: 'nestjs-original' },
    { name: 'JavaScript', icon: 'javascript-original' },
    { name: 'TypeScript', icon: 'typescript-original' },
    { name: 'React', icon: 'react-original' },
    { name: 'HTML5', icon: 'html5-original' },
    { name: 'CSS3', icon: 'css3-original' },
    { name: 'FastAPI', icon: 'fastapi-original' },
    { name: 'Flask', icon: 'flask-original' },
    { name: 'MongoDB', icon: 'mongodb-original' },
    { name: 'Expo', icon: 'expo-original' },
    { name: 'Redis', icon: 'redis-original' },
    { name: 'AWS', icon: 'amazonwebservices-original-wordmark' },
    { name: 'PostgreSQL', icon: 'postgresql-original' },
    { name: 'Docker', icon: 'docker-original' },
  ];
  const [skillState, setSkillState] = useState(1);
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const particlesArray = useRef([]);

  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  // Orb class - esferas flutuantes interativas
  class Orb {
    constructor(canvas) {
      this.angle = Math.random() * Math.PI * 2;
      this.angularSpeed = Math.random() * 0.002 + 0.001;
      this.drift = Math.random() * 0.3 + 0.1;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 80 + 40;
      this.baseRadius = this.radius;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.hue = 265 + Math.random() * 10; // tons de roxo
      this.opacity = Math.random() * 0.3 + 0.15;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseOffset = Math.random() * Math.PI * 2;
    }

    update(canvas, mouseX, mouseY, time) {
      // Movimento suave
      this.angle += this.angularSpeed;
      this.x += Math.cos(this.angle) * this.drift + this.vx;
      this.y += Math.sin(this.angle) * this.drift + this.vy;

      // Bounce nas bordas
      if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
        this.vx *= -1;
        this.x = Math.max(
          this.radius,
          Math.min(canvas.width - this.radius, this.x)
        );
      }
      if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
        this.vy *= -1;
        this.y = Math.max(
          this.radius,
          Math.min(canvas.height - this.radius, this.y)
        );
      }

      // Pulsação
      this.radius =
        this.baseRadius +
        Math.sin(time * this.pulseSpeed + this.pulseOffset) * 15;

      // Atração/repulsão do mouse
      if (mouseX !== null && mouseY !== null) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const maxDistance = 280;

        if (distance < maxDistance) {
          const strength = 1 - distance / maxDistance;
          const force = strength * strength * 0.6;

          this.x -= (dx / distance) * force * 4;
          this.y -= (dy / distance) * force * 4;
        }
      }
    }

    draw(ctx) {
      // Gradiente radial
      const gradient = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        this.radius
      );
      gradient.addColorStop(
        0,
        `hsla(${this.hue}, 90%, 65%, ${this.opacity * 1.2})`
      );
      gradient.addColorStop(
        0.35,
        `hsla(${this.hue}, 85%, 55%, ${this.opacity})`
      );
      gradient.addColorStop(
        0.7,
        `hsla(${this.hue}, 80%, 45%, ${this.opacity * 0.4})`
      );
      gradient.addColorStop(1, `hsla(${this.hue}, 85%, 45%, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    const orbs = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initOrbs();
    };

    const initOrbs = () => {
      orbs.length = 0;
      const orbCount = Math.min(
        8,
        Math.floor((canvas.width * canvas.height) / 80000)
      );
      for (let i = 0; i < orbCount; i++) {
        orbs.push(new Orb(canvas));
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
          const dx = orbs[j].x - orbs[i].x;
          const dy = orbs[j].y - orbs[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 300;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5;
            const gradient = ctx.createLinearGradient(
              orbs[i].x,
              orbs[i].y,
              orbs[j].x,
              orbs[j].y
            );
            gradient.addColorStop(0, `rgba(109, 40, 217, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(167, 139, 250, ${opacity * 5})`);
            gradient.addColorStop(1, `rgba(109, 40, 217, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(orbs[i].x, orbs[i].y);
            ctx.lineTo(orbs[j].x, orbs[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      time += 1;

      // Limpa com gradiente de fundo
      const bgGradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      bgGradient.addColorStop(0, 'rgba(249, 250, 251, 0.13)');
      bgGradient.addColorStop(1, 'rgba(255, 255, 255, 0.98)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Desenha conexões primeiro
      drawConnections();

      // Atualiza e desenha orbs
      orbs.forEach((orb) => {
        orb.update(canvas, mouse.current.x, mouse.current.y, time);
        orb.draw(ctx);
      });

      // Efeito de glow no mouse
      if (mouse.current.x !== null && mouse.current.y !== null) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          0,
          mouse.current.x,
          mouse.current.y,
          100
        );
        mouseGradient.addColorStop(0, 'rgba(109, 40, 217, 0.12)');
        mouseGradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.06)');
        mouseGradient.addColorStop(1, 'rgba(167, 139, 250, 0)');

        ctx.fillStyle = mouseGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    resizeCanvas();
    animate();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Typing effect logic
  useEffect(() => {
    let interval;
    let timeout;

    if (!isDeleting) {
      interval = setInterval(() => {
        setText((prev) => prev + texts[textIndex].charAt(prev.length));
        if (text.length === texts[textIndex].length) {
          clearInterval(interval);
          timeout = setTimeout(() => setIsDeleting(true), delay);
        }
      }, typingSpeed);
    } else {
      interval = setInterval(() => {
        setText((prev) => prev.slice(0, prev.length - 1));
        if (text.length === 0) {
          clearInterval(interval);
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, deletingSpeed);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, isDeleting, textIndex, texts]);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section com Partículas */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <canvas
          ref={canvasRef}
          className="absolute inset-x-0 top-0 w-full h-screen z-0 pointer-events-auto"
        />
        <section className="container mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center justify-between relative z-10 pointer-events-none min-h-[85vh]">
          <div className="mt-10 md:mt-0 flex flex-col items-center md:items-start md:w-1/2 mb-10 md:mb-0 pointer-events-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center md:text-left leading-tight">
              <span className="text-gray-900">Olá, eu sou </span>
              <span className="gradient-text text-purple-800">
                Gabriel de Oliveira Silva Reis
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl mb-8 text-center md:text-left">
              <span className="text-gray-700">Eu gosto de </span>
              <span className="text-purple-800 font-semibold border-r-2 border-purple-600 animate-pulse">
                {text}
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-10 text-center md:text-left max-w-lg leading-relaxed">
              Desenvolvo softwares que resolvem problemas reais. Códigos limpos
              e experiências digitais que fazem a diferença.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <button
                onClick={() => navigate('/projetos')}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 transform"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => navigate('/sobre-mim')}
                className="px-8 py-3 border-2 border-purple-600 text-purple-800 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 transform"
              >
                Sobre Mim
              </button>
            </div>
          </div>

          <div className="relative pointer-events-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-xl opacity-30"></div>
            <img
              src="Gabriel.png"
              alt="Gabriel Reis"
              className="relative rounded-full object-cover w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-white shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>
      </div>

      {/* Tech Stack Section */}
      <section className="py-20 relative z-10 bg-white min-h-[700px]">
        <div className="container mx-auto px-6">
          {/* Cabeçalho e Navegação de Estados */}
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Minhas Habilidades
              </span>
            </h2>

            <div className="bg-gray-100 p-1 rounded-xl shadow-inner inline-flex">
              {[
                { id: 1, label: 'Stack Tech' },
                { id: 2, label: 'Soft Skills' },
                { id: 3, label: 'Fundamentos' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSkillState(tab.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    skillState === tab.id
                      ? 'bg-white text-purple-600 shadow-md transform scale-105'
                      : 'text-gray-500 hover:text-purple-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Container de Transição */}
          <div className="transition-all duration-500 ease-in-out">
            {/* ESTADO 1: TECH STACK */}
            {skillState === 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 animate-fadeIn">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center group"
                  >
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-purple-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon.split('-')[0]}/${tech.icon}.svg`}
                        alt={tech.name}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <span className="mt-4 text-sm font-bold text-gray-600 group-hover:text-purple-600 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* ESTADO 2: SOFT SKILLS */}
            {skillState === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                {habilidadesComportamentais.map((skill) => (
                  <div
                    key={skill.habilidade}
                    className="p-6 rounded-2xl border border-purple-50 bg-gradient-to-br from-white to-purple-50/30 hover:shadow-lg transition-all border-l-4 border-l-purple-500"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg text-gray-800">
                        {skill.habilidade}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                        {skill.nivel}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {skill.descricao}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* ESTADO 3: FUNDAMENTOS */}
            {skillState === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                {fundamentos.map((funda) => (
                  <div
                    key={funda.categoria}
                    className="group p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-purple-100"
                  >
                    <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {funda.categoria}
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {funda.habilidades.map((item) => (
                        <li
                          key={item}
                          className="text-gray-600 flex items-center text-sm"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
