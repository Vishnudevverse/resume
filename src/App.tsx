import { Mail, Github, Phone, MapPin } from "lucide-react";
import "./App.css";

export default function App() {
  const skillsGroups = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
    "Backend": ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
    "Mobile": ["React Native", "Flutter"],
    "Tools": ["Git", "VS Code", "Docker", "Linux", "Figma", "Postman"],
    "Core": ["Problem Solving", "Data Structures", "Algorithms", "System Design"]
  };

  const projects = [
    {
      title: "Hydrowaves.in — Client Business Website",
      company: "Live Link: Hydrowaves.in",
      period: "2024",
      location: "Remote",
      description: [
        "Developed and deployed a live, fully functional business website for a hydraulic equipment company, managing the project from initial design to final launch.",
        "Engineered a combination of static and dynamic pages using PHP to achieve a Google PageSpeed score of 95+ and an SEO score of 95+.",
        "Implemented responsive front-end design, optimized site-wide performance, and managed deployment on a live server.",
        "Technologies: HTML, CSS, JavaScript, PHP, SEO Best Practices, Git"
      ]
    },
    {
      title: "2D Games Launcher — Python Application",
      company: "Personal Project",
      period: "2024",
      location: "Chennai, TN",
      description: [
        "Built a desktop application in Python that serves as a central dashboard to launch four different 2D games.",
        "Implemented a complete user management system using MySQL to handle user logins, session data, and persistent score tracking for individual players.",
        "Designed and constructed all graphical user interfaces (GUIs) for the launcher and games using the Tkinter and Turtle libraries.",
        "Technologies: Python, Tkinter, Turtle, MySQL"
      ]
    }
  ];

  return (
    <div className="app">
      <div className="container">
        {/* Left Sidebar */}
        <div className="sidebar">
          {/* Header */}
          <div className="sidebar-header">
            <h1 className="name">VISHNUVARTHAN</h1>
            <p className="title">Software Developer</p>
            <p className="subtitle">BTech Student | Code Enthusiast</p>
          </div>

          {/* Contact */}
          <div className="contact">
            <h2 className="section-title">CONTACT</h2>
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span className="contact-text">selvanvishnu73@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <span className="contact-text">+91 8778172615</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span className="contact-text">Chennai, Tamil Nadu</span>
              </div>
              <div className="contact-item">
                <Github size={16} className="contact-icon" />
                <span className="contact-text">github.com/Vishnudevverse</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="education">
            <h2 className="section-title">EDUCATION</h2>
            <div className="education-item">
              <h3 className="education-degree">Bachelor of Technology</h3>
              <p className="education-major">Computer Science Engineering</p>
              <p className="education-status">Current Student</p>
              <p className="education-location">Chennai, Tamil Nadu</p>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-section">
            <h2 className="section-title">TECHNICAL SKILLS</h2>
            <div className="skills-list">
              {Object.entries(skillsGroups).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="skill-category">{category}</h3>
                  <div className="skill-items">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <span className="skill-bullet"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Professional Summary */}
          <section className="summary-section">
            <h2 className="main-title">Software Developer</h2>
            <p className="summary-text">
              I'm a <span className="highlight-dark">B.Tech student</span> with a strong interest in software development. I focus on writing <span className="highlight-blue">clean, efficient code</span> and building full-stack applications from the ground up. I am currently focused on improving my <span className="highlight-dark">Data Structures & Algorithms</span> skills and using AI to generate code blocks faster, making development workflows smoother. I prefer a <span className="highlight-blue">hands-on approach</span> and am prepared to tackle new and complex challenges in tech.
            </p>
          </section>

          {/* Projects */}
          <section className="projects-section">
            <h2 className="main-title">PROJECTS</h2>
            
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-company">{project.company}</div>
                  <div className="project-meta">
                    <span className="meta-item">
                      <span className="meta-icon">📅</span> {project.period}
                    </span>
                    <span className="meta-item">
                      <span className="meta-icon">📍</span> {project.location}
                    </span>
                  </div>
                </div>
                
                <ul className="project-description-list">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="project-description-item">
                      <span className="description-bullet">▸</span>
                      <span className="description-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Professional Development */}
          <section className="development-section">
            <h2 className="main-title">PROFESSIONAL DEVELOPMENT</h2>
            <div className="dev-card">
              <p className="dev-text">
                Currently exploring <span className="highlight-blue-dark">advanced React patterns</span>, cloud technologies, and <span className="highlight-blue-dark">DevOps practices</span> while focusing on creating <span className="highlight-dark">efficient automation solutions</span> and optimizing development workflows through smart scripting and performance enhancements.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
