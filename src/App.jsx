import "./App.css";

const projects = [
  {
    title: "To-Do List",
    description: "Приложение для создания и управления задачами.",
    icon: "✓",
    type: "REACT APP",
    url: "https://github.com/bahandro02-cyber/todo-list",
    button: "GitHub ↗",
  },
  {
    title: "Calculator",
    description: "Калькулятор с математическими операциями.",
    icon: "＋",
    type: "JAVASCRIPT",
    url: "https://github.com/bahandro02-cyber",
    button: "GitHub ↗",
  },
  {
    title: "My Portfolio",
    description: "Мой личный сайт-портфолио.",
    icon: "B",
    type: "PERSONAL WEBSITE",
    url: "https://github.com/bahandro02-cyber",
    button: "GitHub ↗",
  },
  {
    title: "Ura Website",
    description: "Мой опубликованный веб-проект.",
    icon: "🌐",
    type: "LIVE WEBSITE",
    url: "https://ura-lyart.vercel.app",
    button: "Открыть сайт ↗",
  },
  {
    title: "Wik Website",
    description: "Мой опубликованный проект на Vercel.",
    icon: "⚡",
    type: "LIVE WEBSITE",
    url: "https://wik-zeta.vercel.app",
    button: "Открыть сайт ↗",
  },
];

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <a href="#home" className="logo">B<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Главная</a>
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="red">HELLO, WORLD!</p>

          <h1>Я <span>Баймырза</span></h1>

          <h2>Начинающий программист</h2>

          <p>
            Мне 16 лет. Я изучаю HTML, CSS,
            JavaScript и React. Создаю сайты,
            работаю над проектами и развиваюсь
            в веб-разработке.
          </p>

          <a className="btn" href="#projects">
            Смотреть проекты
          </a>
        </div>

        <div className="photo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKzgaEEhfk_rA13PfeVjd6DctJLfjKcFm0pc1SDxZ0A&s=10" 
          alt="Baymyrza" />
        </div>
      </section>

      <section id="about">
        <h2 className="title">
          Обо <span>мне</span>
        </h2>

        <div className="about-card">
          <h3>Привет! Я Баймырза 👋</h3>

          <p>
            Я начинающий веб-разработчик.
            Изучаю создание сайтов и приложений.
            Моя цель — стать хорошим программистом,
            получать новый опыт и создавать
            интересные проекты.
          </p>
        </div>
      </section>

      <section id="skills">
        <h2 className="title">
          Мои <span>навыки</span>
        </h2>

        <div className="grid skills-grid">
          {["HTML", "CSS", "JavaScript", "React"].map(
            (skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      <section id="projects">
        <h2 className="title">
          Мои <span>проекты</span>
        </h2>

        <p className="projects-subtitle">
          Мои работы в веб-разработке
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              <div className="project-preview">
                <span>{project.icon}</span>
                <small>{project.type}</small>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <a
                className="btn project-btn"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                {project.button}
              </a>

            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2 className="title">
          Мои <span>контакты</span>
        </h2>

        <div className="about-card contact-card">
          <h3>Давайте знакомиться!</h3>

          <p>
            Посмотрите мои проекты на GitHub.
          </p>

          <a
            className="btn"
            href="https://github.com/bahandro02-cyber"
            target="_blank"
            rel="noreferrer"
          >
            Мой GitHub ↗
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Baymyrza</p>
        <p>Created with ❤️ and React</p>
      </footer>

    </div>
  );
}

export default App;
