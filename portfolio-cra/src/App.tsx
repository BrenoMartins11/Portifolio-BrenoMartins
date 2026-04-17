import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';
import { MdEmail, MdChevronRight } from 'react-icons/md';
import { HiOutlineCode, HiOutlineDatabase, HiOutlineServer, HiOutlineTerminal } from 'react-icons/hi';
import { FiMenu, FiX } from 'react-icons/fi';
import './index.css'; 

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', to: 'home' },
    { name: 'Sobre', to: 'about' },
    { name: 'Tecnologias', to: 'tech' },
    { name: 'Experiência', to: 'experience' },
    { name: 'Projetos', to: 'projects' },
    { name: 'Contato', to: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-indigo-500/30 font-sans">
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="home" smooth={true} duration={500} className="text-xl font-bold text-indigo-400 cursor-pointer flex items-center gap-2">
              <HiOutlineTerminal size={24} />
              <span>Dev.Portfolio</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-1 justify-end px-4 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-sm font-medium text-slate-300 hover:text-indigo-400 cursor-pointer transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-white">
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl shadow-indigo-500/20 relative z-10 bg-slate-800 flex items-center justify-center">
                <img 
                  src="/fotodeperfil.jpg" 
                  alt="Foto de perfil de Breno Martins" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x200.png?text=Breno+Martins';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-110"></div>
            </div>

            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Olá, meu nome é</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Breno Martins</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">Desenvolvedor FullStack Júnior</h2>
            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Foco contínuo em aprendizado e no desenvolvimento de soluções eficientes. Transformando ideias em aplicações web robustas e escaláveis, do código ao deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="projects" smooth={true} duration={500} className="px-8 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium cursor-pointer transition-colors flex items-center justify-center gap-2">
                Ver Projetos <MdChevronRight size={18} />
              </Link>
              <Link to="contact" smooth={true} duration={500} className="px-8 py-3 rounded-md bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium cursor-pointer transition-colors flex items-center justify-center">
                Contato
              </Link>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-slate-100">Sobre Mim</h2>
                <div className="h-px bg-slate-700 flex-1"></div>
              </div>
              <div className="text-slate-300 text-lg leading-relaxed flex flex-col gap-4">
                <p>
                  Sou estudante de Sistemas de Informação, apaixonado por tecnologia e resolução de problemas. Minha jornada começou no Suporte Técnico, onde desenvolvi uma base sólida em infraestrutura e atendimento ao usuário, mas logo minha curiosidade me levou à programação.
                </p>
                <p>
                  Hoje atuo em projetos FullStack, construindo interfaces fluidas e acessíveis no lado do cliente, enquanto modelo arquiteturas resilientes e bancos de dados eficientes no servidor. Meu objetivo é sempre entregar código limpo, escalável e agregador de valor.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Section */}
        <section id="tech" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100">Tecnologias</h2>
              <div className="h-px bg-slate-700 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Front-end */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <HiOutlineCode className="text-indigo-400" size={28} />
                  <h3 className="text-xl font-semibold text-white">Front-end</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'TailwindCSS', 'JavaScript', 'UnoCSS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Back-end */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <HiOutlineServer className="text-indigo-400" size={28} />
                  <h3 className="text-xl font-semibold text-white">Back-end</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'Express', 'Python'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <HiOutlineDatabase className="text-indigo-400" size={28} />
                  <h3 className="text-xl font-semibold text-white">Banco de Dados</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['PostgreSQL', 'MySQL', 'Docker' ].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-slate-100">Experiência</h2>
                <div className="h-px bg-slate-700 flex-1"></div>
              </div>

              <div className="space-y-12">
                {/* Estágio em Desenvolvimento FullStack */}
                <div className="relative pl-8 border-l border-slate-700 pb-12">
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1 border-4 border-slate-900"></div>
                  <h3 className="text-xl font-bold text-slate-100">Estagiário de Desenvolvimento FullStack</h3>
                  <div className="text-indigo-400 font-medium mb-4">2025 – Atual</div>
                  <ul className="text-slate-300 space-y-2 list-disc ml-4 marker:text-indigo-400 mb-6">
                    <li>Desenvolvimento de aplicações web utilizando JavaScript, TypeScript e React</li>
                    <li>Construção e manutenção de APIs com Node.js</li>
                    <li>Integração com banco de dados PostgreSQL</li>
                    <li>Testes de APIs utilizando ferramentas como Postman</li>
                    <li>Correção de bugs e implementação de melhorias em sistemas existentes</li>
                    <li>Participação na análise e modelagem de processos para automação</li>
                    <li>Colaboração com equipes técnicas e funcionais</li>
                    <li>Versionamento de código com Git</li>
                  </ul>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Aprendizados:</h4>
                    <ul className="text-slate-400 space-y-1 list-disc ml-4 text-sm marker:text-slate-600">
                      <li>Boas práticas de desenvolvimento e organização de código</li>
                      <li>Trabalho em equipe em ambiente ágil</li>
                      <li>Pensamento lógico aplicado a problemas reais</li>
                      <li>Evolução contínua em tecnologias modernas</li>
                    </ul>
                  </div>
                </div>

                {/* Suporte Técnico N1 */}
                <div className="relative pl-8 border-l border-slate-700 pb-12">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-slate-900"></div>
                  <h3 className="text-xl font-bold text-slate-100">Suporte Técnico N1</h3>
                  <div className="text-emerald-400 font-medium mb-4">Jan 2025 – Atual</div>
                  <ul className="text-slate-300 space-y-2 list-disc ml-4 marker:text-emerald-400 mb-6">
                    <li>Atendimento direto a usuários para suporte técnico em sistemas e aplicações</li>
                    <li>Diagnóstico e resolução de problemas de nível inicial (N1)</li>
                    <li>Abertura, acompanhamento e atualização de chamados técnicos</li>
                    <li>Registro e documentação de incidentes e soluções aplicadas</li>
                    <li>Suporte remoto e orientação ao usuário final</li>
                  </ul>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Habilidades desenvolvidas:</h4>
                    <ul className="text-slate-400 space-y-1 list-disc ml-4 text-sm marker:text-slate-600">
                      <li>Comunicação clara com usuários técnicos e não técnicos</li>
                      <li>Resolução rápida de problemas</li>
                      <li>Organização e priorização de demandas</li>
                      <li>Agilidade no atendimento</li>
                    </ul>
                  </div>
                </div>

                {/* Estagiário de Suporte Técnico */}
                <div className="relative pl-8 border-l border-slate-700">
                  <div className="absolute w-4 h-4 bg-slate-500 rounded-full -left-[9px] top-1 border-4 border-slate-900"></div>
                  <h3 className="text-xl font-bold text-slate-100">Estagiário de Suporte Técnico</h3>
                  <div className="text-slate-400 font-medium mb-4">Ago 2024 – Dez 2024</div>
                  <ul className="text-slate-300 space-y-2 list-disc ml-4 marker:text-slate-400">
                    <li>Apoio no atendimento a usuários e suporte técnico básico</li>
                    <li>Auxílio na manutenção de sistemas e resolução de incidentes simples</li>
                    <li>Suporte na organização e controle de chamados</li>
                    <li>Aprendizado prático de rotinas de suporte e atendimento</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100">Projetos</h2>
              <div className="h-px bg-slate-700 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Projeto 1',
                  desc: 'Lore ipsum dolor sit amet, consectetur adipiscing elit.',
                  techs: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
                }
                
                
              ].map((p, i) => (
                <div key={i} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 flex flex-col h-full">
                  <div className="h-48 flex items-center justify-center p-6 bg-slate-700/50 border-b border-slate-700">
                    <HiOutlineCode className="text-slate-500 w-16 h-16 opacity-50" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.techs.map(t => (
                        <span key={t} className="text-xs font-mono text-indigo-300 bg-indigo-900/30 px-2 py-1 rounded border border-indigo-900/50">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
                      <a href="https://github.com/BrenoMartins11" className="text-slate-300 hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-sm font-medium">
                        <FaGithub size={16} /> GitHub
                      </a>
                      <button type="button" className="text-slate-300 hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-sm font-medium">
                        <FaExternalLinkAlt size={14} /> Ver Projeto
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-800/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-100 mb-6">Qual é o próximo passo?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                No momento, estou aberto a novas oportunidades e pronto para desafios estimulantes. Seja para uma vaga, projeto freelancer ou apenas para bater papo, minha caixa de entrada está sempre aberta!
              </p>
              <a href="mailto:brenodev256@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors mb-16 shadow-lg shadow-indigo-600/20">
                <MdEmail size={20} /> Entrar em Contato
              </a>

              <div className="flex justify-center gap-8">
                <a href="https://github.com/BrenoMartins11" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" aria-label="GitHub">
                  <FaGithub size={28} />
                </a>
                <a href="https://www.linkedin.com/in/breno-martins-" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" aria-label="LinkedIn">
                  <FaLinkedin size={28} />
                </a>
                <a href="https://www.instagram.com/breno.dev._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" aria-label="Instagram">
                  <FaInstagram size={28} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center bg-slate-900 border-t border-slate-800">
        <p className="text-slate-500 text-sm mb-2">
          Projetado e desenvolvido por <span className="text-indigo-400">Breno Martins</span>.
        </p>
        <p className="text-slate-600 font-mono text-xs">
          Built with React & TailwindCSS
        </p>
      </footer>
    </div>
  );
}
