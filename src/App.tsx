import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Server, Sparkles, ExternalLink, ChevronDown, Zap, Rocket, Star } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'Sistema de Gestión Inteligente',
      description: 'Plataforma web full-stack para gestión empresarial con análisis predictivo y automatización de procesos.',
      tech: ['React', 'Spring Boot', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'API REST Optimizada',
      description: 'Backend escalable con microservicios, caché distribuido y documentación OpenAPI completa.',
      tech: ['Spring Boot', 'Redis', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Asistente Virtual con IA',
      description: 'Chatbot inteligente que utiliza NLP para automatizar respuestas y mejorar la experiencia del cliente.',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Dashboard Analítico',
      description: 'Interfaz moderna para visualización de datos en tiempo real con gráficos interactivos.',
      tech: ['React', 'D3.js', 'Node.js'],
      github: '#',
      demo: '#'
    }
  ];

  const skills = {
    Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    Backend: ['Spring Boot', 'Node.js', 'PostgreSQL', 'MongoDB'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'NLP', 'Scikit-learn']
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-slate-100' : 'bg-gradient-to-br from-orange-50 via-white to-blue-50 text-slate-800'}`}>
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-stone-100'
        } shadow-lg`}
        aria-label="Toggle theme"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? '' : 'opacity-40'}`}>
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-blue-500/30' : 'bg-orange-400/40'}`}></div>
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-cyan-500/30' : 'bg-blue-400/40'} animation-delay-2000`}></div>
          <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-orange-500/20' : 'bg-pink-400/30'} animation-delay-1000`}></div>
        </div>

        <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Zap className={`${isDark ? 'text-orange-400' : 'text-orange-500'} animate-pulse`} size={32} />
            <h1 className={`text-6xl md:text-8xl font-bold mb-0 text-center bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-orange-400 via-cyan-400 to-blue-400' : 'bg-gradient-to-r from-orange-500 via-blue-500 to-cyan-500'}`}>
              Dani
            </h1>
            <Rocket className={`${isDark ? 'text-cyan-400' : 'text-blue-500'} animate-bounce`} size={32} />
          </div>
          <p className={`text-xl md:text-3xl mb-6 text-center font-bold ${isDark ? 'text-cyan-300' : 'text-blue-600'}`}>
            Ingeniera de Software
          </p>
          <p className={`max-w-2xl text-center text-lg md:text-xl font-semibold mb-12 ${isDark ? 'text-orange-300' : 'text-orange-600'}`}>
            Transformando ideas en código que impacta 🚀
          </p>

          <div className="flex gap-6 justify-center">
            <a href="#about" className={`px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
              isDark ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white' : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white'
            } shadow-xl`}>
              Ver Proyectos 🎯
            </a>
            <a href="#contact" className={`px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
              isDark ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white' : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white'
            } shadow-xl`}>
              Trabajemos Juntos 💪
            </a>
          </div>
        </div>

        <a href="#about" className="absolute bottom-12 animate-bounce">
          <ChevronDown className={isDark ? 'text-slate-400' : 'text-slate-400'} size={32} />
        </a>
      </section>

      <section id="about" className={`py-24 px-6 ${isDark ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-sm`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Star className={`${isDark ? 'text-orange-400' : 'text-orange-500'}`} size={32} />
            <h2 className={`text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-orange-400 to-cyan-400' : 'bg-gradient-to-r from-orange-600 to-blue-600'}`}>Sobre mí</h2>
            <Star className={`${isDark ? 'text-cyan-400' : 'text-blue-500'}`} size={32} />
          </div>
          <div className={`text-lg md:text-xl leading-relaxed font-medium space-y-6 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
            <p className="text-center">
              💡 Soy una ingeniera de software con <span className={`font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>energía infinita</span> por crear soluciones tecnológicas que realmente importen. No solo escribo código — <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>construyo experiencias</span> que transforman ideas en realidad.
            </p>
            <p className="text-center">
              ⚡ Domino tecnologías como <span className="font-bold">React, Spring Boot y AI</span> para desarrollar aplicaciones que no solo funcionan, sino que <span className={`font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>sorprenden</span>. Me apasiona el código limpio, la arquitectura inteligente y siempre estar aprendiendo algo nuevo.
            </p>
            <p className="text-center">
              🚀 Cuando no estoy codeando, estoy explorando las últimas tendencias tech, contribuyendo a open source y compartiendo conocimiento con la comunidad. <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>¡El futuro se construye con código y colaboración!</span>
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-cyan-400 to-orange-400' : 'bg-gradient-to-r from-blue-600 to-orange-600'}`}>Proyectos Destacados 🔥</h2>
          <p className={`text-center text-lg md:text-xl mb-16 font-semibold ${isDark ? 'text-cyan-300' : 'text-blue-600'}`}>
            Código que resuelve problemas reales con estilo
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group p-8 rounded-3xl transition-all duration-300 hover:scale-[1.05] hover:rotate-1 ${
                  isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border-2 border-cyan-500/30' : 'bg-gradient-to-br from-white to-blue-50 hover:shadow-2xl border-2 border-orange-200'
                } shadow-xl`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>{project.title}</h3>
                <p className={`mb-6 font-medium leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        isDark ? 'bg-gradient-to-r from-cyan-900 to-blue-900 text-cyan-300 border border-cyan-500/50' : 'bg-gradient-to-r from-orange-100 to-blue-100 text-blue-700 border border-blue-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className={`flex items-center gap-2 font-bold transition-all hover:scale-110 ${
                      isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    <Github size={22} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className={`flex items-center gap-2 font-bold transition-all hover:scale-110 ${
                      isDark ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'
                    }`}
                  >
                    <ExternalLink size={22} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={`py-24 px-6 ${isDark ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-sm`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-orange-400 to-cyan-400' : 'bg-gradient-to-r from-orange-600 to-blue-600'}`}>Mi Arsenal Tech ⚡</h2>
          <p className={`text-center text-lg mb-16 font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Herramientas que domino para crear magia digital</p>

          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                  isDark ? 'bg-gradient-to-br from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/50' : 'bg-gradient-to-br from-orange-400 to-pink-400 shadow-lg shadow-orange-400/50'
                }`}>
                  {category === 'Frontend' && <Code2 size={36} className="text-white" />}
                  {category === 'Backend' && <Server size={36} className="text-white" />}
                  {category === 'AI/ML' && <Sparkles size={36} className="text-white" />}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>{category}</h3>
                <ul className={`space-y-2 font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-cyan-400 to-orange-400' : 'bg-gradient-to-r from-blue-600 to-orange-600'}`}>¡Conectemos! 💫</h2>
          <p className={`text-lg md:text-xl font-bold mb-12 ${isDark ? 'text-orange-300' : 'text-orange-600'}`}>
            Lista para nuevos desafíos y proyectos increíbles
          </p>

          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-12 ${
                isDark ? 'bg-gradient-to-br from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white' : 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white'
              } shadow-xl shadow-blue-500/50`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-12 ${
                isDark ? 'bg-gradient-to-br from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white' : 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white'
              } shadow-xl shadow-blue-500/50`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dani@example.com"
              className={`p-5 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-12 ${
                isDark ? 'bg-gradient-to-br from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white' : 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white'
              } shadow-xl shadow-blue-500/50`}
            >
              <Mail size={24} />
            </a>
          </div>

          <div className={`p-12 rounded-3xl ${isDark ? 'bg-gradient-to-r from-orange-600/20 to-cyan-600/20 border-2 border-orange-500/50' : 'bg-gradient-to-r from-orange-100 to-blue-100 border-2 border-orange-300'} shadow-2xl`}>
            <p className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? 'text-orange-300' : 'text-orange-600'}`}>
              ✨ "Convirtiendo café en código y código en soluciones épicas" ✨
            </p>
          </div>
        </div>
      </section>

      <footer className={`py-8 px-6 text-center font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
        <p>© 2025 Dani • Hecho con 💻 y mucha ☕</p>
      </footer>
    </div>
  );
}

export default App;
