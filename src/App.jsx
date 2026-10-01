import React, { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Github, Mail } from 'lucide-react'

const useTheme = () => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute('data-theme') || 'dark'
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}

const LinkedInIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 448 512" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M100.3 448H7.4V149.5h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1-.5 53.8-.5s53.8 24.6 53.8 54.3c0 29.7-24.1 54.3-53.8 54.3zm394.2 339.9h-92.7V302.4c0-34.7-12.4-58.5-43.4-58.5-23.7 0-37.8 15.9-44 31.3-2.3 5.4-2.9 13-2.9 20.6V448H172.3s1.2-244.6 0-269.9h92.7v38.3c12.3-19 34.3-46.1 83.3-46.1 60.8 0 106.4 39.7 106.4 125V448z"
    />
  </svg>
)

const Nav = ({ onToggleTheme, theme }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav-wrap">
      <div className="container nav">
        <a href="#home" className="brand">Likith.</a>

        {/* Desktop nav */}
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#education">Education</a>
          </li> */}
          <li className="nav-item"> 
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>

        <div className="socials">
          <a
            className="icon-btn"
            href="https://github.com/likith17"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            className="icon-btn"
            href="https://www.linkedin.com/in/likith-podalakuru"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="mobile-only" style={{ display: 'flex', gap: 8 }}>
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <>
          <div className="backdrop" onClick={() => setOpen(false)} />
          <div className="sheet">
            <div className="sheet-head">
              <span style={{ fontWeight: 800, color: 'var(--accent)' }}>Menu</span>
              <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            <div className="sheet-body">
              <a className="sheet-link" href="#about" onClick={() => setOpen(false)}>
                About
              </a>
              <a className="sheet-link" href="#portfolio" onClick={() => setOpen(false)}>
                Portfolio
              </a>              
              <a className="sheet-link" href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const SectionHeader = ({ kicker, title, sub }) => (
  <div className="section-head">
    {kicker && <div className="kicker">{kicker}</div>}
    <h2>{title}</h2>
    {sub && <p className="muted">{sub}</p>}
  </div>
)

