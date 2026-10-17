import './App.css';
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";


const projects = [
  { 
    title: 'URL Shortener',
    description:
      'A fast link-management app to create short URLs, organize links, and redirect visitors.',
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    number: '01',
    link: 'https://url-shortner-2-7ybo.onrender.com'
  },
  {
    title: 'Blog Application',
    description:
      'A blogging platform with authentication, content creation, editing, and post management.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    number: '02', 
    link:'https://blog-app-1-dx1c.onrender.com/',
  },
  {
    title: 'Real-time Chat App',
    description:
      'A live messaging experience with authenticated users and real-time communication.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    number: '03',
    link: 'https://chat-9zmmjmi30-ashokjajoter.vercel.app/',
  },
  {
    title: 'e-Commerce Platform',
    description:
      'A responsive shopping experience featuring product listings, a cart, and checkout flows.',
    tech: ['React', 'JavaScript', 'CSS', 'APIs'],
    number: '04',
    link: 'https://ecommapp-fwxlcw1oh-ashokjajoter.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio built to present projects, technical strengths, and career goals.',
    tech: ['React', 'JavaScript', 'CSS'],
    number: '05',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    icon: '◈',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js'],
  },
  {
    title: 'Backend',
    icon: '⌘',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: '▤',
    skills: ['MongoDB', 'SQL'],
  },
  {
    title: 'AI & Tools',
    icon: '✳',
    skills: ['Python', 'Machine Learning', 'Git', 'GitHub'],
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/ashokjajoter', icon: '↗' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashokjajoter', icon: '↗' },
];

function App() {
  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#home" className="logo" aria-label="Portfolio home">
          <span>Portfolio</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-cta" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-anchor">
          <div className="container hero-layout">
            <div className="hero-content">
              <p className="eyebrow"><span className="status-dot" /> FULL STACK DEVELOPER · AI/ML</p>
              <h1>
                Hi, I&apos;m <span>Ashok Nayak</span>
                <br />
                I build things for the Web App.
              </h1>
              <p className="hero-subtitle">
                I turn ideas into polished digital experiences with modern Web App
                technologies and an interest in AI-powered solutions.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-ghost" href="/resume.pdf" download="Ashok-Nayak-Resume.pdf">
                  Download résumé <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="hero-socials" aria-label="Social profiles">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label} <span aria-hidden="true">{social.icon}</span>
                  </a>
                ))}
              </div>

              <div className="hero-note">
                <span className="note-line" />
                <span>Curious mind. Practical builder. Lifelong learner.</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img
                  className="hero-image"
                  src="/src/asset/Ashok_jajoter.jpg"
                  alt="Ashok Nayak"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section id="about" className="section section-anchor">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Good ideas deserve <span>great execution.</span></h2>
              <p className="section-intro">
                I&apos;m a Computer Science graduate who enjoys building useful,
                accessible products and learning how emerging technology can
                solve real-world problems.
              </p>
            </div>

            <div className="about-grid">
              <article className="about-card">
                <span className="card-index">01 / EDUCATION</span>
                <div className="about-icon">⌂</div>
                <h3>Computer Science</h3>
                <p>B.Tech in Computer Science &amp; Engineering</p>
              </article>
              <article className="about-card">
                <span className="card-index">02 / EXPERIENCE</span>
                <div className="about-icon">↗</div>
                <h3>Hands-on learning</h3>
                <p>6 months of internship experience building practical solutions.</p>
              </article>
              <article className="about-card">
                <span className="card-index">03 / INTERESTS</span>
                <div className="about-icon">✳</div>
                <h3>Web + AI</h3>
                <p>Full stack applications, thoughtful interfaces, and AI/ML.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-muted section-anchor">
          <div className="container">
            <div className="section-heading heading-row">
              <div>
                <p className="eyebrow">SELECTED WORK</p>
                <h2>Projects that turn <span>ideas into reality.</span></h2>
              </div>
              <p className="section-side-note">A selection of applications built while learning, experimenting, and solving problems.</p>
            </div>
            
            <div className="project-grid">
              {projects.map((project) => (
                <a
                className="project-card"
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                  <div className="project-topline">
                    <span className="project-number">
                      {project.number}
                    </span>
                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  </a>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-anchor">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">MY TOOLKIT</p>
              <h2>Skills for building <span>end to end.</span></h2>
              <p className="section-intro">
                Technologies I use and continue to develop across the product-building process.
              </p>
            </div>

            <div className="skill-groups">
              {skillGroups.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-heading">
                    <span className="skill-icon" aria-hidden="true">{group.icon}</span>
                    <span className="skill-count">0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span className="skill-chip" key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-anchor">
          <div className="container contact-inner">
            <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
            <h2>Let&apos;s make something <span>meaningful.</span></h2>
            <p>I&apos;m open to suitable Full Stack Developer opportunities and collaborative projects.</p>
            {/* Replace the email address below with your real email address. */}
            <a className="button button-primary" href="mailto:nayakashok0006@gmail.com">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
           <span>© {new Date().getFullYear()} Ashok Nayak</span>
           <div className="social-icons">
            <a
            href="https://github.com/ashokjajoter"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            >
              <FaGithub />
              </a>

            <a
            href="https://x.com/ashokjajoter"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            >
              <FaTwitter />
              </a>
              
            <a
            href="https://www.facebook.com/share/1MCfCNcxGd/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            >
              <FaFacebook />
              </a>
              
            <a
            href="mailto:nayakashok0006@gmail.com"
            aria-label="Email"
            >
              <FaEnvelope />
              </a>
            </div>
          <p>Designed and built with React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