const Hero = () => (
  <section id="home" className="section">
    <div className="container">
      <div className="grid">
        <div className="panel">
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>Likith Podalakuru</h1>
          <p className="muted" style={{ maxWidth: 720 }}>
            AI engineer with an M.S. in Computer Science (AI track) from Binghamton University and 3 years of enterprise
            software engineering experience building large-scale C++ production systems at Tata Consultancy Services. I build production-ready AI
            applications spanning LLM agents, computer vision, retrieval systems, and reinforcement learning, with an emphasis on measurable evaluation, scalability, and reliability.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a href="#portfolio" className="btn btn-primary">See Experience</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
        <div className="card hover">
          <div className="card-inner">
          <h2>Currently</h2>
          
          <p className="muted">
            Graduate Research Assistant at Binghamton University, building an AI emergency-routing system that combines YOLOv12 traffic analysis, multi-object tracking, and reinforcement-learning planning on live NYC camera feeds. Open to full-time roles in AI/ML engineering, applied AI, and AI-driven systems development.
          </p>
          </div>          
        </div>
      </div>
    </div>
  </section>
)

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <SectionHeader
        kicker="About"
        title="Curious, analytical, and driven to build intelligent systems that make a real impact"
        sub="I love taking complex problems, grounding them in data, and shipping thoughtful user experiences."
      />
      <div className="grid">
        <div className="card hover">
          <h3>Building change that matters</h3>
          <p className="muted">
            I’ve always been motivated by the idea that innovation starts small, sometimes with nothing more than curiosity and a keyboard. That motivation led me to choose Computer Science in both high school and undergrad, where I began building projects that explored how tech can improve everyday life. From automation to environmental analytics, agentic AI, and mobility-focused reinforcement learning, I’ve consistently gravitated toward work that combines creativity with real-world purpose.
          </p>
          <p className="muted">
            My projects reflect this purpose. From multi-agent traffic signal control on real Manhattan streets to an
            emergency-routing system that cut simulated response time by 20.8%, and an agentic job-matching copilot built on LLM tool-calling.
          </p>          
        </div>
        <div className="card hover">
          <h3>Data-first problem solver</h3>
          <p className="muted">
            My interest in data began with a love for mathematics, algorithms, and the patterns found in nature. During my undergraduate years, I chose data-centric electives and explored analytical research. 
          </p>
          <p className="muted">
            Being an active member of the Computer Society of India exposed me to AI, cloud, IoT, and modern technologies. During my time at TCS, I continued strengthening this foundation by completing certifications in Python, cloud platforms, and data-related technologies. Later, my postgraduate studies at VIT further deepened my understanding of machine learning, statistics, and data mining.
          </p>
        </div>
        <div className="card hover">
          <h3>Adaptable and people-centered</h3>
          <p className="muted">
            At Tata Consultancy Services, I worked as a Systems Engineer on Marriott International’s enterprise reservation systems, resolving critical C++ production incidents and collaborating with global teams to ensure seamless system performance. 
             </p>
             
          <p className ="muted">
          This experience sharpened my ability to learn quickly, solve problems under pressure, and adapt to fast-paced environments. I’m also someone who stays curious, communicates openly, and brings a calm, people-centered mindset to every team. These qualities guide my work in AI and intelligent system development.
          </p>
          
        </div>
      </div>
      <div className="card" style={{ marginTop: 12 }}>
        <div className="muted" style={{ marginBottom: 8 }}>
          <strong>Soft Skills</strong>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <span className="badge">Active Learner</span>
          <span className="badge">Time Management</span>
          <span className="badge">Critical Thinking</span>
          <span className="badge">Adaptability</span>
          <span className="badge">Working Under Pressure</span>
          <span className="badge">Conflict Management</span>
        </div>
      </div>
    </div>
  </section>
)

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <SectionHeader kicker="Education" title="Where I sharpened my craft" />
      <div className="timeline">
        <div className="card line-left hover">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <strong>Binghamton University, State University of New York — Thomas J. Watson College of Engineering</strong>
            <span className="muted">Aug 2024 – May 2026</span>
          </div>
          <p className="muted">M.S. in Computer Science - Artificial Intelligence Track</p>
          <p>
            Coursework: Machine Learning, Artificial Intelligence, System Programming, Deep Learning.
          </p>
        </div>
        <div className="card line-left hover">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <strong>Vellore Institute of Technology, Bangalore</strong>
            <span className="muted">Aug 2023 – Jun 2024</span>
          </div>
          <p className="muted">Postgraduate Certification Program in Artificial Intelligence</p>
          <p>
            Coursework: Probability &amp; Statistics, DBMS, Data Mining, Big Data Analytics, Data Visualization,
            Fundamentals of AI, Intro to Machine Learning, Intro to Deep Learning.
          </p>
        </div>
        <div className="card line-left hover">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <strong>SRM Valliammai Engineering College, Chennai</strong>
            <span className="muted">Aug 2016 – Apr 2020</span>
          </div>
          <p className="muted">B.E. in Computer Science</p>
          <p>
            Coursework: Programming &amp; Data Structures, Cloud Computing, Data Warehousing &amp; Mining, DBMS,
            Graph Theory, Cyber Forensics, Probability &amp; Queuing Theory, Artificial Intelligence.
          </p>
        </div>
      </div>
    </div>
  </section>
)

const Portfolio = () => (
  <section id="portfolio" className="section">
    <div className="container">
      <SectionHeader
        kicker="Experience"
        title="Industry work, research, and AI projects"
        sub="An overview of the projects and impact areas that I've worked on."
      />

      {/* Work Experience */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ marginBottom: 10 }}>Professional Experience</h3>
        <div className="timeline">
          <div className="card line-left hover">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <strong>Graduate Research Assistant — Binghamton University</strong>
              <span className="muted">Aug 2026 – Present • Binghamton, NY</span>
            </div>
            <ul style={{ margin: '8px 0 0 18px' }}>
              <li>
                Built <a href="https://github.com/likith17/traffic-monitoring" target="_blank" rel="noreferrer">Emergency Routing for Smart Response</a>, an AI emergency-routing system pairing YOLOv12 analysis of 371 live NYC DOT cameras with OpenStreetMap road networks (10,893 intersections, 24,852 segments) and Dijkstra/A*/reinforcement-learning planning, reducing simulated response time 20.8% versus static shortest-path routing across 30 test scenarios.
              </li>
              <li>
                Integrated computer vision-based route validation that detects real-time blockages and triggers mid-drive replanning before dispatch, plus a vision-language model (Anthropic API) for incident detection (crashes, stalled vehicles, debris) that reroutes around confirmed hazards with graceful offline fallback.
              </li>
              <li>
                Developed a ByteTrack-style multi-object tracker (SciPy Hungarian/IoU association) extracting vehicle flow, queue length, and speed features, reducing single-frame congestion-scoring noise (~45% deviation) through temporal median aggregation.
              </li>
              <li>
                Optimized deployment by migrating inference from PyTorch to ONNX Runtime, cutting the Docker image 55% (3.27 GB to 1.5 GB) at 0.0012 output parity; built a ground-truth calibration pipeline against NYC real-time speed sensors and a time-dependent routing benchmark to evaluate results and document limitations.
              </li>
            </ul>
          </div>
          <div className="card line-left hover">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <strong>Systems Engineer — Tata Consultancy Services (Client: Marriott International)</strong>
              <span className="muted">Mar 2021 – Sep 2023 • Chennai, India</span>
            </div>
            <ul style={{ margin: '8px 0 0 18px' }}>
              <li>
                Supported enterprise-scale hospitality reservation systems by debugging and resolving critical C++ and Assembly production issues, restoring service availability within strict SLA requirements and reducing operational impact.
              </li>
              <li>
                Served as the primary technical point of contact for daily incident management, coordinating with global teams to triage production failures, prioritize fixes, and drive timely resolution of high-impact issues.
              </li>
              <li>
                Identified and resolved a critical long-stay booking defect impacting billing accuracy, preventing potential revenue leakage exceeding $500K annually and improving reliability of reservation workflows.
              </li>
              <li>
                Developed and validated code fixes through unit and integration testing, reproducing defects, creating test scenarios, and ensuring stable releases through controlled QA processes.
              </li>
              <li>
                Automated recurring operational tasks through scripting and log analysis, improving incident investigation efficiency and reducing manual troubleshooting effort through reusable tools and documentation.
              </li>
            </ul>
          </div>
          <div className="card line-left hover">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <strong>Java Developer Intern — FULL Creative</strong>
              <span className="muted">Dec 2020 – Jan 2021</span>
            </div>
            <ul style={{ margin: '8px 0 0 18px' }}>
              <li>
                Developed and enhanced backend services for SaaS web applications using Java and a microservices architecture, implementing assigned features under the guidance of senior engineers.
              </li>
              <li>
                Built and integrated RESTful APIs between microservices, performed debugging and unit testing, and resolved application defects to improve functionality and reliability.
              </li>
              <li>
                Collaborated with frontend developers to integrate Java backend services with JavaScript, AJAX, JSON, HTML, and jQuery, ensuring seamless data exchange across application components.
              </li>
              <li>
                Participated in Agile sprint planning, code reviews, and feature testing while working with cloud-hosted application services and version control throughout the development lifecycle.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ marginBottom: 10 }}>Selected Projects</h3>
        <div className="grid">
          <div className="card hover">
            <strong>AI Job-Application Copilot: Agentic Resume-to-Job Matching</strong>
            <p className="muted">
              Embedding- and skill-based job ranking that lifted evaluation scores from 0.10 to 0.47 over keyword matching, with a sponsorship-aware ranking framework and transparent matched/missing-skill explanations. An Anthropic API tool-calling agent handles scoring, resume customization, and persistence with human approval controls, reaching 0.89 Spearman correlation against manually labeled rankings.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">LLM Agents</span>
              <span className="badge">Embeddings</span>
              <span className="badge">Anthropic API</span>
              <span className="badge">SQLite</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/job-copilot"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="card hover">
            <strong>Multi-Agent Traffic Signal Control on Real Manhattan Streets</strong>
            <p className="muted">
              Multi-agent RL pipeline on OpenStreetMap data and SUMO, evaluating fixed-time, max-pressure, and Double-DQN controllers across 72 Manhattan intersections. Achieved a 45% reduction in vehicle time loss versus fixed-time control, with safety-aware environments and inter-agent communication.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Reinforcement Learning</span>
              <span className="badge">SUMO</span>
              <span className="badge">Double-DQN</span>
              <span className="badge">MARL</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/traffic-control"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="card hover">
            <strong>Battleship AI</strong>
            <p className="muted">
              Built an AI fleet navigation system leveraging DFS, BFS, UCS, and A* search to detect enemies,
              avoid obstacles, and maneuver efficiently on grid-based maps.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Search Algorithms</span>
              <span className="badge">Pathfinding</span>
              <span className="badge">Python</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/Battleship-AI"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="card hover">
            <strong>Emergency Routing for Smart Response</strong>
            <p className="muted">
              Vision-confirmed emergency router using YOLOv12 on 371 live NYC DOT cameras, ByteTrack-style tracking, and Dijkstra/A*/RL planning, cutting simulated response time 20.8%; deployed with ONNX Runtime (55% smaller Docker image).
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">YOLOv12</span>
              <span className="badge">Multi-Object Tracking</span>
              <span className="badge">ONNX Runtime</span>
              <span className="badge">Python</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/traffic-monitoring"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="card hover">
            <strong>Prediction of Malevolent Files</strong>
            <p className="muted">
              Developed a malware classification pipeline using Scikit-learn to detect malicious executables from static feature datasets, with preprocessing, feature selection, and model evaluation for high-dimensional security data.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Machine Learning</span>
              <span className="badge">Security</span>
              <span className="badge">Scikit-learn</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/ml-malware"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="card hover">
            <strong>Impact of Electric Vehicles on the Environment</strong>
            <p className="muted">
              Analyzed EV trip and charging datasets to surface insights on urban planning, emissions, and
              sustainable mobility adoption.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Data Analysis</span>
              <span className="badge">Visualization</span>
              <span className="badge">Python</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/ev-impact"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="card hover">
            <strong>Blockchain Content Verification</strong>
            <p className="muted">
              Built blockchain-based proof-of-work verification to secure file integrity and provenance with
              decentralized validation.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Blockchain</span>
              <span className="badge">Security</span>
              <span className="badge">Python</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/blockchain-content-verification"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="card hover">
            <strong>Heart Disease Prediction</strong>
            <p className="muted">
              Trained models on clinical datasets to predict heart disease risk, balancing feature engineering
              with model interpretability for actionable health insights.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Classification</span>
              <span className="badge">Healthcare</span>
              <span className="badge">Python</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/heart-disease-predict"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="card hover">
            <strong>Flower Image Recognition</strong>
            <p className="muted">
              Classified flower species using convolutional neural networks, optimizing accuracy through data
              augmentation and tuned hyperparameters.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">CNNs</span>
              <span className="badge">Computer Vision</span>
              <span className="badge">Python</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/flower-recognition"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="card hover">
            <strong>Hashassin: Distributed Password Hashing &amp; Cracking Tool</strong>
            <p className="muted">
              Built a distributed Rust-based password hashing and cracking framework using Tokio asynchronous networking, Rayon parallel computation, LRU caching, and optimized multi-threaded execution for scalable cryptographic workloads.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Rust</span>
              <span className="badge">Distributed Systems</span>
              <span className="badge">Security</span>
            </div>
            <a
              className="btn"
              style={{ marginTop: 10 }}
              href="https://github.com/likith17/PROJECT-HASHASSIN"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Publication */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ marginBottom: 10 }}>Publications</h3>
        <div className="grid">
          <div className="card hover">
            <strong>Reinforcement Learning for Autonomous Lunar Landing: A Comparative Analysis of Algorithm Performance</strong>
            <p className="muted" style={{ marginTop: 8 }}>iTech SECOM, 2025</p>
            <p>Gottam, D., Podalakuru, L., et al.</p>
          </div>
          <div className="card hover">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <strong>“Proof of Work” Generation Using Blockchain</strong>
              <a
                className="btn"
                href="https://ijariie.com/FormDetails.aspx?MenuScriptId=170337"
                target="_blank"
                rel="noreferrer"
              >
                Read
              </a>
            </div>
            <p className="muted" style={{ marginTop: 8 }}>
              International Journal of Advance Research and Innovative Ideas in Education, Vol. 6, 2020
            </p>
            <p>Ashwin R, Podalakuru, L., Kumar, M.S.</p>
          </div>
        </div>
      </div>

      {/* Leadership & Volunteering */}
      <div style={{ marginBottom: 22 }}>
        <h3 style={{ marginBottom: 10 }}>Leadership &amp; Volunteering</h3>
        
        <div className="grid">
          <div className="card hover">
            <strong>Red Cross Service Day - MLK Jr. Day of Service</strong>
            <div style={{ height: 20 }}></div>
            <p className="muted">
              
              Assisted inventory management and logistics during the MLK Jr. Day of Service in Endicott, NY, supporting the American Red Cross’s emergency preparedness efforts. Helped organize supplies, streamline storage workflows, and improve readiness for disaster-response operations.

            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Service</span>
              <span className="badge">Logistics</span>
            </div>
          </div>
          <div className="card hover">
            <strong>Technical Events Coordinator, SRM Valliammai College</strong>
            <div style={{ height: 20 }}></div>
            <p className="muted">
              Organized department symposiums, coordinated speaker lineups, and led campus-wide technical events that improved student engagement. Managed planning, scheduling, and on-ground execution to ensure smooth event flow.
Collaborated with faculty and student committees, strengthening my leadership, communication, and team-coordination skills while fostering a more active technical culture on campus.
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Leadership</span>
              <span className="badge">Event Management</span>
            </div>
          </div>
          <div className="card hover">
            <strong>Athletics Student Representative, Binghamton University Athletics</strong>
            <div className="muted" style={{ marginTop: 8 }}>May 2025 – Dec 2025</div>
            <div style={{ height: 20 }}></div>
            <p className="muted">
              Provided crowd management and guest support during major games and events, coordinating with
              athletics staff to keep entrances, seating, and emergency routes clear. Trained in emergency response protocols to assist safely during high-traffic moments and ensure a
              positive experience for students, families, and visitors.
            </p>
            <p className="muted">
              
            </p>
            <div style={{ marginTop: 8 }}>
              <span className="badge">Crowd Management</span>
              <span className="badge">Event Operations</span>
              <span className="badge">Safety</span>
            </div>
            
          </div>
          <div className="card hover">
            <strong>PAL Camp Day of Service - Global Day of Service Project</strong>
            <div style={{ height: 20 }}></div>
            <p className="muted">
              Volunteered at P.A.L. Camp in Binghamton, NY to help create a hiking trail for local kids,
              supporting outdoor education and safe youth recreation. Cleared trails, prepped sites, and worked with teams to build a nature-friendly space that
              encourages exploration, confidence, and environmental awareness.
            </p>
            
            <div style={{ marginTop: 8 }}>
              <span className="badge">Community Service</span>
              <span className="badge">Outdoors</span>
              <span className="badge">Youth Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 style={{ marginBottom: 10 }}>Technical Skills</h3>
        <div className="card">
          <div style={{ display: 'grid', gap: 14 }}>
            <div>
              <strong>Languages:</strong>
              <p className="muted">Python, C++, SQL, Rust, Java</p>
            </div>
            <div>
              <strong>AI/ML:</strong>
              <p className="muted">PyTorch, Scikit-learn, XGBoost, Reinforcement Learning, Computer Vision, Object Detection (YOLO), Multi-Object Tracking, RAG, LLM Agents, Vision-Language Models, MCP (Model Context Protocol), Embeddings</p>
            </div>
            <div>
              <strong>Frameworks:</strong>
              <p className="muted">LangChain, FastAPI, Streamlit, OpenCV, FAISS, ONNX Runtime, Anthropic API</p>
            </div>
            <div>
              <strong>Tools:</strong>
              <p className="muted">Docker, Git, GitHub Actions, Linux, AWS</p>
            </div>
            <div>
              <strong>Databases:</strong>
              <p className="muted">MySQL, MongoDB, Redis, SQLite</p>
            </div>
            <div>
              <strong>Systems:</strong>
              <p className="muted">Multithreading, Distributed Systems, NetworkX, OSMnx</p>
            </div>
            <div>
              <strong>Collaboration:</strong>
              <p className="muted">Jira, Confluence</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 22 }}>
        <h3 style={{ marginBottom: 10 }}>Certifications</h3>
        <div className="grid">
          <div className="card hover">
            <strong>AWS Certified Cloud Practitioner</strong>
            <p className="muted">Foundational knowledge of AWS cloud services, security, and cost management.</p>
            <a className="btn" style={{ marginTop: 10 }} href="https://www.credly.com/badges/83caabc8-dd22-4dea-adcd-0f15363ffdd7/public_url" target="_blank" rel="noreferrer">
              View Credential
            </a>
          </div>
          <div className="card hover">
            <strong>Microsoft Azure Data Fundamentals</strong>
            <p className="muted">Core data concepts across relational, non-relational, and analytics workloads on Azure.</p>
            <a className="btn" style={{ marginTop: 10 }} href="https://www.credly.com/badges/656d87cd-8782-4a9f-91ea-c56151784486" target="_blank" rel="noreferrer">
              View Credential
            </a>
          </div>
          <div className="card hover">
            <strong>PCEP - Python Certified Entry-Level Programmer</strong>
            <p className="muted">Validated Python programming fundamentals, data structures, and scripting patterns.</p>
            <a className="btn" style={{ marginTop: 10 }} href="https://www.credly.com/badges/094a5bb6-9c49-4405-a1b7-286e8650b640/public_url" target="_blank" rel="noreferrer">
              View Credential
            </a>
          </div>
          <div className="card hover">
            <strong>Goethe Institute's German Language Certification, Level : B1</strong>
            <p className="muted">Completed Goethe-Institut German Language Certification at Level B1.</p>
            {/* <a className="btn" style={{ marginTop: 10 }} href="#" target="_blank" rel="noreferrer">
              View Credential
            </a> */}
          </div>
          <div className="card hover">
            <strong>IELTS - International English Language Testing System</strong>
            <p className="muted">Achieved an overall IELTS Academic Band 8, demonstrating advanced English proficiency.</p>
            {/* <a className="btn" style={{ marginTop: 10 }} href="#" target="_blank" rel="noreferrer">
              View Credential
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <SectionHeader kicker="Contact" title="Let’s build something together" />
      <div className="grid">
        <div className="card hover">
          <p className="muted">
            Open to full-time opportunities in AI/ML engineering, applied AI, and AI-driven systems development, as well as research collaborations.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 14, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="mailto:p.likith1999@gmail.com">
              <Mail size={16} style={{ marginRight: 8 }} /> Email Me
            </a>
            <a className="btn" href="https://github.com/likith17" target="_blank" rel="noreferrer">
              <Github size={16} style={{ marginRight: 8 }} /> GitHub
            </a>
            <a className="btn" href="https://www.linkedin.com/in/likith-podalakuru" target="_blank" rel="noreferrer">
              <LinkedInIcon style={{ marginRight: 8 }} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer">© {new Date().getFullYear()} Likith Podalakuru</div>
    </div>
  </section>
)

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Nav onToggleTheme={toggle} theme={theme} />
      <Hero />
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </>
  )
}
